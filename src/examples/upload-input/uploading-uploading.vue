<template>
  <div :style="{ width: '360px', padding: '12px', border: '1px solid var(--border)', borderRadius: 'var(--radius-medium)', fontFamily: '\'Lexend\', sans-serif' }">
    <div :style="{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }">
      <div :style="{ width: '36px', height: '36px', background: 'var(--accent-purple)', borderRadius: 'var(--radius-small)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" :style="{ color: 'var(--discovery)' }"><path d="M4 4h9l5 5v11a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1z" stroke="currentColor" stroke-width="1.5"/><path d="M13 4v6h6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
      </div>
      <div :style="{ flex: 1 }">
        <p :style="{ fontSize: '13px', fontWeight: 500, color: 'var(--foreground)', margin: '0 0 2px' }">Untitled File.pdf</p>
        <p :style="{ fontSize: '11px', color: 'var(--muted-foreground)', margin: 0 }">60 KB of 18MB · Uploading...</p>
      </div>
      <button :style="{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--muted-foreground)', padding: '4px' }">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 1l12 12M13 1L1 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
      </button>
    </div>
    <div :style="{ height: '4px', background: 'var(--neutral)', borderRadius: '99px', overflow: 'hidden' }">
      <div :style="{ width: '40%', height: '100%', background: 'var(--discovery)', borderRadius: '99px', transition: 'width 300ms' }"></div>
    </div>
  </div>
</template>
