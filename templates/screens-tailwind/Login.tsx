import { useState } from "react"

export default function Login() {
  const [showForgot, setShowForgot] = useState(false)

  return (
    <div className="p-lg bg-background min-h-screen font-sans">
      <div className="max-w-[380px] mx-auto pt-xxl">
        {/* Logo / Brand */}
        <div className="text-center mb-xl">
          <div className="size-12 rounded-lg bg-primary inline-flex items-center justify-center text-white text-2xl font-bold">
            D
          </div>
          <h1 className="text-text text-xl font-semibold mt-md mb-xs">
            Welcome back
          </h1>
          <p className="text-text-muted text-sm m-0">
            Sign in to your account to continue
          </p>
        </div>

        {/* Form */}
        <div className="bg-surface border border-border rounded-lg p-lg shadow-md">
          <div className="flex flex-col gap-md">
            <div>
              <label className="text-text text-sm font-medium block mb-xs">
                Email
              </label>
              <input
                placeholder="you@example.com"
                className="py-sm px-md rounded-md border border-border text-base w-full box-border bg-background text-text"
              />
            </div>
            <div>
              <label className="text-text text-sm font-medium block mb-xs">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="py-sm px-md rounded-md border border-border text-base w-full box-border bg-background text-text"
              />
            </div>

            <button
              data-df-navigate="dashboard"
              className="bg-primary text-white py-sm px-md rounded-md border-none text-base font-semibold cursor-pointer w-full"
            >
              Sign In
            </button>
          </div>

          <div className="flex justify-between items-center mt-md">
            <button
              onClick={() => setShowForgot(true)}
              className="bg-transparent border-none text-primary cursor-pointer text-sm p-0"
            >
              Forgot password?
            </button>
            <span className="text-text-muted text-sm">
              No account? <span className="text-primary cursor-pointer">Sign up</span>
            </span>
          </div>
        </div>

        {/* Forgot password modal */}
        {showForgot && (
          <div className="mt-md p-lg bg-surface rounded-lg border border-border shadow-md">
            <h3 className="text-text text-lg font-semibold m-0 mb-sm">
              Reset password
            </h3>
            <p className="text-text-muted text-sm m-0 mb-md">
              Enter your email and we&apos;ll send you a reset link.
            </p>
            <input
              placeholder="you@example.com"
              className="py-sm px-md rounded-md border border-border text-base w-full box-border mb-md bg-background text-text"
            />
            <div className="flex gap-sm">
              <button className="bg-primary text-white border-none rounded-md py-xs px-md cursor-pointer text-sm font-medium">
                Send link
              </button>
              <button
                onClick={() => setShowForgot(false)}
                className="bg-surface-alt text-text border border-border rounded-md py-xs px-md cursor-pointer text-sm"
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
