<script setup lang="ts">
// TypographyText — all type variants
</script>

<template>
  <div class="wrapper">
    <span class="typography-text text-default">Default — primary text for body content.</span>
    <span class="typography-text text-secondary">Secondary — supporting or metadata text.</span>
    <span class="typography-text text-success">Success — confirmation or positive feedback.</span>
    <span class="typography-text text-warning">Warning — caution or alert message.</span>
    <span class="typography-text text-danger">Danger — error or destructive action notice.</span>
  </div>
</template>

<style scoped>
:root {
  --foreground: #2e2b2b;
  --muted-foreground: #7a7272;
  --success: #65a30d;
  --warning-bold: #d97706;
  --destructive: #cc0000;
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
  display: block;
}

.text-default   { color: var(--foreground, #2e2b2b); }
.text-secondary { color: var(--muted-foreground, #7a7272); }
.text-success   { color: var(--success, #65a30d); }
.text-warning   { color: var(--warning-bold, #d97706); }
.text-danger    { color: var(--destructive, #cc0000); }
</style>
