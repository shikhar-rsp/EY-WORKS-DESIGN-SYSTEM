<script setup lang="ts">
const arrowLeftPath = 'M4 12H20M4 12L10 6M4 12L10 18'
const closePath = 'M6 18L18 6M6 6l12 12'

const tags = [
  { label: 'With Left Icon', variant: 'brand', leftIcon: true, rightIcon: false },
  { label: 'Dismissible', variant: 'brand', leftIcon: false, rightIcon: true },
  { label: 'Both Icons', variant: 'brand', leftIcon: true, rightIcon: true },
  { label: 'With Left Icon', variant: 'outline-default', leftIcon: true, rightIcon: false },
  { label: 'Dismissible', variant: 'outline-default', leftIcon: false, rightIcon: true },
  { label: 'Remove', variant: 'subtle-red', leftIcon: false, rightIcon: true },
]

const getStyle = (variant: string) => {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    borderRadius: 'var(--radius-full, 99px)',
    height: '28px',
    padding: 'var(--space-050, 4px) var(--space-150, 12px)',
    gap: 'var(--space-050, 4px)',
    cursor: 'pointer',
    userSelect: 'none' as const,
    transition: 'background-color 150ms',
    fontFamily: '\'Lexend\', sans-serif',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '20px',
    whiteSpace: 'nowrap' as const,
  }
  if (variant === 'brand') return { ...base, background: 'var(--primary, #f8785e)', color: 'var(--primary-foreground, #ffffff)', border: '1px solid transparent' }
  if (variant === 'outline-default') return { ...base, background: 'transparent', color: 'var(--foreground, #2e2b2b)', border: '1px solid var(--border, #ebe9e8)' }
  if (variant === 'subtle-red') return { ...base, background: 'var(--destructive-subtle, #ffe5e5)', color: 'var(--foreground, #2e2b2b)', border: '1px solid transparent' }
  return base
}

const iconStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '12px',
  height: '12px',
  flexShrink: 0,
}
</script>

<template>
  <div :style="{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px', padding: '24px' }">
    <span
      v-for="(tag, i) in tags"
      :key="i"
      :style="getStyle(tag.variant)"
      tabindex="0"
    >
      <span v-if="tag.leftIcon" :style="iconStyle">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path :d="arrowLeftPath" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
      {{ tag.label }}
      <span v-if="tag.rightIcon" :style="iconStyle">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path :d="closePath" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    </span>
  </div>
</template>
