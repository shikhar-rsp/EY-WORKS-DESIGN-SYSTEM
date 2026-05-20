<script setup lang="ts">
// Static component — no reactive state needed
</script>

<template>
  <div :style="{ display: 'flex', flexDirection: 'column', gap: 'var(--space-075)', width: '256px' }">
    <label
      for="field-err-email"
      :style="{
        fontSize: '0.875rem', fontWeight: 500, lineHeight: 1,
        color: 'var(--destructive)', userSelect: 'none',
      }"
    >Email</label>
    <input
      id="field-err-email"
      type="email"
      value="not-an-email"
      aria-invalid="true"
      :style="{
        height: '36px', width: '100%', borderRadius: 'var(--radius-medium)',
        border: '1px solid var(--destructive)', background: 'var(--background)',
        padding: '0 var(--space-200)', fontSize: '0.875rem', color: 'var(--foreground)',
        outline: 'none', boxSizing: 'border-box',
      }"
    />
    <p
      role="alert"
      aria-live="polite"
      :style="{ fontSize: '0.75rem', color: 'var(--destructive)', margin: 0 }"
    >Please enter a valid email address.</p>
  </div>
</template>
