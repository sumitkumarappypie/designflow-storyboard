# DivKit Integration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Render DivKit JSON screens on the DesignFlow infinite canvas alongside React screens, using a local DivKit web client build.

**Architecture:** Extend the Vite plugin to scan an external `divkitDir` for JSON files, wrap each with a React component that calls the DivKit renderer, and merge them into the existing screen map. ScreenNode/Viewer get an `isDivkit` flag for amber visual treatment. A new `divkitScreens` map in `flows.ts` persists positions separately from React screens.

**Tech Stack:** DivKit web client (`@divkitframework/divkit`), React 19, Vite 7, React Flow v12

---

### Task 1: Add DivKit types to `src/types/index.ts`

**Files:**
- Modify: `src/types/index.ts:59-63`

- [ ] **Step 1: Add DivKit fields to DesignFlowConfig and ScreenNodeData type**

Add `divkitDir`, `divkitClientPath`, and `divkitScreens` to `DesignFlowConfig`. The `ScreenNodeData` type lives in `ScreenNode.tsx` and will be updated in Task 5.

```ts
// In src/types/index.ts, replace the DesignFlowConfig interface (lines 59-63):

export interface DivKitScreenMeta {
  position: { x: number; y: number }
  viewport?: Viewport
  color?: string
}

export interface DesignFlowConfig {
  name?: string
  divkitDir?: string
  divkitClientPath?: string
  divkitScreens?: Record<string, DivKitScreenMeta>
  screens: Record<string, ScreenConfig>
  edges?: EdgeConfig[]
}
```

- [ ] **Step 2: Verify build compiles**

Run: `cd /Users/sumitkumartiwari/Documents/StoryboardEditor/designflow && npx tsc --noEmit 2>&1 | head -20`
Expected: No new errors (existing errors may remain, but no errors in `types/index.ts`)

- [ ] **Step 3: Commit**

```bash
git add src/types/index.ts
git commit -m "feat: add DivKit config types to DesignFlowConfig"
```

---

### Task 2: Create DivKit React wrapper (`src/app/DivKitScreen.tsx`)

**Files:**
- Create: `src/app/DivKitScreen.tsx`

- [ ] **Step 1: Create the DivKitScreen component and factory function**

```tsx
// src/app/DivKitScreen.tsx
import { useRef, useEffect, useId } from "react"

interface DivKitScreenProps {
  json: Record<string, unknown>
}

function DivKitScreen({ json }: DivKitScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const instanceId = useId()

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    let cleanup: (() => void) | undefined

    async function mount() {
      try {
        const { render } = await import("@divkitframework/divkit/client")
        el.textContent = ""
        const instance = render({
          id: `divkit-${instanceId}`,
          target: el,
          json: json as any,
          platform: "touch",
          onError(details: { error: { message: string } }) {
            console.warn("DivKit render warning:", details.error.message)
          },
        })
        cleanup = () => {
          if (instance && typeof (instance as any).$destroy === "function") {
            (instance as any).$destroy()
          }
        }
      } catch (err) {
        console.error("DivKit render error:", err)
        const errEl = document.createElement("div")
        errEl.style.cssText = "padding:20px;color:#ef4444;font-size:14px;"
        errEl.textContent = `DivKit render error: ${err instanceof Error ? err.message : String(err)}`
        el.textContent = ""
        el.appendChild(errEl)
      }
    }

    mount()

    return () => {
      cleanup?.()
    }
  }, [json, instanceId])

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", minHeight: "100%", background: "#fff" }}
    />
  )
}

export function createDivKitComponent(json: Record<string, unknown>) {
  return function DivKitWrapper() {
    return <DivKitScreen json={json} />
  }
}
```

- [ ] **Step 2: Verify the file compiles**

Run: `cd /Users/sumitkumartiwari/Documents/StoryboardEditor/designflow && npx tsc --noEmit 2>&1 | grep DivKitScreen`
Expected: No errors referencing DivKitScreen

- [ ] **Step 3: Commit**

```bash
git add src/app/DivKitScreen.tsx
git commit -m "feat: add DivKitScreen React wrapper component"
```

---

### Task 3: Extend Vite plugin to scan divkitDir and serve DivKit assets

**Files:**
- Modify: `src/runtime/vite-plugin.ts`

- [ ] **Step 1: Add VIRTUAL_DIVKIT_META constant and divkit scanner**

At the top of `vite-plugin.ts`, after the existing virtual module constants (line 31), add:

```ts
const VIRTUAL_DIVKIT_META = "virtual:designflow/divkit-meta"
const RESOLVED_DIVKIT_META = "\0" + VIRTUAL_DIVKIT_META
```

Add a helper function after the `designflowPlugin` function declaration (inside the file, before the `return` statement at line 37), add a helper to scan DivKit JSONs:

```ts
  // Helper: scan divkitDir for .json files
  async function scanDivKitScreens(divkitDir: string): Promise<Array<{ id: string; title: string; filePath: string }>> {
    try {
      const files = await fs.readdir(divkitDir)
      return files
        .filter((f) => f.endsWith(".json"))
        .map((f) => {
          const id = f.replace(/\.json$/, "").toLowerCase()
          const title = f
            .replace(/\.json$/, "")
            .replace(/^divkit_food_court_/, "")
            .replace(/^divkit_/, "")
            .replace(/_/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase())
          return { id, title, filePath: path.resolve(divkitDir, f) }
        })
    } catch {
      return []
    }
  }
```

- [ ] **Step 2: Add resolveId for VIRTUAL_DIVKIT_META**

In the `resolveId` method, add after the existing checks (around line 51):

```ts
      if (id === VIRTUAL_DIVKIT_META) return RESOLVED_DIVKIT_META
```

- [ ] **Step 3: Extend the `load` method for RESOLVED_SCREENS to include DivKit screens**

Replace the existing `RESOLVED_SCREENS` block (lines 70-79) with:

```ts
      if (id === RESOLVED_SCREENS) {
        const screensDir = path.resolve(dir, "screens")
        const screens = await scanScreens(screensDir)
        const imports = screens
          .map((s, i) => `import Screen${i} from "${s.filePath.replace(/\\/g, "/")}"`)
          .join("\n")
        const entries = screens
          .map((s, i) => `  "${s.id}": Screen${i}`)
          .join(",\n")

        // Load DivKit screens if divkitDir is configured
        let divkitImports = ""
        let divkitEntries = ""
        const flowsPath = path.resolve(dir, "flows.ts")
        try {
          const flowsSource = await fs.readFile(flowsPath, "utf-8")
          const divkitDirMatch = flowsSource.match(/divkitDir:\s*["']([^"']+)["']/)
          if (divkitDirMatch) {
            const divkitDir = divkitDirMatch[1]
            const divkitScreens = await scanDivKitScreens(divkitDir)
            if (divkitScreens.length > 0) {
              const wrapperPath = path.resolve(__pkgRoot, "src/app/DivKitScreen").replace(/\\/g, "/")
              divkitImports = `\nimport { createDivKitComponent } from "${wrapperPath}"\n` +
                divkitScreens
                  .map((s, i) => `import divkitJson${i} from "${s.filePath.replace(/\\/g, "/")}" with { type: "json" }`)
                  .join("\n")
              divkitEntries = divkitScreens
                .map((s, i) => `  "${s.id}": createDivKitComponent(divkitJson${i})`)
                .join(",\n")
            }
          }
        } catch {
          // No flows.ts or no divkitDir — skip
        }

        const allEntries = [entries, divkitEntries].filter(Boolean).join(",\n")
        return `${imports}${divkitImports}\nexport default {\n${allEntries}\n}`
      }
```

- [ ] **Step 4: Add load handler for RESOLVED_DIVKIT_META**

After the `RESOLVED_INFERRED_EDGES` block, add:

```ts
      if (id === RESOLVED_DIVKIT_META) {
        const flowsPath = path.resolve(dir, "flows.ts")
        try {
          const flowsSource = await fs.readFile(flowsPath, "utf-8")
          const divkitDirMatch = flowsSource.match(/divkitDir:\s*["']([^"']+)["']/)
          if (divkitDirMatch) {
            const divkitDir = divkitDirMatch[1]
            const divkitScreens = await scanDivKitScreens(divkitDir)
            const meta: Record<string, { title: string; isDivkit: true }> = {}
            for (const s of divkitScreens) {
              meta[s.id] = { title: s.title, isDivkit: true }
            }
            return `export default ${JSON.stringify(meta)}`
          }
        } catch {
          // No flows.ts or no divkitDir
        }
        return `export default {}`
      }
```

- [ ] **Step 5: Add divkitDir file watching in configureServer**

In the `configureServer` method, after the existing watcher setup (around line 110), add watching for `divkitDir`:

```ts
      // Watch divkitDir for .json changes
      const flowsPathStr = path.resolve(dir, "flows.ts")
      try {
        const flowsSrc = await fs.readFile(flowsPathStr, "utf-8")
        const dkDirMatch = flowsSrc.match(/divkitDir:\s*["']([^"']+)["']/)
        if (dkDirMatch) {
          server.watcher.add(dkDirMatch[1])
        }
      } catch {
        // flows.ts doesn't exist yet
      }
```

And extend the `invalidateAndReload` function to also invalidate `RESOLVED_DIVKIT_META`:

```ts
          const divkitMetaModule = server.moduleGraph.getModuleById(RESOLVED_DIVKIT_META)
          if (divkitMetaModule) {
            server.moduleGraph.invalidateModule(divkitMetaModule)
          }
```

- [ ] **Step 6: Verify build compiles**

Run: `cd /Users/sumitkumartiwari/Documents/StoryboardEditor/designflow && npx tsc --noEmit 2>&1 | head -20`
Expected: No new errors

- [ ] **Step 7: Commit**

```bash
git add src/runtime/vite-plugin.ts
git commit -m "feat: extend Vite plugin to scan divkitDir and generate DivKit virtual modules"
```

---

### Task 4: Add DivKit client resolution in dev server

**Files:**
- Modify: `src/cli/dev.ts:100-108`
- Modify: `src/cli/resolve.ts:11-18`

- [ ] **Step 1: Add DivKit client path resolution in dev.ts**

In `dev.ts`, inside the `runDev` function, after extracting `projectName` (around line 85), add:

```ts
  // Extract divkitClientPath from flows.ts for alias resolution
  let divkitClientPath: string | undefined
  if (fs.existsSync(flowsPath)) {
    const flowsContent = fs.readFileSync(flowsPath, "utf-8")
    const clientPathMatch = flowsContent.match(/divkitClientPath:\s*["']([^"']+)["']/)
    if (clientPathMatch) divkitClientPath = clientPathMatch[1]
  }
```

Then modify the `resolve.alias` in the `createServer` call to include the DivKit alias:

```ts
    resolve: {
      alias: {
        ...coreAliases,
        ...(divkitClientPath ? { "@divkitframework/divkit": divkitClientPath } : {}),
      },
    },
```

- [ ] **Step 2: Add DivKit client CSS link in dev HTML**

In the `buildDevHtml` function in `dev.ts`, add the parameter and CSS injection. Update the function signature:

```ts
export function buildDevHtml(opts: { hasStylesCSS: boolean; projectName?: string; exportMode?: boolean; divkitClientPath?: string }): string {
```

Add a CSS link inside the `<head>` after the styles link:

```ts
  const divkitCssLink = opts.divkitClientPath
    ? `\n  <link rel="stylesheet" href="/@divkit-client-css" />`
    : ""
```

And append `divkitCssLink` after `stylesLink` in the HTML template.

- [ ] **Step 3: Add a Vite plugin to serve DivKit CSS**

In the `plugins` array in `createServer`, add after the `designflow-html` plugin:

```ts
      // Serve DivKit client CSS from local build
      ...(divkitClientPath ? [{
        name: "designflow-divkit-css",
        resolveId(id: string) {
          if (id === "/@divkit-client-css") return "\0@divkit-client-css"
        },
        load(id: string) {
          if (id === "\0@divkit-client-css") return undefined
        },
        configureServer(srv: any) {
          srv.middlewares.use((req: any, res: any, next: any) => {
            if (req.url === "/@divkit-client-css") {
              const cssPath = path.join(divkitClientPath!, "dist", "client.css")
              if (fs.existsSync(cssPath)) {
                res.setHeader("Content-Type", "text/css")
                res.end(fs.readFileSync(cssPath, "utf-8"))
                return
              }
            }
            next()
          })
        },
      }] : []),
```

- [ ] **Step 4: Pass divkitClientPath to buildDevHtml call**

Update the call to `buildDevHtml` (around line 87):

```ts
  const html = buildDevHtml({ hasStylesCSS, projectName, divkitClientPath })
```

- [ ] **Step 5: Add divkitClientPath directory to Vite fs.allow**

In the server config, extend the `fs.allow` array:

```ts
      fs: {
        allow: [resolvedDir, pkgRoot, ...Object.values(coreAliases), ...(divkitClientPath ? [divkitClientPath] : [])],
      },
```

- [ ] **Step 6: Add divkitDir to fs.allow as well**

Extract `divkitDir` similarly to `divkitClientPath`:

```ts
  let divkitDir: string | undefined
  if (fs.existsSync(flowsPath)) {
    const flowsContent = fs.readFileSync(flowsPath, "utf-8")
    const divkitDirMatch = flowsContent.match(/divkitDir:\s*["']([^"']+)["']/)
    if (divkitDirMatch) divkitDir = divkitDirMatch[1]
  }
```

And add to `fs.allow`:

```ts
        allow: [resolvedDir, pkgRoot, ...Object.values(coreAliases), ...(divkitClientPath ? [divkitClientPath] : []), ...(divkitDir ? [divkitDir] : [])],
```

- [ ] **Step 7: Verify build compiles**

Run: `cd /Users/sumitkumartiwari/Documents/StoryboardEditor/designflow && npx tsc --noEmit 2>&1 | head -20`
Expected: No new errors

- [ ] **Step 8: Commit**

```bash
git add src/cli/dev.ts src/cli/resolve.ts
git commit -m "feat: add DivKit client resolution and CSS serving in dev server"
```

---

### Task 5: Update ScreenNode for DivKit visual treatment

**Files:**
- Modify: `src/app/ScreenNode.tsx:9-20` (ScreenNodeData type)
- Modify: `src/app/ScreenNode.tsx:60-391` (ScreenNode component)

- [ ] **Step 1: Add isDivkit to ScreenNodeData type**

In `src/app/ScreenNode.tsx`, add `isDivkit` to the `ScreenNodeData` type (around line 9):

```ts
export type ScreenNodeData = {
  title: string
  screenId: string
  onSelect: (screenId: string) => void
  component?: ComponentType
  viewport?: Viewport
  colorScheme?: ColorScheme
  accentColor?: string
  color?: string
  projectName?: string
  exportMode?: boolean
  isDivkit?: boolean
}
```

- [ ] **Step 2: Apply amber styling for DivKit nodes**

In the `ScreenNode` component function, after the existing `pillColor` calculation (line 109), add DivKit-specific overrides:

```ts
  const DIVKIT_COLOR = "#f59e0b"
  const effectivePillColor = data.isDivkit ? DIVKIT_COLOR : pillColor
  const hasAccent = data.isDivkit || !!pillColor
  const pillTextColor = hasAccent ? "#fff" : "#334155"
```

Replace all references to `pillColor` in the JSX with `effectivePillColor` (the pill bar background, color picker button background, divider colors). Specifically:

In the pill bar `background` style (around line 148):
```ts
          background: hasAccent ? effectivePillColor! : "#fff",
```

In the color picker button background (around line 182):
```ts
                  background: effectivePillColor ?? "#e2e8f0",
```

- [ ] **Step 3: Add DivKit badge in the pill header**

Right after the title `<span>` (line 164), add:

```tsx
        {data.isDivkit && (
          <span
            style={{
              fontSize: "9px",
              fontWeight: 700,
              color: "#fff",
              background: "rgba(0,0,0,0.2)",
              padding: "1px 5px",
              borderRadius: "3px",
              letterSpacing: "0.5px",
              textTransform: "uppercase",
            }}
          >
            DivKit
          </span>
        )}
```

- [ ] **Step 4: Add amber border to DivKit screen thumbnails**

In the thumbnail container style (around line 337), make the border conditional:

```ts
          border: data.isDivkit ? `2px solid ${DIVKIT_COLOR}` : "1px solid #e2e8f0",
```

- [ ] **Step 5: Verify build compiles**

Run: `cd /Users/sumitkumartiwari/Documents/StoryboardEditor/designflow && npx tsc --noEmit 2>&1 | head -20`
Expected: No new errors

- [ ] **Step 6: Commit**

```bash
git add src/app/ScreenNode.tsx
git commit -m "feat: add DivKit amber styling and badge to ScreenNode"
```

---

### Task 6: Update Canvas to include DivKit nodes

**Files:**
- Modify: `src/app/Canvas.tsx`

- [ ] **Step 1: Add divkitMeta prop to CanvasProps**

Update the `CanvasProps` interface (around line 12):

```ts
interface CanvasProps {
  config: DesignFlowConfig
  screens?: Record<string, ComponentType>
  onScreenSelect: (screenId: string) => void
  focusNodeId?: string | null
  inferredEdges?: EdgeConfig[]
  settings?: CanvasSettings
  onSettingsChange?: (settings: CanvasSettings) => void
  projectName?: string
  exportMode?: boolean
  divkitMeta?: Record<string, { title: string; isDivkit: true }>
}
```

- [ ] **Step 2: Extend configToNodes to include DivKit screens**

Add a `divkitMeta` parameter and `config.divkitScreens` reading to the `configToNodes` function:

```ts
function configToNodes(
  config: DesignFlowConfig,
  onScreenSelect: (id: string) => void,
  screens?: Record<string, ComponentType>,
  accentColor?: string,
  colorScheme?: "light" | "dark",
  projectName?: string,
  exportMode?: boolean,
  divkitMeta?: Record<string, { title: string; isDivkit: true }>,
): Node[] {
  const reactNodes = Object.entries(config.screens).map(([id, screen]) => ({
    id,
    type: "screen",
    position: screen.position,
    data: {
      title: screen.title,
      screenId: id,
      onSelect: onScreenSelect,
      component: screens?.[id],
      viewport: screen.viewport,
      color: screen.color,
      accentColor,
      colorScheme,
      projectName,
      exportMode,
    },
  }))

  if (!divkitMeta) return reactNodes

  const divkitNodes = Object.entries(divkitMeta).map(([id, meta]) => {
    const saved = config.divkitScreens?.[id]
    return {
      id,
      type: "screen",
      position: saved?.position ?? { x: 0, y: 0 },
      data: {
        title: meta.title,
        screenId: id,
        onSelect: onScreenSelect,
        component: screens?.[id],
        viewport: saved?.viewport ?? "mobile",
        color: saved?.color,
        accentColor,
        colorScheme,
        projectName,
        exportMode,
        isDivkit: true,
      },
    }
  })

  return [...reactNodes, ...divkitNodes]
}
```

- [ ] **Step 3: Update getPositions to include DivKit screen positions**

```ts
function getPositions(config: DesignFlowConfig, nodeOverrides?: Record<string, { x: number; y: number }>, divkitMeta?: Record<string, unknown>): Record<string, { x: number; y: number }> {
  const positions: Record<string, { x: number; y: number }> = {}
  for (const [id, screen] of Object.entries(config.screens)) {
    positions[id] = nodeOverrides?.[id] ?? screen.position
  }
  if (divkitMeta) {
    for (const id of Object.keys(divkitMeta)) {
      positions[id] = nodeOverrides?.[id] ?? config.divkitScreens?.[id]?.position ?? { x: 0, y: 0 }
    }
  }
  return positions
}
```

- [ ] **Step 4: Update Canvas component to accept and pass divkitMeta**

Destructure `divkitMeta` from props:

```ts
export function Canvas({ config, screens, onScreenSelect, focusNodeId, inferredEdges, settings, onSettingsChange, projectName, exportMode, divkitMeta }: CanvasProps) {
```

Update `configToNodes` calls to pass `divkitMeta`:

```ts
  const initialNodes = configToNodes(config, onScreenSelect, screens, settings?.accentColor, settings?.appearance, projectName, exportMode, divkitMeta)
```

And in the `useEffect` that recalculates on settings change, update `setNodes` to also pass `isDivkit` through:

```ts
  useEffect(() => {
    setEdges(configToEdges(config, inferredEdges, settings))
    setNodes((prev) => prev.map((node) => ({
      ...node,
      data: {
        ...node.data,
        accentColor: settings?.accentColor,
        colorScheme: settings?.appearance,
        projectName,
        exportMode,
      },
    })))
  }, [settings?.accentColor, settings?.lineStyle, settings?.appearance])
```

Update `configToEdges` calls to pass `divkitMeta` through `getPositions`:

```ts
  const initialEdges = configToEdges(config, inferredEdges, settings, undefined, divkitMeta)
```

And update `configToEdges` signature to accept and forward divkitMeta:

```ts
function configToEdges(config: DesignFlowConfig, inferredEdges?: EdgeConfig[], settings?: CanvasSettings, nodePositions?: Record<string, { x: number; y: number }>, divkitMeta?: Record<string, unknown>): Edge[] {
  const positions = nodePositions ?? getPositions(config, undefined, divkitMeta)
```

- [ ] **Step 5: Verify build compiles**

Run: `cd /Users/sumitkumartiwari/Documents/StoryboardEditor/designflow && npx tsc --noEmit 2>&1 | head -20`
Expected: No new errors

- [ ] **Step 6: Commit**

```bash
git add src/app/Canvas.tsx
git commit -m "feat: extend Canvas to render DivKit nodes alongside React nodes"
```

---

### Task 7: Update App to load divkitMeta and pass to Canvas/Viewer

**Files:**
- Modify: `src/app/App.tsx`

- [ ] **Step 1: Add divkitMeta prop and pass through**

Update `AppProps` and the component:

```ts
interface AppProps {
  config: DesignFlowConfig
  screens: Record<string, React.ComponentType>
  inferredEdges?: EdgeConfig[]
  exportMode?: boolean
  divkitMeta?: Record<string, { title: string; isDivkit: true }>
}

export function App({ config, screens, inferredEdges, exportMode, divkitMeta }: AppProps) {
```

- [ ] **Step 2: Update viewingConfig to check divkitScreens too**

Replace the existing `viewingConfig` line (line 44):

```ts
  const viewingConfig = viewingScreen
    ? config.screens[viewingScreen] ?? (
        divkitMeta?.[viewingScreen]
          ? {
              title: divkitMeta[viewingScreen].title,
              file: "",
              position: config.divkitScreens?.[viewingScreen]?.position ?? { x: 0, y: 0 },
              viewport: config.divkitScreens?.[viewingScreen]?.viewport,
              color: config.divkitScreens?.[viewingScreen]?.color,
            }
          : null
      )
    : null

  const isViewingDivkit = viewingScreen ? !!divkitMeta?.[viewingScreen] : false
```

- [ ] **Step 3: Pass divkitMeta to Canvas**

```tsx
        <Canvas
          config={config}
          screens={screens}
          onScreenSelect={setViewingScreen}
          focusNodeId={focusNodeId}
          inferredEdges={inferredEdges}
          settings={settings}
          onSettingsChange={handleSettingsChange}
          projectName={config.name}
          exportMode={exportMode}
          divkitMeta={divkitMeta}
        />
```

- [ ] **Step 4: Pass isDivkit flag to Viewer and disable navigation for DivKit screens**

```tsx
        {viewingScreen && viewingConfig && screens[viewingScreen] && (
          <Viewer
            key={viewingScreen}
            screenId={viewingScreen}
            screenTitle={viewingConfig.title}
            component={screens[viewingScreen]}
            onClose={handleCloseViewer}
            onNavigate={isViewingDivkit ? undefined : setViewingScreen}
            accentColor={settings.accentColor}
            color={viewingConfig.color}
            viewport={viewingConfig.viewport}
            projectName={config.name}
            exportMode={exportMode}
            isDivkit={isViewingDivkit}
          />
        )}
```

- [ ] **Step 5: Verify build compiles**

Run: `cd /Users/sumitkumartiwari/Documents/StoryboardEditor/designflow && npx tsc --noEmit 2>&1 | head -20`
Expected: No new errors

- [ ] **Step 6: Commit**

```bash
git add src/app/App.tsx
git commit -m "feat: wire divkitMeta through App to Canvas and Viewer"
```

---

### Task 8: Update Viewer for DivKit badge

**Files:**
- Modify: `src/app/Viewer.tsx:6-17` (ViewerProps)
- Modify: `src/app/Viewer.tsx:53` (component function)

- [ ] **Step 1: Add isDivkit to ViewerProps**

```ts
interface ViewerProps {
  screenId: string
  screenTitle: string
  component: ComponentType
  onClose: () => void
  onNavigate?: (screenId: string) => void
  accentColor?: string
  color?: string
  viewport?: Viewport
  projectName?: string
  exportMode?: boolean
  isDivkit?: boolean
}
```

- [ ] **Step 2: Apply amber styling and badge in Viewer**

Destructure `isDivkit` from props in the component signature:

```ts
export function Viewer({ screenId, screenTitle, component: ScreenComponent, onClose, onNavigate, accentColor, color, viewport, projectName, exportMode, isDivkit }: ViewerProps) {
```

Override the pill color for DivKit screens. Replace the existing `pillBg` line (line 114):

```ts
  const DIVKIT_COLOR = "#f59e0b"
  const pillBg = isDivkit ? DIVKIT_COLOR : (activeColor ?? accentColor)
```

(This replaces the original `const pillBg = activeColor ?? accentColor`)

Add the DivKit badge after the title `<h2>` in the viewer pill (after line 152):

```tsx
        {isDivkit && (
          <span
            style={{
              fontSize: "9px",
              fontWeight: 700,
              color: "#fff",
              background: "rgba(0,0,0,0.2)",
              padding: "1px 5px",
              borderRadius: "3px",
              letterSpacing: "0.5px",
              textTransform: "uppercase",
            }}
          >
            DivKit
          </span>
        )}
```

- [ ] **Step 3: Verify build compiles**

Run: `cd /Users/sumitkumartiwari/Documents/StoryboardEditor/designflow && npx tsc --noEmit 2>&1 | head -20`
Expected: No new errors

- [ ] **Step 4: Commit**

```bash
git add src/app/Viewer.tsx
git commit -m "feat: add DivKit badge and amber styling to Viewer"
```

---

### Task 9: Extend flow-writer to persist divkitScreens

**Files:**
- Modify: `src/runtime/flow-writer.ts`

- [ ] **Step 1: Add DivKit position/viewport/color update functions**

Add after the existing `updateScreenViewport` function (after line 59):

```ts
export function updateDivKitScreenPosition(
  config: DesignFlowConfig,
  screenId: string,
  position: { x: number; y: number },
): DesignFlowConfig {
  return {
    ...config,
    divkitScreens: {
      ...config.divkitScreens,
      [screenId]: {
        ...config.divkitScreens?.[screenId],
        position,
      },
    },
  }
}

export function updateDivKitScreenViewport(
  config: DesignFlowConfig,
  screenId: string,
  viewport: string,
): DesignFlowConfig {
  return {
    ...config,
    divkitScreens: {
      ...config.divkitScreens,
      [screenId]: {
        ...config.divkitScreens?.[screenId],
        position: config.divkitScreens?.[screenId]?.position ?? { x: 0, y: 0 },
        viewport: viewport as any,
      },
    },
  }
}

export function updateDivKitScreenColor(
  config: DesignFlowConfig,
  screenId: string,
  color: string,
): DesignFlowConfig {
  return {
    ...config,
    divkitScreens: {
      ...config.divkitScreens,
      [screenId]: {
        ...config.divkitScreens?.[screenId],
        position: config.divkitScreens?.[screenId]?.position ?? { x: 0, y: 0 },
        color,
      },
    },
  }
}
```

- [ ] **Step 2: Extend serializeFlowConfig to write divkitDir, divkitClientPath, and divkitScreens**

Replace the `serializeFlowConfig` function:

```ts
export function serializeFlowConfig(config: DesignFlowConfig): string {
  const screenEntries = Object.entries(config.screens)
    .map(([id, screen]) => {
      const fields = [
        `      title: "${screen.title}"`,
        `      file: "${screen.file}"`,
        `      position: { x: ${screen.position.x}, y: ${screen.position.y} }`,
      ]
      if (screen.viewport) {
        fields.push(`      viewport: "${screen.viewport}"`)
      }
      if (screen.color) {
        fields.push(`      color: "${screen.color}"`)
      }
      return `    ${id}: {\n${fields.join(",\n")},\n    }`
    })
    .join(",\n")

  const edgeEntries = (config.edges || [])
    .map((edge) => {
      const fields = [`from: "${edge.from}"`, `to: "${edge.to}"`]
      if (edge.label) fields.push(`label: "${edge.label}"`)
      return `    { ${fields.join(", ")} }`
    })
    .join(",\n")

  const nameField = config.name ? `  name: "${config.name}",\n` : ""
  const divkitDirField = config.divkitDir ? `  divkitDir: "${config.divkitDir}",\n` : ""
  const divkitClientPathField = config.divkitClientPath ? `  divkitClientPath: "${config.divkitClientPath}",\n` : ""

  let divkitScreensBlock = ""
  if (config.divkitScreens && Object.keys(config.divkitScreens).length > 0) {
    const dkEntries = Object.entries(config.divkitScreens)
      .map(([id, meta]) => {
        const fields = [
          `      position: { x: ${Math.round(meta.position.x)}, y: ${Math.round(meta.position.y)} }`,
        ]
        if (meta.viewport) fields.push(`      viewport: "${meta.viewport}"`)
        if (meta.color) fields.push(`      color: "${meta.color}"`)
        return `    "${id}": {\n${fields.join(",\n")},\n    }`
      })
      .join(",\n")
    divkitScreensBlock = `\n  divkitScreens: {\n${dkEntries},\n  },\n`
  }

  return `import type { DesignFlowConfig } from "designflow"

const config: DesignFlowConfig = {
${nameField}${divkitDirField}${divkitClientPathField}  screens: {
${screenEntries},
  },
${divkitScreensBlock}
  edges: [
${edgeEntries},
  ],
}

export default config
`
}
```

- [ ] **Step 3: Verify build compiles**

Run: `cd /Users/sumitkumartiwari/Documents/StoryboardEditor/designflow && npx tsc --noEmit 2>&1 | head -20`
Expected: No new errors

- [ ] **Step 4: Commit**

```bash
git add src/runtime/flow-writer.ts
git commit -m "feat: extend flow-writer to persist divkitScreens positions"
```

---

### Task 10: Update Vite plugin API middleware for DivKit position/viewport/color persistence

**Files:**
- Modify: `src/runtime/vite-plugin.ts` (configureServer section)

- [ ] **Step 1: Import the new DivKit flow-writer functions**

Update the import at the top of `vite-plugin.ts` (line 9):

```ts
import { updateScreenPosition, updateScreenViewport, updateScreenColor, updateDivKitScreenPosition, updateDivKitScreenViewport, updateDivKitScreenColor, writeFlowConfig } from "./flow-writer"
```

- [ ] **Step 2: Update the position persistence middleware to handle DivKit screens**

In the `update-positions` handler, after loading the config, check if the screen is a DivKit screen:

Replace the position update loop (around line 168):

```ts
            // Update each position — check if it's a DivKit screen or regular screen
            for (const [screenId, position] of Object.entries(positions)) {
              if (config.screens[screenId]) {
                config = updateScreenPosition(config, screenId, position)
              } else {
                config = updateDivKitScreenPosition(config, screenId, position)
              }
            }
```

- [ ] **Step 3: Update viewport persistence middleware for DivKit screens**

In the `update-viewport` handler, after loading config (around line 201):

```ts
            let config = await loadFlowsConfig()
            if (config.screens[screenId]) {
              config = updateScreenViewport(config, screenId, viewport)
            } else {
              config = updateDivKitScreenViewport(config, screenId, viewport)
            }
```

- [ ] **Step 4: Update color persistence middleware for DivKit screens**

In the `update-color` handler, after loading config (around line 230):

```ts
            let config = await loadFlowsConfig()
            if (config.screens[screenId]) {
              config = updateScreenColor(config, screenId, color)
            } else {
              config = updateDivKitScreenColor(config, screenId, color)
            }
```

- [ ] **Step 5: Verify build compiles**

Run: `cd /Users/sumitkumartiwari/Documents/StoryboardEditor/designflow && npx tsc --noEmit 2>&1 | head -20`
Expected: No new errors

- [ ] **Step 6: Commit**

```bash
git add src/runtime/vite-plugin.ts
git commit -m "feat: update API middleware to persist DivKit screen positions/viewport/color"
```

---

### Task 11: Update dev HTML to import divkitMeta

**Files:**
- Modify: `src/cli/dev.ts` (buildDevHtml function)

- [ ] **Step 1: Add divkitMeta import to the dev HTML script**

In `buildDevHtml`, update the `<script type="module">` block to import and pass `divkitMeta`:

```ts
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='8' fill='%234488ff'/><text x='16' y='22' font-size='18' font-weight='700' fill='white' text-anchor='middle' font-family='system-ui'>df</text></svg>" />
  <style>
    @layer base {
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { font-family: Inter, system-ui, sans-serif; }
    }
  </style>${stylesLink}${divkitCssLink}
</head>
<body>
  <div id="root"></div>
  <script type="module">
    import "virtual:designflow/theme"
    import { createRoot } from "react-dom/client"
    import { createElement } from "react"
    import { App } from "/@designflow/app"
    import config from "/flows.ts"
    import screensModule from "virtual:designflow/screens"
    import inferredEdgesModule from "virtual:designflow/inferred-edges"
    import divkitMetaModule from "virtual:designflow/divkit-meta"

    const screens = screensModule.default || screensModule
    const inferredEdges = inferredEdgesModule.default || inferredEdgesModule
    const divkitMeta = divkitMetaModule.default || divkitMetaModule
    const root = createRoot(document.getElementById("root"))
    root.render(createElement(App, { config: config.default || config, screens, inferredEdges, divkitMeta${opts.exportMode ? ", exportMode: true" : ""} }))
  </script>
</body>
</html>`
```

- [ ] **Step 2: Verify build compiles**

Run: `cd /Users/sumitkumartiwari/Documents/StoryboardEditor/designflow && npx tsc --noEmit 2>&1 | head -20`
Expected: No new errors

- [ ] **Step 3: Commit**

```bash
git add src/cli/dev.ts
git commit -m "feat: import divkitMeta in dev HTML and pass to App"
```

---

### Task 12: Update wireframes/flows.ts with DivKit config and end-to-end test

**Files:**
- Modify: `wireframes/flows.ts`

- [ ] **Step 1: Add divkitDir and divkitClientPath to flows.ts**

Edit `wireframes/flows.ts` to add the DivKit configuration fields:

```ts
import type { DesignFlowConfig } from "designflow"

const config: DesignFlowConfig = {
  name: "GitHub Explorer",
  divkitDir: "/Users/sumitkumartiwari/Desktop/divkit_jsons_samples",
  divkitClientPath: "/Users/sumitkumartiwari/Documents/divkit/client/web/divkit",
  screens: {
    // ... existing screens unchanged ...
  },
  edges: [
    // ... existing edges unchanged ...
  ],
}

export default config
```

- [ ] **Step 2: Start the dev server and verify DivKit screens appear**

Run: `cd /Users/sumitkumartiwari/Documents/StoryboardEditor/designflow && npx tsx bin/cli.ts dev`

Open `http://localhost:4800` in the browser. Verify:
- All 23 DivKit JSON screens appear as nodes on the canvas
- Each has an amber header pill with "DivKit" badge
- Each has a 2px amber border
- The existing React screens still render normally
- Clicking a DivKit screen opens the Viewer with the rendered DivKit content
- Dragging a DivKit screen persists its position to `flows.ts` (check the `divkitScreens` map)

- [ ] **Step 3: Commit**

```bash
git add wireframes/flows.ts
git commit -m "feat: add DivKit config to wireframes for end-to-end integration"
```

---

### Task 13: Run existing tests to verify no regressions

- [ ] **Step 1: Run unit and integration tests**

Run: `cd /Users/sumitkumartiwari/Documents/StoryboardEditor/designflow && pnpm test`
Expected: All existing tests pass (240+)

- [ ] **Step 2: Fix any regressions**

If tests fail due to the new `divkitMeta` prop or updated types, update test fixtures to include the new optional fields.

- [ ] **Step 3: Commit any test fixes**

```bash
git add -A
git commit -m "fix: update tests for DivKit integration compatibility"
```
