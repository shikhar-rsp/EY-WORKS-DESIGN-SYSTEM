<script setup lang="ts">
const statuses = [
  { label: 'online', color: 'var(--success)' },
  { label: 'offline', color: 'var(--muted-foreground)' },
  { label: 'busy', color: 'var(--destructive)' },
  { label: 'away', color: 'var(--warning)' },
]
</script>

<template>
  <div :style="{ display: 'flex', alignItems: 'center', gap: '16px' }">
    <div
      v-for="s in statuses"
      :key="s.label"
      :style="{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }"
    >
      <span
        :style="{
          position: 'relative', display: 'inline-flex',
          width: '40px', height: '40px',
          alignItems: 'center', justifyContent: 'center',
          overflow: 'hidden', borderRadius: '9999px',
          background: 'var(--primary-subtle)',
          fontFamily: 'var(--font-lexend), sans-serif',
          fontSize: '14px', fontWeight: 500,
          color: 'var(--foreground)',
        }"
      >
        MH
        <span
          :style="{
            position: 'absolute', bottom: 0, right: 0,
            width: '10px', height: '10px',
            borderRadius: '9999px',
            background: s.color,
            border: '2px solid var(--background)',
            transform: 'translate(2px, 2px)',
          }"
        />
      </span>
      <span :style="{ fontFamily: 'var(--font-lexend), sans-serif', fontSize: '12px', color: 'var(--muted-foreground)' }">
        {{ s.label }}
      </span>
    </div>
  </div>
</template>
