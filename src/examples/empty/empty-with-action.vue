<script setup lang="ts">
// Static component — no reactive state needed
</script>

<template>
  <div
    :style="{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', gap: 'var(--space-300)',
      padding: '40px var(--space-300)', textAlign: 'center',
    }"
  >
    <div :style="{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-200)' }">
      <div
        aria-hidden="true"
        :style="{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          width: '56px', height: '56px', borderRadius: 'var(--radius-large)',
          background: 'var(--muted)', color: 'var(--muted-foreground)',
          border: '1px solid var(--border)',
        }"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
        </svg>
      </div>
      <h3 :style="{ fontSize: '1rem', fontWeight: 600, color: 'var(--foreground)', margin: 0 }">No projects found</h3>
      <p :style="{ fontSize: '0.875rem', lineHeight: '1.625', color: 'var(--muted-foreground)', maxWidth: '20rem', margin: 0 }">
        Create your first project to get started with the workspace.
      </p>
    </div>
    <button
      :style="{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        background: 'var(--primary)', color: 'var(--primary-foreground)',
        borderRadius: 'var(--radius-medium)', padding: '0 var(--space-200)',
        height: '32px', fontSize: '0.875rem', fontWeight: 500,
        cursor: 'pointer', border: '1px solid transparent',
      }"
    >New project</button>
  </div>
</template>
