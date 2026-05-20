<script setup lang="ts">
const works = [
  'Artwork 1', 'Artwork 2', 'Artwork 3', 'Artwork 4',
  'Artwork 5', 'Artwork 6', 'Artwork 7', 'Artwork 8',
]
</script>

<template>
  <div
    :style="{
      position: 'relative',
      overflow: 'hidden',
      width: '256px',
      borderRadius: 'var(--radius-medium)',
      border: '1px solid var(--border)',
    }"
  >
    <div
      :style="{
        width: '100%',
        overflowX: 'auto',
        scrollbarWidth: 'none',
      }"
    >
      <div
        :style="{
          display: 'flex',
          width: 'max-content',
          gap: '12px',
          padding: '12px',
        }"
      >
        <div
          v-for="work in works"
          :key="work"
          :style="{
            flexShrink: 0,
            width: '112px',
            height: '64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 'var(--radius-medium)',
            background: 'var(--secondary)',
            fontSize: '12px',
            fontWeight: 500,
            color: 'var(--secondary-foreground)',
            fontFamily: 'var(--font-lexend, sans-serif)',
          }"
        >{{ work }}</div>
      </div>
    </div>
  </div>
</template>
