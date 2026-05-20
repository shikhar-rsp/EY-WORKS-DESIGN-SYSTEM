<template>
  <div style="display: flex; align-items: center; gap: 24px;">
    <svg v-for="size in sizes" :key="size" class="spinner" role="status" aria-label="Loading"
      xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      :style="{ color: 'var(--muted-foreground)' }">
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  </div>
</template>

<script setup lang="ts">
const sizes = [12, 16, 24, 32]
</script>

<style scoped>
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.spinner {
  animation: spin 1s linear infinite;
}
</style>
