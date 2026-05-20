<template>
  <div :style="{ display: 'flex', alignItems: 'flex-start', gap: '24px' }">
    <div v-for="size in sizes" :key="size.label" :style="{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }">
      <span :style="{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: size.px + 'px', height: size.px + 'px', borderRadius: 'var(--radius-small)', background: 'var(--primary)', flexShrink: '0' }">
        <svg :width="size.px - 4" :height="size.px - 4" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
      <span :style="{ fontFamily: '\'Lexend\', sans-serif', fontSize: '12px', color: 'var(--muted-foreground)' }">{{ size.label }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const sizes = [
  { label: 'Small (14px)', px: 14 },
  { label: 'Medium (16px)', px: 16 },
  { label: 'Large (20px)', px: 20 },
]
</script>
