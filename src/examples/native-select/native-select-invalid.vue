<script setup lang="ts">
import { ref } from 'vue'
const value = ref('')
</script>

<template>
  <div :style="{ position: 'relative', display: 'inline-flex', width: '192px', alignItems: 'center' }">
    <select
      v-model="value"
      aria-invalid="true"
      :style="{
        height: '36px', width: '100%', appearance: 'none',
        borderRadius: 'var(--radius-medium)', border: '1px solid var(--destructive)',
        background: 'var(--background)', paddingLeft: 'var(--space-200)', paddingRight: '32px',
        fontSize: '14px', color: 'var(--foreground)', cursor: 'pointer',
        outline: '2px solid var(--destructive)', outlineOffset: '1px',
      }"
    >
      <option value="">Select a role…</option>
      <option value="admin">Admin</option>
      <option value="editor">Editor</option>
      <option value="viewer">Viewer</option>
    </select>
    <span aria-hidden="true" :style="{ pointerEvents: 'none', position: 'absolute', right: 'var(--space-200)', display: 'inline-flex', alignItems: 'center', color: 'var(--muted-foreground)' }">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m6 9 6 6 6-6"/>
      </svg>
    </span>
  </div>
</template>
