<template>
  <div
    :style="{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-100)',
      width: '240px',
      padding: 'var(--space-200)',
    }"
  >
    <!-- Default -->
    <button
      :style="{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        gap: 'var(--space-150)',
        padding: 'var(--space-100)',
        borderRadius: 'var(--radius-medium)',
        border: 'none',
        background: 'var(--background)',
        color: 'var(--subtle)',
        fontFamily: 'var(--font-lexend), sans-serif',
        fontSize: '14px',
        lineHeight: '20px',
        textAlign: 'left',
        cursor: 'pointer',
      }"
      @mouseover="(e: MouseEvent) => (e.currentTarget as HTMLElement).style.background = 'var(--primary-subtle)'"
      @mouseout="(e: MouseEvent) => (e.currentTarget as HTMLElement).style.background = 'var(--background)'"
    >
      Default
    </button>

    <!-- Hover -->
    <button
      :style="{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        gap: 'var(--space-150)',
        padding: 'var(--space-100)',
        borderRadius: 'var(--radius-medium)',
        border: 'none',
        background: 'var(--primary-subtle)',
        color: 'var(--subtle)',
        fontFamily: 'var(--font-lexend), sans-serif',
        fontSize: '14px',
        lineHeight: '20px',
        textAlign: 'left',
        cursor: 'pointer',
      }"
    >
      Hover
    </button>

    <!-- Selected -->
    <button
      :style="{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        gap: 'var(--space-150)',
        padding: 'var(--space-100)',
        borderRadius: 'var(--radius-medium)',
        border: 'none',
        background: 'var(--accent-gray-subtlest)',
        color: 'var(--foreground)',
        fontFamily: 'var(--font-lexend), sans-serif',
        fontSize: '14px',
        fontWeight: '600',
        lineHeight: '20px',
        textAlign: 'left',
        cursor: 'pointer',
      }"
    >
      Selected
    </button>

    <!-- Pressed -->
    <button
      :style="{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        gap: 'var(--space-150)',
        padding: 'var(--space-100)',
        borderRadius: 'var(--radius-medium)',
        border: 'none',
        background: 'var(--primary-subtle-pressed)',
        color: 'var(--subtle)',
        fontFamily: 'var(--font-lexend), sans-serif',
        fontSize: '14px',
        lineHeight: '20px',
        textAlign: 'left',
        cursor: 'pointer',
      }"
    >
      Pressed
    </button>

    <!-- Disabled -->
    <button
      disabled
      :style="{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        gap: 'var(--space-150)',
        padding: 'var(--space-100)',
        borderRadius: 'var(--radius-medium)',
        border: 'none',
        background: 'var(--background)',
        color: 'var(--disabled)',
        fontFamily: 'var(--font-lexend), sans-serif',
        fontSize: '14px',
        lineHeight: '20px',
        textAlign: 'left',
        pointerEvents: 'none',
        opacity: '0.6',
      }"
    >
      Disabled
    </button>
  </div>
</template>
