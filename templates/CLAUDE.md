# DesignFlow Project Conventions

This directory contains wireframes for the app, visualized on an infinite canvas.

## Creating Screens
- Add new screens as `.tsx` files in `screens/`
- Each screen must `export default` a React component with no required props
- Use CSS custom properties for all colors/spacing: `var(--df-primary)`, `var(--df-spacing-md)`, etc.
- For navigation elements that link to other screens, add `data-df-navigate="screenId"`
- Local interactions (modals, dropdowns, tabs) use normal React state — they work inside the viewer

## Dark Mode
- Screens automatically support dark mode when you use `var(--df-*)` tokens
- Dark overrides are defined in `darkColors` in `designflow.theme.ts`
- Toggle light/dark per-screen or globally via the canvas toolbar
- Never hardcode colors like `#fff` or `#000` — use theme tokens instead
- Use `var(--df-background)` for page backgrounds, `var(--df-surface)` for cards

## Registering Screens
- Add new screens to `flows.ts` with a unique ID, title, file path, and canvas position
- Add edges to define navigation flow between screens

## Theme
- All design tokens are in `designflow.theme.ts`
- Never hardcode colors, spacing, or radii — always use `var(--df-*)` properties
- Available tokens: colors, darkColors, radius, spacing, typography, shadows

## Running
- `pnpm designflow dev` to open the canvas
