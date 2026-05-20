<script setup lang="ts">
import { ref, computed } from "vue";

const value = ref(10);
const min = 0;
const max = 100;
const step = 1;

const clamp = (v: number) => Math.min(max, Math.max(min, v));

const decrement = () => {
  value.value = clamp(value.value - step);
};

const increment = () => {
  value.value = clamp(value.value + step);
};

const handleInput = (e: Event) => {
  const parsed = parseFloat((e.target as HTMLInputElement).value);
  if (!isNaN(parsed)) value.value = clamp(parsed);
};

const atMin = computed(() => value.value <= min);
const atMax = computed(() => value.value >= max);
</script>

<template>
  <div class="wrapper">
    <div class="input-number">
      <button
        class="input-number__btn input-number__btn--decrement"
        aria-label="Decrease value"
        :disabled="atMin"
        @click="decrement"
      >
        <svg class="input-number__icon" viewBox="0 0 16 16" fill="none">
          <path d="M3 8h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        </svg>
      </button>
      <input
        class="input-number__field"
        type="text"
        inputmode="numeric"
        :value="value"
        aria-label="Number value"
        @input="handleInput"
      />
      <button
        class="input-number__btn input-number__btn--increment"
        aria-label="Increase value"
        :disabled="atMax"
        @click="increment"
      >
        <svg class="input-number__icon" viewBox="0 0 16 16" fill="none">
          <path d="M8 3v10M3 8h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        </svg>
      </button>
    </div>
    <span class="current-value">
      Current value: <strong>{{ value }}</strong>
    </span>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  gap: 16px;
}

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
  transition: box-shadow 150ms;
}

.input-number:focus-within {
  box-shadow: 0 0 0 2px var(--background, #ffffff), 0 0 0 4px var(--ring, #f8785e);
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
  cursor: pointer;
  transition: color 150ms, background 150ms;
}

.input-number__btn:hover:not(:disabled) {
  color: var(--foreground, #2e2b2b);
  background: var(--muted, #f5f4f3);
}

.input-number__btn:disabled {
  opacity: 0.5;
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
}

.input-number__icon {
  width: 14px;
  height: 14px;
  display: block;
}

.current-value {
  font-size: 14px;
  font-family: var(--font-lexend, "Lexend", sans-serif);
  color: var(--muted-foreground, #7a7272);
}

.current-value strong {
  color: var(--foreground, #2e2b2b);
}
</style>
