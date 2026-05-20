<script setup lang="ts">
// TypographyTitle — levels 1–4 stacked
</script>

<template>
  <div class="wrapper">
    <h1 class="typography-title title-h1">Heading Level 1</h1>
    <h2 class="typography-title title-h2">Heading Level 2</h2>
    <h3 class="typography-title title-h3">Heading Level 3</h3>
    <h4 class="typography-title title-h4">Heading Level 4</h4>
  </div>
</template>

<style scoped>
:root {
  --foreground: #2e2b2b;
}

.wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1rem;
}

.typography-title {
  font-family: var(--font-lexend, "Lexend", sans-serif);
  font-weight: 600;
  letter-spacing: -0.015em;
  line-height: 1.25;
  color: var(--foreground, #2e2b2b);
  margin: 0;
}

.title-h1 { font-size: 2.25rem; }
.title-h2 { font-size: 1.875rem; }
.title-h3 { font-size: 1.5rem; }
.title-h4 { font-size: 1.25rem; }
</style>
