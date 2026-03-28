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

export const DEFAULT_PALETTE_ID = 'synthwave'

export const PALETTES: ColorPalette[] = [
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
    id: 'default',
    name: 'Classic',
    hue: 280,
    hueSecondary: 280,
    hueAccent: 280,
    chromaBoost: 1.0,
    bgDarkness: 0.16,
    forceDark: false,
    previewColors: ['#a855f7', '#c084fc', '#e9d5ff'],
  },
]

export function getPaletteById(id: string): ColorPalette | undefined {
  return PALETTES.find((p) => p.id === id)
}

export function getDefaultPalette(): ColorPalette {
  return PALETTES[0]
}
