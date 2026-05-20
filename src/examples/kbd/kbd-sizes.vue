<template>
  <div :style="{ display: 'inline-flex', alignItems: 'center', gap: '16px' }">
    <div v-for="item in sizes" :key="item.label" :style="{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }">
      <kbd :style="{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: item.height,
        minWidth: item.height,
        padding: item.padding,
        borderRadius: 'var(--radius-small)',
        border: '1px solid var(--border)',
        background: 'var(--muted)',
        fontSize: item.fontSize,
        fontWeight: 500,
        color: 'var(--muted-foreground)',
        userSelect: 'none',
      }">Esc</kbd>
      <span :style="{ fontSize: '12px', color: 'var(--muted-foreground)' }">{{ item.label }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const sizes = [
  { label: 'sm', height: '20px', padding: '0 var(--space-075)', fontSize: '11px' },
  { label: 'md', height: '24px', padding: '0 var(--space-100)', fontSize: '12px' },
]
</script>
