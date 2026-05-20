<template>
  <div
    :style="{
      width: '100%',
      maxWidth: '576px',
      minHeight: '200px',
      display: 'flex',
      flexDirection: 'row',
      overflow: 'hidden',
      borderRadius: 'var(--radius-large)',
      border: '1px solid var(--border)',
    }"
  >
    <div
      :style="{
        flex: '1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }"
    >
      <span :style="{ fontSize: '14px', fontWeight: 500, color: 'var(--secondary-foreground)' }">
        Panel One
      </span>
    </div>

    <!-- Handle with grip -->
    <div
      :style="{
        position: 'relative',
        width: '1px',
        flexShrink: 0,
        background: 'var(--border)',
        cursor: 'col-resize',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }"
    >
      <div
        :style="{
          position: 'absolute',
          zIndex: 10,
          width: '12px',
          height: '16px',
          background: 'var(--border)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-small)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }"
      >
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="9" cy="5" r="1"/><circle cx="9" cy="12" r="1"/><circle cx="9" cy="19" r="1"/>
          <circle cx="15" cy="5" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="19" r="1"/>
        </svg>
      </div>
    </div>

    <div
      :style="{
        flex: '1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }"
    >
      <span :style="{ fontSize: '14px', fontWeight: 500, color: 'var(--secondary-foreground)' }">
        Panel Two
      </span>
    </div>
  </div>
</template>
