<script setup lang="ts">
import { ref } from "vue";

const email = ref("");

const handleSubmit = () => {
  console.log("Submitted:", { email: email.value });
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
        for="email"
        :style="{
          display: 'inline-flex', alignItems: 'center', gap: '4px',
          fontSize: '0.875rem', fontWeight: 500, lineHeight: 1,
          color: 'var(--foreground)', userSelect: 'none',
        }"
      >Email</label>
      <input
        id="email"
        v-model="email"
        type="email"
        placeholder="you@example.com"
        :style="{
          height: '36px', width: '100%', borderRadius: 'var(--radius-medium)',
          border: '1px solid var(--border-input)', background: 'var(--background)',
          padding: '0 var(--space-200)', fontSize: '0.875rem',
          fontFamily: 'var(--font-lexend, Lexend, sans-serif)',
          color: 'var(--foreground)', outline: 'none', boxSizing: 'border-box',
        }"
      />
      <p :style="{ fontSize: '0.75rem', lineHeight: '1.625', color: 'var(--muted-foreground)', margin: 0 }">
        We'll never share your email.
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
input:focus { border-color: var(--ring) !important; box-shadow: 0 0 0 2px color-mix(in srgb, var(--ring) 30%, transparent); }
</style>
