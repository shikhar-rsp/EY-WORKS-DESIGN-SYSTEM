<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
  <div>
    <button
      :style="{
        display: 'inline-flex', height: '36px',
        alignItems: 'center', padding: '0 var(--space-200)',
        border: '1px solid transparent', borderRadius: 'var(--radius-medium)',
        background: 'var(--primary)', color: 'var(--primary-foreground)',
        fontFamily: 'var(--font-lexend), sans-serif', fontSize: '14px',
        cursor: 'pointer',
      }"
      @click="open = true"
    >
      Open Dialog
    </button>

    <div
      v-if="open"
      :style="{
        position: 'fixed', inset: '0', zIndex: 50,
        background: 'rgba(46,43,43,0.4)', backdropFilter: 'blur(2px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }"
    >
      <div
        role="alertdialog"
        aria-modal="true"
        :style="{
          background: 'var(--background)', border: '1px solid var(--border)',
          borderRadius: 'var(--radius-large)', padding: 'var(--space-300)',
          width: '100%', maxWidth: '480px',
        }"
      >
        <h2 :style="{ fontFamily: 'var(--font-lexend), sans-serif', fontSize: '18px', fontWeight: 600, color: 'var(--foreground)', margin: '0 0 6px' }">
          Are you absolutely sure?
        </h2>
        <p :style="{ fontFamily: 'var(--font-lexend), sans-serif', fontSize: '14px', lineHeight: '1.6', color: 'var(--muted-foreground)', margin: '0 0 16px' }">
          This action cannot be undone. This will permanently delete your account
          and remove your data from our servers.
        </p>
        <div :style="{ display: 'flex', justifyContent: 'flex-end', gap: 'var(--space-150)' }">
          <button
            :style="{
              display: 'inline-flex', height: '36px', alignItems: 'center',
              padding: '0 var(--space-200)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius-medium)', background: 'var(--background)',
              color: 'var(--foreground)', fontFamily: 'var(--font-lexend), sans-serif',
              fontSize: '14px', cursor: 'pointer',
            }"
            @click="open = false"
          >Cancel</button>
          <button
            :style="{
              display: 'inline-flex', height: '36px', alignItems: 'center',
              padding: '0 var(--space-200)', border: '1px solid transparent',
              borderRadius: 'var(--radius-medium)', background: 'var(--primary)',
              color: 'var(--primary-foreground)', fontFamily: 'var(--font-lexend), sans-serif',
              fontSize: '14px', cursor: 'pointer',
            }"
            @click="open = false"
          >Continue</button>
        </div>
      </div>
    </div>
  </div>
</template>
