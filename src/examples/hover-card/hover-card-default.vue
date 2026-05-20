<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
let openTimer: ReturnType<typeof setTimeout> | null = null
let closeTimer: ReturnType<typeof setTimeout> | null = null

const scheduleOpen = () => {
  if (closeTimer) clearTimeout(closeTimer)
  openTimer = setTimeout(() => { isOpen.value = true }, 700)
}
const scheduleClose = () => {
  if (openTimer) clearTimeout(openTimer)
  closeTimer = setTimeout(() => { isOpen.value = false }, 300)
}
</script>

<template>
  <div
    style="padding: 40px; display: flex; justify-content: center;"
    @mouseenter="scheduleOpen"
    @mouseleave="scheduleClose"
  >
    <div style="position: relative; display: inline-block;">
      <span
        :style="{
          fontSize: '0.875rem', fontWeight: 500,
          color: 'var(--primary)', textDecoration: 'underline',
          textUnderlineOffset: '4px', cursor: 'pointer',
        }"
      >@nextjs</span>

      <Transition name="hovercard">
        <div
          v-if="isOpen"
          role="tooltip"
          :style="{
            position: 'absolute', top: 'calc(100% + 4px)', left: '50%',
            transform: 'translateX(-50%)',
            width: '256px', borderRadius: 'var(--radius-large)',
            border: '1px solid var(--border)', background: 'var(--background)',
            padding: 'var(--space-200)', boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
            zIndex: 50,
          }"
        >
          <div :style="{ display: 'flex', alignItems: 'center', gap: 'var(--space-150)', marginBottom: 'var(--space-100)' }">
            <div :style="{ width: '40px', height: '40px', borderRadius: 'var(--radius-full)', background: 'var(--muted)' }" />
            <div>
              <p :style="{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--foreground)', margin: 0 }">Next.js</p>
              <p :style="{ fontSize: '0.75rem', color: 'var(--muted-foreground)', margin: 0 }">@nextjs</p>
            </div>
          </div>
          <p :style="{ fontSize: '0.875rem', color: 'var(--secondary-foreground)', margin: '0 0 var(--space-100)' }">
            The React framework for the web. Used by some of the world's largest companies.
          </p>
          <p :style="{ fontSize: '0.75rem', color: 'var(--muted-foreground)', margin: 0 }">Joined December 2021</p>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.hovercard-enter-active, .hovercard-leave-active {
  transition: opacity 0.15s ease-out, transform 0.15s ease-out;
}
.hovercard-enter-from, .hovercard-leave-to {
  opacity: 0;
  transform: translateX(-50%) scale(0.95);
}
.hovercard-enter-to {
  opacity: 1;
  transform: translateX(-50%) scale(1);
}
</style>
