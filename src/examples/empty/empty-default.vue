<script setup lang="ts">
// Static component — no reactive state needed
</script>

<template>
  <div
    :style="{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-300)',
      padding: 'var(--space-300)',
      paddingTop: '40px',
      paddingBottom: '40px',
      textAlign: 'center',
    }"
  >
    <!-- EmptyHeader -->
    <div :style="{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-200)' }">
      <!-- EmptyMedia variant="icon" -->
      <div
        aria-hidden="true"
        :style="{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '56px',
          height: '56px',
          borderRadius: 'var(--radius-large)',
          background: 'var(--muted)',
          color: 'var(--muted-foreground)',
          border: '1px solid var(--border)',
        }"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
          <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
        </svg>
      </div>
      <h3 :style="{ fontSize: '1rem', fontWeight: 600, color: 'var(--foreground)', margin: 0 }">No messages yet</h3>
      <p :style="{ fontSize: '0.875rem', lineHeight: '1.625', color: 'var(--muted-foreground)', maxWidth: '20rem', margin: 0 }">
        When you receive messages, they'll appear here.
      </p>
    </div>
    <!-- EmptyContent -->
    <div :style="{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-200)' }">
      <button
        :style="{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          background: 'var(--primary)', color: 'var(--primary-foreground)',
          borderRadius: 'var(--radius-medium)', padding: '0 var(--space-200)',
          height: '32px', fontSize: '0.875rem', fontWeight: 500,
          cursor: 'pointer', border: '1px solid transparent',
        }"
      >Compose</button>
      <button
        :style="{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          background: 'var(--secondary)', color: 'var(--foreground)',
          borderRadius: 'var(--radius-medium)', padding: '0 var(--space-200)',
          height: '32px', fontSize: '0.875rem', fontWeight: 500,
          cursor: 'pointer', border: '1px solid var(--border)',
        }"
      >Invite teammates</button>
    </div>
  </div>
</template>
