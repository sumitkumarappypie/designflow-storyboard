// src/app/DivKitScreen.tsx
import { useRef, useEffect, useId } from "react"

interface DivKitScreenProps {
  json: Record<string, unknown>
}

function DivKitScreen({ json }: DivKitScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const instanceId = useId()

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    let cleanup: (() => void) | undefined

    async function mount() {
      try {
        const { render } = await import("@divkitframework/divkit/client")
        if (!el) return
        el.textContent = ""
        const instance = render({
          id: `divkit-${instanceId}`,
          target: el,
          json: json as any,
          platform: "touch",
          onError(details: { error: { message: string } }) {
            console.warn("DivKit render warning:", details.error.message)
          },
        })
        cleanup = () => {
          if (instance && typeof (instance as any).$destroy === "function") {
            (instance as any).$destroy()
          }
        }
      } catch (err) {
        console.error("DivKit render error:", err)
        if (!el) return
        const errEl = document.createElement("div")
        errEl.style.cssText = "padding:20px;color:#ef4444;font-size:14px;"
        errEl.textContent = `DivKit render error: ${err instanceof Error ? err.message : String(err)}`
        el.textContent = ""
        el.appendChild(errEl)
      }
    }

    mount()

    return () => {
      cleanup?.()
    }
  }, [json, instanceId])

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", minHeight: "100%", background: "#fff" }}
    />
  )
}

export function createDivKitComponent(json: Record<string, unknown>) {
  return function DivKitWrapper() {
    return <DivKitScreen json={json} />
  }
}
