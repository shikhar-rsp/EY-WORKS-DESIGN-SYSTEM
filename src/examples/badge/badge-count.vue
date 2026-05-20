<template>
  <!-- Badge root: relative wrapper -->
  <div :style="{ position: 'relative', display: 'inline-flex' }">
    <!-- BadgeIndicator: count variant, danger color, top-right placement -->
    <span
      aria-label="5 notifications"
      :style="{
        position: 'absolute',
        zIndex: 10,
        top: '-4px',
        right: '-4px',
        transform: 'translate(33%, -33%)',
        minWidth: '18px',
        height: '18px',
        borderRadius: '9999px',
        padding: '0 4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--destructive, #cc0000)',
        color: 'var(--destructive-foreground, #ffffff)',
        fontFamily: 'var(--font-lexend, sans-serif)',
        fontSize: '10px',
        fontWeight: 600,
        lineHeight: 1,
        boxShadow: '0 0 0 2px var(--background, #ffffff)',
      }"
    >5</span>
    <!-- Avatar fallback -->
    <span :style="{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '32px',
      height: '32px',
      borderRadius: '9999px',
      background: 'var(--muted, #fafafa)',
      color: 'var(--foreground, #2e2b2b)',
      fontFamily: 'var(--font-lexend, sans-serif)',
      fontSize: '12px',
      fontWeight: 500,
    }">JD</span>
  </div>
</template>
