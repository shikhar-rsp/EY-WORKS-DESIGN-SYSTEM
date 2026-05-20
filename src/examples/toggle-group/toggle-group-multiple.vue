<script setup lang="ts">
import { ref } from 'vue'

const active = ref(['bold'])
const toggleItem = (val: string) => {
  if (active.value.includes(val)) {
    active.value = active.value.filter(v => v !== val)
  } else {
    active.value = [...active.value, val]
  }
}
</script>

<template>
  <div role="group" :style="{ display: 'flex', alignItems: 'center', gap: 'var(--space-050)' }">
    <button
      v-for="item in [{ val: 'bold', label: 'B', style: 'font-weight:bold' }, { val: 'italic', label: 'I', style: 'font-style:italic' }, { val: 'underline', label: 'U', style: 'text-decoration:underline' }]"
      :key="item.val"
      type="button"
      role="checkbox"
      :aria-checked="active.includes(item.val)"
      @click="toggleItem(item.val)"
      :style="{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        height: '36px', minWidth: '36px', padding: '0 var(--space-150)',
        fontFamily: 'var(--font-lexend), sans-serif', fontWeight: 500, fontSize: '14px',
        background: active.includes(item.val) ? 'var(--muted)' : 'transparent',
        color: active.includes(item.val) ? 'var(--foreground)' : 'var(--muted-foreground)',
        border: 'none', borderRadius: 'var(--radius-medium)', cursor: 'pointer',
      }"
    >
      <span :style="item.style">{{ item.label }}</span>
    </button>
  </div>
</template>
