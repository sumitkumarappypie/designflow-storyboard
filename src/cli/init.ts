import fs from "fs/promises"
import path from "path"
import { fileURLToPath } from "url"

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
    { src: "screens/Settings.tsx", dest: "screens/Settings.tsx" },
    { src: "flows.ts", dest: "flows.ts" },
    { src: "designflow.theme.ts", dest: "designflow.theme.ts" },
    { src: "CLAUDE.md", dest: "CLAUDE.md" },
  ]

  for (const file of filesToCopy) {
    const srcPath = path.join(templatesDir, file.src)
    const destPath = path.join(dir, file.dest)
    await fs.copyFile(srcPath, destPath)
  }

  // Generate tailwind.config.ts if requested
  if (tailwind) {
    const tailwindConfig = `import theme from "./designflow.theme"

export default {
  content: ["./screens/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: theme.colors.primary,
        secondary: theme.colors.secondary,
        accent: theme.colors.accent,
        surface: theme.colors.surface,
        "surface-alt": theme.colors.surfaceAlt,
        border: theme.colors.border,
        success: theme.colors.success,
        warning: theme.colors.warning,
        error: theme.colors.error,
        info: theme.colors.info,
      },
      borderRadius: theme.radius,
      spacing: theme.spacing,
      fontFamily: { sans: [theme.typography.fontFamily] },
      boxShadow: theme.shadows,
    },
  },
}
`
    await fs.writeFile(path.join(dir, "tailwind.config.ts"), tailwindConfig)
  }
}
