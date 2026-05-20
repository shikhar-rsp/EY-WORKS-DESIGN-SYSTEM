<script setup lang="ts">
import { ref } from 'vue'

const selected = ref('comfortable')
const options = ['Default', 'Comfortable', 'Spacious']
</script>

<template>
  <div
    role="radiogroup"
    aria-label="Spacing options"
    :style="{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 'var(--space-300)', fontFamily: 'var(--font-lexend, sans-serif)' }"
  >
    <label
      v-for="opt in options"
      :key="opt"
      :style="{ display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '14px', color: 'var(--foreground)' }"
    >
      <button
        type="button"
        role="radio"
        :aria-checked="selected === opt.toLowerCase()"
        :data-state="selected === opt.toLowerCase() ? 'checked' : 'unchecked'"
        @click="selected = opt.toLowerCase()"
        :style="{
          position: 'relative', flexShrink: '0',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: '14px', height: '14px', borderRadius: '50%',
          border: selected === opt.toLowerCase() ? '0' : '1px solid var(--border-input)',
          background: selected === opt.toLowerCase() ? 'var(--primary)' : 'var(--background)',
          cursor: 'pointer', transition: 'background 150ms',
        }"
      >
        <span
          v-if="selected === opt.toLowerCase()"
          :style="{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary-foreground)' }"
        />
      </button>
      {{ opt }}
    </label>
  </div>
</template>
