<script setup lang="ts">
import { ref, computed } from 'vue'

type StepsStatusTypes = 'complete' | 'current' | 'upcoming'

interface IStepItem {
  value: string
  title: string
  description: string
}

const steps: IStepItem[] = [
  { value: '1', title: 'Account', description: 'Create your account' },
  { value: '2', title: 'Billing', description: 'Add payment method' },
  { value: '3', title: 'Confirm', description: 'Review and confirm' },
]

const currentValue = ref('1')

const currentIndex = computed(() => steps.findIndex((s) => s.value === currentValue.value))

const getStatus = (stepValue: string): StepsStatusTypes => {
  const stepIndex = steps.findIndex((s) => s.value === stepValue)
  if (stepIndex < currentIndex.value) return 'complete'
  if (stepIndex === currentIndex.value) return 'current'
  return 'upcoming'
}

const goBack = () => {
  if (currentIndex.value > 0) {
    currentValue.value = steps[currentIndex.value - 1].value
  }
}

const goNext = () => {
  if (currentIndex.value < steps.length - 1) {
    currentValue.value = steps[currentIndex.value + 1].value
  }
}
</script>

<template>
  <div style="width: 100%; max-width: 512px; padding: 24px; font-family: var(--font-lexend, 'Lexend', sans-serif);">
    <!-- Steps track -->
    <div
      data-slot="steps"
      data-orientation="horizontal"
      style="display: flex; flex-direction: row; align-items: flex-start; gap: 0;"
    >
      <template v-for="(step, index) in steps" :key="step.value">
        <div
          data-slot="steps-item"
          :data-state="getStatus(step.value)"
          style="display: flex; flex: 1; flex-direction: row; align-items: flex-start;"
        >
          <button
            type="button"
            data-slot="steps-indicator"
            :data-state="getStatus(step.value)"
            :aria-current="getStatus(step.value) === 'current' ? 'step' : undefined"
            @click="currentValue = step.value"
            :style="{
              display: 'flex',
              flexShrink: 0,
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '9999px',
              border: getStatus(step.value) === 'upcoming'
                ? '2px solid var(--border, #ebe9e8)'
                : '2px solid var(--primary, #f8785e)',
              background: getStatus(step.value) === 'complete'
                ? 'var(--primary, #f8785e)'
                : 'var(--background, #ffffff)',
              color: getStatus(step.value) === 'complete'
                ? 'var(--primary-foreground, #ffffff)'
                : getStatus(step.value) === 'current'
                  ? 'var(--primary, #f8785e)'
                  : 'var(--muted-foreground, #7a7272)',
              fontFamily: \"var(--font-lexend, 'Lexend', sans-serif)\",
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              position: 'relative',
              zIndex: 10,
              transition: 'opacity 0.15s',
            }"
          >
            <svg
              v-if="getStatus(step.value) === 'complete'"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span v-else>{{ index + 1 }}</span>
          </button>

          <div
            data-slot="steps-content"
            style="display: flex; flex-direction: column; align-items: center; padding-top: 8px; padding-left: 4px; padding-right: 4px;"
          >
            <p
              data-slot="steps-title"
              :style="{
                fontFamily: \"var(--font-lexend, 'Lexend', sans-serif)\",
                fontSize: '14px',
                fontWeight: '500',
                lineHeight: 1,
                color: getStatus(step.value) === 'upcoming'
                  ? 'var(--muted-foreground, #7a7272)'
                  : 'var(--foreground, #2e2b2b)',
                margin: 0,
              }"
            >{{ step.title }}</p>
            <p style="margin-top: 4px; font-size: 12px; color: var(--muted-foreground, #7a7272); margin-bottom: 0;">
              {{ step.description }}
            </p>
          </div>
        </div>

        <div
          v-if="index < steps.length - 1"
          data-slot="steps-separator"
          aria-hidden="true"
          style="height: 2px; flex: 1; margin-top: 16px; margin-left: 4px; margin-right: 4px; background: var(--border, #ebe9e8); transition: background 0.2s;"
        ></div>
      </template>
    </div>

    <!-- Navigation -->
    <div style="margin-top: 24px; display: flex; align-items: center; gap: 12px;">
      <button
        type="button"
        :disabled="currentIndex === 0"
        @click="goBack"
        :style="{
          padding: '6px 16px',
          borderRadius: '8px',
          border: '1px solid var(--border, #ebe9e8)',
          background: 'transparent',
          color: 'var(--foreground, #2e2b2b)',
          fontFamily: \"var(--font-lexend, 'Lexend', sans-serif)\",
          fontSize: '14px',
          fontWeight: '500',
          cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
          opacity: currentIndex === 0 ? 0.4 : 1,
          transition: 'opacity 0.15s',
        }"
      >Back</button>
      <button
        type="button"
        :disabled="currentIndex === steps.length - 1"
        @click="goNext"
        :style="{
          padding: '6px 16px',
          borderRadius: '8px',
          border: '1px solid transparent',
          background: 'var(--primary, #f8785e)',
          color: 'var(--primary-foreground, #ffffff)',
          fontFamily: \"var(--font-lexend, 'Lexend', sans-serif)\",
          fontSize: '14px',
          fontWeight: '500',
          cursor: currentIndex === steps.length - 1 ? 'not-allowed' : 'pointer',
          opacity: currentIndex === steps.length - 1 ? 0.4 : 1,
          transition: 'opacity 0.15s',
        }"
      >{{ currentIndex === steps.length - 1 ? 'Finish' : 'Next' }}</button>
      <span style="font-size: 12px; color: var(--muted-foreground, #7a7272);">
        Step {{ currentIndex + 1 }} of {{ steps.length }}
      </span>
    </div>
  </div>
</template>
