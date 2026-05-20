<script setup lang="ts">
interface IRow {
  user: { name: string; email: string; initials: string }
  role: { label: string; bg: string; text: string }
  score: number
  trend: string
  up: boolean
}

const rows: IRow[] = [
  {
    user: { name: 'Alice Johnson', email: 'alice@example.com', initials: 'AJ' },
    role: { label: 'Designer', bg: 'var(--accent-blue, #d7e8ff)', text: 'var(--info, #2d70cf)' },
    score: 98,
    trend: '+12%',
    up: true,
  },
  {
    user: { name: 'Bob Smith', email: 'bob@example.com', initials: 'BS' },
    role: { label: 'Engineer', bg: 'var(--accent-lime, #ecfccb)', text: 'var(--success, #65a30d)' },
    score: 84,
    trend: '+5%',
    up: true,
  },
  {
    user: { name: 'Carol White', email: 'carol@example.com', initials: 'CW' },
    role: { label: 'PM', bg: 'var(--accent-purple, #e0e3f6)', text: 'var(--discovery, #505eac)' },
    score: 72,
    trend: '-3%',
    up: false,
  },
]

const thStyle = {
  background: 'var(--secondary, #f4f4f4)',
  borderBottom: '1px solid var(--border, #ebe9e8)',
  height: '40px',
  padding: '0 var(--space-200, 16px)',
  textAlign: 'left' as const,
}

const labelStyle = {
  fontFamily: '\'Lexend\', sans-serif',
  fontWeight: 500,
  fontSize: '12px',
  lineHeight: '16px',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.05em',
  color: 'var(--muted-foreground, #7a7272)',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
}

const tdStyle = (isLast: boolean) => ({
  background: 'var(--background, #ffffff)',
  borderBottom: isLast ? 'none' : '1px solid var(--border, #ebe9e8)',
  height: '72px',
  padding: 'var(--space-100, 8px) var(--space-200, 16px)',
})
</script>

<template>
  <div :style="{ padding: '24px', width: '100%', maxWidth: '768px' }">
    <div :style="{ overflow: 'hidden', borderRadius: 'var(--radius-large, 16px)', border: '1px solid var(--border, #ebe9e8)' }">
      <table :style="{ width: '100%', borderCollapse: 'collapse' }">
        <thead>
          <tr>
            <th :style="thStyle"><span :style="labelStyle">User</span></th>
            <th :style="thStyle"><span :style="labelStyle">Role</span></th>
            <th :style="{ ...thStyle, textAlign: 'right' }">
              <span :style="{ ...labelStyle, justifyContent: 'flex-end' }">
                Score
                <svg width="7" height="7" viewBox="0 0 24 24" fill="none">
                  <path d="M12 4V20M12 4L8 8M12 4L16 8M12 20L8 16M12 20L16 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </th>
            <th :style="{ ...thStyle, textAlign: 'right' }"><span :style="{ ...labelStyle, justifyContent: 'flex-end' }">Trend</span></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, i) in rows" :key="i">
            <!-- User cell -->
            <td :style="tdStyle(i === rows.length - 1)">
              <div :style="{ display: 'flex', alignItems: 'center', gap: '12px' }">
                <div :style="{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--secondary, #f4f4f4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }">
                  <span :style="{ fontFamily: '\'Lexend\', sans-serif', fontSize: '12px', fontWeight: 500, color: 'var(--muted-foreground, #7a7272)' }">{{ row.user.initials }}</span>
                </div>
                <div :style="{ display: 'flex', flexDirection: 'column', gap: '2px' }">
                  <span :style="{ fontFamily: '\'Lexend\', sans-serif', fontSize: '14px', fontWeight: 500, color: 'var(--foreground, #2e2b2b)' }">{{ row.user.name }}</span>
                  <span :style="{ fontFamily: '\'Lexend\', sans-serif', fontSize: '12px', color: 'var(--muted-foreground, #7a7272)' }">{{ row.user.email }}</span>
                </div>
              </div>
            </td>
            <!-- Role cell -->
            <td :style="tdStyle(i === rows.length - 1)">
              <span :style="{ fontFamily: '\'Lexend\', sans-serif', fontSize: '12px', fontWeight: 500, padding: '2px 8px', borderRadius: 'var(--radius-full, 99px)', display: 'inline-block', background: row.role.bg, color: row.role.text }">
                {{ row.role.label }}
              </span>
            </td>
            <!-- Score cell -->
            <td :style="{ ...tdStyle(i === rows.length - 1), textAlign: 'right' }">
              <span :style="{ fontFamily: '\'Lexend\', sans-serif', fontSize: '14px', fontWeight: 600, color: 'var(--foreground, #2e2b2b)', fontVariantNumeric: 'tabular-nums' }">{{ row.score }}</span>
            </td>
            <!-- Trend cell -->
            <td :style="{ ...tdStyle(i === rows.length - 1), textAlign: 'right' }">
              <span :style="{ fontFamily: '\'Lexend\', sans-serif', fontSize: '14px', fontWeight: 500, color: row.up ? 'var(--success, #65a30d)' : 'var(--destructive, #cc0000)', fontVariantNumeric: 'tabular-nums' }">
                {{ row.trend }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
