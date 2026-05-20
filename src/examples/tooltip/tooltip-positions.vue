<script setup lang="ts">
import { ref } from 'vue'

const active = ref<string | null>(null)
const sides = ['top', 'right', 'bottom', 'left'] as const
</script>

<template>
  <div :style="{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '16px', padding: '32px' }">
    <div
      v-for="side in sides"
      :key="side"
      style="position: relative; display: inline-block;"
      @mouseenter="active = side"
      @mouseleave="active = null"
    >
      <button
        type="button"
        :style="{
          padding: '8px 16px', borderRadius: 'var(--radius-medium)',
          border: '1px solid var(--border)', background: 'var(--background)',
          fontFamily: 'var(--font-lexend), sans-serif', fontSize: '14px',
          color: 'var(--foreground)', cursor: 'pointer',
        }"
      >{{ side }}</button>
      <div
        v-if="active === side"
        role="tooltip"
        :style="{
          position: 'absolute', zIndex: 50,
          background: 'var(--primary)', color: 'var(--primary-foreground)',
          borderRadius: 'var(--radius-small)', padding: '2px 6px',
          fontFamily: 'var(--font-lexend), sans-serif', fontSize: '12px',
          whiteSpace: 'nowrap', pointerEvents: 'none',
          ...(side === 'top' ? { bottom: 'calc(100% + 4px)', left: '50%', transform: 'translateX(-50%)' } :
             side === 'bottom' ? { top: 'calc(100% + 4px)', left: '50%', transform: 'translateX(-50%)' } :
             side === 'left' ? { right: 'calc(100% + 4px)', top: '50%', transform: 'translateY(-50%)' } :
             { left: 'calc(100% + 4px)', top: '50%', transform: 'translateY(-50%)' }),
        }"
      >Tooltip {{ side }}</div>
    </div>
  </div>
</template>
