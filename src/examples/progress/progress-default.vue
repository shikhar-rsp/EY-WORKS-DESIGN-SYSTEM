<script setup lang="ts">
const value = 60
const pct = value
</script>

<template>
  <div
    role="progressbar"
    :aria-valuenow="value"
    aria-valuemin="0"
    aria-valuemax="100"
    aria-label="Progress"
    :style="{
      position: 'relative', width: '256px', overflow: 'hidden',
      borderRadius: 'var(--radius-full)',
      background: 'var(--muted)', height: '8px',
    }"
  >
    <div
      :style="{
        height: '100%', width: '100%', borderRadius: 'var(--radius-full)',
        background: 'var(--primary)',
        transform: `translateX(-${100 - pct}%)`,
        transition: 'transform 300ms ease-in-out',
      }"
    />
  </div>
</template>
