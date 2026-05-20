<script setup lang="ts">
const rows = [
  { name: 'Alice Johnson', role: 'Designer', department: 'Product', status: 'Active' },
  { name: 'Bob Smith', role: 'Engineer', department: 'Platform', status: 'Active' },
  { name: 'Carol White', role: 'PM', department: 'Growth', status: 'Inactive' },
  { name: 'David Lee', role: 'Analyst', department: 'Data', status: 'Active' },
]

const thStyle = {
  background: 'var(--secondary, #f4f4f4)',
  borderBottom: '1px solid var(--border, #ebe9e8)',
  height: '40px',
  padding: '0 var(--space-200, 16px)',
  textAlign: 'left' as const,
}

const tdStyle = (isLast: boolean) => ({
  background: 'var(--background, #ffffff)',
  borderBottom: isLast ? 'none' : '1px solid var(--border, #ebe9e8)',
  height: '72px',
  padding: 'var(--space-100, 8px) var(--space-200, 16px)',
  transition: 'background-color 150ms',
})

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

const getBadgeStyle = (status: string) => ({
  fontFamily: '\'Lexend\', sans-serif',
  fontSize: '12px',
  fontWeight: 500,
  padding: '2px 8px',
  borderRadius: 'var(--radius-full, 99px)',
  display: 'inline-block',
  background: status === 'Active' ? 'rgba(101,163,13,0.1)' : 'var(--muted, #fafafa)',
  color: status === 'Active' ? 'var(--success, #65a30d)' : 'var(--muted-foreground, #7a7272)',
})
</script>

<template>
  <div :style="{ padding: '24px', width: '100%', maxWidth: '768px' }">
    <div :style="{ overflow: 'hidden', borderRadius: 'var(--radius-large, 16px)', border: '1px solid var(--border, #ebe9e8)' }">
      <table :style="{ width: '100%', borderCollapse: 'collapse' }">
        <thead>
          <tr>
            <th :style="thStyle">
              <span :style="labelStyle">
                Name
                <svg width="7" height="7" viewBox="0 0 24 24" fill="none">
                  <path d="M12 4V20M12 4L8 8M12 4L16 8M12 20L8 16M12 20L16 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </th>
            <th :style="thStyle"><span :style="labelStyle">Role</span></th>
            <th :style="thStyle"><span :style="labelStyle">Department</span></th>
            <th :style="{ ...thStyle, textAlign: 'right' }"><span :style="{ ...labelStyle, justifyContent: 'flex-end' }">Status</span></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, i) in rows" :key="i">
            <td :style="tdStyle(i === rows.length - 1)">
              <span :style="{ fontFamily: '\'Lexend\', sans-serif', fontSize: '14px', fontWeight: 500, color: 'var(--foreground, #2e2b2b)' }">{{ row.name }}</span>
            </td>
            <td :style="tdStyle(i === rows.length - 1)">
              <span :style="{ fontFamily: '\'Lexend\', sans-serif', fontSize: '14px', color: 'var(--muted-foreground, #7a7272)' }">{{ row.role }}</span>
            </td>
            <td :style="tdStyle(i === rows.length - 1)">
              <span :style="{ fontFamily: '\'Lexend\', sans-serif', fontSize: '14px', color: 'var(--muted-foreground, #7a7272)' }">{{ row.department }}</span>
            </td>
            <td :style="{ ...tdStyle(i === rows.length - 1), textAlign: 'right' }">
              <span :style="getBadgeStyle(row.status)">{{ row.status }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
