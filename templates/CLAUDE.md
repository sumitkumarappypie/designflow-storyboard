# DesignFlow Project Conventions

This directory contains wireframes for the app, visualized on an infinite canvas.

## Creating Screens
- Add new screens as `.tsx` files in `screens/`
- Each screen must `export default` a React component with no required props
- Use CSS custom properties for all colors/spacing: `var(--df-primary)`, `var(--df-spacing-md)`, etc.
- For navigation elements that link to other screens, add `data-df-navigate="screenId"`
- Local interactions (modals, dropdowns, tabs) use normal React state — they work inside the viewer

## Registering Screens
- Add new screens to `flows.ts` with a unique ID, title, file path, and canvas position
- Add edges to define navigation flow between screens

## Theme
- All design tokens are in `designflow.theme.ts`
- Never hardcode colors, spacing, or radii — always use `var(--df-*)` properties
- Available tokens: see designflow.theme.ts for the full list

## Running
- `pnpm designflow dev` to open the canvas
