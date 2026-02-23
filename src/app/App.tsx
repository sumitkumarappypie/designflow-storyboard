import { useState } from "react"
import { ReactFlowProvider } from "@xyflow/react"
import { Canvas } from "./Canvas"
import { Viewer } from "./Viewer"
import type { DesignFlowConfig, EdgeConfig } from "../types"
import "@xyflow/react/dist/style.css"

interface AppProps {
  config: DesignFlowConfig
  screens: Record<string, React.ComponentType>
  inferredEdges?: EdgeConfig[]
}

export function App({ config, screens, inferredEdges }: AppProps) {
  const [viewingScreen, setViewingScreen] = useState<string | null>(null)
  const [focusNodeId, setFocusNodeId] = useState<string | null>(null)

  const viewingConfig = viewingScreen ? config.screens[viewingScreen] : null

  const handleCloseViewer = () => {
    setFocusNodeId(viewingScreen)
    setViewingScreen(null)
  }

  return (
    <ReactFlowProvider>
      <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
        <Canvas
          config={config}
          screens={screens}
          onScreenSelect={setViewingScreen}
          focusNodeId={focusNodeId}
          inferredEdges={inferredEdges}
        />
        {viewingScreen && viewingConfig && screens[viewingScreen] && (
          <Viewer
            screenId={viewingScreen}
            screenTitle={viewingConfig.title}
            component={screens[viewingScreen]}
            onClose={handleCloseViewer}
            onNavigate={setViewingScreen}
            config={config}
          />
        )}
      </div>
    </ReactFlowProvider>
  )
}
