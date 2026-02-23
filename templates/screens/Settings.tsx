import { useState } from "react"

const tabs = ["general", "notifications", "security", "billing"] as const
type Tab = typeof tabs[number]

export default function Settings() {
  const [activeTab, setActiveTab] = useState<Tab>("general")
  const [emailNotifs, setEmailNotifs] = useState(true)
  const [pushNotifs, setPushNotifs] = useState(false)
  const [weeklyDigest, setWeeklyDigest] = useState(true)

  return (
    <div style={{ padding: "var(--df-spacing-lg)", background: "var(--df-background)", minHeight: "100vh", fontFamily: "var(--df-font-family)" }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: "var(--df-spacing-md)", marginBottom: "var(--df-spacing-xl)" }}>
        <button
          data-df-navigate="dashboard"
          style={{
            background: "var(--df-surface)", border: "1px solid var(--df-border)", borderRadius: "var(--df-radius-md)",
            padding: "var(--df-spacing-xs) var(--df-spacing-md)", cursor: "pointer", color: "var(--df-text)", fontSize: "var(--df-body-sm)",
          }}
        >
          Back
        </button>
        <h1 style={{ color: "var(--df-text)", fontSize: "var(--df-heading-h1)", fontWeight: "var(--df-heading-weight)", margin: 0 }}>
          Settings
        </h1>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", gap: "var(--df-spacing-xs)", marginBottom: "var(--df-spacing-lg)", borderBottom: "1px solid var(--df-border)", paddingBottom: "var(--df-spacing-xs)" }}>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: "var(--df-spacing-xs) var(--df-spacing-md)",
              borderRadius: "var(--df-radius-md) var(--df-radius-md) 0 0",
              border: "none",
              borderBottom: activeTab === tab ? "2px solid var(--df-primary)" : "2px solid transparent",
              background: "transparent",
              color: activeTab === tab ? "var(--df-primary)" : "var(--df-text-muted)",
              cursor: "pointer", fontSize: "var(--df-body-sm)", fontWeight: activeTab === tab ? 600 : 400,
              textTransform: "capitalize",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div style={{
        background: "var(--df-surface)", borderRadius: "var(--df-radius-lg)", padding: "var(--df-spacing-lg)",
        border: "1px solid var(--df-border)", boxShadow: "var(--df-shadow-sm)", maxWidth: 640,
      }}>
        {activeTab === "general" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--df-spacing-lg)" }}>
            <div>
              <label style={{ color: "var(--df-text)", fontSize: "var(--df-body-sm)", fontWeight: 500, display: "block", marginBottom: "var(--df-spacing-xs)" }}>
                Display Name
              </label>
              <input
                defaultValue="Jane Doe"
                style={{
                  padding: "var(--df-spacing-sm) var(--df-spacing-md)", borderRadius: "var(--df-radius-md)",
                  border: "1px solid var(--df-border)", width: "100%", boxSizing: "border-box",
                  fontSize: "var(--df-body-base)", background: "var(--df-background)", color: "var(--df-text)",
                }}
              />
            </div>
            <div>
              <label style={{ color: "var(--df-text)", fontSize: "var(--df-body-sm)", fontWeight: 500, display: "block", marginBottom: "var(--df-spacing-xs)" }}>
                Email
              </label>
              <input
                defaultValue="jane@example.com"
                style={{
                  padding: "var(--df-spacing-sm) var(--df-spacing-md)", borderRadius: "var(--df-radius-md)",
                  border: "1px solid var(--df-border)", width: "100%", boxSizing: "border-box",
                  fontSize: "var(--df-body-base)", background: "var(--df-background)", color: "var(--df-text)",
                }}
              />
            </div>
            <div>
              <label style={{ color: "var(--df-text)", fontSize: "var(--df-body-sm)", fontWeight: 500, display: "block", marginBottom: "var(--df-spacing-xs)" }}>
                Language
              </label>
              <select style={{
                padding: "var(--df-spacing-sm) var(--df-spacing-md)", borderRadius: "var(--df-radius-md)",
                border: "1px solid var(--df-border)", width: "100%", boxSizing: "border-box",
                fontSize: "var(--df-body-base)", background: "var(--df-background)", color: "var(--df-text)",
              }}>
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
            </div>
            <button style={{
              background: "var(--df-primary)", color: "#fff", border: "none", borderRadius: "var(--df-radius-md)",
              padding: "var(--df-spacing-sm) var(--df-spacing-md)", cursor: "pointer", fontSize: "var(--df-body-base)",
              fontWeight: 600, alignSelf: "flex-start",
            }}>
              Save Changes
            </button>
          </div>
        )}

        {activeTab === "notifications" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--df-spacing-md)" }}>
            <p style={{ color: "var(--df-text-muted)", fontSize: "var(--df-body-sm)", margin: 0 }}>
              Choose how you'd like to be notified.
            </p>
            {[
              { label: "Email notifications", desc: "Receive updates via email", checked: emailNotifs, toggle: () => setEmailNotifs(!emailNotifs) },
              { label: "Push notifications", desc: "Browser push notifications", checked: pushNotifs, toggle: () => setPushNotifs(!pushNotifs) },
              { label: "Weekly digest", desc: "Summary of activity every Monday", checked: weeklyDigest, toggle: () => setWeeklyDigest(!weeklyDigest) },
            ].map((item) => (
              <div key={item.label} style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "var(--df-spacing-md)", background: "var(--df-background)", borderRadius: "var(--df-radius-md)",
                border: "1px solid var(--df-border)",
              }}>
                <div>
                  <p style={{ color: "var(--df-text)", fontSize: "var(--df-body-base)", fontWeight: 500, margin: 0 }}>{item.label}</p>
                  <p style={{ color: "var(--df-text-muted)", fontSize: "var(--df-body-sm)", margin: 0 }}>{item.desc}</p>
                </div>
                <button
                  onClick={item.toggle}
                  style={{
                    width: 44, height: 24, borderRadius: "var(--df-radius-full)", border: "none", cursor: "pointer",
                    background: item.checked ? "var(--df-primary)" : "var(--df-surface-alt)",
                    position: "relative", flexShrink: 0,
                  }}
                >
                  <span style={{
                    position: "absolute", top: 2, left: item.checked ? 22 : 2,
                    width: 20, height: 20, borderRadius: "var(--df-radius-full)", background: "#fff",
                    transition: "left 0.15s",
                  }} />
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === "security" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--df-spacing-lg)" }}>
            <div>
              <h3 style={{ color: "var(--df-text)", fontSize: "var(--df-heading-h4)", fontWeight: "var(--df-heading-weight)", margin: 0, marginBottom: "var(--df-spacing-sm)" }}>
                Change Password
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--df-spacing-md)" }}>
                <input
                  type="password"
                  placeholder="Current password"
                  style={{
                    padding: "var(--df-spacing-sm) var(--df-spacing-md)", borderRadius: "var(--df-radius-md)",
                    border: "1px solid var(--df-border)", fontSize: "var(--df-body-base)", width: "100%", boxSizing: "border-box",
                    background: "var(--df-background)", color: "var(--df-text)",
                  }}
                />
                <input
                  type="password"
                  placeholder="New password"
                  style={{
                    padding: "var(--df-spacing-sm) var(--df-spacing-md)", borderRadius: "var(--df-radius-md)",
                    border: "1px solid var(--df-border)", fontSize: "var(--df-body-base)", width: "100%", boxSizing: "border-box",
                    background: "var(--df-background)", color: "var(--df-text)",
                  }}
                />
                <button style={{
                  background: "var(--df-primary)", color: "#fff", border: "none", borderRadius: "var(--df-radius-md)",
                  padding: "var(--df-spacing-sm) var(--df-spacing-md)", cursor: "pointer", fontSize: "var(--df-body-sm)",
                  fontWeight: 600, alignSelf: "flex-start",
                }}>
                  Update Password
                </button>
              </div>
            </div>
            <div style={{ borderTop: "1px solid var(--df-border)", paddingTop: "var(--df-spacing-lg)" }}>
              <h3 style={{ color: "var(--df-text)", fontSize: "var(--df-heading-h4)", fontWeight: "var(--df-heading-weight)", margin: 0, marginBottom: "var(--df-spacing-sm)" }}>
                Two-Factor Authentication
              </h3>
              <div style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "var(--df-spacing-md)", background: "var(--df-background)", borderRadius: "var(--df-radius-md)",
                border: "1px solid var(--df-border)",
              }}>
                <div>
                  <p style={{ color: "var(--df-text)", fontSize: "var(--df-body-base)", fontWeight: 500, margin: 0 }}>Status</p>
                  <p style={{ color: "var(--df-warning)", fontSize: "var(--df-body-sm)", margin: 0 }}>Not enabled</p>
                </div>
                <button style={{
                  background: "var(--df-surface-alt)", color: "var(--df-text)", border: "1px solid var(--df-border)",
                  borderRadius: "var(--df-radius-md)", padding: "var(--df-spacing-xs) var(--df-spacing-md)",
                  cursor: "pointer", fontSize: "var(--df-body-sm)",
                }}>
                  Enable
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === "billing" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--df-spacing-lg)" }}>
            <div style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              padding: "var(--df-spacing-lg)", background: "var(--df-background)", borderRadius: "var(--df-radius-md)",
              border: "1px solid var(--df-border)",
            }}>
              <div>
                <p style={{ color: "var(--df-text-muted)", fontSize: "var(--df-body-xs)", margin: 0, textTransform: "uppercase", letterSpacing: "0.05em" }}>Current plan</p>
                <p style={{ color: "var(--df-text)", fontSize: "var(--df-heading-h3)", fontWeight: "var(--df-heading-weight)", margin: 0 }}>Pro</p>
                <p style={{ color: "var(--df-text-muted)", fontSize: "var(--df-body-sm)", margin: 0 }}>$29/month · Renews Dec 1</p>
              </div>
              <button style={{
                background: "var(--df-secondary)", color: "#fff", border: "none",
                borderRadius: "var(--df-radius-md)", padding: "var(--df-spacing-xs) var(--df-spacing-md)",
                cursor: "pointer", fontSize: "var(--df-body-sm)", fontWeight: 600,
              }}>
                Upgrade
              </button>
            </div>
            <div>
              <h3 style={{ color: "var(--df-text)", fontSize: "var(--df-heading-h4)", fontWeight: "var(--df-heading-weight)", margin: 0, marginBottom: "var(--df-spacing-md)" }}>
                Payment Method
              </h3>
              <div style={{
                display: "flex", alignItems: "center", gap: "var(--df-spacing-md)",
                padding: "var(--df-spacing-md)", background: "var(--df-background)", borderRadius: "var(--df-radius-md)",
                border: "1px solid var(--df-border)",
              }}>
                <div style={{
                  width: 40, height: 28, borderRadius: "var(--df-radius-sm)", background: "var(--df-surface-alt)",
                  display: "flex", alignItems: "center", justifyContent: "center", color: "var(--df-text-muted)", fontSize: 10, fontWeight: 700,
                }}>
                  VISA
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ color: "var(--df-text)", fontSize: "var(--df-body-sm)", margin: 0 }}>•••• •••• •••• 4242</p>
                  <p style={{ color: "var(--df-text-muted)", fontSize: "var(--df-body-xs)", margin: 0 }}>Expires 12/26</p>
                </div>
                <button style={{
                  background: "none", border: "1px solid var(--df-border)", borderRadius: "var(--df-radius-md)",
                  padding: "var(--df-spacing-xs) var(--df-spacing-sm)", cursor: "pointer", color: "var(--df-text-muted)", fontSize: "var(--df-body-xs)",
                }}>
                  Change
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
