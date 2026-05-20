<script setup lang="ts">
const events = [
  { title: "Component synced from Figma", meta: "Button · 2 minutes ago" },
  { title: "Docs page generated", meta: "List · 10 minutes ago" },
  { title: "Design token updated", meta: "primary · 1 hour ago" },
];
</script>

<template>
  <div
    :style="{
      maxWidth: '448px',
      fontFamily: 'var(--font-lexend, Lexend, sans-serif)',
    }"
  >
    <!-- ListHeader -->
    <div
      :style="{
        padding: '12px 16px',
        fontSize: '14px',
        fontWeight: 600,
        color: 'var(--foreground, #2e2b2b)',
        border: '1px solid var(--border, #ebe9e8)',
        borderBottom: 'none',
        borderRadius: 'var(--radius-large, 16px) var(--radius-large, 16px) 0 0',
        background: 'var(--background, #ffffff)',
      }"
    >
      Recent Activity
    </div>

    <!-- List (bordered) -->
    <ul
      :style="{
        width: '100%',
        listStyle: 'none',
        margin: 0,
        padding: 0,
        border: '1px solid var(--border, #ebe9e8)',
        borderTop: 'none',
        borderBottom: 'none',
      }"
    >
      <li
        v-for="(event, index) in events"
        :key="event.title"
        :style="{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '12px 16px',
          background: 'var(--background, #ffffff)',
          borderTop: index > 0 ? '1px solid var(--border, #ebe9e8)' : 'none',
        }"
      >
        <div
          :style="{
            minWidth: 0,
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '2px',
          }"
        >
          <p
            :style="{
              fontSize: '14px',
              fontWeight: 500,
              color: 'var(--foreground, #2e2b2b)',
              margin: 0,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }"
          >{{ event.title }}</p>
          <p
            :style="{
              fontSize: '12px',
              color: 'var(--muted-foreground, #7a7272)',
              margin: 0,
            }"
          >{{ event.meta }}</p>
        </div>
      </li>
    </ul>

    <!-- ListFooter -->
    <div
      :style="{
        padding: '12px 16px',
        fontSize: '12px',
        color: 'var(--muted-foreground, #7a7272)',
        border: '1px solid var(--border, #ebe9e8)',
        borderTop: 'none',
        borderRadius: '0 0 var(--radius-large, 16px) var(--radius-large, 16px)',
        background: 'var(--background, #ffffff)',
      }"
    >
      Showing 3 of 24 events
    </div>
  </div>
</template>

<style scoped>
</style>
