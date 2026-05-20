<template>
  <div :style="{ width: '360px', padding: '12px', border: '1px solid var(--destructive)', borderRadius: 'var(--radius-medium)', fontFamily: '\'Lexend\', sans-serif' }">
    <div :style="{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }">
      <div :style="{ width: '36px', height: '36px', background: 'var(--destructive-subtle)', borderRadius: 'var(--radius-small)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" :style="{ color: 'var(--destructive)' }"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><path d="M12 8v5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="12" cy="16" r="1" fill="currentColor"/></svg>
      </div>
      <div :style="{ flex: 1 }">
        <p :style="{ fontSize: '13px', fontWeight: 500, color: 'var(--foreground)', margin: '0 0 2px' }">Untitled File.pdf</p>
        <p :style="{ fontSize: '11px', color: 'var(--destructive)', margin: 0 }">5.4 MB of 18MB · Error...</p>
      </div>
      <button :style="{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--muted-foreground)', padding: '4px' }">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 1l12 12M13 1L1 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
      </button>
    </div>
    <div :style="{ height: '4px', background: 'var(--neutral)', borderRadius: '99px', overflow: 'hidden', marginBottom: '6px' }">
      <div :style="{ width: '30%', height: '100%', background: 'var(--destructive)', borderRadius: '99px' }"></div>
    </div>
    <p :style="{ fontSize: '11px', color: 'var(--destructive)', margin: 0 }">Upload failed. Please try again.</p>
  </div>
</template>
