<script setup lang="ts">
const sizes = [
  { label: 'Large',  containerW: 6,  containerH: 68, barW: 4, barH: 60 },
  { label: 'Medium', containerW: 2,  containerH: 20, barW: 2, barH: 20 },
  { label: 'Small',  containerW: 2,  containerH: 16, barW: 2, barH: 16 },
]
</script>

<template>
  <div :style="{ display: 'flex', alignItems: 'flex-end', gap: '48px', padding: '24px 16px' }">
    <div
      v-for="s in sizes"
      :key="s.label"
      :style="{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }"
    >
      <!-- Container -->
      <div :style="{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: `${s.containerW}px`, height: `${s.containerH}px` }">
        <!-- Bar -->
        <div :style="{ width: `${s.barW}px`, height: `${s.barH}px`, borderRadius: '99px', background: 'var(--border-hover, #c2bcbb)' }"></div>
      </div>
      <span :style="{ fontFamily: '\'Lexend\', sans-serif', fontSize: '12px', color: 'var(--muted-foreground, #7a7272)' }">
        {{ s.label }}
      </span>
    </div>
  </div>
</template>
