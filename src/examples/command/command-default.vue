<script setup lang="ts">
import { ref, computed } from 'vue'

const search = ref('')
const selected = ref('')

const items = [
  { value: 'calendar', label: 'Calendar', group: 'Suggestions', keywords: 'schedule date' },
  { value: 'search', label: 'Search', group: 'Suggestions', keywords: 'find lookup' },
  { value: 'profile', label: 'Profile', shortcut: '⌘P', group: 'Settings', keywords: 'account user' },
  { value: 'billing', label: 'Billing', shortcut: '⌘B', group: 'Settings', keywords: 'payment subscription' },
  { value: 'settings', label: 'Settings', shortcut: '⌘S', group: 'Settings', keywords: 'preferences config' },
]

const filtered = computed(() =>
  items.filter(item => {
    if (!search.value) return true
    const hay = (item.value + ' ' + item.keywords).toLowerCase()
    return hay.includes(search.value.toLowerCase())
  })
)

const groups = computed(() => {
  const map = new Map<string, typeof items>()
  filtered.value.forEach(item => {
    if (!map.has(item.group)) map.set(item.group, [])
    map.get(item.group)!.push(item)
  })
  return map
})
</script>

<template>
  <div
    role="combobox"
    aria-expanded="true"
    aria-haspopup="listbox"
    :style="{
      display: 'flex', flexDirection: 'column', overflow: 'hidden',
      borderRadius: 'var(--radius-large)', border: '1px solid var(--border)',
      background: 'var(--background)', width: '320px',
      boxShadow: '0 4px 16px rgba(0,0,0,0.1)', fontFamily: 'var(--font-lexend)',
    }"
  >
    <!-- Input -->
    <div :style="{ display: 'flex', alignItems: 'center', borderBottom: '1px solid var(--border)', padding: '0 12px' }">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :style="{ color: 'var(--muted-foreground)', flexShrink: 0, marginRight: '6px' }"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
      <input
        v-model="search"
        type="text"
        placeholder="Type a command or search…"
        role="searchbox"
        aria-label="Search"
        :style="{
          flex: 1, height: '40px', background: 'transparent', border: 'none', outline: 'none',
          fontSize: '14px', color: 'var(--foreground)', fontFamily: 'inherit',
        }"
      />
    </div>

    <!-- List -->
    <div role="listbox" :style="{ maxHeight: '300px', overflowY: 'auto', padding: '4px' }">
      <template v-if="filtered.length > 0">
        <template v-for="[groupName, groupItems] in groups" :key="groupName">
          <div role="group" :style="{ overflow: 'hidden', padding: '4px' }">
            <div :style="{ padding: '6px 12px', fontSize: '12px', fontWeight: 600, color: 'var(--muted-foreground)' }">
              {{ groupName }}
            </div>
            <button
              v-for="item in groupItems"
              :key="item.value"
              role="option"
              :aria-selected="selected === item.value"
              @click="selected = item.value"
              :style="{
                display: 'flex', alignItems: 'center', width: '100%', padding: '6px 12px',
                fontSize: '14px', color: 'var(--foreground)', borderRadius: '4px',
                border: 'none', background: selected === item.value ? 'var(--muted)' : 'transparent',
                cursor: 'pointer', fontFamily: 'inherit', gap: '12px',
              }"
              @mouseenter="($el as HTMLElement).style.background = 'var(--muted)'"
              @mouseleave="($el as HTMLElement).style.background = selected === item.value ? 'var(--muted)' : 'transparent'"
            >
              {{ item.label }}
              <span v-if="item.shortcut" :style="{ marginLeft: 'auto', fontSize: '12px', color: 'var(--muted-foreground)' }">{{ item.shortcut }}</span>
            </button>
          </div>
        </template>
      </template>
      <div v-else :style="{ padding: '24px', textAlign: 'center', fontSize: '14px', color: 'var(--muted-foreground)' }">
        No results found.
      </div>
    </div>
  </div>
</template>
