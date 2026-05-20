<script setup lang="ts">
const tags = [
  { label: 'Default', color: 'default' },
  { label: 'Brand', color: 'brand' },
  { label: 'White', color: 'white' },
  { label: 'Red', color: 'red' },
  { label: 'Blue', color: 'blue' },
  { label: 'Yellow', color: 'yellow' },
  { label: 'Purple', color: 'purple' },
  { label: 'Lime Green', color: 'lime' },
]

const borderColor: Record<string, string> = {
  default: 'var(--border, #ebe9e8)',
  brand: 'var(--primary, #f8785e)',
  white: 'var(--border, #ebe9e8)',
  red: 'var(--destructive, #cc0000)',
  blue: 'var(--info, #2d70cf)',
  yellow: 'var(--warning, #d97706)',
  purple: 'var(--discovery, #505eac)',
  lime: 'var(--success, #65a30d)',
}

const getStyle = (color: string) => ({
  display: 'inline-flex',
  alignItems: 'center',
  borderRadius: 'var(--radius-full, 99px)',
  height: '28px',
  padding: 'var(--space-050, 4px) var(--space-150, 12px)',
  border: `1px solid ${borderColor[color]}`,
  color: 'var(--foreground, #2e2b2b)',
  background: 'transparent',
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
      :key="tag.color"
      :style="getStyle(tag.color)"
      tabindex="0"
    >
      {{ tag.label }}
    </span>
  </div>
</template>
