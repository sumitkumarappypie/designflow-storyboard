export default function Dashboard() {
  return (
    <div style={{ padding: "var(--df-spacing-lg)", background: "var(--df-background)", minHeight: "100vh" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--df-spacing-xl)" }}>
        <h1 style={{ color: "var(--df-text)", fontSize: "var(--df-heading-h1)", fontWeight: "var(--df-heading-weight)" }}>
          Dashboard
        </h1>
        <div style={{ display: "flex", gap: "var(--df-spacing-sm)" }}>
          <button
            data-df-navigate="settings"
            style={{
              background: "var(--df-surface)",
              border: "1px solid var(--df-border)",
              borderRadius: "var(--df-radius-md)",
              padding: "var(--df-spacing-xs) var(--df-spacing-md)",
              cursor: "pointer",
              color: "var(--df-text)",
            }}
          >
            Settings
          </button>
        </div>
      </header>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "var(--df-spacing-md)" }}>
        {[
          { title: "Total Users", value: "1,234", change: "+12%" },
          { title: "Revenue", value: "$45,678", change: "+8%" },
          { title: "Active Sessions", value: "567", change: "+23%" },
        ].map((stat) => (
          <div
            key={stat.title}
            style={{
              background: "var(--df-surface)",
              borderRadius: "var(--df-radius-lg)",
              padding: "var(--df-spacing-lg)",
              border: "1px solid var(--df-border)",
              boxShadow: "var(--df-shadow-sm)",
            }}
          >
            <p style={{ color: "var(--df-text-muted)", fontSize: "var(--df-body-sm)", marginBottom: "var(--df-spacing-xs)" }}>
              {stat.title}
            </p>
            <p style={{ color: "var(--df-text)", fontSize: "var(--df-heading-h2)", fontWeight: "var(--df-heading-weight)" }}>
              {stat.value}
            </p>
            <p style={{ color: "var(--df-success)", fontSize: "var(--df-body-sm)" }}>
              {stat.change}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
