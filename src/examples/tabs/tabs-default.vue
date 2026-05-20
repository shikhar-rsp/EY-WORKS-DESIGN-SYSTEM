<script setup lang="ts">
import { ref } from 'vue'
const active = ref('account')
const tabs = [
  { value: 'account', label: 'Account', content: 'Manage your account details and preferences.' },
  { value: 'password', label: 'Password', content: 'Change your password and security settings.' },
  { value: 'settings', label: 'Settings', content: 'Configure application settings.' },
]
</script>

<template>
  <div>
    <div role="tablist" :style="{ display: 'inline-flex', alignItems: 'center', borderBottom: '1px solid var(--border)', width: '100%' }">
      <button
        v-for="tab in tabs"
        :key="tab.value"
        role="tab"
        :aria-selected="active === tab.value"
        @click="active = tab.value"
        :style="{
          padding: '4px 8px',
          fontSize: '14px',
          fontWeight: active === tab.value ? 600 : 500,
          border: 'none',
          background: 'transparent',
          color: active === tab.value ? 'var(--foreground)' : 'var(--muted-foreground)',
          cursor: 'pointer',
          borderBottom: active === tab.value ? '3px solid var(--primary-active)' : '3px solid transparent',
          marginBottom: '-1px',
        }"
      >{{ tab.label }}</button>
    </div>
    <div
      v-for="tab in tabs"
      :key="tab.value"
      v-show="active === tab.value"
      role="tabpanel"
      :style="{ marginTop: '16px', fontSize: '14px', color: 'var(--secondary-foreground)' }"
    >{{ tab.content }}</div>
  </div>
</template>
