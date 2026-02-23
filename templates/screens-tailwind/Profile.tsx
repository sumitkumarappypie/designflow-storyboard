import { useState } from "react"

export default function Profile() {
  const [editing, setEditing] = useState(false)

  return (
    <div className="p-lg bg-background min-h-screen font-sans">
      {/* Back nav */}
      <div className="flex items-center gap-sm mb-xl">
        <button
          data-df-navigate="dashboard"
          className="bg-surface border border-border rounded-md py-xs px-md cursor-pointer text-text text-sm"
        >
          Back
        </button>
        <h1 className="text-text text-xl font-semibold m-0">
          Profile
        </h1>
      </div>

      {/* Profile card */}
      <div className="bg-surface border border-border rounded-lg p-xl shadow-md max-w-[600px]">
        {/* Avatar + name header */}
        <div className="flex items-center gap-lg mb-xl">
          <div className="size-20 rounded-full bg-secondary flex items-center justify-center text-white text-[28px] font-bold">
            JD
          </div>
          <div className="flex-1">
            <h2 className="text-text text-xl font-semibold m-0">
              Jane Doe
            </h2>
            <p className="text-text-muted text-sm m-0 mt-xs">
              Product Designer · San Francisco, CA
            </p>
            <div className="flex gap-sm mt-sm">
              <span className="py-[2px] px-sm rounded-full bg-surface-alt text-text-muted text-xs">
                Pro Plan
              </span>
              <span className="py-[2px] px-sm rounded-full bg-surface-alt text-success text-xs">
                Active
              </span>
            </div>
          </div>
          <button
            onClick={() => setEditing(!editing)}
            className={`rounded-md py-xs px-md cursor-pointer text-sm font-medium ${
              editing
                ? "bg-primary text-white border-none"
                : "bg-surface-alt text-text border border-border"
            }`}
          >
            {editing ? "Save" : "Edit"}
          </button>
        </div>

        {/* Info fields */}
        <div className="flex flex-col gap-lg">
          {[
            { label: "Full Name", value: "Jane Doe" },
            { label: "Email", value: "jane@example.com" },
            { label: "Phone", value: "+1 (555) 123-4567" },
            { label: "Bio", value: "Product designer with 8 years of experience building intuitive interfaces for SaaS products." },
          ].map((field) => (
            <div key={field.label}>
              <label className="text-text-muted text-xs font-medium block mb-xs uppercase tracking-wide">
                {field.label}
              </label>
              {editing ? (
                field.label === "Bio" ? (
                  <textarea
                    defaultValue={field.value}
                    rows={3}
                    className="py-sm px-md rounded-md border border-border text-base w-full box-border bg-background text-text resize-y font-sans"
                  />
                ) : (
                  <input
                    defaultValue={field.value}
                    className="py-sm px-md rounded-md border border-border text-base w-full box-border bg-background text-text"
                  />
                )
              ) : (
                <p className="text-text text-base m-0">
                  {field.value}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Danger zone */}
        <div className="mt-xl pt-lg border-t border-border">
          <p className="text-text-muted text-sm m-0 mb-sm">
            Danger zone
          </p>
          <button className="bg-transparent border border-error rounded-md py-xs px-md cursor-pointer text-error text-sm">
            Delete account
          </button>
        </div>
      </div>
    </div>
  )
}
