<script setup lang="ts">
import { ref } from "vue";

const username = ref("");
const showError = ref(false);

const handleSubmit = () => {
  if (!username.value.trim()) {
    showError.value = true;
    return;
  }
  showError.value = false;
  console.log("Submitted:", { username: username.value });
};
</script>

<template>
  <form
    :style="{ display: 'flex', flexDirection: 'column', gap: 'var(--space-200)', width: '320px' }"
    @submit.prevent="handleSubmit"
  >
    <!-- FormField / FormItem -->
    <div :style="{ display: 'flex', flexDirection: 'column', gap: 'var(--space-075)' }">
      <label
        for="username"
        :style="{
          display: 'inline-flex', alignItems: 'center', gap: '4px',
          fontSize: '0.875rem', fontWeight: 500, lineHeight: 1,
          color: showError ? 'var(--destructive)' : 'var(--foreground)',
          userSelect: 'none',
        }"
      >Username</label>
      <input
        id="username"
        v-model="username"
        type="text"
        placeholder="Enter a username"
        :aria-invalid="showError || undefined"
        aria-describedby="username-error"
        :style="{
          height: '36px', width: '100%', borderRadius: 'var(--radius-medium)',
          border: showError ? '1px solid var(--destructive)' : '1px solid var(--border-input)',
          background: 'var(--background)', padding: '0 var(--space-200)',
          fontSize: '0.875rem', fontFamily: 'var(--font-lexend, Lexend, sans-serif)',
          color: 'var(--foreground)', outline: 'none', boxSizing: 'border-box',
        }"
      />
      <p
        v-if="showError"
        id="username-error"
        role="alert"
        :style="{ fontSize: '0.75rem', lineHeight: '1.625', color: 'var(--destructive)', margin: 0 }"
      >
        This field is required
      </p>
    </div>
    <!-- Submit -->
    <button
      type="submit"
      :style="{
        display: 'inline-flex', height: '36px', alignItems: 'center',
        justifyContent: 'center', borderRadius: 'var(--radius-medium)',
        background: 'var(--primary)', border: 'none', padding: '0 var(--space-200)',
        fontSize: '0.875rem', fontFamily: 'inherit', fontWeight: 500,
        color: 'var(--primary-foreground)', cursor: 'pointer',
      }"
    >Submit</button>
  </form>
</template>

<style scoped>
button:hover { background: var(--primary-hover) !important; }
</style>
