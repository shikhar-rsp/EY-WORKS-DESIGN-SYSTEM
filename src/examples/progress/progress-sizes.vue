<template>
  <div :style="{ display: 'flex', flexDirection: 'column', gap: 'var(--space-300)', width: '256px' }">

    <!-- sm (4px) -->
    <div :style="{ display: 'flex', flexDirection: 'column', gap: 'var(--space-100)' }">
      <span :style="{ fontFamily: 'var(--font-lexend, sans-serif)', fontSize: '12px', color: 'var(--muted-foreground)' }">sm</span>
      <div
        role="progressbar"
        aria-valuenow="40"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label="Progress"
        :style="{
          position: 'relative', width: '100%', height: '4px',
          overflow: 'hidden', borderRadius: 'var(--radius-full)',
          background: 'var(--muted)',
        }"
      >
        <div :style="{
          height: '100%', width: '100%', borderRadius: 'var(--radius-full)',
          background: 'var(--primary)',
          transform: 'translateX(-60%)',
          transition: 'transform 300ms ease-in-out',
        }" />
      </div>
    </div>

    <!-- md (8px) -->
    <div :style="{ display: 'flex', flexDirection: 'column', gap: 'var(--space-100)' }">
      <span :style="{ fontFamily: 'var(--font-lexend, sans-serif)', fontSize: '12px', color: 'var(--muted-foreground)' }">md</span>
      <div
        role="progressbar"
        aria-valuenow="60"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label="Progress"
        :style="{
          position: 'relative', width: '100%', height: '8px',
          overflow: 'hidden', borderRadius: 'var(--radius-full)',
          background: 'var(--muted)',
        }"
      >
        <div :style="{
          height: '100%', width: '100%', borderRadius: 'var(--radius-full)',
          background: 'var(--primary)',
          transform: 'translateX(-40%)',
          transition: 'transform 300ms ease-in-out',
        }" />
      </div>
    </div>

    <!-- lg (12px) -->
    <div :style="{ display: 'flex', flexDirection: 'column', gap: 'var(--space-100)' }">
      <span :style="{ fontFamily: 'var(--font-lexend, sans-serif)', fontSize: '12px', color: 'var(--muted-foreground)' }">lg</span>
      <div
        role="progressbar"
        aria-valuenow="80"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label="Progress"
        :style="{
          position: 'relative', width: '100%', height: '12px',
          overflow: 'hidden', borderRadius: 'var(--radius-full)',
          background: 'var(--muted)',
        }"
      >
        <div :style="{
          height: '100%', width: '100%', borderRadius: 'var(--radius-full)',
          background: 'var(--primary)',
          transform: 'translateX(-20%)',
          transition: 'transform 300ms ease-in-out',
        }" />
      </div>
    </div>

  </div>
</template>
