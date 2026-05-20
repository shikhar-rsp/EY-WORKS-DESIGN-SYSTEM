<script setup lang="ts">
// Static component — no reactive state needed
</script>

<template>
  <div :style="{ display: 'flex', flexDirection: 'column', gap: 'var(--space-075)', width: '256px', padding: '24px' }">
    <label
      for="username"
      :style="{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--foreground)' }"
    >Username</label>
    <input
      id="username"
      type="text"
      placeholder="Cannot edit"
      disabled
      :style="{
        display: 'flex', height: '36px', width: '100%',
        borderRadius: 'var(--radius-medium)', border: '1px solid var(--disabled-border)',
        background: 'var(--disabled-surface)', padding: '0 var(--space-150)',
        fontSize: '0.875rem', color: 'var(--disabled)', cursor: 'not-allowed',
        outline: 'none', boxSizing: 'border-box',
      }"
    />
  </div>
</template>
