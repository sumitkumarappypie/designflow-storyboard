import { useState } from "react"

export default function Settings() {
  const [activeTab, setActiveTab] = useState<"general" | "notifications" | "security">("general")

  return (
    <div style={{ padding: "var(--df-spacing-lg)", background: "var(--df-background)", minHeight: "100vh" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "var(--df-spacing-md)", marginBottom: "var(--df-spacing-xl)" }}>
        <button
          data-df-navigate="dashboard"
          style={{
            background: "var(--df-surface)",
            border: "1px solid var(--df-border)",
            borderRadius: "var(--df-radius-md)",
            padding: "var(--df-spacing-xs) var(--df-spacing-md)",
            cursor: "pointer",
            color: "var(--df-text)",
          }}
        >
          Back
        </button>
        <h1 style={{ color: "var(--df-text)", fontSize: "var(--df-heading-h1)", fontWeight: "var(--df-heading-weight)" }}>
          Settings
        </h1>
      </div>

      <div style={{ display: "flex", gap: "var(--df-spacing-xs)", marginBottom: "var(--df-spacing-lg)" }}>
        {(["general", "notifications", "security"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: "var(--df-spacing-xs) var(--df-spacing-md)",
              borderRadius: "var(--df-radius-md)",
              border: activeTab === tab ? "none" : "1px solid var(--df-border)",
              background: activeTab === tab ? "var(--df-primary)" : "var(--df-surface)",
              color: activeTab === tab ? "var(--df-text-invert)" : "var(--df-text)",
              cursor: "pointer",
              fontSize: "var(--df-body-sm)",
              textTransform: "capitalize",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      <div style={{ background: "var(--df-surface)", borderRadius: "var(--df-radius-lg)", padding: "var(--df-spacing-lg)", border: "1px solid var(--df-border)" }}>
        {activeTab === "general" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--df-spacing-md)" }}>
            <label style={{ color: "var(--df-text)", fontSize: "var(--df-body-sm)" }}>
              Display Name
              <input
                defaultValue="Jane Doe"
                style={{
                  display: "block",
                  marginTop: "var(--df-spacing-xs)",
                  padding: "var(--df-spacing-sm) var(--df-spacing-md)",
                  borderRadius: "var(--df-radius-md)",
                  border: "1px solid var(--df-border)",
                  width: "100%",
                }}
              />
            </label>
            <label style={{ color: "var(--df-text)", fontSize: "var(--df-body-sm)" }}>
              Email
              <input
                defaultValue="jane@example.com"
                style={{
                  display: "block",
                  marginTop: "var(--df-spacing-xs)",
                  padding: "var(--df-spacing-sm) var(--df-spacing-md)",
                  borderRadius: "var(--df-radius-md)",
                  border: "1px solid var(--df-border)",
                  width: "100%",
                }}
              />
            </label>
          </div>
        )}
        {activeTab === "notifications" && (
          <p style={{ color: "var(--df-text-muted)" }}>Notification preferences will appear here.</p>
        )}
        {activeTab === "security" && (
          <p style={{ color: "var(--df-text-muted)" }}>Security settings will appear here.</p>
        )}
      </div>
    </div>
  )
}
