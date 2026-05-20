<!--
  Note: This is a simplified visual mockup of the controlled TimePicker in Vue.
  The full scrollable portal behavior requires a dedicated Vue component implementation.
-->
<script setup lang="ts">
import { ref } from 'vue'

const value = ref('09:00')
</script>

<template>
  <div
    :style="{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '16px',
      minHeight: '200px',
    }"
  >
    <!-- Trigger showing selected value; full picker behavior requires component runtime -->
    <button
      :style="{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        height: '36px',
        padding: '0 12px',
        borderRadius: 'var(--radius-medium, 8px)',
        border: '1px solid var(--border, #ebe9e8)',
        background: 'var(--background, #ffffff)',
        color: 'var(--foreground, #2e2b2b)',
        fontSize: '14px',
        fontFamily: 'var(--font-lexend, Lexend, sans-serif)',
        cursor: 'pointer',
        transition: 'border-color 150ms',
      }"
      aria-haspopup="dialog"
    >
      <!-- Clock icon -->
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" :style="{ color: 'var(--muted-foreground, #7a7272)', flexShrink: 0 }">
        <circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.5"/>
        <path d="M8 5v3l2 1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span>{{ value }}</span>
      <!-- Chevron icon -->
      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" :style="{ color: 'var(--muted-foreground, #7a7272)', marginLeft: '4px' }">
        <path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <!-- Controlled value display -->
    <p :style="{ fontSize: '14px', color: 'var(--muted-foreground, #7a7272)', margin: 0 }">
      Selected: <strong :style="{ color: 'var(--foreground, #2e2b2b)', fontWeight: 600 }">{{ value }}</strong>
    </p>
  </div>
</template>
