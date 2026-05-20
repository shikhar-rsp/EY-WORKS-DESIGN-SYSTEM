<script setup lang="ts">
interface ISizeItem {
  label: string
  sizeLabel: string
  height: string
  fontSize: string
  lineHeight: string
  padding: string
}

const sizes: ISizeItem[] = [
  { label: 'Small', sizeLabel: '16px', height: '16px', fontSize: '12px', lineHeight: '16px', padding: '0 4px' },
  { label: 'Medium', sizeLabel: '20px', height: '20px', fontSize: '14px', lineHeight: '20px', padding: '0 4px' },
  { label: 'Large', sizeLabel: '24px', height: '24px', fontSize: '14px', lineHeight: '20px', padding: '2px 6px' },
]
</script>

<template>
  <div :style="{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px', padding: '16px' }">
    <div
      v-for="s in sizes"
      :key="s.label"
      :style="{ display: 'flex', flexDirection: 'column', alignItems: 'center' }"
    >
      <div
        :style="{
          display: 'inline-flex',
          alignItems: 'center',
          borderRadius: '4px',
          flexShrink: '0',
          height: s.height,
          padding: s.padding,
          backgroundColor: 'var(--primary, #f8785e)',
          color: '#ffffff',
          fontFamily: '\'Lexend\', sans-serif',
          fontWeight: 400,
          fontSize: s.fontSize,
          lineHeight: s.lineHeight,
          whiteSpace: 'nowrap',
          userSelect: 'none',
        }"
      >
        {{ s.label }}
      </div>
      <span :style="{ fontFamily: '\'Lexend\', sans-serif', fontSize: '10px', color: 'var(--muted-foreground, #7a7272)', marginTop: '8px' }">
        {{ s.sizeLabel }}
      </span>
    </div>
  </div>
</template>
