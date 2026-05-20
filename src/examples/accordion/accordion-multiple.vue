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
    trigger: 'Can I open multiple at once?',
    content: 'Yes. Use type="multiple" to allow multiple items to be open simultaneously.',
  },
  {
    value: 'item-2',
    trigger: 'Does it support default open items?',
    content: 'Yes. Pass an array to defaultValue to set which items are open by default.',
  },
  {
    value: 'item-3',
    trigger: 'Is the state controlled or uncontrolled?',
    content: 'Both. Use defaultValue for uncontrolled, or value + onValueChange for controlled state.',
  },
]

const openValues = ref<Set<string>>(new Set(['item-1']))

const toggle = (value: string) => {
  const next = new Set(openValues.value)
  if (next.has(value)) {
    next.delete(value)
  } else {
    next.add(value)
  }
  openValues.value = next
}
</script>

<template>
  <div style="width: 100%; max-width: 448px; padding: 24px;">
    <div style="width: 100%;">
      <div
        v-for="(item, index) in items"
        :key="item.value"
        :data-state="openValues.has(item.value) ? 'open' : 'closed'"
        :style="{
          borderBottom: index < items.length - 1 ? '1px solid var(--border)' : 'none',
        }"
      >
        <h3 style="display: flex; margin: 0;">
          <button
            type="button"
            :aria-expanded="openValues.has(item.value)"
            :data-state="openValues.has(item.value) ? 'open' : 'closed'"
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
              :style="{
                color: 'var(--foreground)',
                flexShrink: 0,
                transition: 'transform 0.2s',
                transform: openValues.has(item.value) ? 'rotate(180deg)' : 'rotate(0deg)',
              }"
            >
              <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </h3>
        <div
          :style="{
            display: 'grid',
            gridTemplateRows: openValues.has(item.value) ? '1fr' : '0fr',
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
