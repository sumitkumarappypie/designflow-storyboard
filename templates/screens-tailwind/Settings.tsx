import { useState } from "react"

const tabs = ["general", "notifications", "security", "billing"] as const
type Tab = typeof tabs[number]

export default function Settings() {
  const [activeTab, setActiveTab] = useState<Tab>("general")
  const [emailNotifs, setEmailNotifs] = useState(true)
  const [pushNotifs, setPushNotifs] = useState(false)
  const [weeklyDigest, setWeeklyDigest] = useState(true)

  return (
    <div className="p-lg bg-background min-h-screen font-sans">
      {/* Header */}
      <div className="flex items-center gap-md mb-xl">
        <button
          data-df-navigate="dashboard"
          className="bg-surface border border-border rounded-md py-xs px-md cursor-pointer text-text text-sm"
        >
          Back
        </button>
        <h1 className="text-text text-2xl font-semibold m-0">
          Settings
        </h1>
      </div>

      {/* Tabs */}
      <div className="flex gap-xs mb-lg border-b border-border pb-xs">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-xs px-md rounded-t-md border-none cursor-pointer text-sm capitalize bg-transparent ${
              activeTab === tab
                ? "border-b-2 border-b-primary text-primary font-semibold"
                : "border-b-2 border-b-transparent text-text-muted font-normal"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="bg-surface rounded-lg p-lg border border-border shadow-sm max-w-[640px]">
        {activeTab === "general" && (
          <div className="flex flex-col gap-lg">
            <div>
              <label className="text-text text-sm font-medium block mb-xs">
                Display Name
              </label>
              <input
                defaultValue="Jane Doe"
                className="py-sm px-md rounded-md border border-border w-full box-border text-base bg-background text-text"
              />
            </div>
            <div>
              <label className="text-text text-sm font-medium block mb-xs">
                Email
              </label>
              <input
                defaultValue="jane@example.com"
                className="py-sm px-md rounded-md border border-border w-full box-border text-base bg-background text-text"
              />
            </div>
            <div>
              <label className="text-text text-sm font-medium block mb-xs">
                Language
              </label>
              <select className="py-sm px-md rounded-md border border-border w-full box-border text-base bg-background text-text">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
            </div>
            <button className="bg-primary text-white border-none rounded-md py-sm px-md cursor-pointer text-base font-semibold self-start">
              Save Changes
            </button>
          </div>
        )}

        {activeTab === "notifications" && (
          <div className="flex flex-col gap-md">
            <p className="text-text-muted text-sm m-0">
              Choose how you&apos;d like to be notified.
            </p>
            {[
              { label: "Email notifications", desc: "Receive updates via email", checked: emailNotifs, toggle: () => setEmailNotifs(!emailNotifs) },
              { label: "Push notifications", desc: "Browser push notifications", checked: pushNotifs, toggle: () => setPushNotifs(!pushNotifs) },
              { label: "Weekly digest", desc: "Summary of activity every Monday", checked: weeklyDigest, toggle: () => setWeeklyDigest(!weeklyDigest) },
            ].map((item) => (
              <div key={item.label} className="flex justify-between items-center p-md bg-background rounded-md border border-border">
                <div>
                  <p className="text-text text-base font-medium m-0">{item.label}</p>
                  <p className="text-text-muted text-sm m-0">{item.desc}</p>
                </div>
                <button
                  onClick={item.toggle}
                  className={`w-11 h-6 rounded-full border-none cursor-pointer relative shrink-0 ${
                    item.checked ? "bg-primary" : "bg-surface-alt"
                  }`}
                >
                  <span
                    className="absolute top-[2px] size-5 rounded-full bg-white transition-[left] duration-150"
                    style={{ left: item.checked ? 22 : 2 }}
                  />
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === "security" && (
          <div className="flex flex-col gap-lg">
            <div>
              <h3 className="text-text text-lg font-semibold m-0 mb-sm">
                Change Password
              </h3>
              <div className="flex flex-col gap-md">
                <input
                  type="password"
                  placeholder="Current password"
                  className="py-sm px-md rounded-md border border-border text-base w-full box-border bg-background text-text"
                />
                <input
                  type="password"
                  placeholder="New password"
                  className="py-sm px-md rounded-md border border-border text-base w-full box-border bg-background text-text"
                />
                <button className="bg-primary text-white border-none rounded-md py-sm px-md cursor-pointer text-sm font-semibold self-start">
                  Update Password
                </button>
              </div>
            </div>
            <div className="border-t border-border pt-lg">
              <h3 className="text-text text-lg font-semibold m-0 mb-sm">
                Two-Factor Authentication
              </h3>
              <div className="flex justify-between items-center p-md bg-background rounded-md border border-border">
                <div>
                  <p className="text-text text-base font-medium m-0">Status</p>
                  <p className="text-warning text-sm m-0">Not enabled</p>
                </div>
                <button className="bg-surface-alt text-text border border-border rounded-md py-xs px-md cursor-pointer text-sm">
                  Enable
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === "billing" && (
          <div className="flex flex-col gap-lg">
            <div className="flex justify-between items-center p-lg bg-background rounded-md border border-border">
              <div>
                <p className="text-text-muted text-xs m-0 uppercase tracking-wide">Current plan</p>
                <p className="text-text text-lg font-semibold m-0">Pro</p>
                <p className="text-text-muted text-sm m-0">$29/month · Renews Dec 1</p>
              </div>
              <button className="bg-secondary text-white border-none rounded-md py-xs px-md cursor-pointer text-sm font-semibold">
                Upgrade
              </button>
            </div>
            <div>
              <h3 className="text-text text-lg font-semibold m-0 mb-md">
                Payment Method
              </h3>
              <div className="flex items-center gap-md p-md bg-background rounded-md border border-border">
                <div className="w-10 h-7 rounded-sm bg-surface-alt flex items-center justify-center text-text-muted text-[10px] font-bold">
                  VISA
                </div>
                <div className="flex-1">
                  <p className="text-text text-sm m-0">•••• •••• •••• 4242</p>
                  <p className="text-text-muted text-xs m-0">Expires 12/26</p>
                </div>
                <button className="bg-transparent border border-border rounded-md py-xs px-sm cursor-pointer text-text-muted text-xs">
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
