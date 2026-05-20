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
      <span
        :style="{
          fontSize: '14px',
          fontWeight: 500,
          color: 'var(--secondary-foreground)',
          fontFamily: 'var(--font-lexend, sans-serif)',
        }"
      >Panel One</span>
    </div>

    <div
      :style="{
        width: '1px',
        flexShrink: 0,
        background: 'var(--border)',
        cursor: 'col-resize',
      }"
    />

    <div
      :style="{
        flex: '1',
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
      >Panel Two</span>
    </div>
  </div>
</template>
