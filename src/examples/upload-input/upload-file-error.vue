<template>
  <div :style="{ width: '400px', fontFamily: '\'Lexend\', sans-serif' }">
    <div :style="{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }">
      <div>
        <p :style="{ fontSize: '14px', fontWeight: 500, color: 'var(--foreground)', margin: 0 }">Attachment</p>
        <p :style="{ fontSize: '12px', color: 'var(--muted-foreground)', margin: 0 }">1/5</p>
      </div>
      <button :style="{ display: 'inline-flex', alignItems: 'center', height: '32px', padding: '0 12px', fontSize: '14px', fontWeight: 500, color: 'var(--secondary-foreground)', background: 'var(--secondary)', border: '1px solid var(--border)', borderRadius: 'var(--radius-medium)', cursor: 'pointer' }">Upload File</button>
    </div>
    <div :style="{ background: 'var(--destructive-subtle)', border: '1px solid var(--destructive)', borderRadius: 'var(--radius-medium)', padding: '10px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }">
      <div :style="{ display: 'flex', alignItems: 'center', gap: '8px' }">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" :style="{ color: 'var(--destructive)', flexShrink: 0 }"><circle cx="8" cy="8" r="6.5" stroke="currentColor" stroke-width="1.5"/><path d="M8 5v3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="8" cy="11" r="0.75" fill="currentColor"/></svg>
        <div>
          <span :style="{ fontSize: '13px', color: 'var(--foreground)', display: 'block' }">Document.pdf</span>
          <span :style="{ fontSize: '11px', color: 'var(--destructive)' }">File type not supported</span>
        </div>
      </div>
      <div :style="{ display: 'flex', gap: '8px' }">
        <button :style="{ display: 'inline-flex', alignItems: 'center', height: '28px', padding: '0 10px', fontSize: '12px', color: 'var(--destructive)', background: 'transparent', border: '1px solid var(--destructive)', borderRadius: 'var(--radius-small)', cursor: 'pointer' }">Delete</button>
        <button :style="{ display: 'inline-flex', alignItems: 'center', height: '28px', padding: '0 10px', fontSize: '12px', color: 'var(--primary-foreground)', background: 'var(--primary)', border: '1px solid transparent', borderRadius: 'var(--radius-small)', cursor: 'pointer' }">Upload</button>
      </div>
    </div>
  </div>
</template>
