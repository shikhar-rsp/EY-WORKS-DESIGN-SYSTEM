<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
const repos = ['@design-system/ui', '@design-system/icons', '@design-system/tokens']
</script>

<template>
  <div :style="{ width: '256px' }">
    <button
      :aria-expanded="open"
      @click="open = !open"
      :style="{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 'var(--radius-medium)',
        padding: '12px 16px',
        background: 'transparent',
        border: 'none',
        color: 'var(--foreground)',
        fontFamily: 'sans-serif',
        fontSize: '14px',
        cursor: 'pointer',
      }"
      @mouseover="($event.target as HTMLElement).style.background = 'var(--muted-hover)'"
      @mouseout="($event.target as HTMLElement).style.background = 'transparent'"
    >
      <span>Repositories</span>
      <svg
        :style="{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 200ms' }"
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </button>

    <div
      :style="{
        display: 'grid',
        gridTemplateRows: open ? '1fr' : '0fr',
        transition: 'grid-template-rows 200ms ease-out',
      }"
    >
      <div :style="{ overflow: 'hidden' }">
        <ul :style="{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '4px', paddingLeft: '16px' }">
          <li
            v-for="repo in repos"
            :key="repo"
            :style="{
              borderRadius: 'var(--radius-medium)',
              padding: '8px 16px',
              fontSize: '14px',
              color: 'var(--muted-foreground)',
              cursor: 'pointer',
            }"
          >{{ repo }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
