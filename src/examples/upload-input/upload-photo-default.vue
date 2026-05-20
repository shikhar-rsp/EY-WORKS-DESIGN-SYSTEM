<template>
  <div :style="{ display: 'flex', gap: '16px', alignItems: 'flex-start', fontFamily: '\'Lexend\', sans-serif' }">
    <div :style="{ width: '144px', height: '144px', background: 'var(--primary)', borderRadius: 'var(--radius-medium)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" :style="{ color: 'var(--primary-foreground)' }"><path d="M21 15l-5-5L5 21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="8.5" cy="8.5" r="2.5" stroke="currentColor" stroke-width="1.5"/><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="1.5"/></svg>
    </div>
    <div :style="{ display: 'flex', flexDirection: 'column', gap: '4px' }">
      <p :style="{ fontSize: '14px', fontWeight: 500, color: 'var(--foreground)', margin: 0 }">Childs Photo</p>
      <p :style="{ fontSize: '12px', color: 'var(--muted-foreground)', margin: 0 }">(Optional)</p>
      <p :style="{ fontSize: '12px', color: 'var(--muted-foreground)', margin: '4px 0 8px' }">Upload a photo of the child. Max file size 5MB.</p>
      <button :style="{ display: 'inline-flex', alignItems: 'center', height: '32px', padding: '0 12px', fontSize: '13px', fontWeight: 500, color: 'var(--foreground)', background: 'var(--background)', border: '1px solid var(--border)', borderRadius: 'var(--radius-medium)', cursor: 'pointer' }">Upload Photo</button>
    </div>
  </div>
</template>
