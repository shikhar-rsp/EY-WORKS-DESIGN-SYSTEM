<script setup lang="ts">
import { ref } from 'vue'

type Direction = 'bottom' | 'top' | 'left' | 'right'
const open = ref(false)
const direction = ref<Direction>('bottom')

const openDrawer = (dir: Direction) => {
  direction.value = dir
  open.value = true
}

const panelStyle = (dir: Direction) => {
  const base = {
    position: 'fixed' as const, zIndex: 51,
    background: 'var(--background)', padding: '24px',
    boxShadow: '0 10px 60px rgba(0,0,0,0.15)',
    fontFamily: 'var(--font-lexend)',
  }
  if (dir === 'bottom') return { ...base, bottom: 0, left: 0, right: 0, maxHeight: '85vh', borderRadius: '16px 16px 0 0', borderTop: '1px solid var(--border)' }
  if (dir === 'top')    return { ...base, top: 0, left: 0, right: 0, maxHeight: '85vh', borderRadius: '0 0 16px 16px', borderBottom: '1px solid var(--border)' }
  if (dir === 'left')   return { ...base, top: 0, bottom: 0, left: 0, width: '75%', maxWidth: '320px', borderRadius: '0 16px 16px 0', borderRight: '1px solid var(--border)' }
  return { ...base, top: 0, bottom: 0, right: 0, width: '75%', maxWidth: '320px', borderRadius: '16px 0 0 16px', borderLeft: '1px solid var(--border)' }
}

const dirLabel = (dir: Direction) => dir.charAt(0).toUpperCase() + dir.slice(1)
</script>

<template>
  <div :style="{ display: 'flex', flexWrap: 'wrap', gap: '12px' }">
    <button
      v-for="dir in ['bottom', 'top', 'left', 'right'] as Direction[]"
      :key="dir"
      @click="openDrawer(dir)"
      :style="{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        height: '36px', padding: '0 16px', borderRadius: 'var(--radius-medium)',
        border: '1px solid var(--border)', background: 'var(--background)',
        color: 'var(--foreground)', fontSize: '14px', fontWeight: 500, cursor: 'pointer',
        fontFamily: 'var(--font-lexend)',
      }"
    >{{ dirLabel(dir) }}</button>

    <Teleport to="body">
      <template v-if="open">
        <div @click="open = false" :style="{ position: 'fixed', inset: 0, zIndex: 50, background: 'rgba(46,43,43,0.4)', backdropFilter: 'blur(2px)' }" />
        <div role="dialog" aria-modal="true" :style="panelStyle(direction)">
          <div v-if="direction === 'bottom' || direction === 'top'" :style="{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }">
            <div :style="{ width: '48px', height: '6px', borderRadius: '99px', background: 'var(--muted)' }" />
          </div>
          <h2 :style="{ fontSize: '18px', fontWeight: 600, color: 'var(--foreground)', margin: '0 0 4px' }">
            Drawer — {{ direction }}
          </h2>
          <p :style="{ fontSize: '14px', color: 'var(--muted-foreground)', margin: '0 0 16px' }">
            Slides in from the {{ direction }}.
          </p>
          <p :style="{ fontSize: '14px', color: 'var(--secondary-foreground)', marginBottom: '16px' }">
            Supports any content including forms, lists, or rich media.
          </p>
          <button
            @click="open = false"
            :style="{
              height: '36px', width: '100%', borderRadius: 'var(--radius-medium)',
              border: '1px solid var(--border)', background: 'var(--background)',
              color: 'var(--foreground)', fontSize: '14px', fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit',
            }"
          >Close</button>
        </div>
      </template>
    </Teleport>
  </div>
</template>
