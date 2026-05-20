<script setup lang="ts">
// Input Group with Textarea — Vue 3 SFC
</script>

<template>
  <div class="input-group" role="group">
    <div class="input-group-addon">Message</div>
    <textarea rows="3" placeholder="Write your message…" class="input-group-textarea" />
  </div>
</template>

<style scoped>
.input-group {
  display: flex;
  flex-direction: column;
  width: 256px;
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
  padding: 12px 12px 0;
  color: var(--muted-foreground);
  font-family: var(--font-lexend), sans-serif;
  font-size: 14px;
  font-weight: 500;
}
.input-group-textarea {
  flex: 1;
  min-width: 0;
  resize: none;
  background: transparent;
  padding: 8px 12px 12px;
  font-family: var(--font-lexend), sans-serif;
  font-size: 14px;
  color: var(--foreground);
  border: 0;
  outline: none;
}
.input-group-textarea::placeholder {
  color: var(--placeholder);
}
</style>
