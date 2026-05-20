<script setup lang="ts">
const items = [
  { label: 'Full Name', value: 'Alice Johnson' },
  { label: 'Email', value: 'alice@example.com' },
  { label: 'Role', value: 'Product Designer' },
  { label: 'Department', value: 'Design' },
  { label: 'Location', value: 'San Francisco, CA' },
  { label: 'Joined', value: 'Jan 2024' },
]

const keyStyle = {
  fontFamily: '\'Lexend\', sans-serif',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '20px',
  color: 'var(--subtlest, #ada5a5)',
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
    <div :style="{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0 32px' }">
      <div
        v-for="(item, i) in items"
        :key="i"
        :style="{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '8px 0' }"
      >
        <span :style="keyStyle">{{ item.label }}</span>
        <span :style="valueStyle">{{ item.value }}</span>
      </div>
    </div>
  </div>
</template>
