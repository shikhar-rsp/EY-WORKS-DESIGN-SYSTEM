<script setup lang="ts">
import { ref, computed } from 'vue'

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December']
const DAYS = ['Su','Mo','Tu','We','Th','Fr','Sa']
const today = new Date()

const month = ref(today.getMonth())
const year = ref(today.getFullYear())
const rangeStart = ref<{ y: number; m: number; d: number } | null>(null)
const rangeEnd = ref<{ y: number; m: number; d: number } | null>(null)
const pickEnd = ref(false)

const month2 = computed(() => month.value === 11 ? 0 : month.value + 1)
const year2 = computed(() => month.value === 11 ? year.value + 1 : year.value)

const leading1 = computed(() => new Date(year.value, month.value, 1).getDay())
const dim1 = computed(() => new Date(year.value, month.value + 1, 0).getDate())
const leading2 = computed(() => new Date(year2.value, month2.value, 1).getDay())
const dim2 = computed(() => new Date(year2.value, month2.value + 1, 0).getDate())

const prev = () => { if (month.value === 0) { month.value = 11; year.value-- } else month.value-- }
const next = () => { if (month.value === 11) { month.value = 0; year.value++ } else month.value++ }

const key = (y: number, m: number, d: number) => y * 10000 + m * 100 + d

const select = (y: number, m: number, d: number) => {
  if (!pickEnd.value) { rangeStart.value = { y, m, d }; rangeEnd.value = null; pickEnd.value = true }
  else {
    const ks = key(rangeStart.value!.y, rangeStart.value!.m, rangeStart.value!.d)
    const ke = key(y, m, d)
    if (ke >= ks) { rangeEnd.value = { y, m, d } } else { rangeEnd.value = rangeStart.value; rangeStart.value = { y, m, d } }
    pickEnd.value = false
  }
}

const dayBg = (y: number, m: number, d: number) => {
  const k = key(y, m, d)
  const ks = rangeStart.value ? key(rangeStart.value.y, rangeStart.value.m, rangeStart.value.d) : null
  const ke = rangeEnd.value ? key(rangeEnd.value.y, rangeEnd.value.m, rangeEnd.value.d) : null
  if (ks !== null && k === ks) return 'var(--primary)'
  if (ke !== null && k === ke) return 'var(--primary)'
  if (ks !== null && ke !== null && k > ks && k < ke) return 'var(--primary-subtle)'
  if (today.getFullYear() === y && today.getMonth() === m && today.getDate() === d) return 'var(--muted)'
  return 'transparent'
}
const dayColor = (y: number, m: number, d: number) => {
  const k = key(y, m, d)
  const ks = rangeStart.value ? key(rangeStart.value.y, rangeStart.value.m, rangeStart.value.d) : null
  const ke = rangeEnd.value ? key(rangeEnd.value.y, rangeEnd.value.m, rangeEnd.value.d) : null
  if ((ks !== null && k === ks) || (ke !== null && k === ke)) return 'var(--primary-foreground)'
  return 'var(--foreground)'
}
</script>

<template>
  <div :style="{ display: 'flex', background: 'var(--background)', border: '1px solid var(--border)', borderRadius: '6px 6px 0 0', boxShadow: '0 8px 16px rgba(0,0,0,0.15)', overflow: 'hidden', fontFamily: 'var(--font-lexend, sans-serif)' }">
    <div v-for="(panel, idx) in [{ y: year, m: month, l: leading1, d: dim1 }, { y: year2, m: month2, l: leading2, d: dim2 }]" :key="idx"
      :style="{ width: '280px', borderRight: idx === 0 ? '1px solid var(--border)' : 'none' }"
    >
      <div :style="{ display:'flex',alignItems:'center',justifyContent:'space-between',height:'40px',padding:'0 8px',borderBottom:'1px solid var(--border)' }">
        <button v-if="idx === 0" @click="prev" :style="{ width:'28px',height:'28px',border:'1px solid var(--border)',borderRadius:'var(--radius-small)',background:'transparent',cursor:'pointer' }">&#8249;</button>
        <div v-else style="width:28px" />
        <span :style="{ fontSize:'13px',fontWeight:600,color:'var(--foreground)' }">{{ MONTHS[panel.m] }}&nbsp;&nbsp;{{ panel.y }}</span>
        <button v-if="idx === 1" @click="next" :style="{ width:'28px',height:'28px',border:'1px solid var(--border)',borderRadius:'var(--radius-small)',background:'transparent',cursor:'pointer' }">&#8250;</button>
        <div v-else style="width:28px" />
      </div>
      <div :style="{ display:'grid',gridTemplateColumns:'repeat(7, 1fr)',padding:'8px 8px 0' }">
        <div v-for="d in DAYS" :key="d" :style="{ textAlign:'center',fontSize:'12px',color:'var(--muted-foreground)',padding:'4px 0' }">{{ d }}</div>
      </div>
      <div :style="{ display:'grid',gridTemplateColumns:'repeat(7, 1fr)',gap:'2px',padding:'4px 8px 8px' }">
        <div v-for="i in panel.l" :key="`b${i}`" />
        <button v-for="d in panel.d" :key="d" @click="select(panel.y, panel.m, d)"
          :style="{ height:'36px',border:'none',borderRadius:'var(--radius-small)',cursor:'pointer',fontSize:'13px',background:dayBg(panel.y,panel.m,d),color:dayColor(panel.y,panel.m,d) }"
        >{{ d }}</button>
      </div>
    </div>
  </div>
</template>
