<script setup lang="ts">
// Result — Error example
</script>

<template>
  <div class="result" data-status="error">
    <div class="result-icon-wrapper" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="currentColor" class="result-icon">
        <path
          fill-rule="evenodd"
          d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 5a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7zm1 9a1.25 1.25 0 1 1 0-2.5A1.25 1.25 0 0 1 12 16z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <h3 class="result-title">Submission Failed</h3>
    <p class="result-description">
      There was an error processing your request. Please try again.
    </p>
    <div class="result-actions">
      <button class="btn-primary">Try Again</button>
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
  border: 1px solid rgba(204, 0, 0, 0.2);
  background: rgba(204, 0, 0, 0.1);
}

.result-icon {
  width: 64px;
  height: 64px;
  color: var(--destructive, #cc0000);
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
