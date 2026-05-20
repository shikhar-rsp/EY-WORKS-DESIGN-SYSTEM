<script setup lang="ts">
import { ref } from 'vue'
const show = ref(false)
</script>

<template>
  <div style="position: relative; display: inline-block;">
    <button
      type="button"
      @mouseenter="show = true"
      @mouseleave="show = false"
      :style="{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        padding: '4px 8px', borderRadius: 'var(--radius-medium)',
        border: '1px solid var(--border)', background: 'var(--background)',
        fontFamily: 'var(--font-lexend), sans-serif', fontSize: '14px',
        color: 'var(--foreground)', cursor: 'pointer',
      }"
    >Hover me</button>
    <div
      v-if="show"
      role="tooltip"
      :style="{
        position: 'absolute', bottom: 'calc(100% + 4px)', left: '50%', transform: 'translateX(-50%)',
        background: 'var(--primary)', color: 'var(--primary-foreground)',
        borderRadius: 'var(--radius-small)', padding: '2px 6px',
        fontFamily: 'var(--font-lexend), sans-serif', fontSize: '12px',
        whiteSpace: 'nowrap', pointerEvents: 'none', zIndex: 50,
      }"
    >Add to library</div>
  </div>
</template>
