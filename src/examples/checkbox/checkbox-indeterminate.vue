<template>
  <label :style="{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-100)', fontFamily: '\'Lexend\', sans-serif', fontSize: '14px', color: 'var(--foreground)' }">
    <span :style="{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '16px', height: '16px', borderRadius: 'var(--radius-small)', background: 'var(--primary)', flexShrink: '0' }">
      <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1H9" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    </span>
    Select all
  </label>
</template>
