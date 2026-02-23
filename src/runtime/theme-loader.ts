import type { DesignFlowTheme } from "../types"

function camelToKebab(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
}

export function generateThemeCSS(theme: Partial<DesignFlowTheme>): string {
  const props: string[] = []

  if (theme.colors) {
    for (const [key, value] of Object.entries(theme.colors)) {
      props.push(`  --df-${camelToKebab(key)}: ${value};`)
    }
  }

  if (theme.radius) {
    for (const [key, value] of Object.entries(theme.radius)) {
      props.push(`  --df-radius-${camelToKebab(key)}: ${value};`)
    }
  }

  if (theme.spacing) {
    for (const [key, value] of Object.entries(theme.spacing)) {
      props.push(`  --df-spacing-${camelToKebab(key)}: ${value};`)
    }
  }

  if (theme.typography) {
    const { fontFamily, heading, body } = theme.typography
    if (fontFamily) {
      props.push(`  --df-font-family: ${fontFamily};`)
    }
    if (heading) {
      props.push(`  --df-heading-weight: ${heading.weight};`)
      if (heading.sizes) {
        for (const [key, value] of Object.entries(heading.sizes)) {
          props.push(`  --df-heading-${camelToKebab(key)}: ${value};`)
        }
      }
    }
    if (body) {
      props.push(`  --df-body-weight: ${body.weight};`)
      if (body.sizes) {
        for (const [key, value] of Object.entries(body.sizes)) {
          props.push(`  --df-body-${camelToKebab(key)}: ${value};`)
        }
      }
    }
  }

  if (theme.shadows) {
    for (const [key, value] of Object.entries(theme.shadows)) {
      props.push(`  --df-shadow-${camelToKebab(key)}: ${value};`)
    }
  }

  let css = `:root {\n${props.join("\n")}\n}`

  if (theme.darkColors) {
    const darkProps: string[] = []
    for (const [key, value] of Object.entries(theme.darkColors)) {
      if (value != null) {
        darkProps.push(`  --df-${camelToKebab(key)}: ${value};`)
      }
    }
    if (darkProps.length > 0) {
      css += `\n\n[data-df-color-scheme="dark"] {\n${darkProps.join("\n")}\n}`
    }
  }

  return css
}

export function generateThemeFile(theme: DesignFlowTheme): string {
  return `import type { DesignFlowTheme } from "designflow"

const theme: DesignFlowTheme = ${JSON.stringify(theme, null, 2)}

export default theme
`
}

export function generateTailwindCSS(theme: DesignFlowTheme): string {
  const lines: string[] = []

  // Colors → --color-<kebab>: var(--df-<kebab>)
  for (const key of Object.keys(theme.colors)) {
    const kebab = camelToKebab(key)
    lines.push(`  --color-${kebab}: var(--df-${kebab});`)
  }

  // Radius → --radius-<key>: var(--df-radius-<key>)
  for (const key of Object.keys(theme.radius)) {
    lines.push(`  --radius-${key}: var(--df-radius-${key});`)
  }

  // Spacing → --spacing-<key>: var(--df-spacing-<key>)
  for (const key of Object.keys(theme.spacing)) {
    lines.push(`  --spacing-${key}: var(--df-spacing-${key});`)
  }

  // Font → --font-sans: var(--df-font-family)
  lines.push(`  --font-sans: var(--df-font-family);`)

  // Shadows → --shadow-<key>: var(--df-shadow-<key>)
  for (const key of Object.keys(theme.shadows)) {
    lines.push(`  --shadow-${key}: var(--df-shadow-${key});`)
  }

  return `@import "tailwindcss";\n@source "./screens";\n\n@theme {\n${lines.join("\n")}\n}\n`
}
