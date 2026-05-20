<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
  <div :style="{ position: 'relative', display: 'inline-block', fontFamily: 'var(--font-lexend, sans-serif)' }">
    <button
      type="button"
      :aria-expanded="isOpen"
      aria-haspopup="dialog"
      @click="isOpen = !isOpen"
      :style="{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        height: '36px', padding: '0 var(--space-200)', borderRadius: 'var(--radius-medium)',
        border: '1px solid var(--border)', background: 'var(--background)',
        fontFamily: 'var(--font-lexend, sans-serif)', fontSize: '14px', fontWeight: '500',
        color: 'var(--foreground)', cursor: 'pointer',
      }"
    >
      Open Popover
    </button>

    <div
      v-if="isOpen"
      role="dialog"
      :style="{
        position: 'absolute', left: '0', top: 'calc(100% + 4px)',
        width: '288px', borderRadius: 'var(--radius-large)',
        border: '1px solid var(--border)', background: 'var(--background)',
        padding: 'var(--space-200)', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', zIndex: 50,
      }"
    >
      <div :style="{ marginBottom: 'var(--space-150)', display: 'flex', flexDirection: 'column', gap: 'var(--space-050)' }">
        <h3 :style="{ margin: '0', fontSize: '14px', fontWeight: '600', color: 'var(--foreground)' }">Dimensions</h3>
        <p :style="{ margin: '0', fontSize: '12px', color: 'var(--muted-foreground)' }">Set the dimensions for the layer.</p>
      </div>
      <div :style="{ display: 'grid', gap: 'var(--space-100)' }">
        <div :style="{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-100)' }">
          <span :style="{ fontSize: '14px', color: 'var(--muted-foreground)' }">Width</span>
          <span :style="{ fontSize: '14px', fontWeight: '500', color: 'var(--foreground)' }">100%</span>
        </div>
        <div :style="{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-100)' }">
          <span :style="{ fontSize: '14px', color: 'var(--muted-foreground)' }">Height</span>
          <span :style="{ fontSize: '14px', fontWeight: '500', color: 'var(--foreground)' }">auto</span>
        </div>
      </div>
    </div>
  </div>
</template>
