<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
  <div>
    <button
      @click="open = true"
      :style="{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        height: '36px', padding: '0 16px', borderRadius: 'var(--radius-medium)',
        border: 'none', background: 'var(--primary)', color: 'var(--primary-foreground)',
        fontSize: '14px', fontWeight: 500, cursor: 'pointer', fontFamily: 'var(--font-lexend)',
      }"
    >
      Open Dialog
    </button>

    <Teleport to="body">
      <template v-if="open">
        <!-- Overlay -->
        <div
          @click="open = false"
          :style="{ position: 'fixed', inset: 0, zIndex: 50, background: 'rgba(46,43,43,0.4)', backdropFilter: 'blur(2px)' }"
        />
        <!-- Panel -->
        <div
          role="dialog"
          aria-modal="true"
          :style="{
            position: 'fixed', left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
            zIndex: 51, width: '90%', maxWidth: '512px',
            borderRadius: 'var(--radius-large)', border: '1px solid var(--border)',
            background: 'var(--background)', padding: '24px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.15)', fontFamily: 'var(--font-lexend)',
          }"
        >
          <!-- Close X -->
          <button
            @click="open = false"
            :style="{
              position: 'absolute', top: '16px', right: '16px',
              width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center',
              borderRadius: 'var(--radius-small)', border: 'none', background: 'transparent',
              color: 'var(--muted-foreground)', cursor: 'pointer',
            }"
            aria-label="Close dialog"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <path d="M18 6 6 18M6 6l12 12"/>
            </svg>
          </button>

          <h2 :style="{ fontSize: '18px', fontWeight: 600, color: 'var(--foreground)', margin: '0 0 6px' }">
            Edit Profile
          </h2>
          <p :style="{ fontSize: '14px', color: 'var(--muted-foreground)', margin: '0 0 16px', lineHeight: '1.6' }">
            Make changes to your profile here. Click save when you're done.
          </p>
          <p :style="{ fontSize: '14px', color: 'var(--secondary-foreground)', marginBottom: '16px' }">
            Your changes will be visible to other users immediately.
          </p>
          <div :style="{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '16px' }">
            <button
              @click="open = false"
              :style="{
                height: '36px', padding: '0 16px', borderRadius: 'var(--radius-medium)',
                border: '1px solid var(--border)', background: 'var(--background)',
                color: 'var(--foreground)', fontSize: '14px', fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit',
              }"
            >Cancel</button>
            <button
              @click="open = false"
              :style="{
                height: '36px', padding: '0 16px', borderRadius: 'var(--radius-medium)',
                border: 'none', background: 'var(--primary)', color: 'var(--primary-foreground)',
                fontSize: '14px', fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit',
              }"
            >Save Changes</button>
          </div>
        </div>
      </template>
    </Teleport>
  </div>
</template>
