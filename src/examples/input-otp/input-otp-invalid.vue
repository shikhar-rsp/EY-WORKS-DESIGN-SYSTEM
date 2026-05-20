<script setup lang="ts">
const slots = ['1', '2', '', '', '', '']
</script>

<template>
  <div role="group" aria-label="One-time password" :style="{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-150)' }">
    <div :style="{ display: 'flex', alignItems: 'center' }">
      <div
        v-for="i in [0,1,2]"
        :key="i"
        :style="{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '40px',
          height: '40px',
          borderTop: '1px solid var(--destructive)',
          borderBottom: '1px solid var(--destructive)',
          borderRight: '1px solid var(--destructive)',
          borderLeft: i === 0 ? '1px solid var(--destructive)' : 'none',
          borderRadius: i === 0 ? 'var(--radius-medium) 0 0 var(--radius-medium)' : i === 2 ? '0 var(--radius-medium) var(--radius-medium) 0' : '0',
          background: 'var(--background)',
          fontSize: '14px',
          fontWeight: 500,
          color: 'var(--foreground)',
          outline: '2px solid rgba(204,0,0,0.3)',
          outlineOffset: '-2px',
        }"
      >
        {{ slots[i] }}
      </div>
    </div>

    <div role="separator" aria-hidden="true" :style="{ display: 'flex', width: '16px', alignItems: 'center', justifyContent: 'center', color: 'var(--muted-foreground)' }">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
      </svg>
    </div>

    <div :style="{ display: 'flex', alignItems: 'center' }">
      <div
        v-for="i in [3,4,5]"
        :key="i"
        :style="{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '40px',
          height: '40px',
          borderTop: '1px solid var(--destructive)',
          borderBottom: '1px solid var(--destructive)',
          borderRight: '1px solid var(--destructive)',
          borderLeft: i === 3 ? '1px solid var(--destructive)' : 'none',
          borderRadius: i === 3 ? 'var(--radius-medium) 0 0 var(--radius-medium)' : i === 5 ? '0 var(--radius-medium) var(--radius-medium) 0' : '0',
          background: 'var(--background)',
          fontSize: '14px',
          fontWeight: 500,
          color: 'var(--foreground)',
          outline: '2px solid rgba(204,0,0,0.3)',
          outlineOffset: '-2px',
        }"
      >
        {{ slots[i] }}
      </div>
    </div>
  </div>
</template>
