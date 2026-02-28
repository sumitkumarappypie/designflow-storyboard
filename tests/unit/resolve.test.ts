import { describe, it, expect } from "vitest"
import fs from "fs"
import path from "path"
import { buildCoreAliases } from "../../src/cli/resolve"

describe("buildCoreAliases", () => {
  it("should return aliases for all core packages", () => {
    const aliases = buildCoreAliases()

    expect(aliases).toHaveProperty("react")
    expect(aliases).toHaveProperty("react-dom")
    expect(aliases).toHaveProperty("@xyflow/react")
    expect(aliases).toHaveProperty("@xyflow/system")
    expect(aliases).toHaveProperty("html-to-image")
  })

  it("should return absolute paths", () => {
    const aliases = buildCoreAliases()

    for (const p of Object.values(aliases)) {
      expect(path.isAbsolute(p)).toBe(true)
    }
  })

  it("should point to directories containing package.json", () => {
    const aliases = buildCoreAliases()

    for (const [pkg, dir] of Object.entries(aliases)) {
      const pkgJsonPath = path.join(dir, "package.json")
      expect(fs.existsSync(pkgJsonPath), `${pkg} → ${pkgJsonPath} should exist`).toBe(true)
    }
  })
})
