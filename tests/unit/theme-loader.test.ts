import { describe, it, expect } from "vitest"
import { generateThemeCSS, generateThemeFile, generateTailwindCSS } from "../../src/runtime/theme-loader"
import { sampleTheme } from "../fixtures/sample-theme"

describe("generateThemeCSS", () => {
  it("should generate CSS custom properties from a full theme", () => {
    const css = generateThemeCSS(sampleTheme)
    expect(css).toContain(":root {")
    expect(css).toContain("}")
  })

  it("should generate color properties with --df- prefix", () => {
    const css = generateThemeCSS(sampleTheme)
    expect(css).toContain("--df-primary: #2563EB;")
    expect(css).toContain("--df-secondary: #7C3AED;")
    expect(css).toContain("--df-background: #FFFFFF;")
    expect(css).toContain("--df-text: #0F172A;")
    expect(css).toContain("--df-text-muted: #64748B;")
    expect(css).toContain("--df-text-invert: #FFFFFF;")
    expect(css).toContain("--df-surface-alt: #F1F5F9;")
  })

  it("should generate radius properties", () => {
    const css = generateThemeCSS(sampleTheme)
    expect(css).toContain("--df-radius-sm: 4px;")
    expect(css).toContain("--df-radius-md: 8px;")
    expect(css).toContain("--df-radius-full: 9999px;")
  })

  it("should generate spacing properties", () => {
    const css = generateThemeCSS(sampleTheme)
    expect(css).toContain("--df-spacing-xs: 4px;")
    expect(css).toContain("--df-spacing-md: 16px;")
    expect(css).toContain("--df-spacing-xxl: 48px;")
  })

  it("should generate typography properties", () => {
    const css = generateThemeCSS(sampleTheme)
    expect(css).toContain("--df-font-family: Inter, system-ui, sans-serif;")
    expect(css).toContain("--df-heading-weight: 600;")
    expect(css).toContain("--df-heading-h1: 2rem;")
    expect(css).toContain("--df-heading-h2: 1.5rem;")
    expect(css).toContain("--df-body-weight: 400;")
    expect(css).toContain("--df-body-base: 1rem;")
    expect(css).toContain("--df-body-sm: 0.875rem;")
  })

  it("should generate shadow properties", () => {
    const css = generateThemeCSS(sampleTheme)
    expect(css).toContain("--df-shadow-sm: 0 1px 2px rgba(0,0,0,0.05);")
    expect(css).toContain("--df-shadow-md: 0 4px 6px rgba(0,0,0,0.07);")
  })

  it("should generate dark color overrides scoped to data-df-color-scheme", () => {
    const css = generateThemeCSS(sampleTheme)
    expect(css).toContain('[data-df-color-scheme="dark"]')
    expect(css).toContain("--df-background: #0F172A;")
    expect(css).toContain("--df-surface: #1E293B;")
    expect(css).toContain("--df-text: #F1F5F9;")
    expect(css).toContain("--df-text-muted: #94A3B8;")
  })

  it("should not generate dark block when darkColors is absent", () => {
    const { darkColors, ...themeWithoutDark } = sampleTheme
    const css = generateThemeCSS(themeWithoutDark)
    expect(css).not.toContain('[data-df-color-scheme="dark"]')
  })

  it("should handle partial theme with only colors", () => {
    const partial = { colors: { primary: "#000", secondary: "#111", accent: "#222", background: "#fff", surface: "#eee", surfaceAlt: "#ddd", border: "#ccc", text: "#333", textMuted: "#666", textInvert: "#fff", success: "#0f0", warning: "#ff0", error: "#f00", info: "#00f" } } as any
    const css = generateThemeCSS(partial)
    expect(css).toContain("--df-primary: #000;")
    expect(css).not.toContain("--df-radius")
  })
})

describe("generateThemeFile", () => {
  it("should generate a valid TypeScript file with theme export", () => {
    const file = generateThemeFile(sampleTheme)
    expect(file).toContain('import type { DesignFlowTheme } from "designflow"')
    expect(file).toContain("const theme: DesignFlowTheme =")
    expect(file).toContain("export default theme")
  })

  it("should include all theme colors in the output", () => {
    const file = generateThemeFile(sampleTheme)
    expect(file).toContain('"primary"')
    expect(file).toContain('"#2563EB"')
    expect(file).toContain('"secondary"')
  })

  it("should include radius values", () => {
    const file = generateThemeFile(sampleTheme)
    expect(file).toContain('"sm"')
    expect(file).toContain('"4px"')
  })

  it("should produce parseable JSON for the theme object", () => {
    const file = generateThemeFile(sampleTheme)
    // Extract JSON from between "= " and the next newline before "export"
    const jsonStr = file.split("const theme: DesignFlowTheme = ")[1].split("\n\nexport")[0]
    const parsed = JSON.parse(jsonStr)
    expect(parsed.colors.primary).toBe("#2563EB")
    expect(parsed.radius.sm).toBe("4px")
  })
})

describe("generateTailwindCSS", () => {
  it("should start with @import tailwindcss", () => {
    const css = generateTailwindCSS(sampleTheme)
    expect(css).toMatch(/^@import "tailwindcss"/)
  })

  it("should contain @theme block", () => {
    const css = generateTailwindCSS(sampleTheme)
    expect(css).toContain("@theme {")
  })

  it("should map colors to var(--df-*) references", () => {
    const css = generateTailwindCSS(sampleTheme)
    expect(css).toContain("--color-primary: var(--df-primary);")
    expect(css).toContain("--color-secondary: var(--df-secondary);")
    expect(css).toContain("--color-surface-alt: var(--df-surface-alt);")
    expect(css).toContain("--color-text-muted: var(--df-text-muted);")
    expect(css).toContain("--color-text-invert: var(--df-text-invert);")
    expect(css).toContain("--color-success: var(--df-success);")
  })

  it("should map radius to var(--df-radius-*) references", () => {
    const css = generateTailwindCSS(sampleTheme)
    expect(css).toContain("--radius-sm: var(--df-radius-sm);")
    expect(css).toContain("--radius-md: var(--df-radius-md);")
    expect(css).toContain("--radius-full: var(--df-radius-full);")
  })

  it("should map spacing to var(--df-spacing-*) references", () => {
    const css = generateTailwindCSS(sampleTheme)
    expect(css).toContain("--spacing-xs: var(--df-spacing-xs);")
    expect(css).toContain("--spacing-md: var(--df-spacing-md);")
    expect(css).toContain("--spacing-xxl: var(--df-spacing-xxl);")
  })

  it("should map font family to var(--df-font-family)", () => {
    const css = generateTailwindCSS(sampleTheme)
    expect(css).toContain("--font-sans: var(--df-font-family);")
  })

  it("should map shadows to var(--df-shadow-*) references", () => {
    const css = generateTailwindCSS(sampleTheme)
    expect(css).toContain("--shadow-sm: var(--df-shadow-sm);")
    expect(css).toContain("--shadow-md: var(--df-shadow-md);")
    expect(css).toContain("--shadow-lg: var(--df-shadow-lg);")
  })

  it("should not contain v3 syntax", () => {
    const css = generateTailwindCSS(sampleTheme)
    expect(css).not.toContain('import type { Config }')
    expect(css).not.toContain("content:")
    expect(css).not.toContain("theme: {")
  })
})
