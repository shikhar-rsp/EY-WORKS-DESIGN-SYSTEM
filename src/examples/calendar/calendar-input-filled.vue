<script setup lang="ts">
import { ref, computed } from 'vue'

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December']
const DAYS = ['Su','Mo','Tu','We','Th','Fr','Sa']
const today = new Date()

const open = ref(false)
const value = ref('30/10/2021')
const month = ref(9) // October
const year = ref(2021)
const selectedDay = ref<number | null>(30)

const leading = computed(() => new Date(year.value, month.value, 1).getDay())
const dim = computed(() => new Date(year.value, month.value + 1, 0).getDate())

const prev = () => { if (month.value === 0) { month.value = 11; year.value-- } else month.value-- }
const next = () => { if (month.value === 11) { month.value = 0; year.value++ } else month.value++ }
const isToday = (d: number) => today.getFullYear() === year.value && today.getMonth() === month.value && today.getDate() === d

const select = (d: number) => {
  selectedDay.value = d
  value.value = `${String(d).padStart(2,'0')}/${String(month.value+1).padStart(2,'0')}/${year.value}`
  open.value = false
}
</script>

<template>
  <div style="position: relative; display: inline-block;">
    <button
      :style="{
        display: 'inline-flex', alignItems: 'center', width: '250px', height: '38px',
        border: open ? '2px solid var(--primary)' : '1px solid var(--border)',
        borderRadius: 'var(--radius-medium)', background: 'var(--background)',
        padding: '0 13px', fontFamily: 'var(--font-lexend, sans-serif)',
        fontSize: '16px', cursor: 'pointer', gap: '8px',
      }"
      @click="open = !open"
    >
      <span :style="{ flex: 1, textAlign: 'left', color: 'var(--foreground)' }">{{ value }}</span>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="3" width="12" height="11" rx="1.5"/><path d="M2 7h12M5.5 1.5v3M10.5 1.5v3"/>
      </svg>
    </button>
    <div v-if="open" :style="{ position: 'absolute', top: 'calc(100% + 4px)', left: 0, zIndex: 50, width: '280px', background: 'var(--background)', border: '1px solid var(--border)', borderRadius: '6px', boxShadow: '0 8px 16px rgba(0,0,0,0.15)', overflow: 'hidden', fontFamily: 'var(--font-lexend, sans-serif)' }">
      <div :style="{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '40px', padding: '0 8px', borderBottom: '1px solid var(--border)' }">
        <button @click="prev" :style="{ width:'28px',height:'28px',border:'1px solid var(--border)',borderRadius:'var(--radius-small)',background:'transparent',cursor:'pointer' }">&#8249;</button>
        <span :style="{ fontSize: '13px', fontWeight: 600, color: 'var(--foreground)' }">{{ MONTHS[month] }} {{ year }}</span>
        <button @click="next" :style="{ width:'28px',height:'28px',border:'1px solid var(--border)',borderRadius:'var(--radius-small)',background:'transparent',cursor:'pointer' }">&#8250;</button>
      </div>
      <div :style="{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', padding: '8px 8px 0' }">
        <div v-for="d in DAYS" :key="d" :style="{ textAlign:'center',fontSize:'12px',color:'var(--muted-foreground)',padding:'4px 0' }">{{ d }}</div>
      </div>
      <div :style="{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '2px', padding: '4px 8px 8px' }">
        <div v-for="i in leading" :key="`b${i}`" />
        <button
          v-for="d in dim" :key="d"
          @click="select(d)"
          :style="{
            height: '36px', border: 'none', borderRadius: 'var(--radius-small)',
            background: d === selectedDay ? 'var(--primary)' : isToday(d) ? 'var(--muted)' : 'transparent',
            color: d === selectedDay ? 'var(--primary-foreground)' : 'var(--foreground)',
            fontWeight: d === selectedDay || isToday(d) ? 700 : 400, fontSize: '13px', cursor: 'pointer',
          }"
        >{{ d }}</button>
      </div>
    </div>
  </div>
</template>
