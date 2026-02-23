import { useState } from "react"

const stats = [
  { title: "Total Users", value: "12,847", change: "+12.5%", positive: true },
  { title: "Revenue", value: "$48,352", change: "+8.2%", positive: true },
  { title: "Active Now", value: "573", change: "-3.1%", positive: false },
  { title: "Conversion", value: "3.24%", change: "+0.8%", positive: true },
]

const recentActivity = [
  { user: "Sarah Chen", action: "upgraded to Pro plan", time: "2m ago", avatar: "SC" },
  { user: "Mike Rivera", action: "submitted a support ticket", time: "15m ago", avatar: "MR" },
  { user: "Alex Kim", action: "completed onboarding", time: "1h ago", avatar: "AK" },
  { user: "Jordan Lee", action: "invited 3 team members", time: "2h ago", avatar: "JL" },
  { user: "Pat Taylor", action: "exported monthly report", time: "4h ago", avatar: "PT" },
]

export default function Dashboard() {
  const [activeRange, setActiveRange] = useState<"7d" | "30d" | "90d">("30d")

  return (
    <div style={{ padding: "var(--df-spacing-lg)", background: "var(--df-background)", minHeight: "100vh", fontFamily: "var(--df-font-family)" }}>
      {/* Header */}
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--df-spacing-xl)" }}>
        <div>
          <h1 style={{ color: "var(--df-text)", fontSize: "var(--df-heading-h1)", fontWeight: "var(--df-heading-weight)", margin: 0 }}>
            Dashboard
          </h1>
          <p style={{ color: "var(--df-text-muted)", fontSize: "var(--df-body-sm)", margin: 0, marginTop: "var(--df-spacing-xs)" }}>
            Welcome back, Jane. Here's what's happening.
          </p>
        </div>
        <div style={{ display: "flex", gap: "var(--df-spacing-sm)", alignItems: "center" }}>
          <button
            data-df-navigate="notifications"
            style={{
              background: "var(--df-surface)", border: "1px solid var(--df-border)", borderRadius: "var(--df-radius-md)",
              padding: "var(--df-spacing-xs) var(--df-spacing-md)", cursor: "pointer", color: "var(--df-text)",
              fontSize: "var(--df-body-sm)", position: "relative",
            }}
          >
            Notifications
            <span style={{
              position: "absolute", top: -4, right: -4, width: 18, height: 18, borderRadius: "var(--df-radius-full)",
              background: "var(--df-error)", color: "#fff", fontSize: 11, display: "flex", alignItems: "center", justifyContent: "center",
            }}>3</span>
          </button>
          <button
            data-df-navigate="profile"
            style={{
              width: 36, height: 36, borderRadius: "var(--df-radius-full)", background: "var(--df-secondary)",
              color: "#fff", border: "none", cursor: "pointer", fontSize: "var(--df-body-sm)", fontWeight: 600,
            }}
          >
            JD
          </button>
        </div>
      </header>

      {/* Date range pills */}
      <div style={{ display: "flex", gap: "var(--df-spacing-xs)", marginBottom: "var(--df-spacing-lg)" }}>
        {(["7d", "30d", "90d"] as const).map((range) => (
          <button
            key={range}
            onClick={() => setActiveRange(range)}
            style={{
              padding: "var(--df-spacing-xs) var(--df-spacing-md)", borderRadius: "var(--df-radius-full)",
              border: activeRange === range ? "none" : "1px solid var(--df-border)",
              background: activeRange === range ? "var(--df-primary)" : "var(--df-surface)",
              color: activeRange === range ? "#fff" : "var(--df-text)",
              cursor: "pointer", fontSize: "var(--df-body-xs)", fontWeight: 500,
            }}
          >
            {range === "7d" ? "7 days" : range === "30d" ? "30 days" : "90 days"}
          </button>
        ))}
      </div>

      {/* Stats grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "var(--df-spacing-md)", marginBottom: "var(--df-spacing-xl)" }}>
        {stats.map((stat) => (
          <div
            key={stat.title}
            style={{
              background: "var(--df-surface)", borderRadius: "var(--df-radius-lg)", padding: "var(--df-spacing-lg)",
              border: "1px solid var(--df-border)", boxShadow: "var(--df-shadow-sm)",
            }}
          >
            <p style={{ color: "var(--df-text-muted)", fontSize: "var(--df-body-xs)", margin: 0, marginBottom: "var(--df-spacing-sm)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
              {stat.title}
            </p>
            <p style={{ color: "var(--df-text)", fontSize: "var(--df-heading-h2)", fontWeight: "var(--df-heading-weight)", margin: 0 }}>
              {stat.value}
            </p>
            <p style={{ color: stat.positive ? "var(--df-success)" : "var(--df-error)", fontSize: "var(--df-body-sm)", margin: 0, marginTop: "var(--df-spacing-xs)" }}>
              {stat.change}
            </p>
          </div>
        ))}
      </div>

      {/* Two-column layout */}
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "var(--df-spacing-lg)" }}>
        {/* Chart placeholder */}
        <div style={{
          background: "var(--df-surface)", borderRadius: "var(--df-radius-lg)", padding: "var(--df-spacing-lg)",
          border: "1px solid var(--df-border)", boxShadow: "var(--df-shadow-sm)",
        }}>
          <h3 style={{ color: "var(--df-text)", fontSize: "var(--df-heading-h3)", fontWeight: "var(--df-heading-weight)", margin: 0, marginBottom: "var(--df-spacing-lg)" }}>
            Revenue Overview
          </h3>
          {/* Simple bar chart mock */}
          <div style={{ display: "flex", alignItems: "flex-end", gap: "var(--df-spacing-sm)", height: 160 }}>
            {[40, 65, 50, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
              <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                <div style={{
                  width: "100%", height: `${h}%`, borderRadius: "var(--df-radius-sm) var(--df-radius-sm) 0 0",
                  background: i === 11 ? "var(--df-primary)" : "var(--df-surface-alt)",
                }} />
                <span style={{ color: "var(--df-text-muted)", fontSize: 10 }}>{["J","F","M","A","M","J","J","A","S","O","N","D"][i]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent activity */}
        <div style={{
          background: "var(--df-surface)", borderRadius: "var(--df-radius-lg)", padding: "var(--df-spacing-lg)",
          border: "1px solid var(--df-border)", boxShadow: "var(--df-shadow-sm)",
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--df-spacing-md)" }}>
            <h3 style={{ color: "var(--df-text)", fontSize: "var(--df-heading-h3)", fontWeight: "var(--df-heading-weight)", margin: 0 }}>
              Recent Activity
            </h3>
            <button
              data-df-navigate="notifications"
              style={{ background: "none", border: "none", color: "var(--df-primary)", cursor: "pointer", fontSize: "var(--df-body-sm)" }}
            >
              View all
            </button>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--df-spacing-md)" }}>
            {recentActivity.map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "var(--df-spacing-sm)" }}>
                <div style={{
                  width: 32, height: 32, borderRadius: "var(--df-radius-full)", background: "var(--df-surface-alt)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--df-text-muted)", fontSize: 11, fontWeight: 600, flexShrink: 0,
                }}>
                  {item.avatar}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ color: "var(--df-text)", fontSize: "var(--df-body-sm)", margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    <strong>{item.user}</strong> {item.action}
                  </p>
                  <p style={{ color: "var(--df-text-muted)", fontSize: "var(--df-body-xs)", margin: 0 }}>{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div style={{ display: "flex", gap: "var(--df-spacing-sm)", marginTop: "var(--df-spacing-xl)" }}>
        <button
          data-df-navigate="settings"
          style={{
            background: "var(--df-surface)", border: "1px solid var(--df-border)", borderRadius: "var(--df-radius-md)",
            padding: "var(--df-spacing-xs) var(--df-spacing-md)", cursor: "pointer", color: "var(--df-text-muted)", fontSize: "var(--df-body-sm)",
          }}
        >
          Settings
        </button>
      </div>
    </div>
  )
}
