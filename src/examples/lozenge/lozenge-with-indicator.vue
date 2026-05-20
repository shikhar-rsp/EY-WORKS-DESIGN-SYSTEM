<script setup lang="ts">
interface ILozengeItem {
  label: string
  bg: string
  color: string
  border?: string
}

const lozenges: ILozengeItem[] = [
  { label: 'Active', bg: 'var(--primary, #f8785e)', color: '#ffffff' },
  { label: 'Error', bg: 'var(--accent-red-bold, #ff3333)', color: '#ffffff' },
  { label: 'Success', bg: 'var(--accent-green-bold, #229666)', color: '#ffffff' },
  { label: 'Warning', bg: 'var(--accent-yellow, #fef3c7)', color: 'var(--warning, #d97706)' },
  { label: 'Info', bg: 'transparent', color: 'var(--info, #2d70cf)', border: '1px solid var(--info, #2d70cf)' },
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
        gap: '4px',
        backgroundColor: loz.bg,
        border: loz.border,
        color: loz.color,
        fontFamily: '\'Lexend\', sans-serif',
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '16px',
        whiteSpace: 'nowrap',
        userSelect: 'none',
      }"
    >
      <!-- Indicator dot -->
      <span
        :style="{
          display: 'inline-block',
          width: '8px',
          height: '8px',
          borderRadius: '9999px',
          backgroundColor: 'currentColor',
          opacity: 0.7,
          flexShrink: '0',
        }"
      ></span>
      {{ loz.label }}
    </div>
  </div>
</template>
