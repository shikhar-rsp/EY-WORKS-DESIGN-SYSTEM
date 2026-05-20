<script setup lang="ts">
const members = [
  { name: "Jane Doe", role: "Product Designer", color: "var(--primary, #f8785e)" },
  { name: "Marcus Lee", role: "Frontend Engineer", color: "#3bbfb2" },
  { name: "Sofia Reyes", role: "Engineering Manager", color: "#9b87f5" },
];
</script>

<template>
  <ul
    :style="{
      width: '100%',
      maxWidth: '448px',
      fontFamily: 'var(--font-lexend, Lexend, sans-serif)',
      listStyle: 'none',
      margin: 0,
      padding: 0,
    }"
  >
    <li
      v-for="(member, index) in members"
      :key="member.name"
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
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          background: member.color,
          flexShrink: 0,
        }"
      />
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
        >{{ member.name }}</p>
        <p
          :style="{
            fontSize: '12px',
            color: 'var(--muted-foreground, #7a7272)',
            margin: 0,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }"
        >{{ member.role }}</p>
      </div>
      <div :style="{ display: 'flex', flexShrink: 0, alignItems: 'center', gap: '8px' }">
        <button
          :style="{
            padding: '4px 12px',
            fontSize: '12px',
            fontFamily: 'var(--font-lexend, Lexend, sans-serif)',
            fontWeight: 500,
            borderRadius: 'var(--radius-medium, 8px)',
            border: '1px solid var(--border, #ebe9e8)',
            background: 'var(--background, #ffffff)',
            color: 'var(--foreground, #2e2b2b)',
            cursor: 'pointer',
          }"
        >Edit</button>
      </div>
    </li>
  </ul>
</template>

<style scoped>
</style>
