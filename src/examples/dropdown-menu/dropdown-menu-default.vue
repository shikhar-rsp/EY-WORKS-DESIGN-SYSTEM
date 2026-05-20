<script setup lang="ts">
import { ref, nextTick } from 'vue'

const open = ref(false)
const pos = ref({ top: 0, left: 0 })
const triggerRef = ref<HTMLButtonElement | null>(null)

const toggle = async () => {
  if (!open.value && triggerRef.value) {
    const r = triggerRef.value.getBoundingClientRect()
    pos.value = { top: r.bottom + 4, left: r.left }
  }
  open.value = !open.value
}

const close = () => { open.value = false }
</script>

<template>
  <div :style="{ display: 'inline-block', position: 'relative' }">
    <button
      ref="triggerRef"
      :aria-expanded="open"
      aria-haspopup="menu"
      @click="toggle"
      :style="{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        height: '36px', padding: '0 16px', background: 'var(--background)',
        color: 'var(--primary)', border: '1px solid var(--border)',
        borderRadius: 'var(--radius-medium)', fontFamily: 'var(--font-lexend)',
        fontSize: '14px', fontWeight: 500, cursor: 'pointer',
      }"
    >
      Open Menu
    </button>

    <Teleport to="body">
      <template v-if="open">
        <div @mousedown.self="close" :style="{ position: 'fixed', inset: 0, zIndex: 49 }" />
        <div
          role="menu"
          :style="{
            position: 'fixed', top: pos.top + 'px', left: pos.left + 'px', zIndex: 50,
            minWidth: '128px', borderRadius: 'var(--radius-large)',
            border: '1px solid var(--border)', background: 'var(--background)',
            padding: '4px', boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
            fontFamily: 'var(--font-lexend)',
          }"
        >
          <div :style="{ padding: '6px 12px', fontSize: '12px', fontWeight: 600, color: 'var(--muted-foreground)' }">My Account</div>
          <hr :style="{ margin: '4px -4px', borderTop: '1px solid var(--border)' }" />
          <button
            v-for="item in [{ label: 'Profile', shortcut: '⇧⌘P' }, { label: 'Settings', shortcut: '⌘S' }]"
            :key="item.label"
            role="menuitem"
            @click="close"
            :style="{
              display: 'flex', alignItems: 'center', width: '100%', padding: '6px 12px',
              fontSize: '14px', color: 'var(--foreground)', borderRadius: '4px',
              border: 'none', background: 'transparent', cursor: 'pointer', fontFamily: 'inherit',
            }"
            @mouseenter="($el as HTMLElement).style.background = 'var(--muted)'"
            @mouseleave="($el as HTMLElement).style.background = 'transparent'"
          >
            {{ item.label }}
            <span :style="{ marginLeft: 'auto', fontSize: '12px', color: 'var(--muted-foreground)' }">{{ item.shortcut }}</span>
          </button>
          <hr :style="{ margin: '4px -4px', borderTop: '1px solid var(--border)' }" />
          <button
            role="menuitem"
            @click="close"
            :style="{
              display: 'flex', alignItems: 'center', width: '100%', padding: '6px 12px',
              fontSize: '14px', color: 'var(--destructive)', borderRadius: '4px',
              border: 'none', background: 'transparent', cursor: 'pointer', fontFamily: 'inherit',
            }"
            @mouseenter="($el as HTMLElement).style.background = 'var(--destructive-subtle)'"
            @mouseleave="($el as HTMLElement).style.background = 'transparent'"
          >
            Log out
            <span :style="{ marginLeft: 'auto', fontSize: '12px', color: 'var(--muted-foreground)' }">⇧⌘Q</span>
          </button>
        </div>
      </template>
    </Teleport>
  </div>
</template>
