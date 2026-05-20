<script setup lang="ts">
import { ref } from "vue";

const selected = ref("day");
const items = [
  { value: "day", label: "Day" },
  { value: "week", label: "Week" },
  { value: "month", label: "Month" },
];
</script>

<template>
  <div class="wrapper">
    <div class="segmented" role="tablist" aria-orientation="horizontal">
      <button
        v-for="item in items"
        :key="item.value"
        role="tab"
        class="segmented-item"
        :class="{ active: selected === item.value }"
        :aria-selected="selected === item.value"
        @click="selected = item.value"
      >
        {{ item.label }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.segmented {
  display: inline-flex;
  align-items: center;
  height: 36px;
  background: var(--muted, #fafafa);
  border-radius: var(--radius-medium, 8px);
  padding: 4px;
  gap: 4px;
  font-family: var(--font-lexend, 'Lexend', sans-serif);
}

.segmented-item {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  padding: 0 16px;
  border: none;
  border-radius: var(--radius-small, 4px);
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  background: transparent;
  color: var(--muted-foreground, #7a7272);
  transition: all 150ms;
}

.segmented-item:hover {
  color: var(--foreground, #2e2b2b);
}

.segmented-item.active {
  background: var(--background, #ffffff);
  color: var(--foreground, #2e2b2b);
  font-weight: 600;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
</style>
