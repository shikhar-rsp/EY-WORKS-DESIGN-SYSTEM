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
      boxShadow: '0px 0px 1px rgba(30,31,33,0.31), 0px 1px 1px rgba(30,31,33,0.25)',
      width: '480px',
      maxWidth: '100%',
    }"
  >
    <span :style="{ color: 'var(--warning)', flexShrink: 0 }">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2a1 1 0 0 1 .894.553l9 18A1 1 0 0 1 21 22H3a1 1 0 0 1-.894-1.447l9-18A1 1 0 0 1 12 2zm0 7a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1zm1 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
      </svg>
    </span>
    <p :style="{ flex: 1, fontFamily: 'var(--font-lexend), sans-serif', fontWeight: 500, fontSize: '14px', color: 'var(--foreground)' }">
      Your session will expire in 5 minutes.
    </p>
    <button type="button" :style="{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--primary)', fontFamily: 'var(--font-lexend)', fontSize: '14px', padding: '8px 16px', borderRadius: 'var(--radius-medium)' }">
      Extend
    </button>
  </div>
</template>
