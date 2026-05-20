<script setup lang="ts">
const value = 66
const pct = value
</script>

<template>
  <div :style="{
    display: 'flex', flexDirection: 'column',
    gap: 'var(--space-150)', width: '256px',
    fontFamily: 'var(--font-lexend, sans-serif)',
  }">
    <div :style="{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }">
      <span :style="{ fontSize: '14px', color: 'var(--foreground)' }">Upload progress</span>
      <span :style="{ fontSize: '14px', color: 'var(--muted-foreground)' }">{{ value }}%</span>
    </div>
    <div
      role="progressbar"
      :aria-valuenow="value"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-label="Upload progress"
      :style="{
        position: 'relative', width: '100%', height: '8px',
        overflow: 'hidden', borderRadius: 'var(--radius-full)',
        background: 'var(--muted)',
      }"
    >
      <div :style="{
        height: '100%', width: '100%', borderRadius: 'var(--radius-full)',
        background: 'var(--primary)',
        transform: `translateX(-${100 - pct}%)`,
        transition: 'transform 300ms ease-in-out',
      }" />
    </div>
  </div>
</template>
