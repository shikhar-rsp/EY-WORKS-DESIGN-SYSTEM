<template>
  <div :style="{ display: 'flex', flexDirection: 'column', gap: '6px', fontFamily: '\'Lexend\', sans-serif', width: '280px' }">
    <div
      v-for="state in states"
      :key="state.label"
      :style="{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 10px', borderRadius: 'var(--radius-small)', border: '1px solid ' + state.border, background: state.bg }"
    >
      <div :style="{ width: '3px', height: '20px', borderRadius: '99px', background: state.border, flexShrink: 0 }"></div>
      <span :style="{ fontSize: '12px', fontWeight: 500, color: state.border }">{{ state.label }}</span>
    </div>
  </div>
</template>

<script setup>
const states = [
  { label: 'Holiday', border: '#CC0000', bg: '#FFE5E5' },
  { label: 'Sick Leave', border: '#D97706', bg: '#FEF3C7' },
  { label: 'Birthday', border: '#B24F8C', bg: '#F8E0EE' },
  { label: 'Event', border: '#505EAC', bg: '#E0E3F6' },
  { label: 'Room Movement', border: '#358EAC', bg: '#D9F0F7' },
];
</script>
