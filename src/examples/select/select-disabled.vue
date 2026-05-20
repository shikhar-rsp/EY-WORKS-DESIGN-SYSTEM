<template>
  <button
    type="button"
    disabled
    :style="{
      display: 'flex',
      height: '36px',
      width: '224px',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderRadius: 'var(--radius-medium)',
      border: '1px solid var(--disabled-border)',
      background: 'var(--disabled-surface)',
      padding: '0 var(--space-150)',
      color: 'var(--disabled)',
      cursor: 'not-allowed',
      fontFamily: 'var(--font-lexend, sans-serif)',
      fontSize: '14px',
      opacity: 0.6,
    }"
  >
    <span>Select an option</span>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="opacity:0.5;flex-shrink:0">
      <path d="m6 9 6 6 6-6"/>
    </svg>
  </button>
</template>
