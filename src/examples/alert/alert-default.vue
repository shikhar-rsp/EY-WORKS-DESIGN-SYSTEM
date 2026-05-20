<template>
  <div
    :style="{
      position: 'relative',
      width: '100%',
      maxWidth: '512px',
      borderRadius: 'var(--radius-large)',
      border: '1px solid var(--border)',
      padding: 'var(--space-200)',
      background: 'var(--background)',
      color: 'var(--foreground)',
      fontFamily: 'var(--font-lexend, sans-serif)',
    }"
    role="alert"
  >
    <!-- Icon positioned absolute -->
    <svg
      :style="{
        position: 'absolute',
        left: 'var(--space-200)',
        top: 'var(--space-200)',
        color: 'var(--foreground)',
      }"
      width="16" height="16" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" stroke-width="1.5"
      stroke-linecap="round" stroke-linejoin="round"
    >
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" y1="8" x2="12" y2="12"/>
      <line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>

    <div :style="{ paddingLeft: '28px' }">
      <h5
        :style="{
          marginBottom: '4px',
          fontSize: '14px',
          fontWeight: 500,
          lineHeight: 1,
          letterSpacing: '-0.01em',
        }"
      >Heads up!</h5>
      <div :style="{ fontSize: '14px', lineHeight: '1.5', color: 'var(--secondary-foreground)' }">
        You can add components to your app using the CLI.
      </div>
    </div>
  </div>
</template>
