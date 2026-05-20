<template>
  <div style="display: flex; flex-direction: column; gap: 8px; width: 192px;">
    <div class="skeleton" style="height: 16px; width: 100%;"></div>
    <div class="skeleton" style="height: 16px; width: 80%;"></div>
    <div class="skeleton" style="height: 16px; width: 60%;"></div>
  </div>
</template>

<style scoped>
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
.skeleton {
  background: var(--muted);
  border-radius: var(--radius-medium);
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
