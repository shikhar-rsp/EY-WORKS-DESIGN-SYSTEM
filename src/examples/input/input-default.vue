<script setup lang="ts">
// Static component — no reactive state needed
</script>

<template>
  <div :style="{ display: 'flex', flexDirection: 'column', gap: '16px', width: '256px' }">
    <input
      type="text"
      placeholder="Enter text…"
      :style="{
        display: 'flex', height: '36px', width: '100%', minWidth: 0,
        borderRadius: 'var(--radius-medium)', border: '1px solid var(--border)',
        background: 'var(--background)', padding: '0 var(--space-150)',
        fontSize: '0.875rem', color: 'var(--foreground)', outline: 'none',
        boxSizing: 'border-box',
      }"
    />
    <div :style="{ display: 'flex', flexDirection: 'column', gap: 'var(--space-075)' }">
      <label
        for="email"
        :style="{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--foreground)' }"
      >Email address</label>
      <input
        id="email"
        type="email"
        placeholder="you@example.com"
        :style="{
          display: 'flex', height: '36px', width: '100%', minWidth: 0,
          borderRadius: 'var(--radius-medium)', border: '1px solid var(--border)',
          background: 'var(--background)', padding: '0 var(--space-150)',
          fontSize: '0.875rem', color: 'var(--foreground)', outline: 'none',
          boxSizing: 'border-box',
        }"
      />
      <p :style="{ fontSize: '0.75rem', lineHeight: '1.625', color: 'var(--muted-foreground)', margin: 0 }">
        We'll never share your email.
      </p>
    </div>
  </div>
</template>
