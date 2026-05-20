<template>
  <div
    :style="{
      position: 'relative',
      width: '100%',
      maxWidth: '512px',
      borderRadius: 'var(--radius-large)',
      border: '1px solid rgba(204,0,0,0.5)',
      padding: 'var(--space-200)',
      color: 'var(--destructive)',
      fontFamily: 'var(--font-lexend, sans-serif)',
    }"
    role="alert"
  >
    <svg
      :style="{
        position: 'absolute',
        left: 'var(--space-200)',
        top: 'var(--space-200)',
        color: 'var(--destructive)',
      }"
      width="16" height="16" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" stroke-width="1.5"
      stroke-linecap="round" stroke-linejoin="round"
    >
      <circle cx="12" cy="12" r="10"/>
      <line x1="15" y1="9" x2="9" y2="15"/>
      <line x1="9" y1="9" x2="15" y2="15"/>
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
      >Error</h5>
      <div :style="{ fontSize: '14px', lineHeight: '1.5' }">
        Your session has expired. Please log in again.
      </div>
    </div>
  </div>
</template>
