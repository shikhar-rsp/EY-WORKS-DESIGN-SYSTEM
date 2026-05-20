<script setup lang="ts">
import { ref } from 'vue'
const value = ref(33)
</script>

<template>
  <div :style="{ position: 'relative', display: 'flex', alignItems: 'center', width: '256px', height: '20px' }">
    <div :style="{ position: 'relative', overflow: 'hidden', borderRadius: '9999px', background: 'var(--muted-active)', height: '6px', width: '100%' }">
      <div :style="{ position: 'absolute', left: 0, height: '100%', borderRadius: '9999px', background: 'var(--primary)', width: value + '%' }"></div>
    </div>
    <input
      type="range"
      v-model="value"
      min="0"
      max="100"
      :style="{ position: 'absolute', width: '100%', height: '6px', appearance: 'none', background: 'transparent', cursor: 'pointer' }"
    />
  </div>
</template>
