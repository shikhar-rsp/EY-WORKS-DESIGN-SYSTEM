<script setup lang="ts">
import { ref } from 'vue'
const checked = ref(false)
</script>

<template>
  <div style="display: flex; align-items: center; gap: 8px;">
    <button
      id="notifications"
      type="button"
      role="switch"
      :aria-checked="checked"
      @click="checked = !checked"
      :style="{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        width: '36px',
        height: '20px',
        borderRadius: '9999px',
        border: '2px solid transparent',
        background: checked ? 'var(--primary)' : 'var(--muted-active)',
        cursor: 'pointer',
        transition: 'background 200ms ease-in-out',
      }"
    >
      <span :style="{
        display: 'block',
        width: '16px',
        height: '16px',
        borderRadius: '50%',
        background: 'var(--primary-foreground)',
        transform: checked ? 'translateX(16px)' : 'translateX(0)',
        transition: 'transform 200ms ease-in-out',
        pointerEvents: 'none',
      }"></span>
    </button>
    <label for="notifications" style="font-size: 14px; cursor: pointer;" :style="{ color: 'var(--foreground)' }">
      Enable notifications
    </label>
  </div>
</template>
