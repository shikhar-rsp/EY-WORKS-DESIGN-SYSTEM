<script setup lang="ts">
import { ref } from 'vue'

const MONTHS_SHORT = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

const year = ref(2021)
const selected = ref<number | null>(9)

const prev = () => year.value--
const next = () => year.value++
</script>

<template>
  <div :style="{ width: '280px', background: 'var(--background)', border: '1px solid var(--border)', borderRadius: '6px', boxShadow: '0 8px 16px rgba(0,0,0,0.15)', overflow: 'hidden', fontFamily: 'var(--font-lexend, sans-serif)' }">
    <div :style="{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '40px', padding: '0 8px', borderBottom: '1px solid var(--border)' }">
      <button @click="prev" :style="{ width:'28px',height:'28px',border:'1px solid var(--border)',borderRadius:'var(--radius-small)',background:'transparent',cursor:'pointer',color:'var(--foreground)' }">&#8249;</button>
      <span :style="{ fontSize: '13px', fontWeight: 600, color: 'var(--foreground)' }">{{ year }}</span>
      <button @click="next" :style="{ width:'28px',height:'28px',border:'1px solid var(--border)',borderRadius:'var(--radius-small)',background:'transparent',cursor:'pointer',color:'var(--foreground)' }">&#8250;</button>
    </div>
    <div :style="{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px 8px', padding: '16px' }">
      <button
        v-for="(m, i) in MONTHS_SHORT" :key="m"
        @click="selected = i"
        :style="{
          height: '36px', border: '1px solid var(--border)', borderRadius: 'var(--radius-small)',
          background: i === selected ? 'var(--primary)' : 'transparent',
          color: i === selected ? 'var(--primary-foreground)' : 'var(--foreground)',
          fontWeight: i === selected ? 600 : 400, fontSize: '13px', cursor: 'pointer',
          fontFamily: 'var(--font-lexend, sans-serif)',
        }"
      >{{ m }}</button>
    </div>
  </div>
</template>
