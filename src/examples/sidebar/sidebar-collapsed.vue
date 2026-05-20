<template>
  <aside
    :style="{
      display: 'flex',
      width: '72px',
      height: '500px',
      flexDirection: 'column',
      background: 'var(--background)',
      boxShadow: '-2px 0px 16px 0px rgba(0,0,0,0.1)',
      borderRadius: '8px',
      overflow: 'hidden',
    }"
  >
    <!-- Icon Rail -->
    <div
      :style="{
        display: 'flex',
        width: '72px',
        flexDirection: 'column',
        alignItems: 'center',
        borderRight: '1px solid var(--border)',
        padding: 'var(--space-200) 0',
      }"
    >
      <!-- Logo -->
      <div :style="{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', marginBottom: 'var(--space-100)' }">
        <span :style="{ fontFamily: 'var(--font-lexend), sans-serif', fontSize: '18px', fontWeight: 700, lineHeight: 1 }">
          <span :style="{ color: 'var(--primary)' }">ey</span><span :style="{ color: 'var(--foreground)' }">works</span>
        </span>
      </div>

      <!-- Dashboard (active) -->
      <div :style="{ height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center' }">
        <button :style="{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50px', height: '50px', borderRadius: 'var(--radius-medium)', border: 'none', background: 'transparent', cursor: 'pointer' }" title="Dashboard">
          <span :style="{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '42px', height: '42px', borderRadius: 'var(--radius-medium)', background: 'var(--primary)' }">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" :style="{ color: 'var(--primary-foreground)' }">
              <path d="M9 22V12H15V22M2 9L12 2L22 9V21C22 21.5304 21.7893 22.0391 21.4142 22.4142C21.0391 22.7893 20.5304 23 20 23H4C3.46957 23 2.96086 22.7893 2.58579 22.4142C2.21071 22.0391 2 21.5304 2 21V9Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
        </button>
      </div>

      <!-- Other modules (inactive) -->
      <template v-for="(module, idx) in inactiveModules" :key="idx">
        <div :style="{ height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center' }">
          <button
            :style="{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: '50px', height: '50px',
              borderRadius: 'var(--radius-medium)',
              border: 'none', background: 'transparent',
              color: hoveredIdx === idx ? 'var(--primary)' : 'var(--subtle)',
              cursor: 'pointer',
            }"
            :title="module.label"
            @mouseenter="hoveredIdx = idx"
            @mouseleave="hoveredIdx = -1"
          >
            <span :style="{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '42px', height: '42px', borderRadius: 'var(--radius-medium)', background: hoveredIdx === idx ? 'var(--primary-subtle)' : 'transparent', transition: 'background 0.15s' }" v-html="module.svg" />
          </button>
        </div>
      </template>

      <!-- Divider -->
      <div :style="{ width: '50px', height: '1px', background: 'var(--border-hover)', margin: '4px 0' }" />

      <!-- Integrations -->
      <div :style="{ height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center' }">
        <button
          :style="{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: '50px', height: '50px',
            borderRadius: 'var(--radius-medium)',
            border: 'none', background: 'transparent',
            color: hoveredIdx === 99 ? 'var(--primary)' : 'var(--subtle)',
            cursor: 'pointer',
          }"
          title="Integrations"
          @mouseenter="hoveredIdx = 99"
          @mouseleave="hoveredIdx = -1"
        >
          <span :style="{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '42px', height: '42px', borderRadius: 'var(--radius-medium)', background: hoveredIdx === 99 ? 'var(--primary-subtle)' : 'transparent', transition: 'background 0.15s' }">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/>
              <path d="M2 12H22M12 2C12 2 8 7 8 12C8 17 12 22 12 22M12 2C12 2 16 7 16 12C16 17 12 22 12 22" stroke="currentColor" stroke-width="1.5"/>
            </svg>
          </span>
        </button>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const hoveredIdx = ref(-1)

const inactiveModules = [
  {
    label: 'Children',
    svg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="currentColor" stroke-width="1.5"/><path d="M4 20C4 17.7909 7.58172 16 12 16C16.4183 16 20 17.7909 20 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
  },
  {
    label: 'Teachers',
    svg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 7L12 3L21 7V13C21 17.4183 17.4183 21 13 21H11C6.58172 21 3 17.4183 3 13V7Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  },
  {
    label: 'Messages',
    svg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M8 13H12M8 9H16M7 3H17C19.2091 3 21 4.79086 21 7V13C21 15.2091 19.2091 17 17 17H13L9 21V17H7C4.79086 17 3 15.2091 3 13V7C3 4.79086 4.79086 3 7 3Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  },
  {
    label: 'Calendar',
    svg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M3 9H21M8 2V6M16 2V6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
  },
  {
    label: 'Reports',
    svg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M5 4C5 3.44772 5.44772 3 6 3H14L19 8V20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20V4Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M14 3V8H19" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>',
  },
]
</script>
