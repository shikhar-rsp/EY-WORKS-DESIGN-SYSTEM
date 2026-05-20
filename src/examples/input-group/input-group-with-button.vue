<script setup lang="ts">
// Input Group with Button — Vue 3 SFC
</script>

<template>
  <div class="input-group" role="group">
    <input placeholder="Paste or type URL…" class="input-group-input" />
    <div class="input-group-addon">
      <button type="button" class="input-group-btn">Copy</button>
    </div>
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
.input-group-input {
  flex: 1;
  min-width: 0;
  height: 100%;
  background: transparent;
  padding: 4px 12px;
  font-family: var(--font-lexend), sans-serif;
  font-size: 14px;
  color: var(--foreground);
  border: 0;
  outline: none;
}
.input-group-input::placeholder {
  color: var(--placeholder);
}
.input-group-addon {
  display: flex;
  align-items: center;
  padding: 2px 2px 2px 0;
  flex-shrink: 0;
}
.input-group-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  padding: 0 12px;
  border-radius: var(--radius-medium);
  background: var(--primary);
  color: var(--primary-foreground);
  font-family: var(--font-lexend), sans-serif;
  font-size: 14px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: background 150ms;
}
.input-group-btn:hover {
  background: var(--primary-hover);
}
</style>
