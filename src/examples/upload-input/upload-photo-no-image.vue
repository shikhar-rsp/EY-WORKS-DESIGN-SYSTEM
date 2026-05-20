<template>
  <div :style="{ display: 'flex', gap: '16px', alignItems: 'flex-start', fontFamily: '\'Lexend\', sans-serif' }">
    <div :style="{ width: '144px', height: '144px', background: 'var(--neutral)', borderRadius: 'var(--radius-medium)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" :style="{ color: 'var(--muted-foreground)' }"><circle cx="12" cy="8" r="4" stroke="currentColor" stroke-width="1.5"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
    </div>
    <div :style="{ display: 'flex', flexDirection: 'column', gap: '4px' }">
      <p :style="{ fontSize: '14px', fontWeight: 500, color: 'var(--foreground)', margin: 0 }">Childs Photo</p>
      <p :style="{ fontSize: '12px', color: 'var(--muted-foreground)', margin: '0 0 4px' }">Upload a photo of the child. Max 5MB.</p>
      <p :style="{ fontSize: '12px', color: 'var(--foreground)', margin: '0 0 8px' }">IMG123654qwerqweq</p>
      <div :style="{ display: 'flex', gap: '8px' }">
        <button :style="{ display: 'inline-flex', alignItems: 'center', height: '28px', padding: '0 10px', fontSize: '12px', color: 'var(--destructive)', background: 'transparent', border: '1px solid var(--destructive)', borderRadius: 'var(--radius-small)', cursor: 'pointer' }">Delete</button>
        <button :style="{ display: 'inline-flex', alignItems: 'center', height: '28px', padding: '0 10px', fontSize: '12px', color: 'var(--primary-foreground)', background: 'var(--primary)', border: 'none', borderRadius: 'var(--radius-small)', cursor: 'pointer' }">Upload</button>
      </div>
    </div>
  </div>
</template>
