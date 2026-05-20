<template>
  <div
    :style="{
      width: '100%',
      maxWidth: '576px',
      minHeight: '300px',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      borderRadius: 'var(--radius-large)',
      border: '1px solid var(--border)',
    }"
  >
    <div
      :style="{
        flex: '0 0 60%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }"
    >
      <span
        :style="{
          fontSize: '14px',
          fontWeight: 500,
          color: 'var(--secondary-foreground)',
          fontFamily: 'var(--font-lexend, sans-serif)',
        }"
      >Top Panel</span>
    </div>

    <div :style="{ height: '1px', flexShrink: 0, background: 'var(--border)', cursor: 'row-resize' }" />

    <div
      :style="{
        flex: '0 0 40%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }"
    >
      <span
        :style="{
          fontSize: '14px',
          fontWeight: 500,
          color: 'var(--secondary-foreground)',
          fontFamily: 'var(--font-lexend, sans-serif)',
        }"
      >Bottom Panel</span>
    </div>
  </div>
</template>
