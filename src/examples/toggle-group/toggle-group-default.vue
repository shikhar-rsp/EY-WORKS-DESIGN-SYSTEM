<script setup lang="ts">
import { ref } from 'vue'

const active = ref('center')
const options = ['Left', 'Center', 'Right']
</script>

<template>
  <div role="radiogroup" :style="{ display: 'flex', alignItems: 'center', gap: 'var(--space-050)' }">
    <button
      v-for="opt in options"
      :key="opt"
      type="button"
      role="radio"
      :aria-checked="active === opt.toLowerCase()"
      @click="active = opt.toLowerCase()"
      :style="{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        height: '36px', minWidth: '36px', padding: '0 var(--space-150)',
        fontFamily: 'var(--font-lexend), sans-serif', fontWeight: 500, fontSize: '14px',
        background: active === opt.toLowerCase() ? 'var(--muted)' : 'transparent',
        color: active === opt.toLowerCase() ? 'var(--foreground)' : 'var(--muted-foreground)',
        border: 'none', borderRadius: 'var(--radius-medium)', cursor: 'pointer',
        transition: 'background 0.15s, color 0.15s',
      }"
    >{{ opt }}</button>
  </div>
</template>
