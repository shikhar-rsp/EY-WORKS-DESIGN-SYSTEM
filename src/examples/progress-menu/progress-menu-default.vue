<script setup lang="ts">
const steps = [
  {
    label: 'Account Setup',
    description: 'Complete your account',
    status: 'success' as const,
  },
  {
    label: 'Child Profile',
    description: "Add your child's info",
    status: 'in-progress' as const,
    tag: 'Optional',
  },
  {
    label: 'Global Settings',
    description: 'Configure preferences',
    status: 'default' as const,
  },
]
</script>

<template>
  <div
    :style="{
      width: '320px',
      background: 'var(--background)',
      borderRadius: 'var(--radius-large)',
      padding: '16px',
      fontFamily: 'var(--font-lexend), sans-serif',
    }"
  >
    <!-- Title -->
    <p :style="{ fontSize: '14px', fontWeight: 600, color: 'var(--foreground)', margin: '0 0 12px 0' }">
      Getting Started
    </p>

    <template v-for="(step, index) in steps" :key="step.label">
      <!-- Step row -->
      <div
        :style="{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '12px',
          padding: '8px',
          borderRadius: 'var(--radius-medium)',
          background:
            step.status === 'success'
              ? 'var(--success-subtle)'
              : step.status === 'in-progress'
                ? 'var(--primary-subtle)'
                : 'var(--accent-gray-subtlest)',
        }"
      >
        <!-- Icon -->
        <div :style="{ position: 'relative', width: '28px', height: '28px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }">
          <!-- Success circle -->
          <template v-if="step.status === 'success'">
            <div
              :style="{
                width: '28px', height: '28px',
                borderRadius: '50%',
                background: 'var(--success-foreground)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" :style="{ color: '#ffffff' }">
                <path d="M5 13L9 17L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </template>

          <!-- In-progress circle -->
          <template v-else-if="step.status === 'in-progress'">
            <div
              :style="{
                position: 'absolute',
                width: '28px', height: '28px',
                borderRadius: '50%',
                border: '2px solid var(--primary)',
                opacity: 0.5,
              }"
            />
            <div
              :style="{
                width: '20px', height: '20px',
                borderRadius: '50%',
                background: 'var(--primary-subtle)',
                border: '2px solid var(--primary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" :style="{ color: 'var(--primary)' }">
                <circle cx="12" cy="8" r="4" stroke="currentColor" stroke-width="1.5"/>
                <path d="M4 20C4 17.7909 7.58172 16 12 16C16.4183 16 20 17.7909 20 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </div>
          </template>

          <!-- Default circle -->
          <template v-else>
            <div
              :style="{
                width: '28px', height: '28px',
                borderRadius: '50%',
                background: 'var(--accent-gray-subtler)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" :style="{ color: 'var(--subtle)' }">
                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" stroke-width="1.5"/>
                <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" stroke="currentColor" stroke-width="1.5"/>
              </svg>
            </div>
          </template>
        </div>

        <!-- Text -->
        <div :style="{ flex: 1, minWidth: 0 }">
          <div :style="{ display: 'flex', alignItems: 'center', gap: '6px' }">
            <p
              :style="{
                fontSize: '14px',
                fontWeight: 500,
                color: step.status === 'default' ? 'var(--subtle)' : 'var(--foreground)',
                margin: 0,
              }"
            >
              {{ step.label }}
            </p>
            <span
              v-if="step.tag"
              :style="{
                fontSize: '11px',
                fontWeight: 500,
                color: 'var(--muted-foreground)',
                background: 'var(--muted)',
                borderRadius: 'var(--radius-small)',
                padding: '1px 6px',
              }"
            >
              {{ step.tag }}
            </span>
          </div>
          <p :style="{ fontSize: '12px', color: 'var(--muted-foreground)', margin: '2px 0 0 0' }">
            {{ step.description }}
          </p>
        </div>
      </div>

      <!-- Connector -->
      <div
        v-if="index < steps.length - 1"
        :style="{
          width: '2px',
          height: '20px',
          background: 'var(--accent-gray-subtler)',
          marginLeft: '19px',
        }"
      />
    </template>

    <!-- Buttons -->
    <div :style="{ display: 'flex', gap: '8px', marginTop: '16px' }">
      <button
        :style="{
          flex: 1,
          padding: '6px 16px',
          borderRadius: 'var(--radius-medium)',
          border: '1px solid var(--border)',
          background: 'var(--background)',
          color: 'var(--primary)',
          fontFamily: 'var(--font-lexend), sans-serif',
          fontSize: '14px',
          fontWeight: 500,
          cursor: 'pointer',
        }"
      >
        Skip
      </button>
      <button
        :style="{
          flex: 1,
          padding: '6px 16px',
          borderRadius: 'var(--radius-medium)',
          border: '1px solid transparent',
          background: 'var(--primary)',
          color: 'var(--primary-foreground)',
          fontFamily: 'var(--font-lexend), sans-serif',
          fontSize: '14px',
          fontWeight: 500,
          cursor: 'pointer',
        }"
      >
        Continue
      </button>
    </div>
  </div>
</template>
