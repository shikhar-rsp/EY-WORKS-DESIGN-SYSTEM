<script setup lang="ts">
import { ref } from 'vue'

const items = ['A', 'B', 'C']
const current = ref(0)

const prev = () => {
  current.value = (current.value - 1 + items.length) % items.length
}

const next = () => {
  current.value = (current.value + 1) % items.length
}
</script>

<template>
  <div :style="{ position: 'relative', width: '240px', outline: 'none' }">
    <div :style="{ overflow: 'hidden' }">
      <div
        :style="{
          display: 'flex',
          transition: 'transform 300ms ease-in-out',
          transform: `translateX(-${current * 100}%)`,
        }"
      >
        <div
          v-for="letter in items"
          :key="letter"
          role="group"
          aria-roledescription="slide"
          :style="{
            minWidth: 0,
            flexShrink: 0,
            flexGrow: 0,
            flexBasis: '100%',
            paddingLeft: '16px',
          }"
        >
          <div
            :style="{
              display: 'flex',
              aspectRatio: '1',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 'var(--radius-large)',
              background: 'var(--primary)',
              color: 'var(--primary-foreground)',
              fontSize: '30px',
              fontWeight: 700,
            }"
          >
            {{ letter }}
          </div>
        </div>
      </div>
    </div>

    <button
      aria-label="Previous slide"
      @click="prev"
      :style="{
        position: 'absolute',
        left: '-16px',
        top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex',
        width: '32px',
        height: '32px',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        border: '1px solid var(--border)',
        background: 'var(--background)',
        color: 'var(--foreground)',
        cursor: 'pointer',
      }"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m15 18-6-6 6-6" />
      </svg>
    </button>

    <button
      aria-label="Next slide"
      @click="next"
      :style="{
        position: 'absolute',
        right: '-16px',
        top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex',
        width: '32px',
        height: '32px',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        border: '1px solid var(--border)',
        background: 'var(--background)',
        color: 'var(--foreground)',
        cursor: 'pointer',
      }"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m9 18 6-6-6-6" />
      </svg>
    </button>
  </div>
</template>
