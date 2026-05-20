<script setup lang="ts">
import { ref, computed } from 'vue';

const number = ref('');
const name = ref('');
const expiry = ref('');
const cvv = ref('');
const cvvFocused = ref(false);

const digits = computed(() => number.value.replace(/\D/g, ''));

const network = computed(() => {
  const d = digits.value;
  if (/^4/.test(d)) return 'visa';
  if (/^(5[1-5]|2[2-7])/.test(d)) return 'mastercard';
  if (/^3[47]/.test(d)) return 'amex';
  if (/^(6011|65|64[4-9])/.test(d)) return 'discover';
  return 'unknown';
});

const groups = computed(() => {
  const sizes = network.value === 'amex' ? [4, 6, 5] : [4, 4, 4, 4];
  let cursor = 0;
  return sizes.map((g) => {
    const slice = digits.value.slice(cursor, cursor + g);
    cursor += g;
    return slice.padEnd(g, '•');
  });
});

const formatNumber = (e: Event) => {
  const raw = (e.target as HTMLInputElement).value.replace(/\D/g, '').slice(0, network.value === 'amex' ? 15 : 16);
  number.value = raw.replace(/(.{4})/g, '$1 ').trim();
};

const formatExpiry = (e: Event) => {
  const raw = (e.target as HTMLInputElement).value.replace(/\D/g, '').slice(0, 4);
  expiry.value = raw.length < 3 ? raw : `${raw.slice(0, 2)}/${raw.slice(2)}`;
};
</script>

<template>
  <div class="ccx">
    <div class="preview" :data-side="cvvFocused ? 'back' : 'front'">
      <template v-if="!cvvFocused">
        <div class="row">
          <div class="chip"></div>
          <span class="brand">{{ network === 'unknown' ? '' : network.toUpperCase() }}</span>
        </div>
        <div class="number">
          <span v-for="(g, i) in groups" :key="i">{{ g }}</span>
        </div>
        <div class="row bottom">
          <div>
            <div class="meta">Card holder</div>
            <div class="name">{{ name || 'FULL NAME' }}</div>
          </div>
          <div style="text-align:right">
            <div class="meta">Expires</div>
            <div class="name mono">{{ expiry || 'MM/YY' }}</div>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="stripe"></div>
        <div class="cvv-strip">{{ cvv || '•••' }}</div>
      </template>
    </div>

    <div class="fields">
      <label class="field">
        <span class="label">Card number</span>
        <input class="input mono" inputmode="numeric" autocomplete="cc-number"
               placeholder="0000 0000 0000 0000" :value="number" @input="formatNumber" />
      </label>
      <label class="field">
        <span class="label">Cardholder name</span>
        <input class="input" autocomplete="cc-name" placeholder="Jane Appleseed" v-model="name" />
      </label>
      <div class="grid">
        <label class="field">
          <span class="label">Expiry</span>
          <input class="input mono" inputmode="numeric" autocomplete="cc-exp"
                 placeholder="MM/YY" :value="expiry" @input="formatExpiry" />
        </label>
        <label class="field">
          <span class="label">CVV</span>
          <input class="input mono" type="password" inputmode="numeric" autocomplete="cc-csc"
                 placeholder="•••" v-model="cvv" maxlength="4"
                 @focus="cvvFocused = true" @blur="cvvFocused = false" />
        </label>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ccx { display: flex; flex-direction: column; gap: 16px; width: 100%; max-width: 384px; font-family: 'Lexend', sans-serif; }
.preview { position: relative; aspect-ratio: 1.586 / 1; width: 100%; overflow: hidden; border-radius: 16px; padding: 16px;
  background: linear-gradient(135deg, var(--primary, #ed7855), var(--primary-hover, #d65c3a) 60%, var(--primary-active, #b14525));
  color: var(--primary-foreground, #fff); box-shadow: 0 10px 30px rgba(0,0,0,0.15);
  display: flex; flex-direction: column; justify-content: space-between; }
.row { display: flex; align-items: flex-start; justify-content: space-between; }
.row.bottom { align-items: flex-end; gap: 16px; }
.chip { width: 36px; height: 36px; border-radius: 6px; background: rgba(255,255,255,0.25); }
.brand { font-weight: 800; font-style: italic; letter-spacing: 0.05em; }
.number { font-family: 'Geist Mono', monospace; font-variant-numeric: tabular-nums; font-weight: 600; letter-spacing: 0.18em; display: flex; gap: 12px; flex-wrap: wrap; font-size: 1rem; }
.meta { font-size: 0.6rem; text-transform: uppercase; letter-spacing: 0.18em; opacity: 0.7; }
.name { text-transform: uppercase; font-size: 0.875rem; font-weight: 500; }
.mono { font-family: 'Geist Mono', monospace; font-variant-numeric: tabular-nums; }
.stripe { margin: 8px -16px 0; height: 40px; background: rgba(0,0,0,0.6); }
.cvv-strip { margin-left: auto; height: 36px; width: 66%; display: flex; align-items: center; justify-content: flex-end;
  border-radius: 6px; background: rgba(255,255,255,0.95); padding: 0 12px; color: var(--foreground, #2e2b2b);
  font-family: 'Geist Mono', monospace; font-weight: 600; }
.fields { display: flex; flex-direction: column; gap: 12px; }
.field { display: flex; flex-direction: column; gap: 4px; }
.label { font-size: 0.75rem; font-weight: 500; color: var(--secondary-foreground, #6a6373); }
.input { height: 36px; width: 100%; border-radius: 8px; border: 1px solid var(--border, #ebe9e8);
  background: var(--background, #fff); padding: 0 12px; font-size: 0.875rem; color: var(--foreground, #2e2b2b);
  outline: none; transition: border-color 0.15s, box-shadow 0.15s; box-sizing: border-box; }
.input:focus { border-color: var(--ring, #ed7855); box-shadow: 0 0 0 2px color-mix(in srgb, var(--ring, #ed7855) 30%, transparent); }
.grid { display: flex; gap: 12px; }
.grid > .field { flex: 1; }
</style>
