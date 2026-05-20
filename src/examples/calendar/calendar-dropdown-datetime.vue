<script setup lang="ts">
import { ref, computed } from 'vue'

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December']
const DAYS = ['Su','Mo','Tu','We','Th','Fr','Sa']
const today = new Date()

const month = ref(9)
const year = ref(2021)
const selected = ref<number | null>(null)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

const leading = computed(() => new Date(year.value, month.value, 1).getDay())
const dim = computed(() => new Date(year.value, month.value + 1, 0).getDate())
const timeLbl = computed(() => `${String(hours.value).padStart(2,'0')}:${String(minutes.value).padStart(2,'0')}:${String(seconds.value).padStart(2,'0')}`)

const prev = () => { if (month.value === 0) { month.value = 11; year.value-- } else month.value-- }
const next = () => { if (month.value === 11) { month.value = 0; year.value++ } else month.value++ }
const isToday = (d: number) => today.getFullYear() === year.value && today.getMonth() === month.value && today.getDate() === d
</script>

<template>
  <div :style="{ display: 'flex', background: 'var(--background)', border: '1px solid var(--border)', borderRadius: '6px', boxShadow: '0 8px 16px rgba(0,0,0,0.15)', overflow: 'hidden', fontFamily: 'var(--font-lexend, sans-serif)' }">
    <!-- Calendar side -->
    <div :style="{ width: '280px', borderRight: '1px solid var(--border)' }">
      <div :style="{ display:'flex',alignItems:'center',justifyContent:'space-between',height:'40px',padding:'0 8px',borderBottom:'1px solid var(--border)' }">
        <button @click="prev" :style="{ width:'28px',height:'28px',border:'1px solid var(--border)',borderRadius:'var(--radius-small)',background:'transparent',cursor:'pointer' }">&#8249;</button>
        <span :style="{ fontSize:'13px',fontWeight:600,color:'var(--foreground)' }">{{ MONTHS[month] }}&nbsp;&nbsp;{{ year }}</span>
        <button @click="next" :style="{ width:'28px',height:'28px',border:'1px solid var(--border)',borderRadius:'var(--radius-small)',background:'transparent',cursor:'pointer' }">&#8250;</button>
      </div>
      <div :style="{ display:'grid',gridTemplateColumns:'repeat(7, 1fr)',padding:'8px 8px 0' }">
        <div v-for="d in DAYS" :key="d" :style="{ textAlign:'center',fontSize:'12px',color:'var(--muted-foreground)',padding:'4px 0' }">{{ d }}</div>
      </div>
      <div :style="{ display:'grid',gridTemplateColumns:'repeat(7, 1fr)',gap:'2px',padding:'4px 8px 8px' }">
        <div v-for="i in leading" :key="`b${i}`" />
        <button v-for="d in dim" :key="d" @click="selected = d"
          :style="{ height:'36px',border:'none',borderRadius:'var(--radius-small)',cursor:'pointer',fontSize:'13px',fontWeight:d===selected||isToday(d)?700:400,background:d===selected?'var(--primary)':isToday(d)?'var(--muted)':'transparent',color:d===selected?'var(--primary-foreground)':'var(--foreground)' }"
        >{{ d }}</button>
      </div>
    </div>
    <!-- Time side -->
    <div :style="{ width: '169px', display: 'flex', flexDirection: 'column' }">
      <div :style="{ height:'40px',display:'flex',alignItems:'center',justifyContent:'center',borderBottom:'1px solid var(--border)',fontSize:'14px',color:'var(--foreground)' }">{{ timeLbl }}</div>
      <div :style="{ display:'flex',flex:1,overflow:'hidden',height:'224px' }">
        <div style="display:flex;flex-direction:column;overflow-y:auto;width:56px;scrollbar-width:none;">
          <div v-for="h in 24" :key="h-1" @click="hours = h-1"
            :style="{ height:'28px',display:'flex',alignItems:'center',paddingLeft:'14px',fontSize:'14px',cursor:'pointer',flexShrink:0,color:(h-1)===hours?'var(--primary)':'var(--foreground)',fontWeight:(h-1)===hours?500:400,background:(h-1)===hours?'var(--muted)':'transparent' }"
          >{{ String(h-1).padStart(2,'0') }}</div>
        </div>
        <div style="display:flex;flex-direction:column;overflow-y:auto;width:56px;scrollbar-width:none;">
          <div v-for="m in 60" :key="m-1" @click="minutes = m-1"
            :style="{ height:'28px',display:'flex',alignItems:'center',paddingLeft:'14px',fontSize:'14px',cursor:'pointer',flexShrink:0,color:(m-1)===minutes?'var(--primary)':'var(--foreground)',fontWeight:(m-1)===minutes?500:400,background:(m-1)===minutes?'var(--muted)':'transparent' }"
          >{{ String(m-1).padStart(2,'0') }}</div>
        </div>
        <div style="display:flex;flex-direction:column;overflow-y:auto;width:56px;scrollbar-width:none;">
          <div v-for="s in 60" :key="s-1" @click="seconds = s-1"
            :style="{ height:'28px',display:'flex',alignItems:'center',paddingLeft:'14px',fontSize:'14px',cursor:'pointer',flexShrink:0,color:(s-1)===seconds?'var(--primary)':'var(--foreground)',fontWeight:(s-1)===seconds?500:400,background:(s-1)===seconds?'var(--muted)':'transparent' }"
          >{{ String(s-1).padStart(2,'0') }}</div>
        </div>
      </div>
      <div :style="{ display:'flex',alignItems:'center',justifyContent:'flex-end',gap:'8px',padding:'8px',borderTop:'1px solid var(--border)' }">
        <button :style="{ height:'32px',padding:'0 16px',fontSize:'14px',color:'var(--primary)',border:'1px solid var(--primary)',borderRadius:'var(--radius-medium)',background:'transparent',cursor:'pointer',fontFamily:'var(--font-lexend, sans-serif)' }">Cancel</button>
        <button :style="{ height:'32px',padding:'0 16px',fontSize:'14px',color:'var(--primary-foreground)',background:'var(--primary)',border:'none',borderRadius:'var(--radius-medium)',cursor:'pointer',fontFamily:'var(--font-lexend, sans-serif)' }">OK</button>
      </div>
    </div>
  </div>
</template>
