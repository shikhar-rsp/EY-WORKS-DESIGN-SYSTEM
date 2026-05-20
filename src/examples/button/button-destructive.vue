<script setup lang="ts">
</script>

<template>
  <button
    :style="{
      display: 'inline-flex', height: '36px',
      alignItems: 'center', justifyContent: 'center',
      padding: '0 var(--space-200)', border: '1px solid transparent',
      borderRadius: 'var(--radius-medium)', background: 'var(--destructive)',
      color: 'var(--destructive-foreground)', fontFamily: 'var(--font-lexend), sans-serif',
      fontSize: '14px', fontWeight: 500, cursor: 'pointer',
    }"
  >
    Delete
  </button>
</template>
