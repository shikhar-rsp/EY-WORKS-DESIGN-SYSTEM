<script setup lang="ts">
import { ref } from 'vue'

const slots = ref(['', '', '', '', '', ''])
const activeIndex = ref(-1)

const onInput = (index: number, e: Event) => {
  const char = (e.target as HTMLInputElement).value.slice(-1)
  slots.value[index] = char
  if (char && index < 5) {
    const inputs = document.querySelectorAll<HTMLInputElement>('.otp-input')
    inputs[index + 1]?.focus()
  }
}

const onKeyDown = (index: number, e: KeyboardEvent) => {
  if (e.key === 'Backspace' && !slots.value[index] && index > 0) {
    const inputs = document.querySelectorAll<HTMLInputElement>('.otp-input')
    inputs[index - 1]?.focus()
  }
}
</script>

<template>
  <div role="group" aria-label="One-time password" :style="{ display: 'inline-flex', alignItems: 'center', gap: 'var(--space-150)' }">
    <div :style="{ display: 'flex', alignItems: 'center' }">
      <div
        v-for="i in [0,1,2]"
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
          borderRadius: i === 0 ? 'var(--radius-medium) 0 0 var(--radius-medium)' : i === 2 ? '0 var(--radius-medium) var(--radius-medium) 0' : '0',
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
          class="otp-input"
          type="text"
          :maxlength="1"
          :value="slots[i]"
          :aria-label="`Digit ${i + 1}`"
          @input="onInput(i, $event)"
          @keydown="onKeyDown(i, $event)"
          @focus="activeIndex = i"
          @blur="activeIndex = -1"
          :style="{ position: 'absolute', inset: 0, background: 'transparent', border: 'none', outline: 'none', textAlign: 'center', fontSize: '14px', cursor: 'pointer', width: '100%' }"
        />
      </div>
    </div>

    <div role="separator" aria-hidden="true" :style="{ display: 'flex', width: '16px', alignItems: 'center', justifyContent: 'center', color: 'var(--muted-foreground)' }">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
      </svg>
    </div>

    <div :style="{ display: 'flex', alignItems: 'center' }">
      <div
        v-for="i in [3,4,5]"
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
          borderLeft: i === 3 ? '1px solid var(--border-input)' : 'none',
          borderRadius: i === 3 ? 'var(--radius-medium) 0 0 var(--radius-medium)' : i === 5 ? '0 var(--radius-medium) var(--radius-medium) 0' : '0',
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
          class="otp-input"
          type="text"
          :maxlength="1"
          :value="slots[i]"
          :aria-label="`Digit ${i + 1}`"
          @input="onInput(i, $event)"
          @keydown="onKeyDown(i, $event)"
          @focus="activeIndex = i"
          @blur="activeIndex = -1"
          :style="{ position: 'absolute', inset: 0, background: 'transparent', border: 'none', outline: 'none', textAlign: 'center', fontSize: '14px', cursor: 'pointer', width: '100%' }"
        />
      </div>
    </div>
  </div>
</template>
