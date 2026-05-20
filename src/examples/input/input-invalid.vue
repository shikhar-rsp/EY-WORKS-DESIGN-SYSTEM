<script setup lang="ts">
// Static component — no reactive state needed
</script>

<template>
  <div :style="{ display: 'flex', flexDirection: 'column', gap: 'var(--space-075)', width: '256px', padding: '24px' }">
    <label
      for="password"
      :style="{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--destructive)' }"
    >Password</label>
    <input
      id="password"
      type="password"
      value="abc"
      aria-invalid="true"
      :style="{
        display: 'flex', height: '36px', width: '100%',
        borderRadius: 'var(--radius-medium)', border: '1px solid var(--destructive)',
        background: 'var(--background)', padding: '0 var(--space-150)',
        fontSize: '0.875rem', color: 'var(--foreground)', outline: 'none',
        boxShadow: '0 0 0 2px color-mix(in srgb, var(--destructive) 30%, transparent)',
        boxSizing: 'border-box',
      }"
    />
    <p
      role="alert"
      aria-live="polite"
      :style="{ fontSize: '0.75rem', color: 'var(--destructive)', margin: 0 }"
    >Must be at least 8 characters.</p>
  </div>
</template>
