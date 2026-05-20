<script setup lang="ts">
interface ILozengeItem {
  label: string
  bg: string
  color: string
}

const lozenges: ILozengeItem[] = [
  { label: 'Default', bg: 'var(--foreground, #2e2b2b)', color: '#ffffff' },
  { label: 'Red', bg: 'var(--accent-red-bold, #ff3333)', color: '#ffffff' },
  { label: 'Blue', bg: 'var(--accent-blue-bold, #60a2ff)', color: '#ffffff' },
  { label: 'Yellow', bg: 'var(--accent-yellow-bold, #fcd34d)', color: 'var(--foreground, #2e2b2b)' },
  { label: 'Lime', bg: 'var(--accent-lime-bold, #a3e635)', color: 'var(--foreground, #2e2b2b)' },
  { label: 'Brand', bg: 'var(--primary, #f8785e)', color: '#ffffff' },
  { label: 'Teal', bg: 'var(--accent-teal-bold, #358eac)', color: '#ffffff' },
  { label: 'Magenta', bg: 'var(--accent-magenta-bold, #b24f8c)', color: '#ffffff' },
  { label: 'Green', bg: 'var(--accent-green-bold, #229666)', color: '#ffffff' },
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
