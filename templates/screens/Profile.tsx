import { useState } from "react"

export default function Profile() {
  const [editing, setEditing] = useState(false)

  return (
    <div style={{ padding: "var(--df-spacing-lg)", background: "var(--df-background)", minHeight: "100vh", fontFamily: "var(--df-font-family)" }}>
      {/* Back nav */}
      <div style={{ display: "flex", alignItems: "center", gap: "var(--df-spacing-sm)", marginBottom: "var(--df-spacing-xl)" }}>
        <button
          data-df-navigate="dashboard"
          style={{
            background: "var(--df-surface)", border: "1px solid var(--df-border)", borderRadius: "var(--df-radius-md)",
            padding: "var(--df-spacing-xs) var(--df-spacing-md)", cursor: "pointer", color: "var(--df-text)", fontSize: "var(--df-body-sm)",
          }}
        >
          Back
        </button>
        <h1 style={{ color: "var(--df-text)", fontSize: "var(--df-heading-h2)", fontWeight: "var(--df-heading-weight)", margin: 0 }}>
          Profile
        </h1>
      </div>

      {/* Profile card */}
      <div style={{
        background: "var(--df-surface)", border: "1px solid var(--df-border)", borderRadius: "var(--df-radius-lg)",
        padding: "var(--df-spacing-xl)", boxShadow: "var(--df-shadow-md)", maxWidth: 600,
      }}>
        {/* Avatar + name header */}
        <div style={{ display: "flex", alignItems: "center", gap: "var(--df-spacing-lg)", marginBottom: "var(--df-spacing-xl)" }}>
          <div style={{
            width: 80, height: 80, borderRadius: "var(--df-radius-full)", background: "var(--df-secondary)",
            display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 28, fontWeight: 700,
          }}>
            JD
          </div>
          <div style={{ flex: 1 }}>
            <h2 style={{ color: "var(--df-text)", fontSize: "var(--df-heading-h2)", fontWeight: "var(--df-heading-weight)", margin: 0 }}>
              Jane Doe
            </h2>
            <p style={{ color: "var(--df-text-muted)", fontSize: "var(--df-body-sm)", margin: 0, marginTop: "var(--df-spacing-xs)" }}>
              Product Designer · San Francisco, CA
            </p>
            <div style={{ display: "flex", gap: "var(--df-spacing-sm)", marginTop: "var(--df-spacing-sm)" }}>
              <span style={{
                padding: "2px var(--df-spacing-sm)", borderRadius: "var(--df-radius-full)", background: "var(--df-surface-alt)",
                color: "var(--df-text-muted)", fontSize: "var(--df-body-xs)",
              }}>
                Pro Plan
              </span>
              <span style={{
                padding: "2px var(--df-spacing-sm)", borderRadius: "var(--df-radius-full)", background: "var(--df-surface-alt)",
                color: "var(--df-success)", fontSize: "var(--df-body-xs)",
              }}>
                Active
              </span>
            </div>
          </div>
          <button
            onClick={() => setEditing(!editing)}
            style={{
              background: editing ? "var(--df-primary)" : "var(--df-surface-alt)",
              color: editing ? "#fff" : "var(--df-text)",
              border: editing ? "none" : "1px solid var(--df-border)",
              borderRadius: "var(--df-radius-md)", padding: "var(--df-spacing-xs) var(--df-spacing-md)",
              cursor: "pointer", fontSize: "var(--df-body-sm)", fontWeight: 500,
            }}
          >
            {editing ? "Save" : "Edit"}
          </button>
        </div>

        {/* Info fields */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--df-spacing-lg)" }}>
          {[
            { label: "Full Name", value: "Jane Doe" },
            { label: "Email", value: "jane@example.com" },
            { label: "Phone", value: "+1 (555) 123-4567" },
            { label: "Bio", value: "Product designer with 8 years of experience building intuitive interfaces for SaaS products." },
          ].map((field) => (
            <div key={field.label}>
              <label style={{ color: "var(--df-text-muted)", fontSize: "var(--df-body-xs)", fontWeight: 500, display: "block", marginBottom: "var(--df-spacing-xs)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                {field.label}
              </label>
              {editing ? (
                field.label === "Bio" ? (
                  <textarea
                    defaultValue={field.value}
                    rows={3}
                    style={{
                      padding: "var(--df-spacing-sm) var(--df-spacing-md)", borderRadius: "var(--df-radius-md)",
                      border: "1px solid var(--df-border)", fontSize: "var(--df-body-base)", width: "100%", boxSizing: "border-box",
                      background: "var(--df-background)", color: "var(--df-text)", resize: "vertical", fontFamily: "var(--df-font-family)",
                    }}
                  />
                ) : (
                  <input
                    defaultValue={field.value}
                    style={{
                      padding: "var(--df-spacing-sm) var(--df-spacing-md)", borderRadius: "var(--df-radius-md)",
                      border: "1px solid var(--df-border)", fontSize: "var(--df-body-base)", width: "100%", boxSizing: "border-box",
                      background: "var(--df-background)", color: "var(--df-text)",
                    }}
                  />
                )
              ) : (
                <p style={{ color: "var(--df-text)", fontSize: "var(--df-body-base)", margin: 0 }}>
                  {field.value}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Danger zone */}
        <div style={{
          marginTop: "var(--df-spacing-xl)", paddingTop: "var(--df-spacing-lg)", borderTop: "1px solid var(--df-border)",
        }}>
          <p style={{ color: "var(--df-text-muted)", fontSize: "var(--df-body-sm)", margin: 0, marginBottom: "var(--df-spacing-sm)" }}>
            Danger zone
          </p>
          <button style={{
            background: "none", border: "1px solid var(--df-error)", borderRadius: "var(--df-radius-md)",
            padding: "var(--df-spacing-xs) var(--df-spacing-md)", cursor: "pointer", color: "var(--df-error)", fontSize: "var(--df-body-sm)",
          }}>
            Delete account
          </button>
        </div>
      </div>
    </div>
  )
}
