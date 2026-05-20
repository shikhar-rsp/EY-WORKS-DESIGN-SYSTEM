<script setup lang="ts">
import { ref, computed } from 'vue'

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December']
const DAYS = ['Su','Mo','Tu','We','Th','Fr','Sa']

const year = ref(2024)
const month = ref(9) // October (0-indexed)
const rangeFrom = ref<number | null>(10)
const rangeTo = ref<number | null>(18)

const caption = computed(() => `${MONTHS[month.value]} ${year.value}`)
const leadingBlanks = computed(() => new Date(year.value, month.value, 1).getDay())
const daysInMonth = computed(() => new Date(year.value, month.value + 1, 0).getDate())

const prev = () => { if (month.value === 0) { month.value = 11; year.value-- } else month.value-- }
const next = () => { if (month.value === 11) { month.value = 0; year.value++ } else month.value++ }

const selectDay = (d: number) => {
  if (rangeFrom.value === null || (rangeFrom.value !== null && rangeTo.value !== null)) {
    rangeFrom.value = d; rangeTo.value = null
  } else if (d < rangeFrom.value) {
    rangeTo.value = rangeFrom.value; rangeFrom.value = d
  } else {
    rangeTo.value = d
  }
}

const dayBg = (d: number) => {
  if (d === rangeFrom.value || d === rangeTo.value) return 'var(--primary)'
  if (rangeFrom.value !== null && rangeTo.value !== null && d > rangeFrom.value && d < rangeTo.value) return 'var(--primary-subtle, #fde8e4)'
  return 'transparent'
}

const dayColor = (d: number) =>
  d === rangeFrom.value || d === rangeTo.value ? 'var(--primary-foreground)' : 'var(--foreground)'
</script>

<template>
  <div :style="{ display: 'inline-block', borderRadius: 'var(--radius-medium)', border: '1px solid var(--border)', background: 'var(--background)', padding: '12px', fontFamily: 'sans-serif', fontSize: '14px' }">
    <div :style="{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }">
      <button @click="prev" :style="{ width: '28px', height: '28px', borderRadius: 'var(--radius-small)', border: '1px solid var(--border)', background: 'transparent', cursor: 'pointer', color: 'var(--foreground)' }">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
      </button>
      <span :style="{ fontWeight: 600, color: 'var(--foreground)' }">{{ caption }}</span>
      <button @click="next" :style="{ width: '28px', height: '28px', borderRadius: 'var(--radius-small)', border: '1px solid var(--border)', background: 'transparent', cursor: 'pointer', color: 'var(--foreground)' }">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </button>
    </div>

    <div :style="{ display: 'grid', gridTemplateColumns: 'repeat(7, 32px)', gap: '2px', marginBottom: '4px' }">
      <div v-for="d in DAYS" :key="d" :style="{ textAlign: 'center', fontSize: '12px', color: 'var(--muted-foreground)', padding: '4px 0', fontWeight: 500 }">{{ d }}</div>
    </div>

    <div :style="{ display: 'grid', gridTemplateColumns: 'repeat(7, 32px)', gap: '2px' }">
      <div v-for="i in leadingBlanks" :key="`b${i}`" />
      <button
        v-for="d in daysInMonth"
        :key="d"
        @click="selectDay(d)"
        :style="{
          width: '32px', height: '32px', border: 'none',
          borderRadius: 'var(--radius-small)',
          background: dayBg(d),
          color: dayColor(d),
          fontSize: '13px', cursor: 'pointer',
        }"
      >{{ d }}</button>
    </div>
  </div>
</template>
