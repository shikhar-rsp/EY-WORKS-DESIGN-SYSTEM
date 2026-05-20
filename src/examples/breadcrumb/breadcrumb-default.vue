<script setup lang="ts">
</script>

<template>
  <nav aria-label="breadcrumb">
    <ol :style="{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '4px', padding: 0, margin: 0, listStyle: 'none', fontFamily: 'var(--font-lexend), sans-serif', fontSize: '14px' }">
      <li :style="{ display: 'inline-flex', alignItems: 'center' }">
        <a href="/" :style="{ color: 'var(--muted-foreground)', textDecoration: 'none' }">Home</a>
      </li>
      <li aria-hidden="true" :style="{ display: 'flex', alignItems: 'center', color: 'var(--muted-foreground)', fontSize: '12px' }">›</li>
      <li :style="{ display: 'inline-flex', alignItems: 'center' }">
        <a href="/components" :style="{ color: 'var(--muted-foreground)', textDecoration: 'none' }">Components</a>
      </li>
      <li aria-hidden="true" :style="{ display: 'flex', alignItems: 'center', color: 'var(--muted-foreground)', fontSize: '12px' }">›</li>
      <li :style="{ display: 'inline-flex', alignItems: 'center' }">
        <span aria-current="page" :style="{ color: 'var(--foreground)', fontWeight: 500 }">Breadcrumb</span>
      </li>
    </ol>
  </nav>
</template>
