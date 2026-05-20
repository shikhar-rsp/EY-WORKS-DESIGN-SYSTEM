<script setup lang="ts">
import { ref } from 'vue'

const isSaving = ref(false)

const handleReset = () => {
  isSaving.value = true
  setTimeout(() => { isSaving.value = false }, 2000)
}
</script>

<template>
  <div
    :style="{
      width: '100%',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-large)',
      overflow: 'hidden',
    }"
  >
    <div
      :style="{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        overflow: 'hidden',
        borderRadius: 'var(--radius-large)',
        background: 'var(--background)',
        padding: 'var(--space-100) var(--space-150)',
      }"
    >
      <!-- Left: Title + Helper -->
      <div
        :style="{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-050)',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: 'var(--space-100) 0',
        }"
      >
        <p :style="{ fontFamily: 'var(--font-lexend)', fontSize: '14px', fontWeight: 500, lineHeight: '20px', color: 'var(--foreground)', margin: 0 }">
          New Child Profile
        </p>
        <p :style="{ fontFamily: 'var(--font-lexend)', fontSize: '14px', lineHeight: '20px', color: 'var(--subtlest)', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }">
          Fill in the details below
        </p>
      </div>

      <!-- Right: Actions -->
      <div :style="{ display: 'flex', alignItems: 'flex-end', gap: 'var(--space-200)' }">
        <!-- Saving indicator -->
        <div
          v-if="isSaving"
          :style="{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-100)',
            minWidth: '40px',
            borderRadius: 'var(--radius-medium)',
            padding: 'var(--space-100) var(--space-200)',
          }"
        >
          <span :style="{ fontFamily: 'var(--font-lexend)', fontSize: '14px', lineHeight: '20px', color: 'var(--muted-foreground)' }">
            Saving...
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            :style="{ color: 'var(--muted-foreground)', animation: 'spin 1s linear infinite' }"
          >
            <path d="M12 3C16.9706 3 21 7.02944 21 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
          </svg>
        </div>

        <!-- Reset fields -->
        <button
          :style="{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-100)',
            minWidth: '40px',
            borderRadius: 'var(--radius-medium)',
            border: '1px solid var(--primary)',
            background: 'var(--background)',
            padding: 'var(--space-100) var(--space-200)',
            fontFamily: 'var(--font-lexend)',
            fontSize: '14px',
            lineHeight: '20px',
            color: 'var(--primary)',
            cursor: 'pointer',
          }"
          @click="handleReset"
        >
          Reset fields
        </button>

        <!-- Close -->
        <button
          :style="{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-100)',
            minWidth: '40px',
            borderRadius: 'var(--radius-medium)',
            border: '1px solid var(--primary)',
            background: 'var(--background)',
            padding: 'var(--space-100) var(--space-200)',
            fontFamily: 'var(--font-lexend)',
            fontSize: '14px',
            lineHeight: '20px',
            color: 'var(--primary)',
            cursor: 'pointer',
          }"
        >
          Close
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" :style="{ color: 'var(--primary)' }">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="1.5" />
            <path d="M14.5 9.5L9.5 14.5M9.5 9.5L14.5 14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
