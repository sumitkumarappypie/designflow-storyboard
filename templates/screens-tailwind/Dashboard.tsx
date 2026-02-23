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
    <div className="p-lg bg-background min-h-screen font-sans">
      {/* Header */}
      <header className="flex justify-between items-center mb-xl">
        <div>
          <h1 className="text-text text-2xl font-semibold m-0">
            Dashboard
          </h1>
          <p className="text-text-muted text-sm m-0 mt-xs">
            Welcome back, Jane. Here&apos;s what&apos;s happening.
          </p>
        </div>
        <div className="flex gap-sm items-center">
          <button
            data-df-navigate="notifications"
            className="bg-surface border border-border rounded-md py-xs px-md cursor-pointer text-text text-sm relative"
          >
            Notifications
            <span className="absolute -top-1 -right-1 size-[18px] rounded-full bg-error text-white text-[11px] flex items-center justify-center">3</span>
          </button>
          <button
            data-df-navigate="profile"
            className="size-9 rounded-full bg-secondary text-white border-none cursor-pointer text-sm font-semibold"
          >
            JD
          </button>
        </div>
      </header>

      {/* Date range pills */}
      <div className="flex gap-xs mb-lg">
        {(["7d", "30d", "90d"] as const).map((range) => (
          <button
            key={range}
            onClick={() => setActiveRange(range)}
            className={`py-xs px-md rounded-full cursor-pointer text-xs font-medium ${
              activeRange === range
                ? "border-none bg-primary text-white"
                : "border border-border bg-surface text-text"
            }`}
          >
            {range === "7d" ? "7 days" : range === "30d" ? "30 days" : "90 days"}
          </button>
        ))}
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-4 gap-md mb-xl">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-surface rounded-lg p-lg border border-border shadow-sm"
          >
            <p className="text-text-muted text-xs m-0 mb-sm uppercase tracking-wide">
              {stat.title}
            </p>
            <p className="text-text text-xl font-semibold m-0">
              {stat.value}
            </p>
            <p className={`text-sm m-0 mt-xs ${stat.positive ? "text-success" : "text-error"}`}>
              {stat.change}
            </p>
          </div>
        ))}
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-[2fr_1fr] gap-lg">
        {/* Chart placeholder */}
        <div className="bg-surface rounded-lg p-lg border border-border shadow-sm">
          <h3 className="text-text text-lg font-semibold m-0 mb-lg">
            Revenue Overview
          </h3>
          {/* Simple bar chart mock */}
          <div className="flex items-end gap-sm h-40">
            {[40, 65, 50, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-[4px]">
                <div
                  className={`w-full rounded-t-sm ${i === 11 ? "bg-primary" : "bg-surface-alt"}`}
                  style={{ height: `${h}%` }}
                />
                <span className="text-text-muted text-[10px]">{["J","F","M","A","M","J","J","A","S","O","N","D"][i]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent activity */}
        <div className="bg-surface rounded-lg p-lg border border-border shadow-sm">
          <div className="flex justify-between items-center mb-md">
            <h3 className="text-text text-lg font-semibold m-0">
              Recent Activity
            </h3>
            <button
              data-df-navigate="notifications"
              className="bg-transparent border-none text-primary cursor-pointer text-sm"
            >
              View all
            </button>
          </div>
          <div className="flex flex-col gap-md">
            {recentActivity.map((item, i) => (
              <div key={i} className="flex items-center gap-sm">
                <div className="size-8 rounded-full bg-surface-alt flex items-center justify-center text-text-muted text-[11px] font-semibold shrink-0">
                  {item.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-text text-sm m-0 whitespace-nowrap overflow-hidden text-ellipsis">
                    <strong>{item.user}</strong> {item.action}
                  </p>
                  <p className="text-text-muted text-xs m-0">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="flex gap-sm mt-xl">
        <button
          data-df-navigate="settings"
          className="bg-surface border border-border rounded-md py-xs px-md cursor-pointer text-text-muted text-sm"
        >
          Settings
        </button>
      </div>
    </div>
  )
}
