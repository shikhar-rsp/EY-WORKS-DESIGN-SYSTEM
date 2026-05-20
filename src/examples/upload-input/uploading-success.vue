<template>
  <div :style="{ width: '360px', padding: '12px', border: '1px solid var(--border)', borderRadius: 'var(--radius-medium)', fontFamily: '\'Lexend\', sans-serif' }">
    <div :style="{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }">
      <div :style="{ width: '36px', height: '36px', background: 'var(--success-active)', borderRadius: 'var(--radius-small)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" :style="{ color: 'var(--success-foreground)' }"><path d="M5 12l5 5 9-9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
      <div :style="{ flex: 1 }">
        <p :style="{ fontSize: '13px', fontWeight: 500, color: 'var(--foreground)', margin: '0 0 2px' }">Untitled File.pdf</p>
        <p :style="{ fontSize: '11px', color: 'var(--success)', margin: 0 }">18MB · Completed</p>
      </div>
      <button :style="{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--muted-foreground)', padding: '4px' }">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 2h10v10H2zM5 5l4 4M9 5l-4 4" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>
      </button>
    </div>
    <div :style="{ height: '4px', background: 'var(--neutral)', borderRadius: '99px', overflow: 'hidden' }">
      <div :style="{ width: '100%', height: '100%', background: 'var(--success)', borderRadius: '99px' }"></div>
    </div>
  </div>
</template>
