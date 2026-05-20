<script setup lang="ts">
import { ref } from 'vue'

const active = ref('monthly')
const options = ['Daily', 'Weekly', 'Monthly']
</script>

<template>
  <div
    role="radiogroup"
    :style="{
      display: 'inline-flex', alignItems: 'center',
      border: '1px solid var(--border)', borderRadius: 'var(--radius-medium)', overflow: 'hidden',
    }"
  >
    <button
      v-for="(opt, i) in options"
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
        border: 'none',
        borderRight: i < options.length - 1 ? '1px solid var(--border)' : 'none',
        cursor: 'pointer',
      }"
    >{{ opt }}</button>
  </div>
</template>
