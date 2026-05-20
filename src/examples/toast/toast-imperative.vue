<script setup lang="ts">
import { ref } from 'vue'

interface IToastItem {
  id: number
  message: string
  type: 'success' | 'error' | 'info' | 'warning'
}

const toasts = ref<IToastItem[]>([])
let nextId = 0

const bgMap: Record<string, string> = {
  success: '#ecfccb',
  error: '#ffcccc',
  info: '#d7e8ff',
  warning: '#fde8d9',
}

const addToast = (message: string, type: IToastItem['type']) => {
  const id = nextId++
  toasts.value.push({ id, message, type })
  setTimeout(() => { toasts.value = toasts.value.filter(t => t.id !== id) }, 4000)
}
</script>

<template>
  <!-- Toast container (fixed) -->
  <div style="position: fixed; bottom: 16px; right: 16px; display: flex; flex-direction: column; gap: 8px; z-index: 9999; pointer-events: none;">
    <div
      v-for="t in toasts"
      :key="t.id"
      :style="{
        display: 'flex', alignItems: 'center', gap: '16px',
        padding: '8px', borderRadius: 'var(--radius-medium)',
        boxShadow: '0px 0px 1px rgba(30,31,33,0.31), 0px 1px 1px rgba(30,31,33,0.25)',
        background: bgMap[t.type], width: '320px', pointerEvents: 'all',
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

  <!-- Trigger buttons -->
  <div style="display: flex; flex-wrap: wrap; gap: 8px;">
    <button
      type="button"
      @click="addToast('Profile updated successfully.', 'success')"
      :style="{ padding: '8px 16px', borderRadius: 'var(--radius-medium)', border: 'none', background: '#65a30d', color: '#fff', fontFamily: 'var(--font-lexend)', fontSize: '14px', fontWeight: 500, cursor: 'pointer' }"
    >toast.success()</button>
    <button
      type="button"
      @click="addToast('Failed to save changes.', 'error')"
      :style="{ padding: '8px 16px', borderRadius: 'var(--radius-medium)', border: 'none', background: '#cc0000', color: '#fff', fontFamily: 'var(--font-lexend)', fontSize: '14px', fontWeight: 500, cursor: 'pointer' }"
    >toast.error()</button>
    <button
      type="button"
      @click="addToast('A new version is available.', 'info')"
      :style="{ padding: '8px 16px', borderRadius: 'var(--radius-medium)', border: 'none', background: '#2d70cf', color: '#fff', fontFamily: 'var(--font-lexend)', fontSize: '14px', fontWeight: 500, cursor: 'pointer' }"
    >toast.info()</button>
    <button
      type="button"
      @click="addToast('Your session expires in 5 minutes.', 'warning')"
      :style="{ padding: '8px 16px', borderRadius: 'var(--radius-medium)', border: 'none', background: '#d97706', color: '#fff', fontFamily: 'var(--font-lexend)', fontSize: '14px', fontWeight: 500, cursor: 'pointer' }"
    >toast.warning()</button>
  </div>
</template>
