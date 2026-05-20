<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
const showRuler = ref(true)
const showGrid = ref(false)
</script>

<template>
  <div role="menubar" :style="{ display: 'inline-flex', height: '36px', alignItems: 'center', gap: 'var(--space-050)', borderRadius: 'var(--radius-medium)', border: '1px solid var(--border)', background: 'var(--background)', padding: '0 var(--space-050)' }">
    <button
      @click="open = !open"
      :style="{
        cursor: 'pointer', borderRadius: 'var(--radius-small)',
        padding: 'var(--space-050) var(--space-150)', fontSize: '14px', fontWeight: 500,
        color: 'var(--foreground)', background: open ? 'var(--muted)' : 'transparent',
        border: 'none', outline: 'none',
      }"
    >View</button>
    <div v-if="open" :style="{ position: 'fixed', top: '56px', left: '16px', zIndex: 50, minWidth: '12rem', borderRadius: 'var(--radius-large)', border: '1px solid var(--border)', background: 'var(--background)', padding: 'var(--space-050)', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }">
      <div :style="{ padding: 'var(--space-075) var(--space-150)', fontSize: '12px', fontWeight: 600, color: 'var(--muted-foreground)' }">Interface</div>
      <button @click="showRuler = !showRuler" :style="{ display: 'flex', width: '100%', alignItems: 'center', position: 'relative', padding: 'var(--space-075) var(--space-150) var(--space-075) 2rem', fontSize: '14px', color: 'var(--foreground)', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', borderRadius: 'var(--radius-small)' }">
        <span :style="{ position: 'absolute', left: '12px' }">{{ showRuler ? '✓' : '' }}</span>
        Show Ruler
      </button>
      <button @click="showGrid = !showGrid" :style="{ display: 'flex', width: '100%', alignItems: 'center', position: 'relative', padding: 'var(--space-075) var(--space-150) var(--space-075) 2rem', fontSize: '14px', color: 'var(--foreground)', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', borderRadius: 'var(--radius-small)' }">
        <span :style="{ position: 'absolute', left: '12px' }">{{ showGrid ? '✓' : '' }}</span>
        Show Grid
      </button>
    </div>
  </div>
</template>
