import { useState } from "react"

type NotifType = "info" | "success" | "warning" | "error"

interface Notification {
  id: number
  title: string
  message: string
  time: string
  type: NotifType
  read: boolean
}

const initialNotifs: Notification[] = [
  { id: 1, title: "New team member", message: "Alex Kim accepted your invitation to join the workspace.", time: "2m ago", type: "info", read: false },
  { id: 2, title: "Payment received", message: "Invoice #1042 for $29.00 has been paid successfully.", time: "1h ago", type: "success", read: false },
  { id: 3, title: "Storage limit", message: "You've used 80% of your storage. Consider upgrading your plan.", time: "3h ago", type: "warning", read: false },
  { id: 4, title: "Build failed", message: "Deployment to production failed. Check logs for details.", time: "5h ago", type: "error", read: true },
  { id: 5, title: "Weekly report", message: "Your weekly analytics report is ready to view.", time: "1d ago", type: "info", read: true },
  { id: 6, title: "Feature shipped", message: "Dark mode has been deployed to all users.", time: "2d ago", type: "success", read: true },
]

const typeColors: Record<NotifType, string> = {
  info: "var(--df-info)",
  success: "var(--df-success)",
  warning: "var(--df-warning)",
  error: "var(--df-error)",
}

export default function Notifications() {
  const [notifs, setNotifs] = useState(initialNotifs)
  const [filter, setFilter] = useState<"all" | "unread">("all")

  const displayed = filter === "unread" ? notifs.filter((n) => !n.read) : notifs
  const unreadCount = notifs.filter((n) => !n.read).length

  const markRead = (id: number) => {
    setNotifs(notifs.map((n) => n.id === id ? { ...n, read: true } : n))
  }

  const dismiss = (id: number) => {
    setNotifs(notifs.filter((n) => n.id !== id))
  }

  const markAllRead = () => {
    setNotifs(notifs.map((n) => ({ ...n, read: true })))
  }

  return (
    <div style={{ padding: "var(--df-spacing-lg)", background: "var(--df-background)", minHeight: "100vh", fontFamily: "var(--df-font-family)" }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: "var(--df-spacing-sm)", marginBottom: "var(--df-spacing-lg)" }}>
        <button
          data-df-navigate="dashboard"
          style={{
            background: "var(--df-surface)", border: "1px solid var(--df-border)", borderRadius: "var(--df-radius-md)",
            padding: "var(--df-spacing-xs) var(--df-spacing-md)", cursor: "pointer", color: "var(--df-text)", fontSize: "var(--df-body-sm)",
          }}
        >
          Back
        </button>
        <h1 style={{ color: "var(--df-text)", fontSize: "var(--df-heading-h2)", fontWeight: "var(--df-heading-weight)", margin: 0, flex: 1 }}>
          Notifications
        </h1>
        {unreadCount > 0 && (
          <span style={{
            padding: "2px var(--df-spacing-sm)", borderRadius: "var(--df-radius-full)",
            background: "var(--df-primary)", color: "#fff", fontSize: "var(--df-body-xs)", fontWeight: 600,
          }}>
            {unreadCount}
          </span>
        )}
      </div>

      {/* Filter + actions */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--df-spacing-md)" }}>
        <div style={{ display: "flex", gap: "var(--df-spacing-xs)" }}>
          {(["all", "unread"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                padding: "var(--df-spacing-xs) var(--df-spacing-md)", borderRadius: "var(--df-radius-full)",
                border: filter === f ? "none" : "1px solid var(--df-border)",
                background: filter === f ? "var(--df-primary)" : "var(--df-surface)",
                color: filter === f ? "#fff" : "var(--df-text)",
                cursor: "pointer", fontSize: "var(--df-body-xs)", fontWeight: 500, textTransform: "capitalize",
              }}
            >
              {f}
            </button>
          ))}
        </div>
        {unreadCount > 0 && (
          <button
            onClick={markAllRead}
            style={{ background: "none", border: "none", color: "var(--df-primary)", cursor: "pointer", fontSize: "var(--df-body-sm)" }}
          >
            Mark all read
          </button>
        )}
      </div>

      {/* Notification list */}
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--df-spacing-sm)" }}>
        {displayed.length === 0 && (
          <div style={{
            padding: "var(--df-spacing-xxl) var(--df-spacing-lg)", textAlign: "center",
            background: "var(--df-surface)", borderRadius: "var(--df-radius-lg)", border: "1px solid var(--df-border)",
          }}>
            <p style={{ color: "var(--df-text-muted)", fontSize: "var(--df-body-base)", margin: 0 }}>
              {filter === "unread" ? "No unread notifications" : "No notifications"}
            </p>
          </div>
        )}
        {displayed.map((notif) => (
          <div
            key={notif.id}
            onClick={() => markRead(notif.id)}
            style={{
              display: "flex", gap: "var(--df-spacing-sm)", padding: "var(--df-spacing-md)",
              background: notif.read ? "var(--df-surface)" : "var(--df-background)",
              borderRadius: "var(--df-radius-lg)", border: "1px solid var(--df-border)",
              boxShadow: notif.read ? "none" : "var(--df-shadow-sm)", cursor: "pointer",
            }}
          >
            {/* Type indicator dot */}
            <div style={{
              width: 10, height: 10, borderRadius: "var(--df-radius-full)", background: typeColors[notif.type],
              marginTop: 5, flexShrink: 0,
            }} />

            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "var(--df-spacing-sm)" }}>
                <p style={{
                  color: "var(--df-text)", fontSize: "var(--df-body-sm)", fontWeight: notif.read ? 400 : 600,
                  margin: 0,
                }}>
                  {notif.title}
                </p>
                <span style={{ color: "var(--df-text-muted)", fontSize: "var(--df-body-xs)", flexShrink: 0 }}>
                  {notif.time}
                </span>
              </div>
              <p style={{ color: "var(--df-text-muted)", fontSize: "var(--df-body-sm)", margin: 0, marginTop: "var(--df-spacing-xs)" }}>
                {notif.message}
              </p>
            </div>

            {/* Dismiss button */}
            <button
              onClick={(e) => { e.stopPropagation(); dismiss(notif.id) }}
              style={{
                background: "none", border: "none", color: "var(--df-text-muted)", cursor: "pointer",
                fontSize: 16, padding: "0 var(--df-spacing-xs)", flexShrink: 0, lineHeight: 1,
              }}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
