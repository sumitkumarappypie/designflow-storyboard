import { useState } from "react"

export default function Login() {
  const [showForgot, setShowForgot] = useState(false)

  return (
    <div style={{ padding: "var(--df-spacing-lg)", background: "var(--df-background)", minHeight: "100vh" }}>
      <div style={{ maxWidth: "400px", margin: "0 auto", paddingTop: "var(--df-spacing-xxl)" }}>
        <h1 style={{ color: "var(--df-text)", fontSize: "var(--df-heading-h1)", fontWeight: "var(--df-heading-weight)", marginBottom: "var(--df-spacing-lg)" }}>
          Sign In
        </h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--df-spacing-md)" }}>
          <input
            placeholder="Email"
            style={{
              padding: "var(--df-spacing-sm) var(--df-spacing-md)",
              borderRadius: "var(--df-radius-md)",
              border: "1px solid var(--df-border)",
              fontSize: "var(--df-body-base)",
            }}
          />
          <input
            type="password"
            placeholder="Password"
            style={{
              padding: "var(--df-spacing-sm) var(--df-spacing-md)",
              borderRadius: "var(--df-radius-md)",
              border: "1px solid var(--df-border)",
              fontSize: "var(--df-body-base)",
            }}
          />

          <button
            data-df-navigate="dashboard"
            style={{
              background: "var(--df-primary)",
              color: "var(--df-text-invert)",
              padding: "var(--df-spacing-sm) var(--df-spacing-md)",
              borderRadius: "var(--df-radius-md)",
              border: "none",
              fontSize: "var(--df-body-base)",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Sign In
          </button>

          <button
            onClick={() => setShowForgot(true)}
            style={{
              background: "none",
              border: "none",
              color: "var(--df-primary)",
              cursor: "pointer",
              fontSize: "var(--df-body-sm)",
            }}
          >
            Forgot password?
          </button>
        </div>

        {showForgot && (
          <div
            style={{
              marginTop: "var(--df-spacing-lg)",
              padding: "var(--df-spacing-md)",
              background: "var(--df-surface)",
              borderRadius: "var(--df-radius-md)",
              border: "1px solid var(--df-border)",
            }}
          >
            <p style={{ color: "var(--df-text)", marginBottom: "var(--df-spacing-sm)" }}>
              Enter your email to reset your password.
            </p>
            <input
              placeholder="Email"
              style={{
                padding: "var(--df-spacing-sm) var(--df-spacing-md)",
                borderRadius: "var(--df-radius-md)",
                border: "1px solid var(--df-border)",
                fontSize: "var(--df-body-base)",
                width: "100%",
                marginBottom: "var(--df-spacing-sm)",
              }}
            />
            <button
              onClick={() => setShowForgot(false)}
              style={{
                background: "var(--df-surface-alt)",
                border: "1px solid var(--df-border)",
                borderRadius: "var(--df-radius-md)",
                padding: "var(--df-spacing-xs) var(--df-spacing-md)",
                cursor: "pointer",
                color: "var(--df-text)",
              }}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
