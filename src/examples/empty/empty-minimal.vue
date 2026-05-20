<script setup lang="ts">
// Static component — no reactive state needed
</script>

<template>
  <div
    :style="{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', gap: 'var(--space-300)',
      padding: '40px var(--space-300)', textAlign: 'center',
    }"
  >
    <h3 :style="{ fontSize: '1rem', fontWeight: 600, color: 'var(--foreground)', margin: 0 }">Nothing here yet</h3>
    <p :style="{ fontSize: '0.875rem', lineHeight: '1.625', color: 'var(--muted-foreground)', maxWidth: '20rem', margin: 0 }">
      Add items to see them listed here.
    </p>
  </div>
</template>
