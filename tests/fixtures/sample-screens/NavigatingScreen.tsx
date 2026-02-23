export default function NavigatingScreen() {
  return (
    <div>
      <button data-df-navigate="dashboard">Go to Dashboard</button>
      <a data-df-navigate="settings">Settings</a>
      <span>No navigation here</span>
    </div>
  )
}
