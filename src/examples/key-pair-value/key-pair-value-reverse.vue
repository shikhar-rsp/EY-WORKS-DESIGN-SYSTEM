<script setup lang="ts">
const normalRows = [
  { label: 'Status', value: 'Active' },
  { label: 'Plan', value: 'Enterprise' },
]

const reverseRows = [
  { label: 'Status', value: 'Active' },
  { label: 'Plan', value: 'Enterprise' },
]

const rowStyle = (isLast: boolean) => ({
  display: 'flex',
  flexDirection: 'row' as const,
  alignItems: 'flex-start' as const,
  gap: '16px',
  padding: '8px 0',
  borderBottom: isLast ? 'none' : '1px solid var(--border, #ebe9e8)',
})

const getKeyStyle = (reverse: boolean) => ({
  fontFamily: '\'Lexend\', sans-serif',
  fontWeight: reverse ? 500 : 400,
  fontSize: '14px',
  lineHeight: '20px',
  color: reverse ? 'var(--foreground, #2e2b2b)' : 'var(--subtlest, #ada5a5)',
  flexShrink: 0,
  minWidth: '80px',
})

const getValueStyle = (reverse: boolean) => ({
  fontFamily: '\'Lexend\', sans-serif',
  fontWeight: reverse ? 400 : 500,
  fontSize: '14px',
  lineHeight: '20px',
  color: reverse ? 'var(--subtlest, #ada5a5)' : 'var(--foreground, #2e2b2b)',
})

const captionStyle = {
  fontFamily: '\'Lexend\', sans-serif',
  fontSize: '12px',
  color: 'var(--muted-foreground, #7a7272)',
  margin: '0 0 12px',
}
</script>

<template>
  <div :style="{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px', width: '100%', maxWidth: '576px' }">
    <!-- Normal -->
    <div>
      <p :style="captionStyle">Normal — label subtle, value bold</p>
      <div :style="{ display: 'flex', flexDirection: 'column' }">
        <div v-for="(row, i) in normalRows" :key="i" :style="rowStyle(i === normalRows.length - 1)">
          <span :style="getKeyStyle(false)">{{ row.label }}</span>
          <span :style="getValueStyle(false)">{{ row.value }}</span>
        </div>
      </div>
    </div>
    <!-- Reverse -->
    <div>
      <p :style="captionStyle">Reverse — label bold, value subtle</p>
      <div :style="{ display: 'flex', flexDirection: 'column' }">
        <div v-for="(row, i) in reverseRows" :key="i" :style="rowStyle(i === reverseRows.length - 1)">
          <span :style="getKeyStyle(true)">{{ row.label }}</span>
          <span :style="getValueStyle(true)">{{ row.value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
