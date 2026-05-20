<script setup lang="ts">
import { ref } from 'vue'

const activePage = ref(2)
</script>

<template>
  <nav role="navigation" aria-label="pagination" :style="{ display: 'flex', justifyContent: 'center', width: '100%' }">
    <ul :style="{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 'var(--space-050)', listStyle: 'none', padding: '0', margin: '0' }">
      <li>
        <a href="#" aria-label="Go to previous page"
          :style="{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-075)', height: '36px', padding: '0 var(--space-150)', minWidth: '36px', borderRadius: 'var(--radius-medium)', border: '1px solid transparent', background: 'transparent', fontFamily: 'var(--font-lexend, sans-serif)', fontSize: '14px', fontWeight: '500', color: 'var(--foreground)', textDecoration: 'none', cursor: 'pointer' }"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 3.5C10 3.5 6 6.446 6 7.5C6 8.554 10 11.5 10 11.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Previous
        </a>
      </li>
      <li v-for="page in [1, 2, 3]" :key="page">
        <a href="#"
          :aria-current="activePage === page ? 'page' : undefined"
          @click.prevent="activePage = page"
          :style="{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            height: '36px', width: '36px',
            borderRadius: 'var(--radius-medium)',
            border: activePage === page ? '1px solid var(--border)' : '1px solid transparent',
            background: activePage === page ? 'var(--background)' : 'transparent',
            fontFamily: 'var(--font-lexend, sans-serif)', fontSize: '14px', fontWeight: '500',
            color: 'var(--foreground)', textDecoration: 'none', cursor: 'pointer',
          }"
        >{{ page }}</a>
      </li>
      <li>
        <span aria-hidden="true" :style="{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: '36px', width: '36px', color: 'var(--muted-foreground)' }">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="3" cy="8" r="1.25" fill="currentColor"/>
            <circle cx="8" cy="8" r="1.25" fill="currentColor"/>
            <circle cx="13" cy="8" r="1.25" fill="currentColor"/>
          </svg>
        </span>
      </li>
      <li>
        <a href="#"
          :style="{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: '36px', width: '36px', borderRadius: 'var(--radius-medium)', border: '1px solid transparent', background: 'transparent', fontFamily: 'var(--font-lexend, sans-serif)', fontSize: '14px', fontWeight: '500', color: 'var(--foreground)', textDecoration: 'none', cursor: 'pointer' }"
        >10</a>
      </li>
      <li>
        <a href="#" aria-label="Go to next page"
          :style="{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-075)', height: '36px', padding: '0 var(--space-150)', minWidth: '36px', borderRadius: 'var(--radius-medium)', border: '1px solid transparent', background: 'transparent', fontFamily: 'var(--font-lexend, sans-serif)', fontSize: '14px', fontWeight: '500', color: 'var(--foreground)', textDecoration: 'none', cursor: 'pointer' }"
        >
          Next
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 3.5C6 3.5 10 6.446 10 7.5C10 8.554 6 11.5 6 11.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </li>
    </ul>
  </nav>
</template>
