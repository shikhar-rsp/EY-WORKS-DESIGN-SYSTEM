<script setup lang="ts">
// Result — 404 example
</script>

<template>
  <div class="result" data-status="404">
    <div class="result-icon-wrapper" aria-hidden="true">
      <span class="result-icon-number">404</span>
    </div>
    <h3 class="result-title">Page Not Found</h3>
    <p class="result-description">
      The page you are looking for doesn't exist.
    </p>
    <div class="result-actions">
      <button class="btn-primary">Go Home</button>
    </div>
  </div>
</template>

<style scoped>
.result {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 24px;
  text-align: center;
  font-family: var(--font-lexend, 'Lexend', sans-serif);
}

.result-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 96px;
  height: 96px;
  border-radius: 9999px;
  border: 1px solid var(--border, #e5e7eb);
  background: var(--muted, #fafafa);
}

.result-icon-number {
  font-family: var(--font-lexend, 'Lexend', sans-serif);
  font-size: 48px;
  font-weight: 700;
  letter-spacing: -0.05em;
  color: var(--muted-foreground, #7a7272);
}

.result-title {
  font-size: 20px;
  font-weight: 600;
  color: var(--foreground, #2e2b2b);
  margin: 0;
}

.result-description {
  max-width: 384px;
  font-size: 14px;
  line-height: 1.625;
  color: var(--muted-foreground, #7a7272);
  margin: 0;
}

.result-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  padding: 0 16px;
  border-radius: 8px;
  border: none;
  background: var(--primary, #f8785e);
  color: var(--primary-foreground, #ffffff);
  font-family: var(--font-lexend, 'Lexend', sans-serif);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
}
</style>
