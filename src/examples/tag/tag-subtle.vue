<script setup lang="ts">
const tags = [
  { label: 'Default', bg: 'var(--muted, #fafafa)' },
  { label: 'Brand', bg: 'var(--primary-subtlest, #fff5f3)' },
  { label: 'White', bg: 'var(--background, #ffffff)' },
  { label: 'Red', bg: 'var(--destructive-subtle, #ffe5e5)' },
  { label: 'Blue', bg: 'var(--accent-blue, #d7e8ff)' },
  { label: 'Yellow', bg: 'var(--accent-yellow, #fef3c7)' },
  { label: 'Purple', bg: 'var(--accent-purple, #e0e3f6)' },
  { label: 'Lime Green', bg: 'var(--accent-lime, #ecfccb)' },
]

const getStyle = (bg: string) => ({
  display: 'inline-flex',
  alignItems: 'center',
  borderRadius: 'var(--radius-full, 99px)',
  height: '28px',
  padding: 'var(--space-050, 4px) var(--space-150, 12px)',
  background: bg,
  color: 'var(--foreground, #2e2b2b)',
  cursor: 'pointer',
  userSelect: 'none' as const,
  transition: 'background-color 150ms',
  fontFamily: '\'Lexend\', sans-serif',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '20px',
  whiteSpace: 'nowrap' as const,
})
</script>

<template>
  <div :style="{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px', padding: '24px' }">
    <span
      v-for="tag in tags"
      :key="tag.label"
      :style="getStyle(tag.bg)"
      tabindex="0"
    >
      {{ tag.label }}
    </span>
  </div>
</template>
