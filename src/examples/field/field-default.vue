<script setup lang="ts">
// Static component — no reactive state needed
</script>

<template>
  <div :style="{ display: 'flex', flexDirection: 'column', gap: 'var(--space-075)', width: '256px' }">
    <label
      for="field-email"
      :style="{
        display: 'inline-flex', alignItems: 'center', gap: '4px',
        fontSize: '0.875rem', fontWeight: 500, lineHeight: 1,
        color: 'var(--foreground)', userSelect: 'none',
      }"
    >Email</label>
    <input
      id="field-email"
      type="email"
      placeholder="you@example.com"
      :style="{
        height: '36px', width: '100%', borderRadius: 'var(--radius-medium)',
        border: '1px solid var(--border-input)', background: 'var(--background)',
        padding: '0 var(--space-200)', fontSize: '0.875rem', color: 'var(--foreground)',
        outline: 'none', boxSizing: 'border-box',
      }"
    />
    <p :style="{ fontSize: '0.75rem', lineHeight: '1.625', color: 'var(--muted-foreground)', margin: 0 }">
      We'll never share your email.
    </p>
  </div>
</template>
