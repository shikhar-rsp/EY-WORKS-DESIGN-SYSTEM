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
      background: '#ecfccb',
      boxShadow: '0px 0px 1px rgba(30,31,33,0.31), 0px 1px 1px rgba(30,31,33,0.25)',
      width: '480px',
      maxWidth: '100%',
    }"
  >
    <span :style="{ color: 'var(--success)', flexShrink: 0 }">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.707 8.707a1 1 0 0 0-1.414-1.414L10 14.586l-2.293-2.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l6-6z"/>
      </svg>
    </span>
    <p :style="{ flex: 1, fontFamily: 'var(--font-lexend), sans-serif', fontWeight: 500, fontSize: '14px', color: 'var(--foreground)' }">
      Settings saved successfully.
    </p>
  </div>
</template>
