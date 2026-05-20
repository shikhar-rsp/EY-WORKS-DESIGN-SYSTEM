<script setup lang="ts">
import { ref } from 'vue'

interface IToastItem { id: number; message: string; bg: string }

const toasts = ref<IToastItem[]>([])
let nextId = 0

const addToast = (message: string, bg: string, duration = 4000) => {
  const id = nextId++
  toasts.value.push({ id, message, bg })
  if (isFinite(duration)) setTimeout(() => { toasts.value = toasts.value.filter(t => t.id !== id) }, duration)
  return id
}

const updateToast = (id: number, message: string, bg: string) => {
  const t = toasts.value.find(x => x.id === id)
  if (t) { t.message = message; t.bg = bg }
  setTimeout(() => { toasts.value = toasts.value.filter(t => t.id !== id) }, 4000)
}

const runPromise = async () => {
  const id = addToast('Saving changes\u2026', '#d7e8ff', Infinity)
  await new Promise(resolve => setTimeout(resolve, 2000))
  updateToast(id, 'Changes saved!', '#ecfccb')
}
</script>

<template>
  <div style="position: fixed; bottom: 16px; right: 16px; display: flex; flex-direction: column; gap: 8px; z-index: 9999; pointer-events: none;">
    <div
      v-for="t in toasts"
      :key="t.id"
      :style="{
        display: 'flex', alignItems: 'center', gap: '16px',
        padding: '8px', borderRadius: 'var(--radius-medium)',
        boxShadow: '0px 0px 1px rgba(30,31,33,0.31), 0px 1px 1px rgba(30,31,33,0.25)',
        background: t.bg, width: '320px', pointerEvents: 'all',
      }"
    >
      <span :style="{ flex: 1, fontFamily: 'var(--font-lexend), sans-serif', fontSize: '14px', fontWeight: 500, color: 'var(--foreground)' }">
        {{ t.message }}
      </span>
      <button
        type="button"
        @click="toasts = toasts.filter(x => x.id !== t.id)"
        :style="{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--subtlest)', fontSize: '16px', padding: '2px 4px', borderRadius: '4px' }"
      >&times;</button>
    </div>
  </div>

  <button
    type="button"
    @click="runPromise"
    :style="{
      padding: '8px 16px', borderRadius: 'var(--radius-medium)',
      border: '1px solid var(--border)', background: 'var(--background)',
      fontFamily: 'var(--font-lexend)', fontSize: '14px', color: 'var(--foreground)', cursor: 'pointer',
    }"
  >toast.promise()</button>
</template>
