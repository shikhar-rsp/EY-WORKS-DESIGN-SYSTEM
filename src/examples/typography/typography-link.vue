<script setup lang="ts">
// TypographyLink — anchor links with hover and focus states
</script>

<template>
  <div class="wrapper">
    <a href="#" class="typography-link">Visit the documentation →</a>
    <a href="#" class="typography-link">Learn more about design tokens</a>
    <a href="#" target="_blank" rel="noopener noreferrer" class="typography-link">
      Opens in a new tab ↗
    </a>
  </div>
</template>

<style scoped>
:root {
  --primary: #f8785e;
  --primary-hover: #cf624c;
  --ring: #f8785e;
  --radius-xsmall: 2px;
}

.wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1rem;
}

.typography-link {
  font-family: var(--font-lexend, "Lexend", sans-serif);
  font-size: 0.875rem;
  color: var(--primary, #f8785e);
  text-decoration: underline;
  text-underline-offset: 2px;
  transition: color 150ms ease;
  border-radius: var(--radius-xsmall, 2px);
  outline: none;
  display: block;
}

.typography-link:hover {
  color: var(--primary-hover, #cf624c);
}

.typography-link:focus-visible {
  outline: 2px solid var(--ring, #f8785e);
  outline-offset: 1px;
}
</style>
