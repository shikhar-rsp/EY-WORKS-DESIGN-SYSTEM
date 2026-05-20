<script setup lang="ts">
import { ref } from "vue";

const selectedSm = ref("day");
const selectedDefault = ref("day");
const selectedLg = ref("day");

const items = [
  { value: "day", label: "Day" },
  { value: "week", label: "Week" },
  { value: "month", label: "Month" },
];
</script>

<template>
  <div class="wrapper">
    <!-- sm -->
    <div class="size-group">
      <div class="segmented segmented-sm" role="tablist" aria-orientation="horizontal">
        <button
          v-for="item in items"
          :key="item.value"
          role="tab"
          class="segmented-item segmented-item-sm"
          :class="{ active: selectedSm === item.value }"
          :aria-selected="selectedSm === item.value"
          @click="selectedSm = item.value"
        >
          {{ item.label }}
        </button>
      </div>
      <span class="size-label">sm</span>
    </div>

    <!-- default -->
    <div class="size-group">
      <div class="segmented segmented-default" role="tablist" aria-orientation="horizontal">
        <button
          v-for="item in items"
          :key="item.value"
          role="tab"
          class="segmented-item segmented-item-default"
          :class="{ active: selectedDefault === item.value }"
          :aria-selected="selectedDefault === item.value"
          @click="selectedDefault = item.value"
        >
          {{ item.label }}
        </button>
      </div>
      <span class="size-label">default</span>
    </div>

    <!-- lg -->
    <div class="size-group">
      <div class="segmented segmented-lg" role="tablist" aria-orientation="horizontal">
        <button
          v-for="item in items"
          :key="item.value"
          role="tab"
          class="segmented-item segmented-item-lg"
          :class="{ active: selectedLg === item.value }"
          :aria-selected="selectedLg === item.value"
          @click="selectedLg = item.value"
        >
          {{ item.label }}
        </button>
      </div>
      <span class="size-label">lg</span>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 24px;
  font-family: var(--font-lexend, 'Lexend', sans-serif);
}

.size-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.size-label {
  font-size: 12px;
  color: var(--muted-foreground, #7a7272);
}

.segmented {
  display: inline-flex;
  align-items: center;
  background: var(--muted, #fafafa);
  border-radius: var(--radius-medium, 8px);
  padding: 4px;
  gap: 4px;
}

.segmented-sm { height: 32px; }
.segmented-default { height: 36px; }
.segmented-lg { height: 40px; }

.segmented-item {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: var(--radius-small, 4px);
  font-family: inherit;
  font-weight: 500;
  cursor: pointer;
  background: transparent;
  color: var(--muted-foreground, #7a7272);
  transition: all 150ms;
}

.segmented-item-sm { height: 24px; padding: 0 16px; font-size: 12px; }
.segmented-item-default { height: 28px; padding: 0 16px; font-size: 14px; }
.segmented-item-lg { height: 32px; padding: 0 24px; font-size: 14px; }

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
