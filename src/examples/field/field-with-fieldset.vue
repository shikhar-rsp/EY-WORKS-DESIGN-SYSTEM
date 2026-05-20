<script setup lang="ts">
// Static component — no reactive state needed
</script>

<template>
  <fieldset
    :style="{
      border: 0, padding: 0, margin: 0, display: 'flex',
      flexDirection: 'column', gap: 'var(--space-200)', width: '288px',
    }"
  >
    <legend :style="{ fontSize: '1rem', fontWeight: 600, color: 'var(--foreground)', lineHeight: 1 }">Account details</legend>
    <p :style="{ fontSize: '0.75rem', lineHeight: '1.625', color: 'var(--muted-foreground)', margin: 0 }">
      Used to sign in and receive notifications.
    </p>
    <div :style="{ display: 'flex', flexDirection: 'column', gap: 'var(--space-200)' }">
      <div :style="{ display: 'flex', flexDirection: 'column', gap: 'var(--space-075)' }">
        <label for="fs-name" :style="{ fontSize: '0.875rem', fontWeight: 500, lineHeight: 1, color: 'var(--foreground)' }">Full name</label>
        <input
          id="fs-name"
          type="text"
          placeholder="Jane Doe"
          :style="{
            height: '36px', width: '100%', borderRadius: 'var(--radius-medium)',
            border: '1px solid var(--border-input)', background: 'var(--background)',
            padding: '0 var(--space-200)', fontSize: '0.875rem', outline: 'none', boxSizing: 'border-box',
          }"
        />
      </div>
      <div :style="{ display: 'flex', flexDirection: 'column', gap: 'var(--space-075)' }">
        <label for="fs-email" :style="{ fontSize: '0.875rem', fontWeight: 500, lineHeight: 1, color: 'var(--foreground)' }">Email</label>
        <input
          id="fs-email"
          type="email"
          placeholder="jane@example.com"
          :style="{
            height: '36px', width: '100%', borderRadius: 'var(--radius-medium)',
            border: '1px solid var(--border-input)', background: 'var(--background)',
            padding: '0 var(--space-200)', fontSize: '0.875rem', outline: 'none', boxSizing: 'border-box',
          }"
        />
      </div>
    </div>
  </fieldset>
</template>
