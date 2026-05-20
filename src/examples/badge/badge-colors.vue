<template>
  <div :style="{ display: 'flex', gap: '24px', alignItems: 'center' }">
    <div v-for="(color, i) in colors" :key="color.label" :style="{ position: 'relative', display: 'inline-flex' }">
      <span :style="{
        position: 'absolute', zIndex: 10, top: '-4px', right: '-4px',
        transform: 'translate(33%, -33%)',
        minWidth: '18px', height: '18px', borderRadius: '9999px', padding: '0 4px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: color.bg, color: color.fg,
        fontFamily: 'var(--font-lexend, sans-serif)', fontSize: '10px', fontWeight: 600,
        boxShadow: '0 0 0 2px var(--background, #ffffff)',
      }">3</span>
      <span :style="{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: '32px', height: '32px', borderRadius: '9999px',
        background: 'var(--muted, #fafafa)', color: 'var(--foreground, #2e2b2b)',
        fontFamily: 'var(--font-lexend, sans-serif)', fontSize: '12px', fontWeight: 500,
      }">{{ color.label }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const colors = [
  { label: 'D', bg: 'var(--destructive, #cc0000)', fg: 'var(--destructive-foreground, #fff)' },
  { label: 'P', bg: 'var(--primary, #f8785e)', fg: 'var(--primary-foreground, #fff)' },
  { label: 'S', bg: 'var(--success, #65a30d)', fg: '#fff' },
  { label: 'W', bg: 'var(--warning-bold, #fbbf24)', fg: '#fff' },
]
</script>
