export interface ColorPalette {
  id: string
  name: string
  hue: number
  hueSecondary: number
  hueAccent: number
  chromaBoost: number
  bgDarkness: number
  forceDark: boolean
  previewColors: string[]
}

export const DEFAULT_PALETTE_ID = 'default'

export const PALETTES: ColorPalette[] = [
  {
    id: 'default',
    name: 'Default',
    hue: 280,
    hueSecondary: 280,
    hueAccent: 280,
    chromaBoost: 1.0,
    bgDarkness: 0.16,
    forceDark: false,
    previewColors: ['#a855f7', '#c084fc', '#e9d5ff'],
  },
  {
    id: 'neon-nights',
    name: 'Neon Nights',
    hue: 320,
    hueSecondary: 180,
    hueAccent: 60,
    chromaBoost: 1.4,
    bgDarkness: 0.06,
    forceDark: true,
    previewColors: ['#ff00ff', '#00fff5', '#f0f000'],
  },
  {
    id: 'synthwave',
    name: 'Synthwave',
    hue: 330,
    hueSecondary: 280,
    hueAccent: 15,
    chromaBoost: 1.3,
    bgDarkness: 0.08,
    forceDark: true,
    previewColors: ['#ff6b9d', '#c471ed', '#ff6f61'],
  },
  {
    id: 'ghost-protocol',
    name: 'Ghost Protocol',
    hue: 165,
    hueSecondary: 15,
    hueAccent: 210,
    chromaBoost: 1.2,
    bgDarkness: 0.07,
    forceDark: true,
    previewColors: ['#00d4aa', '#ff7b72', '#58a6ff'],
  },
  {
    id: 'terminal-redux',
    name: 'Terminal',
    hue: 120,
    hueSecondary: 40,
    hueAccent: 0,
    chromaBoost: 1.5,
    bgDarkness: 0.04,
    forceDark: true,
    previewColors: ['#00ff41', '#ffb000', '#ff3333'],
  },
  {
    id: 'blade-runner',
    name: 'Blade Runner',
    hue: 30,
    hueSecondary: 330,
    hueAccent: 200,
    chromaBoost: 1.2,
    bgDarkness: 0.10,
    forceDark: true,
    previewColors: ['#ff9e64', '#f472b6', '#7dd3fc'],
  },
]

export function getPaletteById(id: string): ColorPalette | undefined {
  return PALETTES.find((p) => p.id === id)
}

export function getDefaultPalette(): ColorPalette {
  return PALETTES[0]
}
