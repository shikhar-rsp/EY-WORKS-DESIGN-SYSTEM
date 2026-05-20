<script setup lang="ts">
import { ref, computed } from 'vue'

const items = [1, 2, 3, 4, 5]
const current = ref(0)
const canPrev = computed(() => current.value > 0)
const canNext = computed(() => current.value < items.length - 1)
const prev = () => { if (canPrev.value) current.value-- }
const next = () => { if (canNext.value) current.value++ }
</script>

<template>
  <div :style="{ position: 'relative', width: '100%', maxWidth: '384px', padding: '0 32px', outline: 'none' }">
    <div :style="{ overflow: 'hidden' }">
      <div
        :style="{
          display: 'flex',
          transition: 'transform 300ms ease-in-out',
          transform: `translateX(-${current * 100}%)`,
        }"
      >
        <div
          v-for="n in items"
          :key="n"
          :style="{ minWidth: 0, flexShrink: 0, flexGrow: 0, flexBasis: '100%', paddingLeft: '16px' }"
        >
          <div
            :style="{
              display: 'flex', aspectRatio: '1',
              alignItems: 'center', justifyContent: 'center',
              borderRadius: 'var(--radius-large)',
              border: '1px solid var(--border)',
              background: 'var(--muted)',
              fontSize: '36px', fontWeight: 700,
              color: 'var(--foreground)',
            }"
          >{{ n }}</div>
        </div>
      </div>
    </div>

    <button
      :disabled="!canPrev"
      @click="prev"
      :style="{
        position: 'absolute', left: '-16px', top: '50%', transform: 'translateY(-50%)',
        display: 'flex', width: '32px', height: '32px',
        alignItems: 'center', justifyContent: 'center',
        borderRadius: '50%', border: '1px solid var(--border)',
        background: 'var(--background)', color: 'var(--foreground)',
        cursor: canPrev ? 'pointer' : 'not-allowed', opacity: canPrev ? '1' : '0.5',
      }"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6" /></svg>
    </button>

    <button
      :disabled="!canNext"
      @click="next"
      :style="{
        position: 'absolute', right: '-16px', top: '50%', transform: 'translateY(-50%)',
        display: 'flex', width: '32px', height: '32px',
        alignItems: 'center', justifyContent: 'center',
        borderRadius: '50%', border: '1px solid var(--border)',
        background: 'var(--background)', color: 'var(--foreground)',
        cursor: canNext ? 'pointer' : 'not-allowed', opacity: canNext ? '1' : '0.5',
      }"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
    </button>
  </div>
</template>
