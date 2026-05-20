<script setup lang="ts">
// No reactive state needed — static disabled display
const value = 5;
</script>

<template>
  <div class="input-number input-number--disabled" aria-disabled="true">
    <button class="input-number__btn input-number__btn--decrement" aria-label="Decrease value" disabled>
      <svg class="input-number__icon" viewBox="0 0 16 16" fill="none">
        <path d="M3 8h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
      </svg>
    </button>
    <input
      class="input-number__field"
      type="text"
      inputmode="numeric"
      :value="value"
      disabled
      aria-label="Number value"
    />
    <button class="input-number__btn input-number__btn--increment" aria-label="Increase value" disabled>
      <svg class="input-number__icon" viewBox="0 0 16 16" fill="none">
        <path d="M8 3v10M3 8h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.input-number {
  display: inline-flex;
  align-items: center;
  height: 36px;
  border: 1px solid var(--border, #ebe9e8);
  border-radius: var(--radius-medium, 8px);
  background: var(--background, #ffffff);
  font-family: var(--font-lexend, "Lexend", sans-serif);
  font-size: 14px;
  color: var(--foreground, #2e2b2b);
}

.input-number--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.input-number__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 8px;
  background: transparent;
  border: none;
  color: var(--muted-foreground, #7a7272);
  pointer-events: none;
}

.input-number__btn--decrement {
  border-right: 1px solid var(--border, #ebe9e8);
  border-radius: var(--radius-medium, 8px) 0 0 var(--radius-medium, 8px);
}

.input-number__btn--increment {
  border-left: 1px solid var(--border, #ebe9e8);
  border-radius: 0 var(--radius-medium, 8px) var(--radius-medium, 8px) 0;
}

.input-number__field {
  flex: 1;
  min-width: 0;
  height: 100%;
  padding: 0 8px;
  background: transparent;
  border: none;
  font-family: var(--font-lexend, "Lexend", sans-serif);
  font-size: 14px;
  color: var(--foreground, #2e2b2b);
  text-align: center;
  outline: none;
  pointer-events: none;
}

.input-number__icon {
  width: 14px;
  height: 14px;
  display: block;
}
</style>
