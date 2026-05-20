<script setup lang="ts">
import { ref, computed } from 'vue'

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December']
const DAYS = ['Su','Mo','Tu','We','Th','Fr','Sa']
const today = new Date()

const month = ref(9)
const year = ref(2021)
const selected = ref<number | null>(null)

const leading = computed(() => new Date(year.value, month.value, 1).getDay())
const dim = computed(() => new Date(year.value, month.value + 1, 0).getDate())

const prev = () => { if (month.value === 0) { month.value = 11; year.value-- } else month.value-- }
const next = () => { if (month.value === 11) { month.value = 0; year.value++ } else month.value++ }
const isToday = (d: number) => today.getFullYear() === year.value && today.getMonth() === month.value && today.getDate() === d
</script>

<template>
  <div :style="{ width: '280px', background: 'var(--background)', border: '1px solid var(--border)', borderRadius: '6px', boxShadow: '0 8px 16px rgba(0,0,0,0.15)', overflow: 'hidden', fontFamily: 'var(--font-lexend, sans-serif)' }">
    <div :style="{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '40px', padding: '0 8px', borderBottom: '1px solid var(--border)' }">
      <button @click="prev" :style="{ width:'28px',height:'28px',border:'1px solid var(--border)',borderRadius:'var(--radius-small)',background:'transparent',cursor:'pointer',color:'var(--foreground)' }">&#8249;</button>
      <span :style="{ fontSize: '13px', fontWeight: 600, color: 'var(--foreground)' }">{{ MONTHS[month] }}&nbsp;&nbsp;{{ year }}</span>
      <button @click="next" :style="{ width:'28px',height:'28px',border:'1px solid var(--border)',borderRadius:'var(--radius-small)',background:'transparent',cursor:'pointer',color:'var(--foreground)' }">&#8250;</button>
    </div>
    <div :style="{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', padding: '8px 8px 0' }">
      <div v-for="d in DAYS" :key="d" :style="{ textAlign:'center',fontSize:'12px',color:'var(--muted-foreground)',padding:'4px 0' }">{{ d }}</div>
    </div>
    <div :style="{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '2px', padding: '4px 8px 8px' }">
      <div v-for="i in leading" :key="`b${i}`" />
      <button
        v-for="d in dim" :key="d"
        @click="selected = d"
        :style="{
          height: '36px', border: 'none', borderRadius: 'var(--radius-small)',
          background: d === selected ? 'var(--primary)' : isToday(d) ? 'var(--muted)' : 'transparent',
          color: d === selected ? 'var(--primary-foreground)' : 'var(--foreground)',
          fontWeight: d === selected || isToday(d) ? 700 : 400, fontSize: '13px', cursor: 'pointer',
        }"
      >{{ d }}</button>
    </div>
  </div>
</template>
