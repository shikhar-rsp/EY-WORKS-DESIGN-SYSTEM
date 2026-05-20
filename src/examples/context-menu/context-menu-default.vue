<script setup lang="ts">
import { ref } from 'vue'

const open = ref(false)
const pos = ref({ x: 0, y: 0 })

const onContextMenu = (e: MouseEvent) => {
  e.preventDefault()
  pos.value = {
    x: Math.min(e.clientX, window.innerWidth - 180),
    y: Math.min(e.clientY, window.innerHeight - 200),
  }
  open.value = true
}

const close = () => { open.value = false }
</script>

<template>
  <div>
    <div
      @contextmenu="onContextMenu"
      :style="{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        height: '128px', width: '256px', borderRadius: 'var(--radius-large)',
        border: '1px dashed var(--border)', fontSize: '14px',
        color: 'var(--muted-foreground)', cursor: 'context-menu',
        fontFamily: 'var(--font-lexend)',
      }"
    >
      Right-click here
    </div>

    <Teleport to="body">
      <template v-if="open">
        <div @mousedown.self="close" :style="{ position: 'fixed', inset: 0, zIndex: 49 }" />
        <div
          role="menu"
          :style="{
            position: 'fixed', top: pos.y + 'px', left: pos.x + 'px', zIndex: 50,
            minWidth: '160px', borderRadius: 'var(--radius-large)',
            border: '1px solid var(--border)', background: 'var(--background)',
            padding: '4px', boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
            fontFamily: 'var(--font-lexend)',
          }"
        >
          <div :style="{ padding: '6px 12px', fontSize: '12px', fontWeight: 600, color: 'var(--muted-foreground)' }">Actions</div>
          <hr :style="{ margin: '4px -4px', borderTop: '1px solid var(--border)' }" />
          <button
            v-for="item in [{ label: 'Back', shortcut: '⌘[' }, { label: 'Forward', shortcut: '⌘]' }, { label: 'Reload', shortcut: '⌘R' }]"
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
            Delete
          </button>
        </div>
      </template>
    </Teleport>
  </div>
</template>
