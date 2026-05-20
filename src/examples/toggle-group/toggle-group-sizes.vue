<script setup lang="ts">
const sizes = [
  { key: 'sm', h: '28px', minW: '28px', px: '6px', fs: '12px' },
  { key: 'md', h: '36px', minW: '36px', px: '12px', fs: '14px' },
  { key: 'lg', h: '40px', minW: '40px', px: '16px', fs: '14px' },
]
</script>

<template>
  <div :style="{ display: 'flex', flexDirection: 'column', gap: '16px' }">
    <div v-for="sz in sizes" :key="sz.key" :style="{ display: 'flex', alignItems: 'center', gap: '16px' }">
      <span :style="{ width: '24px', fontFamily: 'var(--font-lexend)', fontSize: '12px', color: 'var(--muted-foreground)' }">{{ sz.key }}</span>
      <div role="radiogroup" :style="{ display: 'flex', gap: 'var(--space-050)' }">
        <button
          v-for="(label, i) in ['A', 'B', 'C']"
          :key="label"
          type="button"
          role="radio"
          :aria-checked="i === 0"
          :style="{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            height: sz.h, minWidth: sz.minW, padding: `0 ${sz.px}`,
            fontFamily: 'var(--font-lexend), sans-serif', fontWeight: 500, fontSize: sz.fs,
            background: i === 0 ? 'var(--muted)' : 'transparent',
            color: i === 0 ? 'var(--foreground)' : 'var(--muted-foreground)',
            border: 'none', borderRadius: 'var(--radius-medium)', cursor: 'pointer',
          }"
        >{{ label }}</button>
      </div>
    </div>
  </div>
</template>
