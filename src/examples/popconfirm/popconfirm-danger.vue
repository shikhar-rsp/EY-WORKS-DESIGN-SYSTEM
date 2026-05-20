<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
  <div :style="{ position: 'relative', display: 'inline-block' }">
    <!-- Trigger -->
    <button
      type="button"
      :style="{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '36px',
        padding: '0 16px',
        borderRadius: 'var(--radius-medium)',
        border: 'none',
        background: 'var(--destructive)',
        color: 'var(--destructive-foreground)',
        fontFamily: 'var(--font-lexend, Lexend, sans-serif)',
        fontSize: '14px',
        fontWeight: 500,
        cursor: 'pointer',
      }"
      @click="open = !open"
    >
      Delete
    </button>

    <!-- Popup -->
    <div
      v-if="open"
      role="alertdialog"
      :style="{
        position: 'absolute',
        bottom: 'calc(100% + 8px)',
        left: '50%',
        transform: 'translateX(-50%)',
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
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" :style="{ marginTop: '2px', flexShrink: 0, color: 'var(--warning-bold)' }" aria-hidden="true">
          <circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.5"/>
          <path d="M8 5v3.5M8 10v.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        <span :style="{ fontFamily: 'var(--font-lexend, Lexend, sans-serif)', fontSize: '14px', fontWeight: 600, color: 'var(--foreground)' }">
          Delete the task
        </span>
      </div>

      <!-- Description -->
      <p :style="{ fontFamily: 'var(--font-lexend, Lexend, sans-serif)', fontSize: '12px', color: 'var(--muted-foreground)', margin: '0 0 var(--space-150) 0' }">
        Are you sure to delete this task?
      </p>

      <!-- Footer -->
      <div :style="{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }">
        <button type="button" :style="{ display: 'inline-flex', alignItems: 'center', height: '28px', padding: '0 12px', borderRadius: 'var(--radius-medium)', border: '1px solid var(--border)', background: 'var(--background)', color: 'var(--foreground)', fontFamily: 'var(--font-lexend)', fontSize: '12px', fontWeight: 500, cursor: 'pointer' }" @click="open = false">No</button>
        <button type="button" :style="{ display: 'inline-flex', alignItems: 'center', height: '28px', padding: '0 12px', borderRadius: 'var(--radius-medium)', border: 'none', background: 'var(--destructive)', color: 'var(--destructive-foreground)', fontFamily: 'var(--font-lexend)', fontSize: '12px', fontWeight: 500, cursor: 'pointer' }" @click="open = false">Yes</button>
      </div>
    </div>
  </div>
</template>
