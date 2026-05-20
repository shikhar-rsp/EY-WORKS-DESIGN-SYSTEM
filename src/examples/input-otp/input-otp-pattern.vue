<script setup lang="ts">
import { ref } from 'vue'

const PATTERN = /^[a-zA-Z0-9]*$/
const slots = ref(['', '', '', '', '', ''])
const activeIndex = ref(-1)

const onInput = (index: number, e: Event) => {
  const raw = (e.target as HTMLInputElement).value.slice(-1)
  const char = PATTERN.test(raw) ? raw : ''
  slots.value[index] = char
  ;(e.target as HTMLInputElement).value = char
  if (char && index < 5) {
    const inputs = document.querySelectorAll<HTMLInputElement>('.otp-input-pattern')
    inputs[index + 1]?.focus()
  }
}
</script>

<template>
  <div role="group" aria-label="One-time password (alphanumeric)" :style="{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-150)' }">
    <div :style="{ display: 'flex', alignItems: 'center' }">
      <div
        v-for="i in [0,1,2,3,4,5]"
        :key="i"
        :style="{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '40px',
          height: '40px',
          borderTop: '1px solid var(--border-input)',
          borderBottom: '1px solid var(--border-input)',
          borderRight: '1px solid var(--border-input)',
          borderLeft: i === 0 ? '1px solid var(--border-input)' : 'none',
          borderRadius: i === 0 ? 'var(--radius-medium) 0 0 var(--radius-medium)' : i === 5 ? '0 var(--radius-medium) var(--radius-medium) 0' : '0',
          background: 'var(--background)',
          fontSize: '14px',
          fontWeight: 500,
          color: 'var(--foreground)',
          outline: activeIndex === i ? '2px solid var(--ring)' : 'none',
          outlineOffset: '-2px',
          zIndex: activeIndex === i ? 10 : 'auto',
        }"
      >
        <input
          class="otp-input-pattern"
          type="text"
          :maxlength="1"
          :value="slots[i]"
          :aria-label="`Character ${i + 1}`"
          @input="onInput(i, $event)"
          @focus="activeIndex = i"
          @blur="activeIndex = -1"
          :style="{ position: 'absolute', inset: 0, background: 'transparent', border: 'none', outline: 'none', textAlign: 'center', fontSize: '14px', cursor: 'pointer', width: '100%' }"
        />
      </div>
    </div>
  </div>
</template>
