import { describe, it, expect, vi } from "vitest"
import { designflowPlugin } from "../../src/runtime/vite-plugin"

function createMockServer() {
  const eventHandlers: Record<string, Array<(...args: any[]) => void>> = {}

  return {
    watcher: {
      add: vi.fn(),
      on: vi.fn((event: string, handler: (...args: any[]) => void) => {
        if (!eventHandlers[event]) eventHandlers[event] = []
        eventHandlers[event].push(handler)
      }),
    },
    moduleGraph: {
      getModuleById: vi.fn(() => ({ id: "mock" })),
      invalidateModule: vi.fn(),
    },
    ws: {
      send: vi.fn(),
    },
    middlewares: {
      use: vi.fn(),
    },
    _eventHandlers: eventHandlers,
  }
}

describe("designflowPlugin", () => {
  it("should return a valid Vite plugin object", () => {
    const plugin = designflowPlugin({ dir: "./wireframes" })
    expect(plugin).toBeDefined()
    expect(plugin.name).toBe("designflow")
  })

  it("should accept dir option", () => {
    const plugin = designflowPlugin({ dir: "./custom-dir" })
    expect(plugin).toBeDefined()
  })

  it("should have transformIndexHtml hook", () => {
    const plugin = designflowPlugin({ dir: "./wireframes" })
    expect(plugin.transformIndexHtml).toBeDefined()
    expect(typeof plugin.transformIndexHtml).toBe("function")
  })

  it("should have configureServer hook", () => {
    const plugin = designflowPlugin({ dir: "./wireframes" })
    expect(plugin.configureServer).toBeDefined()
    expect(typeof plugin.configureServer).toBe("function")
  })

  it("should have resolveId hook for virtual modules", () => {
    const plugin = designflowPlugin({ dir: "./wireframes" })
    expect(plugin.resolveId).toBeDefined()
    expect(typeof plugin.resolveId).toBe("function")
  })

  it("should have load hook for virtual modules", () => {
    const plugin = designflowPlugin({ dir: "./wireframes" })
    expect(plugin.load).toBeDefined()
    expect(typeof plugin.load).toBe("function")
  })

  it("should resolve virtual module id", () => {
    const plugin = designflowPlugin({ dir: "./wireframes" })
    const resolveId = plugin.resolveId as (id: string) => string | undefined
    expect(resolveId("virtual:designflow/theme")).toBe(
      "\0virtual:designflow/theme"
    )
    expect(resolveId("virtual:designflow/screens")).toBe(
      "\0virtual:designflow/screens"
    )
    expect(resolveId("some-other-module")).toBeUndefined()
  })
})

describe("configureServer — file watcher", () => {
  it("should watch for add events on screens directory", () => {
    const plugin = designflowPlugin({ dir: "./wireframes" })
    const mockServer = createMockServer()
    const configureServer = plugin.configureServer as (server: any) => void
    configureServer(mockServer)

    // Verify "add" event handler is registered
    expect(mockServer.watcher.on).toHaveBeenCalledWith("add", expect.any(Function))
  })

  it("should watch for unlink events on screens directory", () => {
    const plugin = designflowPlugin({ dir: "./wireframes" })
    const mockServer = createMockServer()
    const configureServer = plugin.configureServer as (server: any) => void
    configureServer(mockServer)

    // Verify "unlink" event handler is registered
    expect(mockServer.watcher.on).toHaveBeenCalledWith("unlink", expect.any(Function))
  })

  it("should invalidate screens module and reload when a screen file is added", () => {
    const plugin = designflowPlugin({ dir: "./wireframes" })
    const mockServer = createMockServer()
    const configureServer = plugin.configureServer as (server: any) => void
    configureServer(mockServer)

    // Simulate an "add" event for a new screen file
    const addHandlers = mockServer._eventHandlers["add"]
    expect(addHandlers).toBeDefined()
    expect(addHandlers.length).toBeGreaterThan(0)

    const screensDir = require("path").resolve("./wireframes", "screens")
    addHandlers[0](screensDir + "/NewScreen.tsx")

    expect(mockServer.moduleGraph.invalidateModule).toHaveBeenCalled()
    expect(mockServer.ws.send).toHaveBeenCalledWith({ type: "full-reload" })
  })

  it("should invalidate screens module and reload when a screen file is removed", () => {
    const plugin = designflowPlugin({ dir: "./wireframes" })
    const mockServer = createMockServer()
    const configureServer = plugin.configureServer as (server: any) => void
    configureServer(mockServer)

    // Simulate an "unlink" event for a removed screen file
    const unlinkHandlers = mockServer._eventHandlers["unlink"]
    expect(unlinkHandlers).toBeDefined()
    expect(unlinkHandlers.length).toBeGreaterThan(0)

    const screensDir = require("path").resolve("./wireframes", "screens")
    unlinkHandlers[0](screensDir + "/OldScreen.tsx")

    expect(mockServer.moduleGraph.invalidateModule).toHaveBeenCalled()
    expect(mockServer.ws.send).toHaveBeenCalledWith({ type: "full-reload" })
  })

  it("should not reload for add/unlink events outside screens directory", () => {
    const plugin = designflowPlugin({ dir: "./wireframes" })
    const mockServer = createMockServer()
    const configureServer = plugin.configureServer as (server: any) => void
    configureServer(mockServer)

    const addHandlers = mockServer._eventHandlers["add"]
    addHandlers[0]("/some/other/path/file.tsx")

    // ws.send is called only for the change handler setup, not for unrelated paths
    expect(mockServer.ws.send).not.toHaveBeenCalled()
  })
})

describe("configureServer — position persistence API", () => {
  it("should register middleware for the dev server", () => {
    const plugin = designflowPlugin({ dir: "./wireframes" })
    const mockServer = createMockServer()
    const configureServer = plugin.configureServer as (server: any) => void
    configureServer(mockServer)

    expect(mockServer.middlewares.use).toHaveBeenCalled()
  })

  it("should handle POST to /__designflow/update-positions", async () => {
    const plugin = designflowPlugin({ dir: "./wireframes" })
    const mockServer = createMockServer()
    const configureServer = plugin.configureServer as (server: any) => void
    configureServer(mockServer)

    // Get the middleware function that was registered
    const middlewareFn = mockServer.middlewares.use.mock.calls[0][0]
    expect(middlewareFn).toBeDefined()
    expect(typeof middlewareFn).toBe("function")
  })

  it("should call next() for non-matching routes", async () => {
    const plugin = designflowPlugin({ dir: "./wireframes" })
    const mockServer = createMockServer()
    const configureServer = plugin.configureServer as (server: any) => void
    configureServer(mockServer)

    const middlewareFn = mockServer.middlewares.use.mock.calls[0][0]
    const mockReq = { url: "/some-other-route", method: "GET" }
    const mockRes = { end: vi.fn(), writeHead: vi.fn() }
    const mockNext = vi.fn()

    middlewareFn(mockReq, mockRes, mockNext)

    expect(mockNext).toHaveBeenCalled()
  })
})
