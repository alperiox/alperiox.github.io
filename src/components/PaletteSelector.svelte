<script lang="ts">
import { PALETTES, type ColorPalette, getPaletteById, DEFAULT_PALETTE_ID } from '@constants/palettes'
import { getStoredPaletteId, setPalette } from '@utils/setting-utils'
import Icon from '@iconify/svelte'
import { onMount } from 'svelte'

let currentPaletteId: string = DEFAULT_PALETTE_ID
let currentPalette: ColorPalette = PALETTES[0]
let isOpen = false

onMount(() => {
  currentPaletteId = getStoredPaletteId()
  currentPalette = getPaletteById(currentPaletteId) || PALETTES[0]
})

function selectPalette(palette: ColorPalette) {
  currentPaletteId = palette.id
  currentPalette = palette
  setPalette(palette.id)
  hidePanel()
}

function showPanel() {
  isOpen = true
}

function hidePanel() {
  isOpen = false
}

function togglePanel() {
  isOpen = !isOpen
}
</script>

<div class="relative z-50" role="menu" tabindex="-1" on:mouseleave={hidePanel}>
  <button
    aria-label="Color Palette"
    role="menuitem"
    class="btn-plain scale-animation rounded-lg h-11 px-3 active:scale-90 flex items-center gap-2"
    on:click={togglePanel}
    on:mouseenter={showPanel}
  >
    <Icon icon="material-symbols:palette-outline" class="text-[1.25rem]" />
    <div class="hidden sm:flex items-center gap-1">
      {#each currentPalette.previewColors as color}
        <span
          class="w-2.5 h-2.5 rounded-full ring-1 ring-black/10 dark:ring-white/20"
          style="background-color: {color}"
        ></span>
      {/each}
    </div>
  </button>

  <div
    id="palette-panel"
    class="hidden lg:block absolute transition top-11 -right-2 pt-5"
    class:float-panel-closed={!isOpen}
  >
    <div class="card-base float-panel p-2 min-w-48">
      {#each PALETTES as palette}
        <button
          class="flex transition whitespace-nowrap items-center justify-between w-full btn-plain scale-animation rounded-lg h-10 px-3 font-medium active:scale-95 mb-0.5"
          class:current-theme-btn={currentPaletteId === palette.id}
          on:click={() => selectPalette(palette)}
        >
          <span class="flex items-center gap-2">
            {#if palette.forceDark}
              <Icon icon="material-symbols:nightlight-outline" class="text-sm opacity-50" />
            {:else}
              <span class="w-4"></span>
            {/if}
            <span>{palette.name}</span>
          </span>
          <span class="flex items-center gap-1 ml-3">
            {#each palette.previewColors as color}
              <span
                class="w-3 h-3 rounded-full ring-1 ring-black/10 dark:ring-white/20"
                style="background-color: {color}"
              ></span>
            {/each}
          </span>
        </button>
      {/each}
    </div>
  </div>
</div>

<style>
.current-theme-btn {
  background: var(--btn-plain-bg-hover);
  color: var(--primary);
}
</style>
