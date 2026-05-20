<template>
  <div :style="{
    display: 'inline-flex', flexDirection: 'column',
    borderRadius: 'var(--radius-medium)', border: '1px solid var(--border)',
    background: 'var(--background)', overflow: 'hidden', width: '288px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.08)'
  }">

    <!-- Header -->
    <div :style="{ padding: '20px 20px 0' }">
      <h3 :style="{ margin: '0', fontSize: '16px', fontWeight: 600, lineHeight: '1.4', color: 'var(--foreground)', fontFamily: 'var(--font-lexend, sans-serif)' }">Notifications</h3>
    </div>

    <!-- Content -->
    <div :style="{ padding: '16px 20px 20px' }">
      <p :style="{ margin: '0', fontSize: '14px', color: 'var(--muted-foreground)', fontFamily: 'var(--font-lexend, sans-serif)', lineHeight: '1.5' }">
        You have 3 unread notifications.
      </p>
    </div>

  </div>
</template>
