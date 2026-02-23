# DesignFlow — Project CLAUDE.md

## Overview
DesignFlow is an npm package (`designflow`) that provides a Figma-like infinite canvas where every screen is a real React component. Users design wireframes, visualize flows, then eject into production-ready routing code.

## Development Approach: TDD
This project follows **Test-Driven Development**. Every feature must:
1. Have tests written **before** implementation
2. Tests must **fail** before writing implementation code
3. Implementation should be the **minimum** to pass tests
4. After passing, **refactor** if needed

## Commit
Keep commit messages short (1 sentence), using semantic commits.
Commit after you implement something and test it.

## Source of Truth Files
- `PROJECT.md` — Full project specification and architecture
- `PROGRESS.md` — Milestone tracker (check off items as completed)
- `TDD.md` — Testing strategy, conventions, and per-module test plans

## Project Structure
```
src/
├── cli/          # CLI commands (init, dev, eject)
├── app/          # React components (Canvas, ScreenNode, FlowEdge, Viewer, etc.)
├── runtime/      # Vite plugin, theme loader, screen scanner
└── types/        # TypeScript type definitions
templates/        # Scaffolding templates for `designflow init`
tests/
├── unit/         # Pure function tests (Vitest)
├── integration/  # Component + module tests (Vitest + Testing Library)
├── e2e/          # Full flow tests (Playwright)
└── fixtures/     # Shared test data
```

## Key Conventions
- **CSS custom properties**: All visual tokens use `--df-*` prefix (e.g., `--df-primary`, `--df-spacing-md`)
- **Screen components**: Default-exported React components with zero required props
- **Navigation**: `data-df-navigate="screenId"` attribute marks cross-screen navigation triggers
- **Theme**: Single source of truth in `designflow.theme.ts`, consumed via CSS vars
- **Flows**: `flows.ts` defines screen metadata and directed edges

## Tech Stack
- **Runtime**: React 18+, React Flow v12, Vite
- **Build**: tsup (ESM + CJS dual output)
- **Testing**: Vitest, @testing-library/react, Playwright
- **CLI**: cac or commander
- **Styling**: Tailwind (for canvas UI chrome only)

## Commands
```bash
pnpm test              # Unit + integration tests
pnpm test:watch        # Watch mode
pnpm test:coverage     # Coverage report
pnpm test:e2e          # Playwright E2E tests
pnpm build             # Build with tsup
pnpm dev               # Run designflow dev server locally
```

## Current Milestone
**M1 — Walking Skeleton** (see PROGRESS.md for detailed checklist)

## File Naming
- Source: `kebab-case.ts` / `PascalCase.tsx` (components)
- Tests: `<module>.test.ts` or `<component>.test.tsx`
- Test descriptions: `it("should <behavior> when <condition>")`
