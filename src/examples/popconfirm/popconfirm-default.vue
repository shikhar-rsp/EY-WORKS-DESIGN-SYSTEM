<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
  <div :style="{ position: 'relative', display: 'inline-flex' }">
    <button
      @click="open = !open"
      :style="{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        height: '36px', padding: '0 16px',
        borderRadius: 'var(--radius-medium, 8px)',
        border: '1px solid var(--border, #ebe9e8)',
        background: 'var(--background, #ffffff)',
        color: 'var(--foreground, #2e2b2b)',
        fontFamily: 'var(--font-lexend, Lexend, sans-serif)',
        fontSize: '14px', fontWeight: 500, cursor: 'pointer',
      }"
    >
      Delete item
    </button>

    <Teleport to="body">
      <template v-if="open">
        <!-- Invisible click-outside backdrop -->
        <div
          @click="open = false"
          :style="{ position: 'fixed', inset: 0, zIndex: 49 }"
        />
        <!-- Popconfirm panel -->
        <div
          role="alertdialog"
          aria-modal="false"
          aria-labelledby="pc-title"
          aria-describedby="pc-desc"
          :style="{
            position: 'fixed', zIndex: 50,
            top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: '288px',
            borderRadius: 'var(--radius-large, 16px)',
            border: '1px solid var(--border, #ebe9e8)',
            background: 'var(--background, #ffffff)',
            padding: '16px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
            fontFamily: 'var(--font-lexend, Lexend, sans-serif)',
          }"
        >
          <!-- Header -->
          <div :style="{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }">
            <span
              aria-hidden="true"
              :style="{ color: 'var(--warning-bold, #fbbf24)', flexShrink: 0, marginTop: '2px' }"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
            </span>
            <h4
              id="pc-title"
              :style="{ fontSize: '14px', fontWeight: 600, color: 'var(--foreground, #2e2b2b)', margin: 0, lineHeight: 1.4 }"
            >
              Delete this item?
            </h4>
          </div>

          <!-- Description -->
          <p
            id="pc-desc"
            :style="{ fontSize: '12px', color: 'var(--muted-foreground, #7a7272)', lineHeight: 1.6, margin: '0 0 12px' }"
          >
            This action cannot be undone.
          </p>

          <!-- Footer -->
          <div :style="{ display: 'flex', justifyContent: 'flex-end', gap: '8px' }">
            <button
              @click="open = false"
              :style="{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                height: '28px', padding: '0 12px',
                borderRadius: 'var(--radius-medium, 8px)',
                border: '1px solid var(--border, #ebe9e8)',
                background: 'var(--background, #ffffff)',
                color: 'var(--foreground, #2e2b2b)',
                fontFamily: 'inherit', fontSize: '12px', fontWeight: 500, cursor: 'pointer',
              }"
            >Cancel</button>
            <button
              @click="open = false"
              :style="{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                height: '28px', padding: '0 12px',
                borderRadius: 'var(--radius-medium, 8px)',
                border: 'none',
                background: 'var(--primary, #f8785e)',
                color: 'var(--primary-foreground, #ffffff)',
                fontFamily: 'inherit', fontSize: '12px', fontWeight: 500, cursor: 'pointer',
              }"
            >Delete</button>
          </div>
        </div>
      </template>
    </Teleport>
  </div>
</template>
