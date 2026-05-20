<template>
  <button disabled :style="{
    display: 'inline-flex', alignItems: 'center', width: '250px', height: '38px',
    border: '1px solid var(--border)', borderRadius: 'var(--radius-medium)',
    background: 'var(--background)', padding: '0 13px',
    fontFamily: 'var(--font-lexend, sans-serif)', fontSize: '16px',
    cursor: 'not-allowed', gap: '8px', opacity: 0.5,
  }">
    <span :style="{ flex: 1, textAlign: 'left', color: 'var(--placeholder)' }">Select date</span>
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" :style="{ color: 'var(--muted-foreground)', flexShrink: 0 }">
      <rect x="2" y="3" width="12" height="11" rx="1.5"/><path d="M2 7h12M5.5 1.5v3M10.5 1.5v3"/>
    </svg>
  </button>
</template>
