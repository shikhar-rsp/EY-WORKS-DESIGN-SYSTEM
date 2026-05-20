<script setup lang="ts">
const rows = [
  { label: 'Full Name', value: 'Alice Johnson' },
  { label: 'Email', value: 'alice@example.com' },
  { label: 'Role', value: 'Product Designer' },
  { label: 'Department', value: 'Design' },
  { label: 'Location', value: 'San Francisco, CA' },
]

const rowStyle = (isLast: boolean) => ({
  display: 'flex',
  flexDirection: 'row' as const,
  alignItems: 'flex-start' as const,
  gap: '16px',
  padding: '8px 0',
  borderBottom: isLast ? 'none' : '1px solid var(--border, #ebe9e8)',
})

const keyStyle = {
  fontFamily: '\'Lexend\', sans-serif',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '20px',
  color: 'var(--subtlest, #ada5a5)',
  flexShrink: 0,
  minWidth: '100px',
}

const valueStyle = {
  fontFamily: '\'Lexend\', sans-serif',
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '20px',
  color: 'var(--foreground, #2e2b2b)',
}
</script>

<template>
  <div :style="{ padding: '24px', width: '100%', maxWidth: '576px' }">
    <div :style="{ display: 'flex', flexDirection: 'column' }">
      <div v-for="(row, i) in rows" :key="i" :style="rowStyle(i === rows.length - 1)">
        <span :style="keyStyle">{{ row.label }}</span>
        <span :style="valueStyle">{{ row.value }}</span>
      </div>
    </div>
  </div>
</template>
