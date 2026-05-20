<script setup lang="ts">
import { ref } from 'vue'
const checked = ref(false)
</script>

<template>
  <label
    :style="{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-100)', cursor: 'pointer', fontFamily: '\'Lexend\', sans-serif', fontSize: '14px', color: 'var(--foreground)' }"
    @click.prevent="checked = !checked"
  >
    <span :style="{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '16px', height: '16px', borderRadius: 'var(--radius-small)', border: checked ? 'none' : '1px solid var(--border-input)', background: checked ? 'var(--primary)' : 'var(--background)', transition: 'all 150ms', flexShrink: '0' }">
      <svg v-if="checked" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </span>
    Enable feature
  </label>
</template>
