<script setup lang="ts">
interface ILozengeItem {
  label: string
  bg: string
  color: string
  border?: string
}

const lozenges: ILozengeItem[] = [
  { label: 'In Progress', bg: 'var(--primary, #f8785e)', color: '#ffffff' },
  { label: 'Review', bg: 'transparent', color: 'var(--info, #2d70cf)', border: '1px solid var(--info, #2d70cf)' },
  { label: 'Approved', bg: 'var(--accent-green, #d1fae5)', color: 'var(--accent-green-bold, #229666)' },
  { label: 'Blocked', bg: 'var(--background, #ffffff)', color: 'var(--destructive, #cc0000)', border: '1px solid var(--destructive, #cc0000)' },
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
      <!-- Arrow Left icon -->
      <span :style="{ display: 'inline-flex', alignItems: 'center', flexShrink: '0', width: '14px', height: '14px' }">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
      {{ loz.label }}
    </div>
  </div>
</template>
