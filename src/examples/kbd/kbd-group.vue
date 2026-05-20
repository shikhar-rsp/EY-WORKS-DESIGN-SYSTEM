<template>
  <div :style="{ display: 'flex', flexDirection: 'column', gap: '12px' }">
    <span :style="{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-050)' }">
      <kbd v-for="key in ['⌘', 'K']" :key="key" :style="kbdStyle">{{ key }}</kbd>
    </span>
    <span :style="{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-050)' }">
      <kbd v-for="key in ['⌃', '⇧', 'P']" :key="key" :style="kbdStyle">{{ key }}</kbd>
    </span>
  </div>
</template>

<script setup lang="ts">
const kbdStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '24px',
  minWidth: '24px',
  padding: '0 var(--space-100)',
  borderRadius: 'var(--radius-small)',
  border: '1px solid var(--border)',
  background: 'var(--muted)',
  fontSize: '12px',
  fontWeight: 500,
  color: 'var(--muted-foreground)',
  userSelect: 'none' as const,
}
</script>
