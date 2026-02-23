import { useState } from "react"

export default function Login() {
  const [showForgot, setShowForgot] = useState(false)

  return (
    <div style={{ padding: "var(--df-spacing-lg)", background: "var(--df-background)", minHeight: "100vh", fontFamily: "var(--df-font-family)" }}>
      <div style={{ maxWidth: "380px", margin: "0 auto", paddingTop: "var(--df-spacing-xxl)" }}>
        {/* Logo / Brand */}
        <div style={{ textAlign: "center", marginBottom: "var(--df-spacing-xl)" }}>
          <div style={{
            width: 48, height: 48, borderRadius: "var(--df-radius-lg)", background: "var(--df-primary)",
            display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 24, fontWeight: 700,
          }}>
            D
          </div>
          <h1 style={{ color: "var(--df-text)", fontSize: "var(--df-heading-h2)", fontWeight: "var(--df-heading-weight)", marginTop: "var(--df-spacing-md)", marginBottom: "var(--df-spacing-xs)" }}>
            Welcome back
          </h1>
          <p style={{ color: "var(--df-text-muted)", fontSize: "var(--df-body-sm)", margin: 0 }}>
            Sign in to your account to continue
          </p>
        </div>

        {/* Form */}
        <div style={{
          background: "var(--df-surface)", border: "1px solid var(--df-border)", borderRadius: "var(--df-radius-lg)",
          padding: "var(--df-spacing-lg)", boxShadow: "var(--df-shadow-md)",
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--df-spacing-md)" }}>
            <div>
              <label style={{ color: "var(--df-text)", fontSize: "var(--df-body-sm)", fontWeight: 500, display: "block", marginBottom: "var(--df-spacing-xs)" }}>
                Email
              </label>
              <input
                placeholder="you@example.com"
                style={{
                  padding: "var(--df-spacing-sm) var(--df-spacing-md)", borderRadius: "var(--df-radius-md)",
                  border: "1px solid var(--df-border)", fontSize: "var(--df-body-base)", width: "100%", boxSizing: "border-box",
                  background: "var(--df-background)", color: "var(--df-text)",
                }}
              />
            </div>
            <div>
              <label style={{ color: "var(--df-text)", fontSize: "var(--df-body-sm)", fontWeight: 500, display: "block", marginBottom: "var(--df-spacing-xs)" }}>
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                style={{
                  padding: "var(--df-spacing-sm) var(--df-spacing-md)", borderRadius: "var(--df-radius-md)",
                  border: "1px solid var(--df-border)", fontSize: "var(--df-body-base)", width: "100%", boxSizing: "border-box",
                  background: "var(--df-background)", color: "var(--df-text)",
                }}
              />
            </div>

            <button
              data-df-navigate="dashboard"
              style={{
                background: "var(--df-primary)", color: "#fff",
                padding: "var(--df-spacing-sm) var(--df-spacing-md)", borderRadius: "var(--df-radius-md)",
                border: "none", fontSize: "var(--df-body-base)", fontWeight: 600, cursor: "pointer", width: "100%",
              }}
            >
              Sign In
            </button>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "var(--df-spacing-md)" }}>
            <button
              onClick={() => setShowForgot(true)}
              style={{ background: "none", border: "none", color: "var(--df-primary)", cursor: "pointer", fontSize: "var(--df-body-sm)", padding: 0 }}
            >
              Forgot password?
            </button>
            <span style={{ color: "var(--df-text-muted)", fontSize: "var(--df-body-sm)" }}>
              No account? <span style={{ color: "var(--df-primary)", cursor: "pointer" }}>Sign up</span>
            </span>
          </div>
        </div>

        {/* Forgot password modal */}
        {showForgot && (
          <div style={{
            marginTop: "var(--df-spacing-md)", padding: "var(--df-spacing-lg)", background: "var(--df-surface)",
            borderRadius: "var(--df-radius-lg)", border: "1px solid var(--df-border)", boxShadow: "var(--df-shadow-md)",
          }}>
            <h3 style={{ color: "var(--df-text)", fontSize: "var(--df-heading-h4)", fontWeight: "var(--df-heading-weight)", margin: 0, marginBottom: "var(--df-spacing-sm)" }}>
              Reset password
            </h3>
            <p style={{ color: "var(--df-text-muted)", fontSize: "var(--df-body-sm)", margin: 0, marginBottom: "var(--df-spacing-md)" }}>
              Enter your email and we'll send you a reset link.
            </p>
            <input
              placeholder="you@example.com"
              style={{
                padding: "var(--df-spacing-sm) var(--df-spacing-md)", borderRadius: "var(--df-radius-md)",
                border: "1px solid var(--df-border)", fontSize: "var(--df-body-base)", width: "100%", boxSizing: "border-box",
                marginBottom: "var(--df-spacing-md)", background: "var(--df-background)", color: "var(--df-text)",
              }}
            />
            <div style={{ display: "flex", gap: "var(--df-spacing-sm)" }}>
              <button style={{
                background: "var(--df-primary)", color: "#fff", border: "none", borderRadius: "var(--df-radius-md)",
                padding: "var(--df-spacing-xs) var(--df-spacing-md)", cursor: "pointer", fontSize: "var(--df-body-sm)", fontWeight: 500,
              }}>
                Send link
              </button>
              <button
                onClick={() => setShowForgot(false)}
                style={{
                  background: "var(--df-surface-alt)", color: "var(--df-text)", border: "1px solid var(--df-border)",
                  borderRadius: "var(--df-radius-md)", padding: "var(--df-spacing-xs) var(--df-spacing-md)",
                  cursor: "pointer", fontSize: "var(--df-body-sm)",
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
