import { describe, it, expect, expectTypeOf } from "vitest"
import type {
  DesignFlowConfig,
  ScreenConfig,
  EdgeConfig,
  DesignFlowTheme,
  Viewport,
} from "../../src/types"
import { VIEWPORT_RESOLUTIONS, getScreenResolution } from "../../src/types"

describe("Types", () => {
  it("should accept valid Viewport values", () => {
    expectTypeOf<"desktop">().toExtend<Viewport>()
    expectTypeOf<"tablet">().toExtend<Viewport>()
    expectTypeOf<"mobile">().toExtend<Viewport>()
  })

  it("should accept valid ScreenConfig", () => {
    const screen: ScreenConfig = {
      title: "Login",
      file: "./screens/Login.tsx",
      position: { x: 0, y: 0 },
    }
    expectTypeOf(screen).toExtend<ScreenConfig>()
  })

  it("should make viewport optional in ScreenConfig", () => {
    expectTypeOf<ScreenConfig["viewport"]>().toEqualTypeOf<Viewport | undefined>()
  })

  it("should accept valid EdgeConfig", () => {
    const edge: EdgeConfig = { from: "login", to: "dashboard" }
    expectTypeOf(edge).toExtend<EdgeConfig>()
  })

  it("should make label optional in EdgeConfig", () => {
    expectTypeOf<EdgeConfig["label"]>().toEqualTypeOf<string | undefined>()
  })

  it("should make edges optional in DesignFlowConfig", () => {
    const config: DesignFlowConfig = {
      screens: {
        login: { title: "Login", file: "./Login.tsx", position: { x: 0, y: 0 } },
      },
    }
    expectTypeOf(config).toExtend<DesignFlowConfig>()
  })

  it("should make resolution optional in ScreenConfig", () => {
    expectTypeOf<ScreenConfig["resolution"]>().toEqualTypeOf<
      { width: number; height: number } | undefined
    >()
  })

  it("should accept ScreenConfig with explicit resolution", () => {
    const screen: ScreenConfig = {
      title: "Custom",
      file: "./screens/Custom.tsx",
      position: { x: 0, y: 0 },
      resolution: { width: 1920, height: 1080 },
    }
    expectTypeOf(screen).toExtend<ScreenConfig>()
  })

  it("should export VIEWPORT_RESOLUTIONS with correct presets", () => {
    expect(VIEWPORT_RESOLUTIONS).toEqual({
      desktop: { width: 1440, height: 900 },
      tablet: { width: 768, height: 1024 },
      mobile: { width: 390, height: 844 },
    })
  })

  it("should resolve explicit resolution over viewport preset", () => {
    const result = getScreenResolution("mobile", { width: 1920, height: 1080 })
    expect(result).toEqual({ width: 1920, height: 1080 })
  })

  it("should resolve viewport preset when no explicit resolution", () => {
    expect(getScreenResolution("desktop")).toEqual({ width: 1440, height: 900 })
    expect(getScreenResolution("tablet")).toEqual({ width: 768, height: 1024 })
    expect(getScreenResolution("mobile")).toEqual({ width: 390, height: 844 })
  })

  it("should return default desktop resolution when neither viewport nor resolution given", () => {
    expect(getScreenResolution()).toEqual({ width: 1440, height: 900 })
  })

  it("should accept valid DesignFlowTheme", () => {
    expectTypeOf<DesignFlowTheme>().toHaveProperty("colors")
    expectTypeOf<DesignFlowTheme>().toHaveProperty("radius")
    expectTypeOf<DesignFlowTheme>().toHaveProperty("spacing")
    expectTypeOf<DesignFlowTheme>().toHaveProperty("typography")
    expectTypeOf<DesignFlowTheme>().toHaveProperty("shadows")
  })
})
