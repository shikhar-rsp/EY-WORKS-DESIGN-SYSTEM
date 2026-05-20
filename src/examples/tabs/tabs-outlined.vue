<script setup lang="ts">
import { ref } from 'vue'
const active = ref('all')
const tabs = [
  { value: 'all', label: 'All', content: 'Showing all items.' },
  { value: 'active', label: 'Active', content: 'Showing active items only.' },
  { value: 'closed', label: 'Closed', content: 'Showing closed items only.' },
]
</script>

<template>
  <div>
    <div role="tablist" :style="{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '4px', borderRadius: '9999px', background: 'var(--muted)' }">
      <button
        v-for="tab in tabs"
        :key="tab.value"
        role="tab"
        :aria-selected="active === tab.value"
        @click="active = tab.value"
        :style="{
          padding: '12px',
          fontSize: '14px',
          fontWeight: active === tab.value ? 600 : 500,
          border: 'none',
          background: active === tab.value ? 'var(--primary-subtle-pressed)' : 'transparent',
          color: active === tab.value ? 'var(--foreground)' : 'var(--muted-foreground)',
          borderRadius: '9999px',
          cursor: 'pointer',
        }"
      >{{ tab.label }}</button>
    </div>
    <div
      v-for="tab in tabs"
      :key="tab.value"
      v-show="active === tab.value"
      :style="{ marginTop: '16px', fontSize: '14px', color: 'var(--secondary-foreground)' }"
    >{{ tab.content }}</div>
  </div>
</template>
