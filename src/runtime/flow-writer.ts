import fs from "fs/promises"
import type { DesignFlowConfig } from "../types"

export function updateScreenPosition(
  config: DesignFlowConfig,
  screenId: string,
  position: { x: number; y: number },
): DesignFlowConfig {
  if (!config.screens[screenId]) return config

  return {
    ...config,
    screens: {
      ...config.screens,
      [screenId]: {
        ...config.screens[screenId],
        position,
      },
    },
  }
}

export function updateScreenColor(
  config: DesignFlowConfig,
  screenId: string,
  color: string,
): DesignFlowConfig {
  if (!config.screens[screenId]) return config

  return {
    ...config,
    screens: {
      ...config.screens,
      [screenId]: {
        ...config.screens[screenId],
        color,
      },
    },
  }
}

export function updateScreenViewport(
  config: DesignFlowConfig,
  screenId: string,
  viewport: string,
): DesignFlowConfig {
  if (!config.screens[screenId]) return config

  return {
    ...config,
    screens: {
      ...config.screens,
      [screenId]: {
        ...config.screens[screenId],
        viewport: viewport as any,
      },
    },
  }
}

export function updateDivKitScreenPosition(
  config: DesignFlowConfig,
  screenId: string,
  position: { x: number; y: number },
): DesignFlowConfig {
  return {
    ...config,
    divkitScreens: {
      ...config.divkitScreens,
      [screenId]: {
        ...config.divkitScreens?.[screenId],
        position,
      },
    },
  }
}

export function updateDivKitScreenViewport(
  config: DesignFlowConfig,
  screenId: string,
  viewport: string,
): DesignFlowConfig {
  return {
    ...config,
    divkitScreens: {
      ...config.divkitScreens,
      [screenId]: {
        ...config.divkitScreens?.[screenId],
        position: config.divkitScreens?.[screenId]?.position ?? { x: 0, y: 0 },
        viewport: viewport as any,
      },
    },
  }
}

export function updateDivKitScreenColor(
  config: DesignFlowConfig,
  screenId: string,
  color: string,
): DesignFlowConfig {
  return {
    ...config,
    divkitScreens: {
      ...config.divkitScreens,
      [screenId]: {
        ...config.divkitScreens?.[screenId],
        position: config.divkitScreens?.[screenId]?.position ?? { x: 0, y: 0 },
        color,
      },
    },
  }
}

export function serializeFlowConfig(config: DesignFlowConfig): string {
  const screenEntries = Object.entries(config.screens)
    .map(([id, screen]) => {
      const fields = [
        `      title: "${screen.title}"`,
        `      file: "${screen.file}"`,
        `      position: { x: ${screen.position.x}, y: ${screen.position.y} }`,
      ]
      if (screen.viewport) {
        fields.push(`      viewport: "${screen.viewport}"`)
      }
      if (screen.color) {
        fields.push(`      color: "${screen.color}"`)
      }
      return `    ${id}: {\n${fields.join(",\n")},\n    }`
    })
    .join(",\n")

  const edgeEntries = (config.edges || [])
    .map((edge) => {
      const fields = [`from: "${edge.from}"`, `to: "${edge.to}"`]
      if (edge.label) fields.push(`label: "${edge.label}"`)
      return `    { ${fields.join(", ")} }`
    })
    .join(",\n")

  const nameField = config.name ? `  name: "${config.name}",\n` : ""
  const divkitDirField = config.divkitDir ? `  divkitDir: "${config.divkitDir}",\n` : ""
  const divkitClientPathField = config.divkitClientPath ? `  divkitClientPath: "${config.divkitClientPath}",\n` : ""

  let divkitScreensBlock = ""
  if (config.divkitScreens && Object.keys(config.divkitScreens).length > 0) {
    const dkEntries = Object.entries(config.divkitScreens)
      .map(([id, meta]) => {
        const fields = [
          `      position: { x: ${Math.round(meta.position.x)}, y: ${Math.round(meta.position.y)} }`,
        ]
        if (meta.viewport) fields.push(`      viewport: "${meta.viewport}"`)
        if (meta.color) fields.push(`      color: "${meta.color}"`)
        return `    "${id}": {\n${fields.join(",\n")},\n    }`
      })
      .join(",\n")
    divkitScreensBlock = `\n  divkitScreens: {\n${dkEntries},\n  },\n`
  }

  return `import type { DesignFlowConfig } from "designflow"

const config: DesignFlowConfig = {
${nameField}${divkitDirField}${divkitClientPathField}  screens: {
${screenEntries},
  },
${divkitScreensBlock}
  edges: [
${edgeEntries},
  ],
}

export default config
`
}

export async function writeFlowConfig(filePath: string, config: DesignFlowConfig): Promise<void> {
  const source = serializeFlowConfig(config)
  await fs.writeFile(filePath, source, "utf-8")
}
