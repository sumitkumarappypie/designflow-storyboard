# DesignFlow

An open-source wireframe canvas for developers. Design screens as real React components, map navigation flows on an infinite canvas, then eject into production-ready routing code.

What you design is what you ship — no translation step.

## Why

AI coding tools generate React screens fast, but there's no way to see them all at once, visualize navigation, or test interactions in context. Figma gives you spatial design but outputs assets, not code.

DesignFlow bridges the gap: a Figma-like canvas where every screen is a live React component.

## Install

```bash
# TODO: not yet published to npm
npm install designflow
```

## Quick Start

```bash
# Scaffold a wireframes directory with example screens
npx designflow init

# Open the canvas
npx designflow dev
```

This creates a `wireframes/` directory:

```
wireframes/
├── screens/
│   ├── Login.tsx
│   ├── Dashboard.tsx
│   ├── Profile.tsx
│   ├── Settings.tsx
│   └── Notifications.tsx
├── flows.ts
├── designflow.theme.ts
└── CLAUDE.md
```

## Writing Screens

Screens are default-exported React components with zero required props. Style with `var(--df-*)` CSS custom properties or Tailwind classes.

```tsx
export default function Login() {
  return (
    <div style={{ padding: "var(--df-spacing-lg)", background: "var(--df-background)" }}>
      <h1 style={{ color: "var(--df-text)" }}>Welcome back</h1>
      <button data-df-navigate="dashboard">Sign In</button>
    </div>
  )
}
```

- `data-df-navigate="screenId"` marks navigation triggers — these render as flow arrows on the canvas
- Local state (`useState`, modals, dropdowns) works normally inside the viewer
- Dark mode works automatically when you use `var(--df-*)` tokens

## Defining Flows

`flows.ts` defines screen metadata and directed edges:

```ts
import type { DesignFlowConfig } from "designflow"

const config: DesignFlowConfig = {
  screens: {
    login: {
      title: "Login",
      file: "./screens/Login.tsx",
      position: { x: 0, y: 0 },
      viewport: "mobile",     // "desktop" | "tablet" | "mobile"
    },
    dashboard: {
      title: "Dashboard",
      file: "./screens/Dashboard.tsx",
      position: { x: 600, y: 0 },
    },
  },
  edges: [
    { from: "login", to: "dashboard", label: "Sign in" },
  ],
}

export default config
```

Positions persist — dragging nodes on the canvas writes back to `flows.ts`.

## Theming

All design tokens live in `designflow.theme.ts`. The dev server generates CSS custom properties (`--df-*`) from this file with HMR support.

```ts
import type { DesignFlowTheme } from "designflow"

const theme: DesignFlowTheme = {
  colors: {
    primary: "#2563EB",
    secondary: "#7C3AED",
    background: "#FFFFFF",
    surface: "#F8FAFC",
    text: "#0F172A",
    // ... accent, border, textMuted, textInvert, surfaceAlt,
    //     success, warning, error, info
  },
  darkColors: {
    background: "#0F172A",
    surface: "#1E293B",
    text: "#F1F5F9",
    // overrides applied per-screen when toggled to dark
  },
  radius: { sm: "4px", md: "8px", lg: "12px", xl: "16px", full: "9999px" },
  spacing: { xs: "4px", sm: "8px", md: "16px", lg: "24px", xl: "32px", xxl: "48px" },
  typography: {
    fontFamily: "Inter, system-ui, sans-serif",
    heading: { weight: 600, sizes: { h1: "2rem", h2: "1.5rem", h3: "1.25rem" } },
    body: { weight: 400, sizes: { base: "1rem", sm: "0.875rem", xs: "0.75rem" } },
  },
  shadows: {
    sm: "0 1px 2px rgba(0,0,0,0.05)",
    md: "0 4px 6px rgba(0,0,0,0.07)",
    lg: "0 10px 15px rgba(0,0,0,0.1)",
  },
}

export default theme
```

## Tailwind CSS Support

Optionally use Tailwind v4 classes in your screens:

```bash
npx designflow init --tailwind
```

This creates a `styles.css` with an `@theme` block that maps DesignFlow tokens to Tailwind's namespace:

```css
@import "tailwindcss";

@theme {
  --color-primary: var(--df-primary);
  --color-secondary: var(--df-secondary);
  --radius-md: var(--df-radius-md);
  --spacing-md: var(--df-spacing-md);
  /* ... */
}
```

Then use classes like `bg-primary`, `text-secondary`, `p-md`, `rounded-lg`, `shadow-sm` alongside or instead of inline `var(--df-*)` styles. Dark mode and theme changes cascade automatically.

## Canvas Features

- **Infinite canvas** — pan, zoom, fit-to-view
- **Live thumbnails** — screens render as real React components at reduced scale
- **Flow edges** — directed arrows between screens, auto-inferred from `data-df-navigate`
- **Viewer overlay** — click a screen to interact at full size (modals, dropdowns work)
- **Screen-to-screen navigation** — follow `data-df-navigate` links inside the viewer
- **Viewport presets** — toggle desktop (1440x900), tablet (768x1024), mobile (390x844) per screen
- **Per-screen dark mode** — toggle light/dark per screen to preview both variants
- **Canvas settings** — dark/light canvas, accent colors, grid/dots/blank background, line styles
- **Drag-to-reorder** — positions persist to `flows.ts`

## CLI

```
designflow init [--dir ./path] [--tailwind]   # Scaffold wireframes directory
designflow dev  [--dir ./path] [--port 4800]  # Start canvas dev server
```

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Canvas | React Flow v12 |
| Dev server | Vite |
| Screens | React 19 |
| Build | tsup (ESM + CJS) |
| Styling | Tailwind v4 (optional), CSS custom properties |
| Testing | Vitest, Testing Library, Playwright |

## Development

```bash
pnpm install
pnpm test          # Run all tests
pnpm test:watch    # Watch mode
pnpm dev           # Run the dev server locally
pnpm build         # Build with tsup
```

## License

MIT
