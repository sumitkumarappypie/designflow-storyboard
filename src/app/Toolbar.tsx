import { useState } from "react"
import { useReactFlow } from "@xyflow/react"
import type { Viewport } from "../types"

interface ToolbarProps {
  onViewportChange?: (viewport: Viewport) => void
}

const viewportPresets: Viewport[] = ["desktop", "tablet", "mobile"]

export function Toolbar({ onViewportChange }: ToolbarProps) {
  const { zoomIn, zoomOut, fitView } = useReactFlow()
  const [activePreset, setActivePreset] = useState<Viewport>("desktop")

  const handlePresetClick = (preset: Viewport) => {
    setActivePreset(preset)
    onViewportChange?.(preset)
  }

  return (
    <div
      data-testid="toolbar"
      style={{
        position: "absolute",
        top: 12,
        right: 12,
        zIndex: 10,
        display: "flex",
        gap: 6,
        alignItems: "center",
        background: "#fff",
        border: "1px solid #e2e8f0",
        borderRadius: 8,
        padding: "4px 6px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
        fontSize: 13,
      }}
    >
      <button aria-label="Zoom in" onClick={() => zoomIn()} style={btnStyle}>
        +
      </button>
      <button aria-label="Zoom out" onClick={() => zoomOut()} style={btnStyle}>
        −
      </button>
      <button aria-label="Fit view" onClick={() => fitView()} style={btnStyle}>
        ⊞
      </button>

      <div style={{ width: 1, height: 20, background: "#e2e8f0", margin: "0 2px" }} />

      {viewportPresets.map((preset) => (
        <button
          key={preset}
          aria-label={preset}
          data-active={String(activePreset === preset)}
          onClick={() => handlePresetClick(preset)}
          style={{
            ...btnStyle,
            background: activePreset === preset ? "#f1f5f9" : "transparent",
            fontWeight: activePreset === preset ? 600 : 400,
          }}
        >
          {preset.charAt(0).toUpperCase() + preset.slice(1)}
        </button>
      ))}
    </div>
  )
}

const btnStyle: React.CSSProperties = {
  border: "none",
  background: "transparent",
  cursor: "pointer",
  padding: "4px 8px",
  borderRadius: 4,
  fontSize: 13,
  lineHeight: 1,
  color: "#334155",
}
