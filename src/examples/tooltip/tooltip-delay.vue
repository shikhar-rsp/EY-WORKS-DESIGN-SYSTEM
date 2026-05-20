<script setup lang="ts">
import { ref } from 'vue'

const show = ref(false)
let timer: ReturnType<typeof setTimeout>

const onEnter = () => { timer = setTimeout(() => show.value = true, 500) }
const onLeave = () => { clearTimeout(timer); show.value = false }
</script>

<template>
  <div style="position: relative; display: inline-block;" @mouseenter="onEnter" @mouseleave="onLeave">
    <button
      type="button"
      :style="{
        padding: '8px 16px', borderRadius: 'var(--radius-medium)',
        border: '1px solid var(--border)', background: 'var(--background)',
        fontFamily: 'var(--font-lexend), sans-serif', fontSize: '14px',
        color: 'var(--foreground)', cursor: 'pointer',
      }"
    >Hover (500ms delay)</button>
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
    >Appears after delay</div>
  </div>
</template>
