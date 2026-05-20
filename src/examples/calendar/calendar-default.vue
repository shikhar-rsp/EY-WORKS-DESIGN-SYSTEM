<script setup lang="ts">
import { ref, computed } from 'vue'

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December']
const DAYS = ['Su','Mo','Tu','We','Th','Fr','Sa']

const today = new Date()
const year = ref(today.getFullYear())
const month = ref(today.getMonth())
const selected = ref<{ year: number; month: number; day: number } | null>(null)

const caption = computed(() => `${MONTHS[month.value]} ${year.value}`)

const leadingBlanks = computed(() => new Date(year.value, month.value, 1).getDay())
const daysInMonth = computed(() => new Date(year.value, month.value + 1, 0).getDate())

const prev = () => {
  if (month.value === 0) { month.value = 11; year.value-- }
  else month.value--
}

const next = () => {
  if (month.value === 11) { month.value = 0; year.value++ }
  else month.value++
}

const select = (d: number) => {
  selected.value = { year: year.value, month: month.value, day: d }
}

const isToday = (d: number) =>
  today.getFullYear() === year.value && today.getMonth() === month.value && today.getDate() === d

const isSelected = (d: number) =>
  selected.value?.year === year.value && selected.value?.month === month.value && selected.value?.day === d
</script>

<template>
  <div :style="{ display: 'inline-block', borderRadius: 'var(--radius-medium)', border: '1px solid var(--border)', background: 'var(--background)', padding: '12px', fontFamily: 'sans-serif', fontSize: '14px' }">
    <div :style="{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }">
      <button @click="prev" :style="{ width: '28px', height: '28px', borderRadius: 'var(--radius-small)', border: '1px solid var(--border)', background: 'transparent', cursor: 'pointer', color: 'var(--foreground)', display: 'flex', alignItems: 'center', justifyContent: 'center' }">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
      </button>
      <span :style="{ fontWeight: 600, color: 'var(--foreground)' }">{{ caption }}</span>
      <button @click="next" :style="{ width: '28px', height: '28px', borderRadius: 'var(--radius-small)', border: '1px solid var(--border)', background: 'transparent', cursor: 'pointer', color: 'var(--foreground)', display: 'flex', alignItems: 'center', justifyContent: 'center' }">
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
        @click="select(d)"
        :style="{
          width: '32px', height: '32px', borderRadius: 'var(--radius-small)', border: 'none',
          background: isSelected(d) ? 'var(--primary)' : isToday(d) ? 'var(--muted)' : 'transparent',
          color: isSelected(d) ? 'var(--primary-foreground)' : 'var(--foreground)',
          fontWeight: isToday(d) ? 700 : 400, fontSize: '13px', cursor: 'pointer',
        }"
      >{{ d }}</button>
    </div>
  </div>
</template>
