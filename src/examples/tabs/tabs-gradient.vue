<script setup lang="ts">
import { ref } from 'vue'
const active = ref('overview')
const tabs = [
  { value: 'overview', label: 'Overview', content: 'Overview content goes here.' },
  { value: 'analytics', label: 'Analytics', content: 'Analytics data goes here.' },
  { value: 'reports', label: 'Reports', content: 'Reports content goes here.' },
]
</script>

<template>
  <div>
    <div role="tablist" :style="{ display: 'inline-flex', alignItems: 'center', borderBottom: '1px solid var(--border)', background: 'var(--muted)', width: '100%' }">
      <button
        v-for="tab in tabs"
        :key="tab.value"
        role="tab"
        :aria-selected="active === tab.value"
        @click="active = tab.value"
        :style="{
          padding: '8px',
          fontSize: '14px',
          fontWeight: active === tab.value ? 600 : 500,
          border: 'none',
          background: active === tab.value ? 'var(--background)' : 'transparent',
          color: active === tab.value ? 'var(--foreground)' : 'var(--muted-foreground)',
          borderRadius: '8px 8px 0 0',
          borderBottom: active === tab.value ? '1px solid var(--primary)' : '1px solid transparent',
          marginBottom: '-1px',
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
