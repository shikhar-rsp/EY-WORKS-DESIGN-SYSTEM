<script setup lang="ts">
import { ref } from 'vue'

const selected = ref('comfortable')
const options = ['Default', 'Comfortable', 'Spacious']
</script>

<template>
  <div role="radiogroup" :style="{ display: 'flex', flexDirection: 'column', gap: 'var(--space-100)' }">
    <label
      v-for="opt in options"
      :key="opt"
      :style="{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-100)',
        cursor: 'pointer',
        fontFamily: 'var(--font-lexend, sans-serif)',
        fontSize: '14px',
        color: 'var(--foreground)',
      }"
    >
      <button
        type="button"
        role="radio"
        :aria-checked="selected === opt.toLowerCase()"
        @click="selected = opt.toLowerCase()"
        :style="{
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          border: selected === opt.toLowerCase() ? '1.5px solid var(--primary)' : '1.5px solid var(--border-input)',
          background: 'var(--background)',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          flexShrink: '0',
        }"
      >
        <span
          v-if="selected === opt.toLowerCase()"
          :style="{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: 'var(--primary)',
            display: 'block',
          }"
        ></span>
      </button>
      {{ opt }}
    </label>
  </div>
</template>
