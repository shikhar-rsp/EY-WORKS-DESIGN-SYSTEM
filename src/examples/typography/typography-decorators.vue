<script setup lang="ts">
// TypographyText — decorator boolean props (strong, italic, underline, delete, mark, code)
</script>

<template>
  <div class="wrapper">
    <span class="typography-text text-strong">Strong — bold weight for emphasis.</span>
    <span class="typography-text text-italic">Italic — slanted text for stylistic emphasis.</span>
    <span class="typography-text text-underline">Underline — draws attention with an underline.</span>
    <span class="typography-text text-delete"><del>Delete — strikethrough for removed content.</del></span>
    <span class="typography-text text-mark"><mark>Mark — highlighted text like a marker.</mark></span>
    <span class="typography-text text-code"><code>code_snippet()</code></span>
  </div>
</template>

<style scoped>
:root {
  --foreground: #2e2b2b;
  --muted: #fafafa;
  --warning: #d97706;
  --radius-xsmall: 2px;
  --radius-small: 4px;
}

.wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1rem;
}

.typography-text {
  font-family: var(--font-lexend, "Lexend", sans-serif);
  font-size: 0.875rem;
  line-height: 1.5rem;
  color: var(--foreground, #2e2b2b);
  display: block;
}

.text-strong    { font-weight: 600; }
.text-italic    { font-style: italic; }
.text-underline { text-decoration: underline; text-underline-offset: 2px; }

.text-mark mark {
  background: rgba(217, 119, 6, 0.3);
  padding: 0 2px;
  border-radius: var(--radius-xsmall, 2px);
  color: inherit;
}

.text-code code {
  background: var(--muted, #fafafa);
  padding: 1px 4px;
  border-radius: var(--radius-small, 4px);
  font-family: ui-monospace, monospace;
  font-size: 0.75rem;
}
</style>
