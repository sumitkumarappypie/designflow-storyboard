import { describe, it, expect } from "vitest"
import { generateThemeCSS } from "../../src/runtime/theme-loader"
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

  it("should handle partial theme with only colors", () => {
    const partial = { colors: { primary: "#000", secondary: "#111", accent: "#222", background: "#fff", surface: "#eee", surfaceAlt: "#ddd", border: "#ccc", text: "#333", textMuted: "#666", textInvert: "#fff", success: "#0f0", warning: "#ff0", error: "#f00", info: "#00f" } } as any
    const css = generateThemeCSS(partial)
    expect(css).toContain("--df-primary: #000;")
    expect(css).not.toContain("--df-radius")
  })
})
