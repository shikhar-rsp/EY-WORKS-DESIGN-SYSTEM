<script setup lang="ts">
import { ref } from 'vue'
const low = ref(20)
const high = ref(70)
</script>

<template>
  <div :style="{ position: 'relative', display: 'flex', alignItems: 'center', width: '256px', height: '20px' }">
    <div :style="{ position: 'relative', overflow: 'hidden', borderRadius: '9999px', background: 'var(--muted-active)', height: '6px', width: '100%' }">
      <div :style="{ position: 'absolute', height: '100%', borderRadius: '9999px', background: 'var(--primary)', left: low + '%', width: (high - low) + '%' }"></div>
    </div>
    <input type="range" v-model="low" min="0" :max="high" :style="{ position: 'absolute', width: '100%', height: '6px', appearance: 'none', background: 'transparent', cursor: 'pointer' }" />
    <input type="range" v-model="high" :min="low" max="100" :style="{ position: 'absolute', width: '100%', height: '6px', appearance: 'none', background: 'transparent', cursor: 'pointer' }" />
  </div>
</template>
