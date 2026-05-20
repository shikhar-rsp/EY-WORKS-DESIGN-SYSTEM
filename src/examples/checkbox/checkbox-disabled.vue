<template>
  <span :style="{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-100)', opacity: '0.5', cursor: 'not-allowed', fontFamily: '\'Lexend\', sans-serif', fontSize: '14px', color: 'var(--foreground)' }">
    <span :style="{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '16px', height: '16px', borderRadius: 'var(--radius-small)', background: 'var(--primary)', flexShrink: '0' }">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </span>
    Disabled
  </span>
</template>
