<script setup lang="ts">
const items = [
  { id: "#1042", date: "April 3, 2026", amount: "$240.00" },
  { id: "#1043", date: "April 7, 2026", amount: "$120.00" },
  { id: "#1044", date: "April 10, 2026", amount: "$360.00" },
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
      v-for="(item, index) in items"
      :key="item.id"
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
        >
          Invoice {{ item.id }}
        </p>
        <p
          :style="{
            fontSize: '12px',
            color: 'var(--muted-foreground, #7a7272)',
            margin: 0,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }"
        >
          Sent on {{ item.date }} · {{ item.amount }}
        </p>
      </div>
    </li>
  </ul>
</template>

<style scoped>
</style>
