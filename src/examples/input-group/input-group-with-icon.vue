<script setup lang="ts">
// Input Group with Icon — Vue 3 SFC
</script>

<template>
  <div class="input-group" role="group">
    <div class="input-group-addon">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    </div>
    <input placeholder="Search…" class="input-group-input" />
  </div>
</template>

<style scoped>
.input-group {
  display: flex;
  align-items: center;
  width: 256px;
  height: 36px;
  border-radius: var(--radius-medium);
  border: 1px solid var(--border-input);
  background: var(--background);
  transition: box-shadow 150ms, border-color 150ms;
  outline: none;
  overflow: hidden;
}
.input-group:focus-within {
  border-color: var(--ring);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--ring) 30%, transparent);
}
.input-group-addon {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
  color: var(--muted-foreground);
  cursor: text;
  flex-shrink: 0;
}
.input-group-input {
  flex: 1;
  min-width: 0;
  height: 100%;
  background: transparent;
  padding: 4px 12px 4px 4px;
  font-family: var(--font-lexend), sans-serif;
  font-size: 14px;
  color: var(--foreground);
  border: 0;
  outline: none;
}
.input-group-input::placeholder {
  color: var(--placeholder);
}
</style>
