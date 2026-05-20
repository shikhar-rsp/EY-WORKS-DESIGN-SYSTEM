<template>
  <div :style="{ width: '256px' }">
    <button
      disabled
      :style="{
        display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between',
        borderRadius: 'var(--radius-medium)', padding: '12px 16px',
        background: 'transparent', border: 'none', color: 'var(--disabled)',
        fontFamily: 'sans-serif', fontSize: '14px',
        cursor: 'not-allowed', opacity: '0.5',
      }"
    >
      <span>Repositories</span>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m6 9 6 6 6-6" />
      </svg>
    </button>
  </div>
</template>
