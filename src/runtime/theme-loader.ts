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

  return `:root {\n${props.join("\n")}\n}`
}
