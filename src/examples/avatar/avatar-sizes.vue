<script setup lang="ts">
const sizes = [
  { label: 'xs', width: '16px', height: '16px', fontSize: '8px' },
  { label: 'sm', width: '24px', height: '24px', fontSize: '10px' },
  { label: 'default', width: '32px', height: '32px', fontSize: '12px' },
  { label: 'lg', width: '40px', height: '40px', fontSize: '14px' },
  { label: 'xl', width: '48px', height: '48px', fontSize: '14px' },
]
</script>

<template>
  <div :style="{ display: 'flex', alignItems: 'flex-end', gap: '16px' }">
    <div
      v-for="s in sizes"
      :key="s.label"
      :style="{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }"
    >
      <span
        :style="{
          position: 'relative',
          display: 'inline-flex',
          width: s.width, height: s.height,
          alignItems: 'center', justifyContent: 'center',
          overflow: 'hidden', borderRadius: '9999px',
          background: 'var(--primary-subtle)',
          fontFamily: 'var(--font-lexend), sans-serif',
          fontSize: s.fontSize, fontWeight: 500,
          color: 'var(--foreground)', flexShrink: 0,
        }"
      >MH</span>
      <span :style="{ fontFamily: 'var(--font-lexend), sans-serif', fontSize: '12px', color: 'var(--muted-foreground)' }">
        {{ s.label }}
      </span>
    </div>
  </div>
</template>
