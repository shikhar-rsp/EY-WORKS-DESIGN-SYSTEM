<template>
  <div :style="{ display: 'flex', flexDirection: 'column', gap: '8px', fontFamily: '\'Lexend\', sans-serif', width: '260px' }">
    <div
      v-for="event in events"
      :key="event.label"
      :style="{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 12px', borderRadius: 'var(--radius-small)', border: '1px solid ' + event.border, background: event.bg }"
    >
      <div :style="{ width: '8px', height: '8px', borderRadius: '50%', background: event.border, flexShrink: 0 }"></div>
      <span :style="{ fontSize: '13px', color: 'var(--foreground)', fontWeight: 500 }">{{ event.label }}</span>
    </div>
  </div>
</template>

<script setup>
const events = [
  { label: 'Session', border: '#2D70CF', bg: '#D7E8FF' },
  { label: 'Event', border: '#505EAC', bg: '#E0E3F6' },
  { label: 'Birthday', border: '#B24F8C', bg: '#F8E0EE' },
  { label: 'Festival', border: '#D97706', bg: '#FEF3C7' },
  { label: 'Leave', border: '#65A30D', bg: '#ECFCCB' },
];
</script>
