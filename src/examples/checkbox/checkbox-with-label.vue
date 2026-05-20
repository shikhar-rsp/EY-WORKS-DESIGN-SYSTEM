<script setup lang="ts">
import { ref } from 'vue'
const checked = ref(false)
</script>

<template>
  <div :style="{ display: 'inline-flex', alignItems: 'flex-start', gap: 'var(--space-100)' }">
    <span
      :style="{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '16px', height: '16px', borderRadius: 'var(--radius-small)', border: checked ? 'none' : '1px solid var(--border-input)', background: checked ? 'var(--primary)' : 'var(--background)', transition: 'all 150ms', flexShrink: '0', marginTop: '1px', cursor: 'pointer' }"
      @click="checked = !checked"
    >
      <svg v-if="checked" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </span>
    <div :style="{ display: 'flex', flexDirection: 'column', gap: '2px', cursor: 'pointer' }" @click="checked = !checked">
      <span :style="{ fontFamily: '\'Lexend\', sans-serif', fontSize: '14px', color: 'var(--foreground)' }">Subscribe to newsletter</span>
      <span :style="{ fontFamily: '\'Lexend\', sans-serif', fontSize: '12px', color: 'var(--muted-foreground)' }">Get weekly updates and product news</span>
    </div>
  </div>
</template>
