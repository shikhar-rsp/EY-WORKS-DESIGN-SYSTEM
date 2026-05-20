<script setup lang="ts">
</script>

<template>
  <textarea
    disabled
    placeholder="This field is disabled"
    :style="{
      display: 'flex',
      minHeight: '80px',
      width: '100%',
      borderRadius: 'var(--radius-medium)',
      border: '1px solid var(--disabled-border)',
      background: 'var(--disabled-surface)',
      padding: 'var(--space-150) var(--space-200)',
      fontFamily: 'var(--font-lexend), sans-serif',
      fontSize: '14px',
      color: 'var(--disabled)',
      resize: 'none',
      cursor: 'not-allowed',
      outline: 'none',
      boxSizing: 'border-box',
    }"
  />
</template>
