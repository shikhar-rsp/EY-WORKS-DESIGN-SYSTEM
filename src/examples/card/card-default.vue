<template>
  <div :style="{
    display: 'inline-flex', flexDirection: 'column', gap: '0',
    borderRadius: 'var(--radius-medium)', border: '1px solid var(--border)',
    background: 'var(--background)', overflow: 'hidden', width: '288px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.08)'
  }">

    <!-- Header -->
    <div :style="{ display: 'flex', flexDirection: 'column', gap: '6px', padding: '20px 20px 0' }">
      <h3 :style="{ margin: '0', fontSize: '16px', fontWeight: 600, lineHeight: '1.4', color: 'var(--foreground)', fontFamily: 'var(--font-lexend, sans-serif)' }">Card Title</h3>
      <p :style="{ margin: '0', fontSize: '14px', color: 'var(--muted-foreground)', fontFamily: 'var(--font-lexend, sans-serif)', lineHeight: '1.5' }">Card description goes here.</p>
    </div>

    <!-- Content -->
    <div :style="{ padding: '16px 20px' }">
      <p :style="{ margin: '0', fontSize: '14px', color: 'var(--secondary-foreground)', fontFamily: 'var(--font-lexend, sans-serif)', lineHeight: '1.5' }">
        This is the main content area of the card. It can hold any content.
      </p>
    </div>

    <!-- Footer -->
    <div :style="{ display: 'flex', alignItems: 'center', gap: '8px', padding: '0 20px 20px' }">
      <button
        :style="{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          height: '32px', minWidth: '40px', padding: '0 16px',
          background: hover1 ? 'var(--primary-hover)' : 'var(--primary)',
          color: 'var(--primary-foreground)', border: '1px solid transparent',
          borderRadius: 'var(--radius-medium)', fontSize: '14px', fontWeight: 500,
          fontFamily: 'var(--font-lexend, sans-serif)', cursor: 'pointer',
        }"
        @mouseenter="hover1 = true" @mouseleave="hover1 = false"
      >Save</button>
      <button
        :style="{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          height: '32px', minWidth: '40px', padding: '0 16px',
          background: hover2 ? 'var(--muted-hover)' : 'var(--background)',
          color: 'var(--primary)', border: '1px solid var(--border)',
          borderRadius: 'var(--radius-medium)', fontSize: '14px', fontWeight: 500,
          fontFamily: 'var(--font-lexend, sans-serif)', cursor: 'pointer',
        }"
        @mouseenter="hover2 = true" @mouseleave="hover2 = false"
      >Cancel</button>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const hover1 = ref(false)
const hover2 = ref(false)
</script>
