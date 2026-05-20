<script setup lang="ts">
interface ILozengeItem {
  label: string
  borderColor: string
  color: string
}

const lozenges: ILozengeItem[] = [
  { label: 'Default', borderColor: 'var(--border-hover, #c2bcbb)', color: 'var(--foreground, #2e2b2b)' },
  { label: 'Red', borderColor: 'var(--destructive, #cc0000)', color: 'var(--destructive, #cc0000)' },
  { label: 'Blue', borderColor: 'var(--info, #2d70cf)', color: 'var(--info, #2d70cf)' },
  { label: 'Yellow', borderColor: 'var(--warning, #d97706)', color: 'var(--warning, #d97706)' },
  { label: 'Lime', borderColor: 'var(--success, #65a30d)', color: 'var(--success, #65a30d)' },
  { label: 'Brand', borderColor: 'var(--primary, #f8785e)', color: 'var(--primary, #f8785e)' },
  { label: 'Teal', borderColor: 'var(--accent-teal-bold, #358eac)', color: 'var(--accent-teal-bold, #358eac)' },
  { label: 'Magenta', borderColor: 'var(--accent-magenta-bold, #b24f8c)', color: 'var(--accent-magenta-bold, #b24f8c)' },
  { label: 'Green', borderColor: 'var(--accent-green-bold, #229666)', color: 'var(--accent-green-bold, #229666)' },
  { label: 'Grey', borderColor: 'var(--border-hover, #c2bcbb)', color: 'var(--secondary-foreground, #505258)' },
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
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: loz.borderColor,
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
