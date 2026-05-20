<script setup lang="ts">
import { ref } from 'vue'
const open = ref(false)
</script>

<template>
  <div role="menubar" :style="{ display: 'inline-flex', height: '36px', alignItems: 'center', gap: 'var(--space-050)', borderRadius: 'var(--radius-medium)', border: '1px solid var(--border)', background: 'var(--background)', padding: '0 var(--space-050)' }">
    <button
      @click="open = !open"
      :style="{
        display: 'flex', alignItems: 'center', cursor: 'pointer',
        borderRadius: 'var(--radius-small)', padding: 'var(--space-050) var(--space-150)',
        fontSize: '14px', fontWeight: 500, color: 'var(--foreground)',
        background: open ? 'var(--muted)' : 'transparent', border: 'none', outline: 'none',
      }"
    >Edit</button>
    <div v-if="open" :style="{
      position: 'fixed', top: '56px', left: '16px', zIndex: 50,
      minWidth: '12rem', borderRadius: 'var(--radius-large)',
      border: '1px solid var(--border)', background: 'var(--background)',
      padding: 'var(--space-050)', boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    }">
      <button v-for="item in items" :key="item.label"
        :style="{ display: 'flex', width: '100%', alignItems: 'center', cursor: 'pointer', borderRadius: 'var(--radius-small)', padding: 'var(--space-075) var(--space-150)', fontSize: '14px', color: 'var(--foreground)', background: 'transparent', border: 'none', outline: 'none' }"
        @mouseover="($event.target as HTMLElement).style.background = 'var(--muted)'"
        @mouseout="($event.target as HTMLElement).style.background = 'transparent'"
      >
        {{ item.label }}
        <span :style="{ marginLeft: 'auto', paddingLeft: 'var(--space-200)', fontSize: '12px', color: 'var(--muted-foreground)', letterSpacing: '0.1em' }">{{ item.shortcut }}</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      items: [
        { label: 'Undo', shortcut: '⌘Z' },
        { label: 'Redo', shortcut: '⌘⇧Z' },
        { label: 'Cut', shortcut: '⌘X' },
        { label: 'Copy', shortcut: '⌘C' },
        { label: 'Paste', shortcut: '⌘V' },
      ]
    }
  }
}
</script>
