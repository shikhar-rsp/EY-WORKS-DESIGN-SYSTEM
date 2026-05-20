<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
  <div :style="{ position: 'relative', display: 'inline-block' }">
    <button
      type="button"
      :style="{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '36px',
        padding: '0 16px',
        borderRadius: 'var(--radius-medium)',
        border: '1px solid var(--border)',
        background: 'var(--background)',
        color: 'var(--foreground)',
        fontFamily: 'var(--font-lexend, Lexend, sans-serif)',
        fontSize: '14px',
        fontWeight: 500,
        cursor: 'pointer',
      }"
      @click="open = !open"
    >
      Bottom-start placement
    </button>

    <div
      v-if="open"
      role="alertdialog"
      :style="{
        position: 'absolute',
        top: 'calc(100% + 8px)',
        left: '0',
        width: '288px',
        borderRadius: 'var(--radius-large)',
        border: '1px solid var(--border)',
        background: 'var(--background)',
        padding: 'var(--space-200)',
        boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
        zIndex: 50,
      }"
    >
      <!-- Header -->
      <div :style="{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: 'var(--space-100)' }">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" :style="{ marginTop: '2px', color: 'var(--warning-bold)' }" aria-hidden="true">
          <circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.5"/>
          <path d="M8 5v3.5M8 10v.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        <span :style="{ fontFamily: 'var(--font-lexend)', fontSize: '14px', fontWeight: 600, color: 'var(--foreground)' }">Confirm action</span>
      </div>
      <div :style="{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }">
        <button type="button" :style="{ height: '28px', padding: '0 12px', borderRadius: 'var(--radius-medium)', border: '1px solid var(--border)', background: 'var(--background)', color: 'var(--foreground)', fontFamily: 'var(--font-lexend)', fontSize: '12px', cursor: 'pointer' }" @click="open = false">Cancel</button>
        <button type="button" :style="{ height: '28px', padding: '0 12px', borderRadius: 'var(--radius-medium)', border: 'none', background: 'var(--primary)', color: 'var(--primary-foreground)', fontFamily: 'var(--font-lexend)', fontSize: '12px', cursor: 'pointer' }" @click="open = false">OK</button>
      </div>
    </div>
  </div>
</template>
