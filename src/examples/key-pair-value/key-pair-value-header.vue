<script setup lang="ts">
const sections = [
  {
    desc: 'Header as section label',
    header: 'Personal Information',
    showIcon: false,
    rows: [
      { label: 'Full Name', value: 'Alice Johnson' },
      { label: 'Email', value: 'alice@example.com' },
    ],
  },
  {
    desc: 'Header with icon',
    header: 'Synced Data',
    showIcon: true,
    rows: [
      { label: 'Last Sync', value: '2 minutes ago' },
      { label: 'Records', value: '1,284' },
    ],
  },
]

const headerStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
}

const headerLabelStyle = {
  fontFamily: '\'Lexend\', sans-serif',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '20px',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.05em',
  color: 'var(--subtlest, #ada5a5)',
  whiteSpace: 'nowrap' as const,
}

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
  <div :style="{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '24px', width: '100%', maxWidth: '576px' }">
    <div v-for="(section, si) in sections" :key="si" :style="{ display: 'flex', flexDirection: 'column', gap: '4px' }">
      <p :style="{ fontFamily: '\'Lexend\', sans-serif', fontSize: '12px', color: 'var(--muted-foreground, #7a7272)', margin: '0 0 8px' }">{{ section.desc }}</p>
      <div :style="headerStyle">
        <span v-if="section.showIcon" :style="{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '16px', height: '16px', flexShrink: 0, color: 'var(--subtlest, #ada5a5)' }">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z" stroke="currentColor" stroke-width="1.5"/>
            <path d="M12 4V2M12 22V20M4 12H2M22 12H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </span>
        <span :style="headerLabelStyle">{{ section.header }}</span>
      </div>
      <div :style="{ borderTop: '1px solid var(--border, #ebe9e8)', marginTop: '8px' }">
        <div v-for="(row, ri) in section.rows" :key="ri" :style="rowStyle(ri === section.rows.length - 1)">
          <span :style="keyStyle">{{ row.label }}</span>
          <span :style="valueStyle">{{ row.value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
