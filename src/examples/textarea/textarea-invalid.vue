<script setup lang="ts">
</script>

<template>
  <textarea
    aria-invalid="true"
    placeholder="Enter text"
    :style="{
      display: 'flex',
      minHeight: '80px',
      width: '100%',
      borderRadius: 'var(--radius-medium)',
      border: '1px solid var(--destructive)',
      background: 'var(--background)',
      padding: 'var(--space-150) var(--space-200)',
      fontFamily: 'var(--font-lexend), sans-serif',
      fontSize: '14px',
      color: 'var(--foreground)',
      resize: 'vertical',
      boxShadow: '0 0 0 3px color-mix(in srgb, var(--destructive) 20%, transparent)',
      outline: 'none',
      boxSizing: 'border-box',
    }"
  >Invalid content here</textarea>
</template>
