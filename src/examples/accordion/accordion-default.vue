<script setup lang="ts">
import { ref } from 'vue'

interface IAccordionItem {
  value: string
  trigger: string
  content: string
}

const items: IAccordionItem[] = [
  {
    value: 'item-1',
    trigger: 'Is it accessible?',
    content: 'Yes. It adheres to the WAI-ARIA design pattern.',
  },
  {
    value: 'item-2',
    trigger: 'Is it styled?',
    content: "Yes. It comes with default styles that match the other components' aesthetic.",
  },
  {
    value: 'item-3',
    trigger: 'Is it animated?',
    content: "Yes. It's animated by default, but you can disable it if you prefer.",
  },
]

const openValue = ref<string>('item-1')

const toggle = (value: string) => {
  openValue.value = openValue.value === value ? '' : value
}
</script>

<template>
  <div style="width: 100%; max-width: 448px; padding: 24px;">
    <div style="width: 100%;">
      <div
        v-for="(item, index) in items"
        :key="item.value"
        :data-state="openValue === item.value ? 'open' : 'closed'"
        :style="{
          borderBottom: index < items.length - 1 ? '1px solid var(--border)' : 'none',
        }"
      >
        <h3 style="display: flex; margin: 0;">
          <button
            type="button"
            :aria-expanded="openValue === item.value"
            :data-state="openValue === item.value ? 'open' : 'closed'"
            @click="toggle(item.value)"
            style="
              display: flex;
              flex: 1;
              align-items: center;
              justify-content: space-between;
              gap: var(--space-200);
              padding: var(--space-200) 0;
              font-family: var(--font-lexend), sans-serif;
              font-size: 14px;
              font-weight: 500;
              color: var(--foreground);
              background: none;
              border: none;
              cursor: pointer;
              text-align: left;
            "
          >
            {{ item.trigger }}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              :style="{
                color: 'var(--foreground)',
                flexShrink: 0,
                transition: 'transform 0.2s',
                transform: openValue === item.value ? 'rotate(180deg)' : 'rotate(0deg)',
              }"
            >
              <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </h3>
        <div
          :style="{
            display: 'grid',
            gridTemplateRows: openValue === item.value ? '1fr' : '0fr',
            transition: 'grid-template-rows 0.2s ease-out',
            fontSize: '14px',
            color: 'var(--secondary-foreground)',
            fontFamily: 'var(--font-lexend), sans-serif',
          }"
        >
          <div style="overflow: hidden;">
            <div style="padding-bottom: var(--space-200);">
              {{ item.content }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
