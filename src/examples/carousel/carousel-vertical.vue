<script setup lang="ts">
import { ref, computed } from 'vue'

const items = [1, 2, 3]
const current = ref(0)
const canPrev = computed(() => current.value > 0)
const canNext = computed(() => current.value < items.length - 1)
const prev = () => { if (canPrev.value) current.value-- }
const next = () => { if (canNext.value) current.value++ }
</script>

<template>
  <div :style="{ position: 'relative', height: '256px', width: '256px', padding: '32px 0' }">
    <div :style="{ overflow: 'hidden', height: '100%' }">
      <div
        :style="{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          transition: 'transform 300ms ease-in-out',
          transform: `translateY(-${current * 100}%)`,
        }"
      >
        <div
          v-for="n in items"
          :key="n"
          :style="{ minHeight: 0, flexShrink: 0, flexGrow: 0, flexBasis: '100%', paddingTop: '16px' }"
        >
          <div
            :style="{
              display: 'flex',
              height: '192px',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 'var(--radius-large)',
              background: 'var(--muted)',
              fontSize: '30px',
              fontWeight: 700,
              color: 'var(--foreground)',
            }"
          >{{ n }}</div>
        </div>
      </div>
    </div>

    <button
      aria-label="Previous slide"
      :disabled="!canPrev"
      @click="prev"
      :style="{
        position: 'absolute', top: '-16px', left: '50%', transform: 'translateX(-50%) rotate(90deg)',
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
      aria-label="Next slide"
      :disabled="!canNext"
      @click="next"
      :style="{
        position: 'absolute', bottom: '-16px', left: '50%', transform: 'translateX(-50%) rotate(90deg)',
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
