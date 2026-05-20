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
      background: 'var(--background)',
      border: '1px solid var(--discovery)',
      boxShadow: '0px 0px 1px rgba(30,31,33,0.31), 0px 1px 1px rgba(30,31,33,0.25)',
      width: '480px',
      maxWidth: '100%',
    }"
  >
    <span :style="{ color: 'var(--info)', flexShrink: 0 }">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 5a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm-1 3a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1z"/>
      </svg>
    </span>
    <p :style="{ flex: 1, fontFamily: 'var(--font-lexend), sans-serif', fontWeight: 500, fontSize: '14px', color: 'var(--foreground)' }">
      A new version is available.
    </p>
    <button type="button" :style="{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--primary)', fontFamily: 'var(--font-lexend)', fontSize: '14px', padding: '8px 16px', borderRadius: 'var(--radius-medium)' }">
      Update now
    </button>
  </div>
</template>
