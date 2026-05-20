<script setup lang="ts">
const tags = [
  'v1.0.0', 'v1.1.0', 'v1.2.0', 'v1.3.0', 'v2.0.0',
  'v2.1.0', 'v2.2.0', 'v3.0.0', 'v3.1.0', 'v3.2.0',
  'v4.0.0', 'v4.1.0', 'v4.2.0', 'v5.0.0',
]
</script>

<template>
  <div
    :style="{
      position: 'relative',
      overflow: 'hidden',
      height: '192px',
      width: '192px',
      borderRadius: 'var(--radius-medium)',
      border: '1px solid var(--border)',
    }"
  >
    <div
      :style="{
        width: '100%',
        height: '100%',
        overflowY: 'auto',
        scrollbarWidth: 'none',
      }"
    >
      <div :style="{ padding: '12px' }">
        <h4
          :style="{
            marginBottom: '8px',
            fontSize: '14px',
            fontWeight: 600,
            color: 'var(--foreground)',
            fontFamily: 'var(--font-lexend, sans-serif)',
          }"
        >Tags</h4>
        <div
          v-for="tag in tags"
          :key="tag"
          :style="{
            borderBottom: '1px solid var(--border)',
            padding: '6px 0',
            fontSize: '14px',
            color: 'var(--secondary-foreground)',
            fontFamily: 'var(--font-lexend, sans-serif)',
          }"
        >{{ tag }}</div>
      </div>
    </div>
  </div>
</template>
