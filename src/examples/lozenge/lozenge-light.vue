<script setup lang="ts">
interface ILozengeItem {
  label: string
  bg: string
  color: string
}

const lozenges: ILozengeItem[] = [
  { label: 'Default', bg: 'var(--muted, #fafafa)', color: 'var(--foreground, #2e2b2b)' },
  { label: 'Red', bg: 'var(--destructive-hover, #ffcccc)', color: 'var(--destructive, #cc0000)' },
  { label: 'Blue', bg: 'var(--accent-blue, #d7e8ff)', color: 'var(--info, #2d70cf)' },
  { label: 'Yellow', bg: 'var(--accent-yellow, #fef3c7)', color: 'var(--warning, #d97706)' },
  { label: 'Lime', bg: 'var(--accent-lime, #ecfccb)', color: 'var(--success, #65a30d)' },
  { label: 'Brand', bg: 'var(--primary-subtle, #fee4df)', color: 'var(--primary, #f8785e)' },
  { label: 'Teal', bg: 'var(--accent-teal, #d9f0f7)', color: 'var(--accent-teal-bold, #358eac)' },
  { label: 'Magenta', bg: 'var(--accent-magenta, #f8e0ee)', color: 'var(--accent-magenta-bold, #b24f8c)' },
  { label: 'Green', bg: 'var(--accent-green, #d1fae5)', color: 'var(--accent-green-bold, #229666)' },
  { label: 'Grey', bg: 'var(--secondary, #f4f4f4)', color: 'var(--secondary-foreground, #505258)' },
]
</script>

<template>
  <div :style="{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px', padding: '16px' }">
    <div
      v-for="loz in lozenges"
      :key="loz.label"
      :style="{
        display: 'inline-flex',
        alignItems: 'center',
        borderRadius: '4px',
        flexShrink: '0',
        height: '16px',
        padding: '0 4px',
        backgroundColor: loz.bg,
        color: loz.color,
        fontFamily: '\'Lexend\', sans-serif',
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '16px',
        whiteSpace: 'nowrap',
        userSelect: 'none',
      }"
    >
      {{ loz.label }}
    </div>
  </div>
</template>
