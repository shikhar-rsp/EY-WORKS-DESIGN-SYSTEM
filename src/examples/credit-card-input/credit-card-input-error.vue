<script setup lang="ts">
const errorMessage = 'Card has expired. Please use a different card.';
</script>

<template>
  <!-- Same markup as credit-card-input-default.vue. The error state passes
       aria-invalid="true" + aria-describedby on the wrapper and renders the
       message with role="alert" below the fields. -->
  <div aria-invalid="true" aria-describedby="cc-error">
    <input value="4242 4242 4242 4243" autocomplete="cc-number" :style="errorStyle" />
    <input value="Jane Appleseed"      autocomplete="cc-name"   :style="errorStyle" />
    <input value="01/20"               autocomplete="cc-exp"    :style="errorStyle" />
    <input value="123" type="password" autocomplete="cc-csc"    :style="errorStyle" />
    <p id="cc-error" role="alert"
       :style="{ fontSize: '12px', color: 'var(--destructive, #c83b3b)', marginTop: '8px' }">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script lang="ts">
const errorStyle = {
  borderColor: 'var(--destructive, #c83b3b)',
  boxShadow: '0 0 0 2px color-mix(in srgb, var(--destructive, #c83b3b) 30%, transparent)',
};
export { errorStyle };
</script>
