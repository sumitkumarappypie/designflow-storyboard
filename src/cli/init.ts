import fs from "fs/promises"
import path from "path"
import { fileURLToPath } from "url"
import { generateTailwindCSS } from "../runtime/theme-loader"
import { DEFAULT_THEME } from "../runtime/default-theme"

export interface InitOptions {
  dir: string
  tailwind?: boolean
}

export async function runInit(options: InitOptions): Promise<void> {
  const { dir, tailwind = false } = options

  // Check if directory already exists
  try {
    await fs.access(dir)
    throw new Error(`Directory already exists: ${dir}`)
  } catch (err: any) {
    if (err.code !== "ENOENT") throw err
  }

  // Find templates directory (relative to this file in the package)
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)
  const templatesDir = path.resolve(__dirname, "../../templates")

  // Create directory structure
  await fs.mkdir(path.join(dir, "screens"), { recursive: true })

  // Copy template files
  const filesToCopy = [
    { src: "screens/Login.tsx", dest: "screens/Login.tsx" },
    { src: "screens/Dashboard.tsx", dest: "screens/Dashboard.tsx" },
    { src: "screens/Profile.tsx", dest: "screens/Profile.tsx" },
    { src: "screens/Settings.tsx", dest: "screens/Settings.tsx" },
    { src: "screens/Notifications.tsx", dest: "screens/Notifications.tsx" },
    { src: "flows.ts", dest: "flows.ts" },
    { src: "designflow.theme.ts", dest: "designflow.theme.ts" },
    { src: "CLAUDE.md", dest: "CLAUDE.md" },
  ]

  for (const file of filesToCopy) {
    const srcPath = path.join(templatesDir, file.src)
    const destPath = path.join(dir, file.dest)
    await fs.copyFile(srcPath, destPath)
  }

  // Generate styles.css with Tailwind v4 @theme block if requested
  if (tailwind) {
    await fs.writeFile(path.join(dir, "styles.css"), generateTailwindCSS(DEFAULT_THEME))
  }
}
