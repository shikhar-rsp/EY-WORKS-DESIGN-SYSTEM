<script setup lang="ts">
import { ref, computed } from 'vue'

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December']
const DAYS = ['Su','Mo','Tu','We','Th','Fr','Sa']

const today = new Date()
const year = ref(today.getFullYear())
const month = ref(today.getMonth())

const month2 = computed(() => (month.value + 1) % 12)
const year2 = computed(() => month.value === 11 ? year.value + 1 : year.value)

const leading = (y: number, m: number) => new Date(y, m, 1).getDay()
const dim = (y: number, m: number) => new Date(y, m + 1, 0).getDate()

const prev = () => { if (month.value === 0) { month.value = 11; year.value-- } else month.value-- }
const next = () => { if (month.value === 11) { month.value = 0; year.value++ } else month.value++ }
const isToday = (d: number, y: number, m: number) => today.getFullYear() === y && today.getMonth() === m && today.getDate() === d
</script>

<template>
  <div :style="{ display: 'flex', gap: '16px', flexWrap: 'wrap' }">
    <!-- Month 1 -->
    <div v-for="(offset, idx) in [0, 1]" :key="idx"
      :style="{ display: 'inline-block', borderRadius: 'var(--radius-medium)', border: '1px solid var(--border)', background: 'var(--background)', padding: '12px', fontFamily: 'sans-serif', fontSize: '14px' }"
    >
      <div :style="{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }">
        <button v-if="idx === 0" @click="prev" :style="{ width: '28px', height: '28px', borderRadius: 'var(--radius-small)', border: '1px solid var(--border)', background: 'transparent', cursor: 'pointer', color: 'var(--foreground)' }">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <div v-else style="width: 28px" />
        <span :style="{ fontWeight: 600, color: 'var(--foreground)' }">
          {{ MONTHS[idx === 0 ? month : month2] }} {{ idx === 0 ? year : year2 }}
        </span>
        <button v-if="idx === 1" @click="next" :style="{ width: '28px', height: '28px', borderRadius: 'var(--radius-small)', border: '1px solid var(--border)', background: 'transparent', cursor: 'pointer', color: 'var(--foreground)' }">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>
        <div v-else style="width: 28px" />
      </div>

      <div :style="{ display: 'grid', gridTemplateColumns: 'repeat(7, 32px)', gap: '2px', marginBottom: '4px' }">
        <div v-for="d in DAYS" :key="d" :style="{ textAlign: 'center', fontSize: '12px', color: 'var(--muted-foreground)', padding: '4px 0' }">{{ d }}</div>
      </div>
      <div :style="{ display: 'grid', gridTemplateColumns: 'repeat(7, 32px)', gap: '2px' }">
        <div v-for="i in leading(idx === 0 ? year : year2, idx === 0 ? month : month2)" :key="`b${i}`" />
        <button
          v-for="d in dim(idx === 0 ? year : year2, idx === 0 ? month : month2)"
          :key="d"
          :style="{
            width: '32px', height: '32px', border: 'none', borderRadius: 'var(--radius-small)',
            background: isToday(d, idx === 0 ? year : year2, idx === 0 ? month : month2) ? 'var(--muted)' : 'transparent',
            color: 'var(--foreground)',
            fontWeight: isToday(d, idx === 0 ? year : year2, idx === 0 ? month : month2) ? 700 : 400,
            fontSize: '13px', cursor: 'pointer',
          }"
        >{{ d }}</button>
      </div>
    </div>
  </div>
</template>
