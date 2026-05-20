<script setup lang="ts">
// Divider — Default
</script>

<template>
  <div :style="{ width: '100%', padding: '0 16px' }">
    <p :style="{ marginBottom: '8px', fontFamily: '\'Lexend\', sans-serif', fontSize: '14px', color: 'var(--foreground, #2e2b2b)' }">
      Above the divider
    </p>

    <!-- Divider -->
    <div :style="{ display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }">
      <div :style="{ width: '100%', borderTop: '1px solid var(--border, #ebe9e8)' }"></div>
    </div>

    <p :style="{ marginTop: '8px', fontFamily: '\'Lexend\', sans-serif', fontSize: '14px', color: 'var(--foreground, #2e2b2b)' }">
      Below the divider
    </p>
  </div>
</template>
