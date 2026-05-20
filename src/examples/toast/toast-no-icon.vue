<script setup lang="ts">
</script>

<template>
  <div
    :style="{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-200)',
      padding: 'var(--space-100)',
      borderRadius: 'var(--radius-medium)',
      background: '#ffcccc',
      boxShadow: '0px 0px 1px rgba(30,31,33,0.31), 0px 1px 1px rgba(30,31,33,0.25)',
      width: '480px',
      maxWidth: '100%',
    }"
  >
    <p :style="{ flex: 1, fontFamily: 'var(--font-lexend), sans-serif', fontWeight: 500, fontSize: '14px', color: 'var(--foreground)', minWidth: 0 }">
      Two orders have been duplicated.
    </p>
    <div :style="{ display: 'flex', alignItems: 'center', gap: '4px', flexShrink: 0 }">
      <button
        type="button"
        :style="{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--primary)', fontFamily: 'var(--font-lexend)', fontSize: '14px', padding: '8px 16px', borderRadius: 'var(--radius-medium)' }"
      >Undo</button>
      <button
        type="button"
        aria-label="Dismiss"
        :style="{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--subtlest)', padding: '8px 4px', borderRadius: 'var(--radius-medium)', display: 'flex', alignItems: 'center' }"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
      </button>
    </div>
  </div>
</template>
