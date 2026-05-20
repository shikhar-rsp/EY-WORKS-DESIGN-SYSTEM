<script setup lang="ts">
import { ref } from 'vue'

const openMenu = ref<string | null>(null)

const toggle = (menu: string) => {
  openMenu.value = openMenu.value === menu ? null : menu
}
</script>

<template>
  <div
    role="menubar"
    :style="{
      display: 'inline-flex',
      height: '36px',
      alignItems: 'center',
      gap: 'var(--space-050)',
      borderRadius: 'var(--radius-medium)',
      border: '1px solid var(--border)',
      background: 'var(--background)',
      padding: '0 var(--space-050)',
      position: 'relative',
    }"
  >
    <button
      v-for="menu in ['File', 'Edit', 'View']"
      :key="menu"
      @click="toggle(menu)"
      :style="{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        borderRadius: 'var(--radius-small)',
        padding: 'var(--space-050) var(--space-150)',
        fontSize: '14px',
        fontWeight: 500,
        color: 'var(--foreground)',
        background: openMenu === menu ? 'var(--muted)' : 'transparent',
        border: 'none',
        outline: 'none',
        userSelect: 'none',
      }"
    >{{ menu }}</button>
  </div>
</template>
