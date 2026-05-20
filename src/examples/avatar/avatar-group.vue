<script setup lang="ts">
const members = ['AC', 'MH', 'JD', 'SR']
const overflow = 2
</script>

<template>
  <div
    role="group"
    aria-label="Avatar group, 6 members"
    :style="{ display: 'inline-flex', alignItems: 'center' }"
  >
    <div
      v-for="(initials, i) in members"
      :key="i"
      :style="{
        position: 'relative',
        borderRadius: '9999px',
        border: '2px solid var(--background)',
        marginLeft: i > 0 ? '-8px' : '0',
      }"
    >
      <span
        :style="{
          position: 'relative',
          display: 'inline-flex',
          width: '32px', height: '32px',
          alignItems: 'center', justifyContent: 'center',
          overflow: 'hidden', borderRadius: '9999px',
          background: 'var(--primary-subtle)',
          fontFamily: 'var(--font-lexend), sans-serif',
          fontSize: '12px', fontWeight: 500,
          color: 'var(--foreground)',
        }"
      >{{ initials }}</span>
    </div>
    <!-- Overflow count -->
    <div
      :style="{
        position: 'relative',
        borderRadius: '9999px',
        border: '2px solid var(--background)',
        marginLeft: '-8px',
      }"
    >
      <span
        :style="{
          display: 'inline-flex',
          width: '32px', height: '32px',
          alignItems: 'center', justifyContent: 'center',
          borderRadius: '9999px',
          background: 'var(--muted)',
          fontFamily: 'var(--font-lexend), sans-serif',
          fontSize: '12px', fontWeight: 500,
          color: 'var(--muted-foreground)',
        }"
        :aria-label="`+${overflow} more`"
      >+{{ overflow }}</span>
    </div>
  </div>
</template>
