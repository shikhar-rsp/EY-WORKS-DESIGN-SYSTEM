<script setup lang="ts">
// Disabled variant — same template as credit-card-input-default.vue.
// Pass `disabled` to every input and dim the wrapper.
const value = {
  number: '5555 5555 5555 4444',
  name: 'Jane Appleseed',
  expiry: '12/29',
  cvv: '321',
};
</script>

<template>
  <fieldset disabled :style="{ opacity: 0.6, pointerEvents: 'none', border: 0, padding: 0, margin: 0 }">
    <input :value="value.number" autocomplete="cc-number" disabled />
    <input :value="value.name"   autocomplete="cc-name"   disabled />
    <input :value="value.expiry" autocomplete="cc-exp"    disabled />
    <input :value="value.cvv" type="password" autocomplete="cc-csc" disabled />
  </fieldset>
</template>
