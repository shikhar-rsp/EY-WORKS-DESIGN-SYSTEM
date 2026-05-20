<script setup lang="ts">
import { ref, computed } from 'vue';

interface ICreditCardValue { number: string; name: string; expiry: string; cvv: string; }

const value = ref<ICreditCardValue>({ number: '', name: '', expiry: '', cvv: '' });

const detect = (raw: string) => {
  const d = raw.replace(/\D/g, '');
  if (/^4/.test(d)) return 'visa';
  if (/^(5[1-5]|2[2-7])/.test(d)) return 'mastercard';
  if (/^3[47]/.test(d)) return 'amex';
  if (/^(6011|65|64[4-9])/.test(d)) return 'discover';
  return 'unknown';
};

const luhnOk = (raw: string) => {
  const d = raw.replace(/\D/g, '');
  if (d.length < 12) return false;
  let sum = 0, alt = false;
  for (let i = d.length - 1; i >= 0; i--) {
    let n = Number(d[i]); if (alt) { n *= 2; if (n > 9) n -= 9; }
    sum += n; alt = !alt;
  }
  return sum % 10 === 0;
};

const network = computed(() => detect(value.value.number));
const luhn = computed(() => luhnOk(value.value.number));
</script>

<template>
  <!-- Bind the same template as credit-card-input-default.vue, replacing each
       v-model with v-model="value.<field>" so all four values flow through one object. -->
  <div>
    <input v-model="value.number" placeholder="0000 0000 0000 0000" autocomplete="cc-number" />
    <input v-model="value.name"   placeholder="Jane Appleseed"      autocomplete="cc-name" />
    <input v-model="value.expiry" placeholder="MM/YY"               autocomplete="cc-exp" />
    <input v-model="value.cvv"    placeholder="•••" type="password" autocomplete="cc-csc" />

    <p :style="{ marginTop: '12px', fontFamily: 'Geist Mono, monospace', fontSize: '12px', color: '#7a7272' }">
      Detected network: <strong :style="{ color: '#2e2b2b' }">{{ network }}</strong> ·
      Luhn: <strong :style="{ color: '#2e2b2b' }">{{ luhn ? 'valid' : '—' }}</strong>
    </p>
  </div>
</template>
