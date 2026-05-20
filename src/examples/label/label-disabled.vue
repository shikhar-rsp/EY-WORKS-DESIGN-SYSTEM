<template>
  <div :style="{ display: 'flex', flexDirection: 'column', gap: '8px' }">
    <label for="disabled-input" :style="{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-050)',
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: 1,
      color: 'var(--foreground)',
      userSelect: 'none',
      opacity: 0.7,
      cursor: 'not-allowed',
    }">Disabled field</label>
    <input
      id="disabled-input"
      type="text"
      disabled
      placeholder="Not available"
      :style="{
        height: '36px',
        borderRadius: 'var(--radius-medium)',
        border: '1px solid var(--border-input)',
        background: 'var(--background)',
        padding: '0 var(--space-200)',
        fontSize: '14px',
        color: 'var(--foreground)',
        opacity: 0.5,
        cursor: 'not-allowed',
        outline: 'none',
      }"
    />
  </div>
</template>
