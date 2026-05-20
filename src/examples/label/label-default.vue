<template>
  <div :style="{ display: 'flex', flexDirection: 'column', gap: '8px' }">
    <label for="email" :style="{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-050)',
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: 1,
      color: 'var(--foreground)',
      userSelect: 'none',
    }">Email address</label>
    <input
      id="email"
      type="email"
      placeholder="you@example.com"
      :style="{
        height: '36px',
        borderRadius: 'var(--radius-medium)',
        border: '1px solid var(--border-input)',
        background: 'var(--background)',
        padding: '0 var(--space-200)',
        fontSize: '14px',
        color: 'var(--foreground)',
        outline: 'none',
      }"
    />
  </div>
</template>
