import fs from "fs"
import path from "path"
import { createRequire } from "module"

const require = createRequire(import.meta.url)

/**
 * Core packages that must resolve to designflow's bundled copies
 * to avoid duplicates (React hooks break with two React instances).
 */
const CORE_PACKAGES = [
  "react",
  "react-dom",
  "@xyflow/react",
  "@xyflow/system",
  "html-to-image",
] as const

/**
 * Walks up from a resolved entry point to find the nearest directory
 * containing package.json.
 */
function findPackageRoot(entryPoint: string): string {
  let dir = path.dirname(entryPoint)
  while (dir !== path.dirname(dir)) {
    if (fs.existsSync(path.join(dir, "package.json"))) {
      return dir
    }
    dir = path.dirname(dir)
  }
  throw new Error(`Cannot find package root from ${entryPoint}`)
}

/**
 * Resolves a package name to its root directory. Tries direct resolution
 * first, then falls back to resolving from @xyflow/react's context
 * (needed for @xyflow/system under pnpm strict mode).
 */
function resolvePackageDir(pkg: string): string {
  try {
    return findPackageRoot(require.resolve(pkg))
  } catch {
    // Under pnpm strict mode, transitive deps like @xyflow/system
    // are only resolvable from their parent package's context
    const parentEntry = require.resolve("@xyflow/react")
    const parentRequire = createRequire(parentEntry)
    return findPackageRoot(parentRequire.resolve(pkg))
  }
}

/**
 * Builds a resolve.alias map pointing core packages to absolute paths
 * within designflow's own node_modules. User-installed packages in the
 * wireframes directory resolve normally; these aliases ensure singletons
 * for React, React Flow, etc.
 */
export function buildCoreAliases(): Record<string, string> {
  const aliases: Record<string, string> = {}
  for (const pkg of CORE_PACKAGES) {
    aliases[pkg] = resolvePackageDir(pkg)
  }
  return aliases
}
