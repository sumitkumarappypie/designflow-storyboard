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
  info: "bg-info",
  success: "bg-success",
  warning: "bg-warning",
  error: "bg-error",
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
    <div className="p-lg bg-background min-h-screen font-sans">
      {/* Header */}
      <div className="flex items-center gap-sm mb-lg">
        <button
          data-df-navigate="dashboard"
          className="bg-surface border border-border rounded-md py-xs px-md cursor-pointer text-text text-sm"
        >
          Back
        </button>
        <h1 className="text-text text-xl font-semibold m-0 flex-1">
          Notifications
        </h1>
        {unreadCount > 0 && (
          <span className="py-[2px] px-sm rounded-full bg-primary text-white text-xs font-semibold">
            {unreadCount}
          </span>
        )}
      </div>

      {/* Filter + actions */}
      <div className="flex justify-between items-center mb-md">
        <div className="flex gap-xs">
          {(["all", "unread"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`py-xs px-md rounded-full cursor-pointer text-xs font-medium capitalize ${
                filter === f
                  ? "border-none bg-primary text-white"
                  : "border border-border bg-surface text-text"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        {unreadCount > 0 && (
          <button
            onClick={markAllRead}
            className="bg-transparent border-none text-primary cursor-pointer text-sm"
          >
            Mark all read
          </button>
        )}
      </div>

      {/* Notification list */}
      <div className="flex flex-col gap-sm">
        {displayed.length === 0 && (
          <div className="py-xxl px-lg text-center bg-surface rounded-lg border border-border">
            <p className="text-text-muted text-base m-0">
              {filter === "unread" ? "No unread notifications" : "No notifications"}
            </p>
          </div>
        )}
        {displayed.map((notif) => (
          <div
            key={notif.id}
            onClick={() => markRead(notif.id)}
            className={`flex gap-sm p-md rounded-lg border border-border cursor-pointer ${
              notif.read
                ? "bg-surface shadow-none"
                : "bg-background shadow-sm"
            }`}
          >
            {/* Type indicator dot */}
            <div className={`size-[10px] rounded-full mt-[5px] shrink-0 ${typeColors[notif.type]}`} />

            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start gap-sm">
                <p className={`text-text text-sm m-0 ${notif.read ? "font-normal" : "font-semibold"}`}>
                  {notif.title}
                </p>
                <span className="text-text-muted text-xs shrink-0">
                  {notif.time}
                </span>
              </div>
              <p className="text-text-muted text-sm m-0 mt-xs">
                {notif.message}
              </p>
            </div>

            {/* Dismiss button */}
            <button
              onClick={(e) => { e.stopPropagation(); dismiss(notif.id) }}
              className="bg-transparent border-none text-text-muted cursor-pointer text-[16px] px-xs shrink-0 leading-none"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
