<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
  <!-- Trigger -->
  <button
    type="button"
    @click="open = true"
    :style="{
      display: 'inline-flex',
      height: '36px',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-medium)',
      border: '1px solid var(--border)',
      background: 'var(--background)',
      padding: '0 var(--space-200)',
      fontSize: '14px',
      fontWeight: 500,
      color: 'var(--foreground)',
      cursor: 'pointer',
      fontFamily: 'var(--font-lexend, sans-serif)',
    }"
  >Open Sheet</button>

  <!-- Overlay -->
  <Teleport to="body">
    <div v-if="open">
      <div
        @click="open = false"
        :style="{
          position: 'fixed',
          inset: 0,
          zIndex: 50,
          background: 'rgba(46,43,43,0.4)',
          backdropFilter: 'blur(2px)',
        }"
      />

      <!-- Panel -->
      <div
        :style="{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 50,
          height: '100%',
          width: '75%',
          maxWidth: '384px',
          borderLeft: '1px solid var(--border)',
          background: 'var(--background)',
          padding: 'var(--space-300)',
          display: 'flex',
          flexDirection: 'column',
          fontFamily: 'var(--font-lexend, sans-serif)',
        }"
      >
        <h2 :style="{ fontSize: '18px', fontWeight: 600, color: 'var(--foreground)', marginBottom: '4px' }">
          Edit Profile
        </h2>
        <p :style="{ fontSize: '14px', color: 'var(--muted-foreground)', marginBottom: 'var(--space-200)' }">
          Make changes to your profile here.
        </p>

        <label :style="{ fontSize: '14px', fontWeight: 500, color: 'var(--foreground)', marginBottom: '6px' }">Name</label>
        <input
          type="text"
          value="Muhammad Hasan"
          :style="{
            height: '36px',
            borderRadius: 'var(--radius-medium)',
            border: '1px solid var(--border-input)',
            background: 'var(--background)',
            padding: '0 var(--space-150)',
            fontSize: '14px',
            color: 'var(--foreground)',
            marginBottom: 'var(--space-150)',
            width: '100%',
            fontFamily: 'var(--font-lexend, sans-serif)',
          }"
        />

        <label :style="{ fontSize: '14px', fontWeight: 500, color: 'var(--foreground)', marginBottom: '6px' }">Username</label>
        <input
          type="text"
          value="@mhasan"
          :style="{
            height: '36px',
            borderRadius: 'var(--radius-medium)',
            border: '1px solid var(--border-input)',
            background: 'var(--background)',
            padding: '0 var(--space-150)',
            fontSize: '14px',
            color: 'var(--foreground)',
            marginBottom: 'var(--space-150)',
            width: '100%',
            fontFamily: 'var(--font-lexend, sans-serif)',
          }"
        />

        <div :style="{ marginTop: 'auto', display: 'flex', justifyContent: 'flex-end', gap: 'var(--space-150)' }">
          <button
            type="button"
            @click="open = false"
            :style="{
              display: 'inline-flex', height: '36px', alignItems: 'center', justifyContent: 'center',
              borderRadius: 'var(--radius-medium)', border: '1px solid var(--border)',
              background: 'var(--background)', padding: '0 var(--space-200)',
              fontSize: '14px', fontWeight: 500, color: 'var(--foreground)', cursor: 'pointer',
            }"
          >Cancel</button>
          <button
            type="button"
            @click="open = false"
            :style="{
              display: 'inline-flex', height: '36px', alignItems: 'center', justifyContent: 'center',
              borderRadius: 'var(--radius-medium)', border: '1px solid transparent',
              background: 'var(--primary)', padding: '0 var(--space-200)',
              fontSize: '14px', fontWeight: 500, color: 'var(--primary-foreground)', cursor: 'pointer',
            }"
          >Save Changes</button>
        </div>
      </div>
    </div>
  </Teleport>
</template>
