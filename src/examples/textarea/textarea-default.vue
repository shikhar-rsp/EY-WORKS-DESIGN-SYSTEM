<script setup lang="ts">
</script>

<template>
  <textarea
    placeholder="Type your message here…"
    :style="{
      display: 'flex',
      minHeight: '80px',
      width: '100%',
      borderRadius: 'var(--radius-medium)',
      border: '1px solid var(--border-input)',
      background: 'var(--background)',
      padding: 'var(--space-150) var(--space-200)',
      fontFamily: 'var(--font-lexend), sans-serif',
      fontSize: '14px',
      color: 'var(--foreground)',
      resize: 'vertical',
      boxSizing: 'border-box',
      outline: 'none',
      transition: 'border-color 0.15s, box-shadow 0.15s',
    }"
  />
</template>
