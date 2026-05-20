<script setup lang="ts">
import { ref } from 'vue'
const checked = ref(false)

const toggle = () => { checked.value = !checked.value }
</script>

<template>
  <div :style="{ display: 'flex', alignItems: 'center', gap: '8px' }">
    <!-- Checkbox -->
    <span
      :style="{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '16px',
        height: '16px',
        borderRadius: 'var(--radius-xsmall)',
        background: checked ? 'var(--primary)' : 'var(--background)',
        border: checked ? 'none' : '1px solid var(--border-input)',
        cursor: 'pointer',
        transition: 'background 0.15s, border 0.15s',
      }"
      @click="toggle"
    >
      <svg
        v-if="checked"
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        :style="{ stroke: 'var(--primary-foreground)', strokeWidth: '3px', strokeLinecap: 'round', strokeLinejoin: 'round' }"
      >
        <path d="M19 6.5L8.5 17.5L5 14" />
      </svg>
      <input id="terms" type="checkbox" :checked="checked" style="position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0,0,0,0);" />
    </span>
    <!-- Label -->
    <label for="terms" :style="{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-050)',
      fontFamily: '\'Lexend\', sans-serif',
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: 1,
      color: 'var(--foreground)',
      userSelect: 'none',
      cursor: 'pointer',
    }" @click="toggle">Accept terms and conditions</label>
  </div>
</template>
