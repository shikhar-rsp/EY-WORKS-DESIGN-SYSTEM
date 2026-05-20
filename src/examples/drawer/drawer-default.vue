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
        border: '1px solid var(--border)', background: 'var(--background)',
        color: 'var(--foreground)', fontSize: '14px', fontWeight: 500, cursor: 'pointer',
        fontFamily: 'var(--font-lexend)',
      }"
    >
      Open Drawer
    </button>

    <Teleport to="body">
      <template v-if="open">
        <!-- Overlay -->
        <div
          @click="open = false"
          :style="{
            position: 'fixed', inset: 0, zIndex: 50,
            background: 'rgba(46,43,43,0.4)', backdropFilter: 'blur(2px)',
          }"
        />
        <!-- Panel -->
        <div
          role="dialog"
          aria-modal="true"
          :style="{
            position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 50,
            maxHeight: '85vh', borderRadius: '16px 16px 0 0',
            borderTop: '1px solid var(--border)', background: 'var(--background)',
            padding: '24px', boxShadow: '0 10px 60px rgba(0,0,0,0.15)',
            fontFamily: 'var(--font-lexend)',
          }"
        >
          <div :style="{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }">
            <div :style="{ width: '48px', height: '6px', borderRadius: '99px', background: 'var(--muted)' }" />
          </div>
          <h2 :style="{ fontSize: '18px', fontWeight: 600, color: 'var(--foreground)', margin: '0 0 4px' }">Move Goal</h2>
          <p :style="{ fontSize: '14px', color: 'var(--muted-foreground)', margin: '0 0 16px' }">Set your daily activity goal.</p>
          <p :style="{ fontSize: '14px', color: 'var(--secondary-foreground)', marginBottom: '16px' }">
            Drag the slider to set your daily step goal. The recommended amount is 10,000 steps per day.
          </p>
          <div
            :style="{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              height: '48px', borderRadius: 'var(--radius-medium)',
              background: 'var(--muted)', color: 'var(--muted-foreground)', fontSize: '14px', marginBottom: '16px',
            }"
          >
            10,000 steps
          </div>
          <div :style="{ display: 'flex', flexDirection: 'column', gap: '8px', paddingTop: '16px' }">
            <button
              @click="open = false"
              :style="{
                height: '36px', width: '100%', borderRadius: 'var(--radius-medium)', border: 'none',
                background: 'var(--primary)', color: 'var(--primary-foreground)',
                fontSize: '14px', fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit',
              }"
            >Submit</button>
            <button
              @click="open = false"
              :style="{
                height: '36px', width: '100%', borderRadius: 'var(--radius-medium)',
                border: '1px solid var(--border)', background: 'var(--background)',
                color: 'var(--foreground)', fontSize: '14px', fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit',
              }"
            >Cancel</button>
          </div>
        </div>
      </template>
    </Teleport>
  </div>
</template>
