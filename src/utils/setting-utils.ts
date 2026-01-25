import {AUTO_MODE, DARK_MODE, DEFAULT_THEME, LIGHT_MODE} from "@constants/constants.ts";
import type { LIGHT_DARK_MODE } from '@/types/config'
import { type ColorPalette, DEFAULT_PALETTE_ID, getPaletteById, getDefaultPalette } from '@constants/palettes'

export function getDefaultHue(): number {
  const fallback = '250'
  const configCarrier = document.getElementById('config-carrier')
  return parseInt(configCarrier?.dataset.hue || fallback)
}

export function getHue(): number {
  const stored = localStorage.getItem('hue')
  return stored ? parseInt(stored) : getDefaultHue()
}

export function setHue(hue: number): void {
  localStorage.setItem('hue', String(hue))
  const r = document.querySelector(':root')
  if (!r) {
    return
  }
  r.style.setProperty('--hue', hue)
}


export function applyThemeToDocument(theme: LIGHT_DARK_MODE) {
  switch (theme) {
    case LIGHT_MODE:
      document.documentElement.classList.remove('dark')
      break
    case DARK_MODE:
      document.documentElement.classList.add('dark')
      break
    case AUTO_MODE:
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      break
  }
}

export function setTheme(theme: LIGHT_DARK_MODE): void {
  localStorage.setItem('theme', theme)
  applyThemeToDocument(theme)
}

export function getStoredTheme(): LIGHT_DARK_MODE {
  return localStorage.getItem('theme') as LIGHT_DARK_MODE || DEFAULT_THEME
}

export function getStoredPaletteId(): string {
  return localStorage.getItem('palette') || DEFAULT_PALETTE_ID
}

export function applyPalette(palette: ColorPalette): void {
  const r = document.querySelector(':root') as HTMLElement
  if (!r) return

  r.style.setProperty('--hue', String(palette.hue))
  r.style.setProperty('--hue-secondary', String(palette.hueSecondary))
  r.style.setProperty('--hue-accent', String(palette.hueAccent))
  r.style.setProperty('--chroma-boost', String(palette.chromaBoost))
  r.style.setProperty('--bg-darkness', String(palette.bgDarkness))

  localStorage.setItem('hue', String(palette.hue))
}

export function setPalette(paletteId: string): void {
  const palette = getPaletteById(paletteId)
  if (!palette) return

  localStorage.setItem('palette', paletteId)
  applyPalette(palette)

  if (palette.forceDark) {
    setTheme(DARK_MODE)
  }
}

export function loadPalette(): void {
  const paletteId = getStoredPaletteId()
  const palette = getPaletteById(paletteId) || getDefaultPalette()
  applyPalette(palette)
}
