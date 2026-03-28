# DivKit Integration into DesignFlow Canvas

## Goal

Render DivKit JSON screens on the DesignFlow infinite canvas alongside React screens, using the DivKit web client for rendering.

## Config

`flows.ts` gets three new optional fields:

```ts
const config: DesignFlowConfig = {
  name: "Food Court App",
  divkitDir: "/path/to/divkit/jsons",           // directory of .json files to auto-discover
  divkitClientPath: "/path/to/divkit/client/web/divkit",  // local DivKit web client build
  screens: { /* existing React screens */ },
  divkitScreens: {                               // auto-populated on drag, not manually written
    divkit_food_court_cart_screen: {
      position: { x: 200, y: 400 },
      viewport: "mobile",
      color: "#f59e0b",
    },
  },
  edges: [],
}
```

### Discovery Rules

- Vite plugin reads `divkitDir`, scans for all `*.json` files
- Screen ID = filename without `.json`, lowercased
- Title = filename with `divkit_food_court_` prefix stripped, underscores replaced with spaces, title-cased
- Initial position: `{ x: 0, y: 0 }` — user drags into place
- Positions persist to `divkitScreens` map in `flows.ts` on drag

## DivKit React Wrapper

New file: `src/app/DivKitScreen.tsx`

- Takes a `json` prop (parsed DivKit JSON object)
- Uses `useRef` + `useEffect` to call `render()` from the DivKit web client
- On change, clears container and re-renders
- Factory function `createDivKitComponent(json)` returns a zero-prop React component matching DesignFlow's screen contract

```tsx
function DivKitScreen({ json }: { json: object }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    ref.current.textContent = '';
    render({ id: `divkit-${Date.now()}`, target: ref.current, json, platform: 'touch' });
  }, [json]);
  return <div ref={ref} style={{ width: '100%', minHeight: '100%' }} />;
}

export function createDivKitComponent(json: object) {
  return function DivKitWrapper() {
    return <DivKitScreen json={json} />;
  };
}
```

## Vite Plugin Changes

### DivKit Client Resolution

Use Vite `resolve.alias` to point `@divkitframework/divkit` at the local build specified by `divkitClientPath`:

```ts
resolve: {
  alias: {
    '@divkitframework/divkit': config.divkitClientPath
  }
}
```

### Extended `virtual:designflow/screens`

After scanning `.tsx` files, the plugin also reads `divkitDir`. For each `.json` file:
- Generates a JSON import
- Wraps with `createDivKitComponent()`
- Adds to the combined screens map

```js
// Generated virtual module
import Screen0 from "./wireframes/screens/Explore.tsx"
import divkitJson0 from "/path/to/divkit_food_court_cart_screen.json"
import { createDivKitComponent } from "/@designflow/divkit-screen"

export default {
  explore: Screen0,
  divkit_food_court_cart_screen: createDivKitComponent(divkitJson0),
}
```

### New `virtual:designflow/divkit-meta`

Exports metadata about which screens are DivKit and their display titles:

```js
export default {
  divkit_food_court_cart_screen: { title: "Cart Screen", isDivkit: true },
  divkit_food_court_landing_screen: { title: "Landing Screen", isDivkit: true },
}
```

### DivKit CSS Injection

The plugin injects `<link>` to `{divkitClientPath}/dist/client.css` in the dev server HTML.

### File Watching

Watch `divkitDir` for added/removed `.json` files to trigger HMR.

## Visual Treatment

DivKit screens are visually distinct on the canvas:

- **Header pill:** Amber background (`#f59e0b`) with "DivKit" badge text
- **Thumbnail border:** 2px amber border around the preview area
- **All other controls identical:** viewport toggle, drag, fit-to-view, color picker

Default viewport: `mobile` (390x844).

## Viewer Behavior

- Renders DivKit screens at full size via the same wrapper component
- **Read-only:** no navigation interception (no `data-df-navigate` handler)
- Shows "DivKit" badge in the Viewer header, amber color
- Viewport toggle and PNG export still work

## Edge Behavior

- No auto-inferred edges for DivKit screens
- Manual edges in `flows.ts` `edges` array work if user adds them

## Type Changes (`src/types/index.ts`)

```ts
interface DesignFlowConfig {
  name: string;
  divkitDir?: string;
  divkitClientPath?: string;
  divkitScreens?: Record<string, {
    position: { x: number; y: number };
    viewport?: ViewportPreset;
    color?: string;
  }>;
  screens: Record<string, ScreenConfig>;
  edges: EdgeConfig[];
}

interface ScreenNodeData {
  // ... existing fields
  isDivkit?: boolean;
}
```

## Files Changed

| File | Change |
|------|--------|
| `src/types/index.ts` | Add `divkitDir`, `divkitClientPath`, `divkitScreens`, `isDivkit` |
| `src/runtime/vite-plugin.ts` | Scan `divkitDir`, extend virtual modules, alias DivKit client, inject CSS, file watching |
| `src/app/DivKitScreen.tsx` | **New** — React wrapper for DivKit renderer |
| `src/app/ScreenNode.tsx` | Amber header/border when `isDivkit` |
| `src/app/Canvas.tsx` | Build DivKit nodes from meta, merge into graph |
| `src/app/Viewer.tsx` | Disable nav interception for DivKit, show badge |
| `src/app/App.tsx` | Pass divkit meta through to Canvas |
| `src/runtime/flow-writer.ts` | Persist `divkitScreens` positions |

## Out of Scope

- Auto-inferred edges from `divaction://` URLs
- DivKit theme ↔ DesignFlow theme bridging
- In-viewer DivKit interactivity (buttons, navigation)
- DivKit JSON editing from the canvas
