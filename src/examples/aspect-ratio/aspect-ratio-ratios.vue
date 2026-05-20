<script setup lang="ts">
const ratios = [
  { label: '1 / 1', value: '1 / 1' },
  { label: '4 / 3', value: '4 / 3' },
  { label: '16 / 9', value: '16 / 9' },
  { label: '21 / 9', value: '21 / 9' },
]
</script>

<template>
  <div :style="{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }">
    <div v-for="r in ratios" :key="r.label">
      <p :style="{ margin: '0 0 4px', fontFamily: 'var(--font-lexend), sans-serif', fontSize: '12px', color: 'var(--muted-foreground)' }">
        {{ r.label }}
      </p>
      <div
        :style="{
          aspectRatio: r.value,
          width: '100%',
          borderRadius: 'var(--radius-medium)',
          background: 'var(--muted)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--font-lexend), sans-serif',
          fontSize: '14px',
          color: 'var(--muted-foreground)',
        }"
      >
        {{ r.label }}
      </div>
    </div>
  </div>
</template>
