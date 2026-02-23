import { toPng } from "html-to-image"
import { getNodesBounds, getViewportForBounds } from "@xyflow/react"
import type { Node } from "@xyflow/react"

const CANVAS_WIDTH = 2048
const CANVAS_HEIGHT = 1536

export interface ExportCanvasOptions {
  backgroundColor?: string
}

function downloadDataUrl(dataUrl: string, filename: string) {
  const a = document.createElement("a")
  a.href = dataUrl
  a.download = filename
  a.click()
}

export async function exportCanvasPng(
  getNodes: () => Node[],
  options?: ExportCanvasOptions,
) {
  const viewportEl = document.querySelector<HTMLElement>(".react-flow__viewport")
  if (!viewportEl) return

  const nodes = getNodes()
  const bounds = getNodesBounds(nodes)
  const viewport = getViewportForBounds(
    bounds,
    CANVAS_WIDTH,
    CANVAS_HEIGHT,
    0.5,
    2,
    0.1,
  )

  const dataUrl = await toPng(viewportEl, {
    backgroundColor: options?.backgroundColor ?? "#ffffff",
    width: CANVAS_WIDTH,
    height: CANVAS_HEIGHT,
    style: {
      width: `${CANVAS_WIDTH}px`,
      height: `${CANVAS_HEIGHT}px`,
      transform: `translate(${viewport.x}px, ${viewport.y}px) scale(${viewport.zoom})`,
    },
  })

  downloadDataUrl(dataUrl, "designflow-canvas.png")
}

export async function exportScreenPng(screenId: string) {
  const wrapper = document.querySelector<HTMLElement>(
    `[data-df-screen-id="${screenId}"]`,
  )
  if (!wrapper) return

  const thumbnail = wrapper.querySelector<HTMLElement>(
    '[data-testid="screen-thumbnail"]',
  )
  if (!thumbnail) return

  const dataUrl = await toPng(thumbnail, {
    backgroundColor: "transparent",
  })

  downloadDataUrl(dataUrl, `designflow-${screenId}.png`)
}
