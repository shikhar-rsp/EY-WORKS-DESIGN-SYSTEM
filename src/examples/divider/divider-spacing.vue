<script setup lang="ts">
const spacings = [
  { label: 'default', py: 0 },
  { label: '8',       py: 8 },
  { label: '16',      py: 16 },
  { label: '20',      py: 20 },
  { label: '40',      py: 40 },
  { label: '80',      py: 80 },
]
</script>

<template>
  <div :style="{ width: '100%', padding: '0 16px' }">
    <div v-for="s in spacings" :key="s.label">
      <p :style="{ fontFamily: '\'Lexend\', sans-serif', fontSize: '12px', color: 'var(--muted-foreground, #7a7272)' }">
        spacing="{{ s.label }}"
      </p>
      <!-- Divider with spacing -->
      <div :style="{ display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: `${s.py}px`, paddingBottom: `${s.py}px` }">
        <div :style="{ width: '100%', borderTop: '1px solid var(--border, #ebe9e8)' }"></div>
      </div>
    </div>
  </div>
</template>
