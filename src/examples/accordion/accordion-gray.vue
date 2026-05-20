<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
  <div
    :style="{
      width: '100%',
      minWidth: '320px',
      maxWidth: '512px',
      padding: '24px',
    }"
  >
    <div
      :style="{
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        borderRadius: 'var(--radius-large)',
        background: isOpen ? 'var(--background)' : 'var(--accent-gray-subtle)',
        gap: isOpen ? 'var(--space-150)' : '0',
        paddingBottom: isOpen ? 'var(--space-250)' : '0',
      }"
    >
      <!-- Header -->
      <button
        :style="{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 'var(--space-200) var(--space-300)',
          borderRadius: isOpen ? 'var(--radius-large) var(--radius-large) 0 0' : 'var(--radius-large)',
          background: 'var(--accent-gray-subtle)',
          border: 'none',
          cursor: 'pointer',
          fontFamily: 'var(--font-lexend), sans-serif',
          boxShadow: isOpen ? '0px 0px 1px rgba(30,31,33,0.31), 0px 1px 1px rgba(30,31,33,0.25)' : 'none',
        }"
        :aria-expanded="isOpen"
        @click="isOpen = !isOpen"
      >
        <span
          :style="{
            fontSize: '20px',
            fontWeight: 700,
            lineHeight: '24px',
            color: 'var(--foreground)',
          }"
        >
          What is a design system?
        </span>
        <!-- Arrow Down -->
        <svg
          v-if="!isOpen"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          :style="{ color: 'var(--foreground)', flexShrink: 0 }"
        >
          <path
            d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <!-- Arrow Up -->
        <svg
          v-else
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          :style="{ color: 'var(--foreground)', flexShrink: 0 }"
        >
          <path
            d="M18 15C18 15 13.5811 9.00001 12 9C10.4188 8.99999 6 15 6 15"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <!-- Content -->
      <div
        v-if="isOpen"
        :style="{ padding: '0 var(--space-200)' }"
      >
        <p
          :style="{
            fontFamily: 'var(--font-lexend), sans-serif',
            fontSize: '14px',
            lineHeight: '20px',
            color: 'var(--muted-foreground)',
            margin: 0,
          }"
        >
          A design system is a collection of reusable components, guided by clear
          standards, that can be assembled to build any number of applications.
        </p>
      </div>
    </div>
  </div>
</template>
