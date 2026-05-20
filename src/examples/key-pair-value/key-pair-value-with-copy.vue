<script setup lang="ts">
import { ref } from 'vue'

interface IRow {
  label: string
  value: string
  mono?: boolean
}

const rows: IRow[] = [
  { label: 'API Key', value: 'sk-1234567890abcdef', mono: true },
  { label: 'Webhook URL', value: 'https://api.example.com/hooks/abc123' },
  { label: 'Client ID', value: 'client_9f2e3d4c5b6a7890', mono: true },
]

const copied = ref<number | null>(null)

const copyValue = (value: string, index: number) => {
  navigator.clipboard.writeText(value)
  copied.value = index
  setTimeout(() => { copied.value = null }, 1500)
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
</script>

<template>
  <div :style="{ padding: '24px', width: '100%', maxWidth: '576px' }">
    <div :style="{ display: 'flex', flexDirection: 'column' }">
      <div v-for="(row, i) in rows" :key="i" :style="rowStyle(i === rows.length - 1)">
        <span :style="keyStyle">{{ row.label }}</span>
        <div :style="{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '4px' }">
          <div :style="{ display: 'flex', alignItems: 'center', gap: '8px' }">
            <span :style="{
              flex: 1,
              minWidth: 0,
              fontFamily: row.mono ? '\'Courier New\', Courier, monospace' : '\'Lexend\', sans-serif',
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '20px',
              color: 'var(--foreground, #2e2b2b)',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }">{{ row.value }}</span>
            <button
              :style="{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '24px',
                height: '24px',
                flexShrink: 0,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: copied === i ? 'var(--success, #65a30d)' : 'var(--subtlest, #ada5a5)',
                borderRadius: 'var(--radius-small, 4px)',
                transition: 'color 150ms',
                padding: '0',
              }"
              @click="copyValue(row.value, i)"
              :title="'Copy ' + row.label"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="9" y="9" width="11" height="11" rx="2" stroke="currentColor" stroke-width="1.5"/>
                <path d="M5 15H4C2.89543 15 2 14.1046 2 13V4C2 2.89543 2.89543 2 4 2H13C14.1046 2 15 2.89543 15 4V5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
