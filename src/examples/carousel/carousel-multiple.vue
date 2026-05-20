<script setup lang="ts">
import { ref, computed } from 'vue'

const items = [1, 2, 3, 4, 5]
const current = ref(0)
const maxIndex = items.length - 3

const canPrev = computed(() => current.value > 0)
const canNext = computed(() => current.value < maxIndex)

const prev = () => { if (canPrev.value) current.value-- }
const next = () => { if (canNext.value) current.value++ }
</script>

<template>
  <div :style="{ position: 'relative', width: '100%', padding: '0 4px' }">
    <div :style="{ overflow: 'hidden' }">
      <div
        :style="{
          display: 'flex',
          marginLeft: '-8px',
          transition: 'transform 300ms ease-in-out',
          transform: `translateX(-${current * 33.333}%)`,
        }"
      >
        <div
          v-for="n in items"
          :key="n"
          :style="{
            minWidth: 0,
            flexShrink: 0,
            flexGrow: 0,
            flexBasis: '33.333%',
            paddingLeft: '8px',
          }"
        >
          <div
            :style="{
              display: 'flex',
              aspectRatio: '1',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 'var(--radius-large)',
              background: 'var(--muted)',
              fontSize: '20px',
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
        position: 'absolute', left: '-16px', top: '50%', transform: 'translateY(-50%)',
        display: 'flex', width: '32px', height: '32px',
        alignItems: 'center', justifyContent: 'center',
        borderRadius: '50%', border: '1px solid var(--border)',
        background: 'var(--background)', color: 'var(--foreground)',
        cursor: canPrev ? 'pointer' : 'not-allowed',
        opacity: canPrev ? '1' : '0.5',
      }"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6" /></svg>
    </button>

    <button
      aria-label="Next slide"
      :disabled="!canNext"
      @click="next"
      :style="{
        position: 'absolute', right: '-16px', top: '50%', transform: 'translateY(-50%)',
        display: 'flex', width: '32px', height: '32px',
        alignItems: 'center', justifyContent: 'center',
        borderRadius: '50%', border: '1px solid var(--border)',
        background: 'var(--background)', color: 'var(--foreground)',
        cursor: canNext ? 'pointer' : 'not-allowed',
        opacity: canNext ? '1' : '0.5',
      }"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
    </button>
  </div>
</template>
