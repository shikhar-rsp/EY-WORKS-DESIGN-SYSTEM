<script setup lang="ts">
const tags = [
  { label: 'Default', bg: 'var(--secondary, #f4f4f4)', text: 'var(--foreground, #2e2b2b)' },
  { label: 'Brand', bg: 'var(--primary, #f8785e)', text: 'var(--primary-foreground, #ffffff)' },
  { label: 'White', bg: 'var(--background, #ffffff)', text: 'var(--foreground, #2e2b2b)', border: 'var(--border, #ebe9e8)' },
  { label: 'Red', bg: 'var(--destructive-bold, #ff0000)', text: 'var(--primary-foreground, #ffffff)' },
  { label: 'Blue', bg: 'var(--info-bold, #2d70cf)', text: 'var(--primary-foreground, #ffffff)' },
  { label: 'Yellow', bg: 'var(--warning-bold, #fbbf24)', text: 'var(--foreground, #2e2b2b)' },
  { label: 'Purple', bg: 'var(--discovery-bold, #3d4884)', text: 'var(--primary-foreground, #ffffff)' },
  { label: 'Lime Green', bg: 'var(--success-bold, #4d7c0f)', text: 'var(--primary-foreground, #ffffff)' },
]

const getStyle = (tag: typeof tags[0]) => ({
  display: 'inline-flex',
  alignItems: 'center',
  borderRadius: 'var(--radius-full, 99px)',
  height: '28px',
  padding: 'var(--space-050, 4px) var(--space-150, 12px)',
  background: tag.bg,
  color: tag.text,
  border: tag.border ? `1px solid ${tag.border}` : '1px solid transparent',
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
      :style="getStyle(tag)"
      tabindex="0"
    >
      {{ tag.label }}
    </span>
  </div>
</template>
