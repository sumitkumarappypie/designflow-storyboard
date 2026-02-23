import { describe, it, expectTypeOf } from "vitest"
import type {
  DesignFlowConfig,
  ScreenConfig,
  EdgeConfig,
  DesignFlowTheme,
  Viewport,
} from "../../src/types"

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

  it("should accept valid DesignFlowTheme", () => {
    expectTypeOf<DesignFlowTheme>().toHaveProperty("colors")
    expectTypeOf<DesignFlowTheme>().toHaveProperty("radius")
    expectTypeOf<DesignFlowTheme>().toHaveProperty("spacing")
    expectTypeOf<DesignFlowTheme>().toHaveProperty("typography")
    expectTypeOf<DesignFlowTheme>().toHaveProperty("shadows")
  })
})
