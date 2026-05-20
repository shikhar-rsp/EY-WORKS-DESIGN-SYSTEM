<script setup lang="ts">
import { ref, computed } from 'vue'

const decadeStart = ref(2020)
const selected = ref<number | null>(2021)

const cells = computed(() => [
  { value: decadeStart.value - 1, inView: false },
  ...Array.from({ length: 10 }, (_, i) => ({ value: decadeStart.value + i, inView: true })),
  { value: decadeStart.value + 10, inView: false },
])

const decadeLabel = computed(() => `${decadeStart.value}–${decadeStart.value + 9}`)
const prev = () => decadeStart.value -= 10
const next = () => decadeStart.value += 10
</script>

<template>
  <div :style="{ width: '280px', background: 'var(--background)', border: '1px solid var(--border)', borderRadius: '6px', boxShadow: '0 8px 16px rgba(0,0,0,0.15)', overflow: 'hidden', fontFamily: 'var(--font-lexend, sans-serif)' }">
    <div :style="{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '40px', padding: '0 8px', borderBottom: '1px solid var(--border)' }">
      <button @click="prev" :style="{ width:'28px',height:'28px',border:'1px solid var(--border)',borderRadius:'var(--radius-small)',background:'transparent',cursor:'pointer',color:'var(--foreground)' }">&#8249;</button>
      <span :style="{ fontSize: '13px', fontWeight: 600, color: 'var(--foreground)' }">{{ decadeLabel }}</span>
      <button @click="next" :style="{ width:'28px',height:'28px',border:'1px solid var(--border)',borderRadius:'var(--radius-small)',background:'transparent',cursor:'pointer',color:'var(--foreground)' }">&#8250;</button>
    </div>
    <div :style="{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px 8px', padding: '16px' }">
      <button
        v-for="cell in cells" :key="cell.value"
        @click="if (cell.inView) selected = cell.value"
        :style="{
          height: '36px', border: '1px solid var(--border)', borderRadius: 'var(--radius-small)',
          background: cell.value === selected ? 'var(--primary)' : 'transparent',
          color: cell.value === selected ? 'var(--primary-foreground)' : cell.inView ? 'var(--foreground)' : 'var(--muted-foreground)',
          fontWeight: cell.value === selected ? 600 : 400, fontSize: '13px',
          cursor: cell.inView ? 'pointer' : 'default', borderColor: cell.inView ? 'var(--border)' : 'transparent',
          fontFamily: 'var(--font-lexend, sans-serif)',
        }"
      >{{ cell.value }}</button>
    </div>
  </div>
</template>
