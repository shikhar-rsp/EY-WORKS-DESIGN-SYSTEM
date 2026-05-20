<script setup lang="ts">
</script>

<template>
  <div :style="{ width: '100%', maxWidth: '384px' }">
    <div
      :style="{
        aspectRatio: '16 / 9',
        width: '100%',
        overflow: 'hidden',
        position: 'relative',
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
      16 / 9
    </div>
  </div>
</template>
