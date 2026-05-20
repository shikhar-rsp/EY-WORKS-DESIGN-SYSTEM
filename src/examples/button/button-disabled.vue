<script setup lang="ts">
</script>

<template>
  <div :style="{ display: 'flex', alignItems: 'center', gap: '12px' }">
    <button
      disabled
      :style="{
        display: 'inline-flex', height: '36px',
        alignItems: 'center', justifyContent: 'center',
        padding: '0 var(--space-200)', border: '1px solid var(--disabled-border)',
        borderRadius: 'var(--radius-medium)', background: 'var(--disabled-surface)',
        color: 'var(--disabled)', fontFamily: 'var(--font-lexend), sans-serif',
        fontSize: '14px', fontWeight: 500, cursor: 'not-allowed', opacity: 0.7,
      }"
    >Disabled</button>
    <button
      disabled
      :style="{
        display: 'inline-flex', height: '36px',
        alignItems: 'center', justifyContent: 'center',
        padding: '0 var(--space-200)', border: '1px solid var(--disabled-border)',
        borderRadius: 'var(--radius-medium)', background: 'var(--disabled-surface)',
        color: 'var(--disabled)', fontFamily: 'var(--font-lexend), sans-serif',
        fontSize: '14px', fontWeight: 500, cursor: 'not-allowed', opacity: 0.7,
      }"
    >Disabled</button>
  </div>
</template>
