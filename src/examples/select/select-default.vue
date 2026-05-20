<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
const open = ref(false)

const fruits = ['Apple', 'Banana', 'Blueberry', 'Grapes']
const vegetables = ['Carrot', 'Potato']

const select = (val: string) => {
  value.value = val
  open.value = false
}
</script>

<template>
  <div :style="{ position: 'relative', width: '224px', fontFamily: 'var(--font-lexend, sans-serif)' }">
    <!-- Trigger -->
    <button
      type="button"
      @click="open = !open"
      :style="{
        display: 'flex',
        height: '36px',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 'var(--radius-medium)',
        border: '1px solid var(--border-input)',
        background: 'var(--background)',
        padding: '0 var(--space-150)',
        color: value ? 'var(--foreground)' : 'var(--placeholder)',
        cursor: 'pointer',
        fontSize: '14px',
      }"
    >
      <span>{{ value || 'Select a fruit' }}</span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="opacity:0.5;flex-shrink:0">
        <path d="m6 9 6 6 6-6"/>
      </svg>
    </button>

    <!-- Dropdown -->
    <div
      v-if="open"
      :style="{
        position: 'absolute',
        top: 'calc(100% + 4px)',
        left: 0,
        zIndex: 50,
        width: '100%',
        overflow: 'hidden',
        borderRadius: 'var(--radius-medium)',
        border: '1px solid var(--border)',
        background: 'var(--background)',
        boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
        padding: '4px',
      }"
    >
      <div :style="{ padding: '6px 8px 2px', fontSize: '12px', fontWeight: 500, color: 'var(--muted-foreground)' }">Fruits</div>
      <div
        v-for="fruit in fruits"
        :key="fruit"
        @click="select(fruit.toLowerCase())"
        :style="{
          display: 'flex', alignItems: 'center',
          padding: '6px 8px', borderRadius: 'var(--radius-small)',
          cursor: 'pointer', color: 'var(--foreground)', fontSize: '14px',
        }"
        @mouseover="($event.target as HTMLElement).style.background = 'var(--muted-hover)'"
        @mouseout="($event.target as HTMLElement).style.background = 'transparent'"
      >{{ fruit }}</div>
      <div :style="{ height: '1px', background: 'var(--border)', margin: '4px 0' }" />
      <div :style="{ padding: '6px 8px 2px', fontSize: '12px', fontWeight: 500, color: 'var(--muted-foreground)' }">Vegetables</div>
      <div
        v-for="veg in vegetables"
        :key="veg"
        @click="select(veg.toLowerCase())"
        :style="{
          display: 'flex', alignItems: 'center',
          padding: '6px 8px', borderRadius: 'var(--radius-small)',
          cursor: 'pointer', color: 'var(--foreground)', fontSize: '14px',
        }"
        @mouseover="($event.target as HTMLElement).style.background = 'var(--muted-hover)'"
        @mouseout="($event.target as HTMLElement).style.background = 'transparent'"
      >{{ veg }}</div>
    </div>
  </div>
</template>
