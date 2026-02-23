import { describe, it, expect, vi } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import { Toolbar } from "../../src/app/Toolbar"

const mockZoomIn = vi.fn()
const mockZoomOut = vi.fn()
const mockFitView = vi.fn()

// Mock React Flow
vi.mock("@xyflow/react", () => ({
  useReactFlow: () => ({
    zoomIn: mockZoomIn,
    zoomOut: mockZoomOut,
    fitView: mockFitView,
  }),
}))

describe("Toolbar", () => {
  it("should render zoom in button", () => {
    render(<Toolbar />)
    expect(screen.getByRole("button", { name: /zoom in/i })).toBeInTheDocument()
  })

  it("should render zoom out button", () => {
    render(<Toolbar />)
    expect(screen.getByRole("button", { name: /zoom out/i })).toBeInTheDocument()
  })

  it("should render fit view button", () => {
    render(<Toolbar />)
    expect(screen.getByRole("button", { name: /fit view/i })).toBeInTheDocument()
  })

  it("should call zoomIn when zoom in button is clicked", () => {
    render(<Toolbar />)
    fireEvent.click(screen.getByRole("button", { name: /zoom in/i }))
    expect(mockZoomIn).toHaveBeenCalled()
  })

  it("should call zoomOut when zoom out button is clicked", () => {
    render(<Toolbar />)
    fireEvent.click(screen.getByRole("button", { name: /zoom out/i }))
    expect(mockZoomOut).toHaveBeenCalled()
  })

  it("should call fitView when fit view button is clicked", () => {
    render(<Toolbar />)
    fireEvent.click(screen.getByRole("button", { name: /fit view/i }))
    expect(mockFitView).toHaveBeenCalled()
  })

  it("should render viewport preset buttons", () => {
    render(<Toolbar />)
    expect(screen.getByRole("button", { name: /desktop/i })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /tablet/i })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /mobile/i })).toBeInTheDocument()
  })

  it("should highlight desktop as active preset by default", () => {
    render(<Toolbar />)
    const desktopBtn = screen.getByRole("button", { name: /desktop/i })
    expect(desktopBtn).toHaveAttribute("data-active", "true")
  })

  it("should change active preset when clicked", () => {
    render(<Toolbar />)
    const tabletBtn = screen.getByRole("button", { name: /tablet/i })
    fireEvent.click(tabletBtn)
    expect(tabletBtn).toHaveAttribute("data-active", "true")
    expect(screen.getByRole("button", { name: /desktop/i })).toHaveAttribute("data-active", "false")
  })

  it("should call onViewportChange when a viewport preset is clicked", () => {
    const onViewportChange = vi.fn()
    render(<Toolbar onViewportChange={onViewportChange} />)
    fireEvent.click(screen.getByRole("button", { name: /mobile/i }))
    expect(onViewportChange).toHaveBeenCalledWith("mobile")
  })

  it("should render with toolbar testid", () => {
    render(<Toolbar />)
    expect(screen.getByTestId("toolbar")).toBeInTheDocument()
  })
})
