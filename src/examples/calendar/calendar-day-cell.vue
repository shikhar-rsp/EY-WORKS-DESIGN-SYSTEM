<template>
  <div :style="{ width: '222px', height: '209px', background: 'var(--background)', border: '1px solid var(--border)', borderRadius: 'var(--radius-small)', padding: '8px', display: 'flex', flexDirection: 'column', fontFamily: '\'Lexend\', sans-serif', overflow: 'hidden' }">
    <!-- Date label -->
    <div :style="{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }">
      <span :style="{ fontSize: '14px', fontWeight: 600, color: 'var(--foreground)' }">21</span>
      <span :style="{ fontSize: '11px', color: 'var(--muted-foreground)' }">Thu</span>
    </div>
    <!-- Event bars -->
    <div :style="{ display: 'flex', flexDirection: 'column', gap: '4px' }">
      <div :style="{ borderRadius: '3px', padding: '2px 6px', fontSize: '11px', fontWeight: 500, border: '1px solid #2D70CF', background: '#D7E8FF', color: '#2D70CF', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }">Morning Session</div>
      <div :style="{ borderRadius: '3px', padding: '2px 6px', fontSize: '11px', fontWeight: 500, border: '1px solid #505EAC', background: '#E0E3F6', color: '#505EAC', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }">Team Event</div>
      <div :style="{ borderRadius: '3px', padding: '2px 6px', fontSize: '11px', fontWeight: 500, border: '1px solid #B24F8C', background: '#F8E0EE', color: '#B24F8C', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }">Sara's Birthday</div>
      <div :style="{ borderRadius: '3px', padding: '2px 6px', fontSize: '11px', fontWeight: 500, border: '1px solid #D97706', background: '#FEF3C7', color: '#D97706', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }">Festival Day</div>
    </div>
  </div>
</template>
