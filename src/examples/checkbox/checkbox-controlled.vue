<script setup lang="ts">
import { ref } from 'vue'

const checked = ref(false)
</script>

<template>
  <div
    :style="{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      cursor: 'pointer',
    }"
    @click="checked = !checked"
  >
    <span
      role="checkbox"
      :aria-checked="checked"
      :data-state="checked ? 'checked' : 'unchecked'"
      :style="{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '14px',
        height: '14px',
        borderRadius: 'var(--radius-small)',
        border: `1.5px solid ${checked ? 'var(--primary)' : 'var(--border)'}`,
        background: checked ? 'var(--primary)' : 'var(--background)',
        transition: 'background 150ms, border-color 150ms',
      }"
    >
      <svg v-if="checked" width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path d="M2 5l2.5 2.5L8 3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </span>
    <span
      :style="{
        fontFamily: 'sans-serif',
        fontSize: '14px',
        color: 'var(--foreground)',
        userSelect: 'none',
      }"
    >
      Controlled checkbox
    </span>
  </div>
</template>
