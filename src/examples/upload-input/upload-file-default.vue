<template>
  <div :style="{ width: '400px', fontFamily: '\'Lexend\', sans-serif' }">
    <div :style="{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }">
      <div>
        <p :style="{ fontSize: '14px', fontWeight: 500, color: 'var(--foreground)', margin: 0 }">Attachment</p>
        <p :style="{ fontSize: '12px', color: 'var(--muted-foreground)', margin: 0 }">0/5</p>
      </div>
      <button :style="{ display: 'inline-flex', alignItems: 'center', gap: '6px', height: '32px', padding: '0 12px', fontSize: '14px', fontWeight: 500, color: 'var(--secondary-foreground)', background: 'var(--secondary)', border: '1px solid var(--border)', borderRadius: 'var(--radius-medium)', cursor: 'pointer' }">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1v8M3 5l4-4 4 4M1 11v1a1 1 0 001 1h10a1 1 0 001-1v-1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        Upload File
      </button>
    </div>
    <div :style="{ border: '1px dashed var(--border-hover)', borderRadius: 'var(--radius-medium)', padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" :style="{ color: 'var(--muted-foreground)' }"><path d="M12 4v12M8 8l4-4 4 4M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <p :style="{ fontSize: '14px', color: 'var(--muted-foreground)', margin: 0, textAlign: 'center' }">Drag and Drop files here<br/><span :style="{ fontSize: '12px' }">Max file size 5MB</span></p>
    </div>
  </div>
</template>
