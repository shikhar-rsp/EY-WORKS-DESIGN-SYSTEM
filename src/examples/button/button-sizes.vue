<script setup lang="ts">
const sizes = [
  { label: 'sm', height: '32px' },
  { label: 'default', height: '36px' },
  { label: 'lg', height: '40px' },
]
</script>

<template>
  <div :style="{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', gap: '16px' }">
    <div
      v-for="s in sizes"
      :key="s.label"
      :style="{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }"
    >
      <button
        :style="{
          display: 'inline-flex', height: s.height,
          alignItems: 'center', justifyContent: 'center',
          padding: '0 var(--space-200)', border: '1px solid transparent',
          borderRadius: 'var(--radius-medium)', background: 'var(--primary)',
          color: 'var(--primary-foreground)', fontFamily: 'var(--font-lexend), sans-serif',
          fontSize: '14px', fontWeight: 500, cursor: 'pointer',
        }"
      >{{ s.label === 'sm' ? 'Small' : s.label === 'default' ? 'Default' : 'Large' }}</button>
      <span :style="{ fontFamily: 'var(--font-lexend), sans-serif', fontSize: '12px', color: 'var(--muted-foreground)' }">{{ s.label }}</span>
    </div>
  </div>
</template>
