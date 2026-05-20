<script setup lang="ts">
import { ref, computed } from 'vue'

interface IRow {
  product: string
  category: string
  price: string
  seats: number
}

const rows: IRow[] = [
  { product: 'Dashboard Pro', category: 'Analytics', price: '$49/mo', seats: 12 },
  { product: 'Storage Plus', category: 'Infrastructure', price: '$29/mo', seats: 8 },
  { product: 'Auth Shield', category: 'Security', price: '$19/mo', seats: 25 },
  { product: 'Notify Hub', category: 'Messaging', price: '$9/mo', seats: 5 },
]

type SortKeyTypes = keyof IRow
type SortDirTypes = 'asc' | 'desc'

const sortKey = ref<SortKeyTypes>('product')
const sortDir = ref<SortDirTypes>('asc')

const sorted = computed(() => {
  return [...rows].sort((a, b) => {
    const av = a[sortKey.value]
    const bv = b[sortKey.value]
    const cmp = av < bv ? -1 : av > bv ? 1 : 0
    return sortDir.value === 'asc' ? cmp : -cmp
  })
})

const toggleSort = (key: SortKeyTypes) => {
  if (sortKey.value === key) {
    sortDir.value = sortDir.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortKey.value = key
    sortDir.value = 'asc'
  }
}

const thStyle = (alignRight = false) => ({
  background: 'var(--secondary, #f4f4f4)',
  borderBottom: '1px solid var(--border, #ebe9e8)',
  height: '40px',
  padding: '0 var(--space-200, 16px)',
  textAlign: alignRight ? 'right' as const : 'left' as const,
  cursor: 'pointer',
  userSelect: 'none' as const,
  transition: 'background-color 150ms',
})

const labelStyle = (alignRight = false) => ({
  fontFamily: '\'Lexend\', sans-serif',
  fontWeight: 500,
  fontSize: '12px',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.05em',
  color: 'var(--muted-foreground, #7a7272)',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
  justifyContent: alignRight ? 'flex-end' : 'flex-start',
})

const tdStyle = (isLast: boolean, alignRight = false) => ({
  background: 'var(--background, #ffffff)',
  borderBottom: isLast ? 'none' : '1px solid var(--border, #ebe9e8)',
  height: '72px',
  padding: 'var(--space-100, 8px) var(--space-200, 16px)',
  textAlign: alignRight ? 'right' as const : 'left' as const,
  transition: 'background-color 150ms',
})
</script>

<template>
  <div :style="{ padding: '24px', width: '100%', maxWidth: '768px' }">
    <div :style="{ overflow: 'hidden', borderRadius: 'var(--radius-large, 16px)', border: '1px solid var(--border, #ebe9e8)' }">
      <table :style="{ width: '100%', borderCollapse: 'collapse' }">
        <thead>
          <tr>
            <th :style="thStyle()" @click="toggleSort('product')">
              <span :style="labelStyle()">
                Product
                <svg width="7" height="7" viewBox="0 0 24 24" fill="none">
                  <path d="M12 4V20M12 4L8 8M12 4L16 8M12 20L8 16M12 20L16 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </th>
            <th :style="thStyle()" @click="toggleSort('category')">
              <span :style="labelStyle()">
                Category
                <svg width="7" height="7" viewBox="0 0 24 24" fill="none">
                  <path d="M12 4V20M12 4L8 8M12 4L16 8M12 20L8 16M12 20L16 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </th>
            <th :style="thStyle(true)" @click="toggleSort('price')">
              <span :style="labelStyle(true)">
                Pricing
                <svg width="7" height="7" viewBox="0 0 24 24" fill="none">
                  <path d="M12 4V20M12 4L8 8M12 4L16 8M12 20L8 16M12 20L16 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </th>
            <th :style="thStyle(true)" @click="toggleSort('seats')">
              <span :style="labelStyle(true)">
                Seats
                <svg width="7" height="7" viewBox="0 0 24 24" fill="none">
                  <path d="M12 4V20M12 4L8 8M12 4L16 8M12 20L8 16M12 20L16 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, i) in sorted" :key="i">
            <td :style="tdStyle(i === sorted.length - 1)">
              <span :style="{ fontFamily: '\'Lexend\', sans-serif', fontSize: '14px', fontWeight: 500, color: 'var(--foreground, #2e2b2b)' }">{{ row.product }}</span>
            </td>
            <td :style="tdStyle(i === sorted.length - 1)">
              <span :style="{ fontFamily: '\'Lexend\', sans-serif', fontSize: '14px', color: 'var(--muted-foreground, #7a7272)' }">{{ row.category }}</span>
            </td>
            <td :style="tdStyle(i === sorted.length - 1, true)">
              <span :style="{ fontFamily: '\'Lexend\', sans-serif', fontSize: '14px', color: 'var(--foreground, #2e2b2b)' }">{{ row.price }}</span>
            </td>
            <td :style="tdStyle(i === sorted.length - 1, true)">
              <span :style="{ fontFamily: '\'Lexend\', sans-serif', fontSize: '14px', color: 'var(--muted-foreground, #7a7272)', fontVariantNumeric: 'tabular-nums' }">{{ row.seats }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
