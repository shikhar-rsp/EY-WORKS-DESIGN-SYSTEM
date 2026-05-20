<script setup lang="ts">
import { ref } from 'vue'

const openItem = ref<string | null>(null)

const toggle = (id: string) => {
  openItem.value = openItem.value === id ? null : id
}

const triggerStyle = {
  display: 'inline-flex',
  height: '36px',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--space-075)',
  borderRadius: 'var(--radius-medium)',
  padding: '0 var(--space-150)',
  fontFamily: 'var(--font-lexend, sans-serif)',
  fontSize: '14px',
  fontWeight: '500',
  color: 'var(--foreground)',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  outline: 'none',
  transition: 'background 150ms',
}

const contentStyle = {
  position: 'absolute' as const,
  left: '0',
  top: '100%',
  marginTop: 'var(--space-050)',
  minWidth: '12rem',
  borderRadius: 'var(--radius-large)',
  border: '1px solid var(--border)',
  background: 'var(--background)',
  padding: 'var(--space-100)',
  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
  zIndex: 50,
}
</script>

<template>
  <nav aria-label="Main navigation" :style="{ position: 'relative', display: 'flex', alignItems: 'center', fontFamily: 'var(--font-lexend, sans-serif)' }">
    <ul :style="{ display: 'flex', listStyle: 'none', padding: '0', margin: '0', gap: 'var(--space-050)', alignItems: 'center' }">
      <li :style="{ position: 'relative' }">
        <button
          type="button"
          :aria-expanded="openItem === 'getting-started'"
          @click="toggle('getting-started')"
          :style="{ ...triggerStyle, background: openItem === 'getting-started' ? 'var(--muted)' : 'transparent' }"
        >
          Getting Started
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </button>
        <div v-if="openItem === 'getting-started'" :style="contentStyle">
          <ul :style="{ listStyle: 'none', padding: 'var(--space-100)', margin: '0', display: 'grid', gap: 'var(--space-100)', width: '400px', gridTemplateColumns: '160px 1fr' }">
            <li :style="{ gridRow: 'span 3' }">
              <div :style="{ display: 'flex', height: '100%', flexDirection: 'column', justifyContent: 'flex-end', borderRadius: 'var(--radius-medium)', background: 'var(--primary)', padding: 'var(--space-200)' }">
                <p :style="{ fontSize: '14px', fontWeight: '700', color: 'var(--primary-foreground)', margin: '0' }">eyDS</p>
                <p :style="{ margin: 'var(--space-050) 0 0', fontSize: '12px', color: 'var(--primary-foreground)', opacity: '0.8' }">A component library synced from Figma.</p>
              </div>
            </li>
            <li v-for="item in ['Introduction', 'Installation', 'Theming']" :key="item">
              <a href="#" :style="{ display: 'block', borderRadius: 'var(--radius-medium)', padding: 'var(--space-100)', textDecoration: 'none' }">
                <p :style="{ fontSize: '14px', fontWeight: '500', color: 'var(--foreground)', margin: '0' }">{{ item }}</p>
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li :style="{ position: 'relative' }">
        <button
          type="button"
          :aria-expanded="openItem === 'components'"
          @click="toggle('components')"
          :style="{ ...triggerStyle, background: openItem === 'components' ? 'var(--muted)' : 'transparent' }"
        >
          Components
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </button>
        <div v-if="openItem === 'components'" :style="contentStyle">
          <ul :style="{ listStyle: 'none', padding: 'var(--space-100)', margin: '0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-050)', width: '300px' }">
            <li v-for="comp in ['Button', 'Input', 'Dialog', 'Select', 'Carousel']" :key="comp">
              <a href="#" :style="{ display: 'block', borderRadius: 'var(--radius-medium)', padding: 'var(--space-075) var(--space-100)', fontSize: '14px', color: 'var(--foreground)', textDecoration: 'none' }">{{ comp }}</a>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <a href="#" :style="{ ...triggerStyle, textDecoration: 'none', display: 'inline-flex' }">Documentation</a>
      </li>
    </ul>
  </nav>
</template>
