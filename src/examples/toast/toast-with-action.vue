<script setup lang="ts">
import { ref } from 'vue'

interface IToastItem {
  id: number
  message: string
  bg: string
  actionLabel?: string
  onAction?: () => void
}

const toasts = ref<IToastItem[]>([])
let nextId = 0

const addToast = (item: Omit<IToastItem, 'id'>) => {
  const id = nextId++
  const entry = { ...item, id }
  toasts.value.push(entry)
  const timer = setTimeout(() => dismiss(id), 4000)
  ;(entry as any)._timer = timer
}

const dismiss = (id: number) => {
  toasts.value = toasts.value.filter(t => t.id !== id)
}

const handleAction = (t: IToastItem) => {
  clearTimeout((t as any)._timer)
  dismiss(t.id)
  if (t.onAction) t.onAction()
}

const showFileRemoved = () => {
  addToast({
    message: 'File removed.',
    bg: '#ffcccc',
    actionLabel: 'Undo',
    onAction: () => addToast({ message: 'File restored.', bg: '#ecfccb' }),
  })
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
        v-if="t.actionLabel"
        type="button"
        @click="handleAction(t)"
        :style="{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--primary)', fontFamily: 'var(--font-lexend)', fontSize: '14px', padding: '8px 16px', borderRadius: 'var(--radius-medium)' }"
      >{{ t.actionLabel }}</button>
      <button
        type="button"
        @click="dismiss(t.id)"
        :style="{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--subtlest)', fontSize: '16px', padding: '2px 4px', borderRadius: '4px' }"
      >&times;</button>
    </div>
  </div>

  <button
    type="button"
    @click="showFileRemoved"
    :style="{
      padding: '8px 16px', borderRadius: 'var(--radius-medium)',
      border: '1px solid var(--border)', background: 'var(--background)',
      fontFamily: 'var(--font-lexend)', fontSize: '14px', color: 'var(--foreground)', cursor: 'pointer',
    }"
  >Show toast with action</button>
</template>
