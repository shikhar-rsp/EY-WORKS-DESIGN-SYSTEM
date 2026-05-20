<script setup lang="ts">
interface ILozengeConfig {
  bg: string
  text: string
  border?: string
}

interface IRow {
  label: string
  lozenge: string
  config: ILozengeConfig
}

const rows: IRow[] = [
  {
    label: 'Payment Status',
    lozenge: 'Paid',
    config: { bg: 'var(--accent-lime, #ecfccb)', text: 'var(--success, #65a30d)' },
  },
  {
    label: 'Review Status',
    lozenge: 'Pending',
    config: { bg: 'var(--accent-yellow, #fef3c7)', text: 'var(--warning, #d97706)' },
  },
  {
    label: 'Account Status',
    lozenge: 'Active',
    config: { bg: 'var(--accent-blue, #d7e8ff)', text: 'var(--info, #2d70cf)' },
  },
  {
    label: 'Access Level',
    lozenge: 'Admin',
    config: { bg: 'transparent', text: 'var(--discovery, #505eac)', border: 'var(--discovery, #505eac)' },
  },
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
  minWidth: '120px',
}

const getLozengeStyle = (config: ILozengeConfig) => ({
  display: 'inline-flex',
  alignItems: 'center',
  fontFamily: '\'Lexend\', sans-serif',
  fontSize: '12px',
  fontWeight: 500,
  padding: '2px 8px',
  borderRadius: 'var(--radius-small, 4px)',
  background: config.bg,
  color: config.text,
  border: config.border ? `1px solid ${config.border}` : 'none',
  whiteSpace: 'nowrap' as const,
})
</script>

<template>
  <div :style="{ padding: '24px', width: '100%', maxWidth: '576px' }">
    <div :style="{ display: 'flex', flexDirection: 'column' }">
      <div v-for="(row, i) in rows" :key="i" :style="rowStyle(i === rows.length - 1)">
        <span :style="keyStyle">{{ row.label }}</span>
        <div>
          <span :style="getLozengeStyle(row.config)">{{ row.lozenge }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
