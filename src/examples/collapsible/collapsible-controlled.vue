<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
  <div :style="{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '12px' }">
    <button
      @click="open = !open"
      :style="{
        borderRadius: 'var(--radius-small)',
        border: '1px solid var(--border)',
        padding: '4px 12px',
        fontFamily: 'sans-serif',
        fontSize: '12px',
        background: 'transparent',
        color: 'var(--foreground)',
        cursor: 'pointer',
      }"
    >
      Toggle externally
    </button>

    <div :style="{ width: '256px' }">
      <button
        :aria-expanded="open"
        @click="open = !open"
        :style="{
          display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between',
          borderRadius: 'var(--radius-medium)', padding: '12px 16px',
          background: 'transparent', border: 'none', color: 'var(--foreground)',
          fontFamily: 'sans-serif', fontSize: '14px', cursor: 'pointer',
        }"
      >
        <span>Repositories</span>
        <svg
          :style="{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 200ms' }"
          width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <div :style="{ display: 'grid', gridTemplateRows: open ? '1fr' : '0fr', transition: 'grid-template-rows 200ms ease-out' }">
        <div :style="{ overflow: 'hidden' }">
          <ul :style="{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '4px', paddingLeft: '16px' }">
            <li v-for="repo in ['@design-system/ui', '@design-system/icons']" :key="repo"
              :style="{ borderRadius: 'var(--radius-medium)', padding: '8px 16px', fontSize: '14px', color: 'var(--muted-foreground)' }">
              {{ repo }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
