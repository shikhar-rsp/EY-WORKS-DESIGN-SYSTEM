<template>
  <div :style="{ width: '320px', background: 'var(--background)', border: '1px solid var(--border)', borderRadius: 'var(--radius-medium)', padding: '16px', fontFamily: '\'Lexend\', sans-serif', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }">
    <!-- Header -->
    <div :style="{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }">
      <button :style="{ width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--muted)', border: 'none', borderRadius: 'var(--radius-small)', cursor: 'pointer', color: 'var(--foreground)' }">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M10 4l-4 4 4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
      <div :style="{ textAlign: 'center' }">
        <p :style="{ fontSize: '15px', fontWeight: 700, color: 'var(--foreground)', margin: 0 }">October</p>
        <p :style="{ fontSize: '12px', color: 'var(--muted-foreground)', margin: 0 }">2021</p>
      </div>
      <button :style="{ width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--muted)', border: 'none', borderRadius: 'var(--radius-small)', cursor: 'pointer', color: 'var(--foreground)' }">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
    </div>
    <!-- Weekday labels -->
    <div :style="{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', marginBottom: '4px' }">
      <div v-for="d in ['S','M','T','W','T','F','S']" :key="d+Math.random()" :style="{ textAlign: 'center', fontSize: '11px', color: 'var(--muted-foreground)', padding: '2px 0', fontWeight: 500 }">{{ d }}</div>
    </div>
    <!-- Days grid -->
    <div :style="{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '2px' }">
      <div v-for="n in 5" :key="'e'+n"></div>
      <div
        v-for="day in 31"
        :key="day"
        :style="{
          textAlign: 'center',
          fontSize: '12px',
          padding: '6px 2px',
          borderRadius: '6px',
          cursor: 'pointer',
          background: day === 30 ? 'var(--primary)' : day === 21 ? 'var(--primary-subtle)' : 'transparent',
          color: day === 30 ? 'var(--primary-foreground)' : day === 21 ? 'var(--primary)' : 'var(--foreground)',
          fontWeight: day === 30 || day === 21 ? 600 : 400,
        }"
      >{{ day }}</div>
    </div>
  </div>
</template>
