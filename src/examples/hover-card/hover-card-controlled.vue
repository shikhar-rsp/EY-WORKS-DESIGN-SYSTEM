<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
  <div :style="{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', padding: '40px' }">
    <button
      @click="open = !open"
      :style="{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        background: 'var(--secondary)', color: 'var(--foreground)',
        borderRadius: 'var(--radius-medium)', padding: '0 12px',
        height: '32px', fontSize: '0.875rem', fontWeight: 500,
        cursor: 'pointer', border: '1px solid var(--border)',
      }"
    >{{ open ? 'Close card' : 'Open card' }}</button>

    <div style="position: relative;">
      <span :style="{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--primary)', textDecoration: 'underline', textUnderlineOffset: '4px', cursor: 'pointer' }">@vercel</span>
      <Transition name="hovercard">
        <div
          v-if="open"
          :style="{
            marginTop: '4px', width: '256px',
            borderRadius: 'var(--radius-large)', border: '1px solid var(--border)',
            background: 'var(--background)', padding: 'var(--space-200)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
          }"
        >
          <p :style="{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--foreground)', margin: '0 0 var(--space-100)' }">Vercel</p>
          <p :style="{ fontSize: '0.875rem', color: 'var(--secondary-foreground)', margin: 0 }">
            Build and deploy the best web experiences with the Vercel platform.
          </p>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.hovercard-enter-active, .hovercard-leave-active { transition: opacity 0.15s ease-out, transform 0.15s ease-out; }
.hovercard-enter-from, .hovercard-leave-to { opacity: 0; transform: scale(0.95); }
.hovercard-enter-to { opacity: 1; transform: scale(1); }
</style>
