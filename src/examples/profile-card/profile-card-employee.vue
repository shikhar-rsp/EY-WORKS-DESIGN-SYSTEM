<script setup lang="ts">
const schedule = [
  { label: 'Mo', active: true },
  { label: 'Tu', active: false },
  { label: 'We', active: true },
  { label: 'Th', active: false },
  { label: 'Fr', active: true },
  { label: 'Sa', active: true },
]
const tags = ['Excluded from Ratio', '+4h']
</script>

<template>
  <div :style="{ padding: '24px' }">
    <div :style="{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '244px', borderRadius: '12px', background: 'var(--background, #ffffff)', boxShadow: '0px 8px 16px rgba(0,0,0,0.08)', overflow: 'hidden' }">
      <!-- Cover -->
      <div :style="{ position: 'relative', height: '128px', width: '100%', flexShrink: '0' }">
        <div :style="{ position: 'absolute', left: '50%', top: '50%', width: '236px', height: '120px', transform: 'translate(-50%, -50%)', borderRadius: 'var(--radius-medium, 8px)', overflow: 'hidden' }">
          <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=300&h=200&fit=crop" alt="Peter Harris" :style="{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover' }" />
        </div>
        <div :style="{ position: 'absolute', left: '50%', top: '50%', width: '220px', height: '112px', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }">
          <div :style="{ display: 'flex', height: '32px', width: '100%', alignItems: 'flex-start' }">
            <div role="checkbox" aria-checked="false" tabindex="0" :style="{ width: '16px', height: '16px', borderRadius: 'var(--radius-small, 4px)', border: '1.5px solid var(--border, #ebe9e8)', background: 'var(--background, #ffffff)', cursor: 'pointer' }"></div>
          </div>
          <div :style="{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'flex-end' }">
            <div :style="{ display: 'flex', height: '24px', alignItems: 'center', gap: '4px', borderRadius: 'var(--radius-small, 4px)', background: 'var(--accent-lime, #ecfccb)', padding: '0 4px' }">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" :style="{ color: 'var(--success, #65a30d)' }"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/><path d="M12 6V18M9 9H13.5C14.33 9 15 9.67 15 10.5V10.5C15 11.33 14.33 12 13.5 12H10.5C9.67 12 9 12.67 9 13.5V13.5C9 14.33 9.67 15 10.5 15H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
              <span :style="{ fontFamily: '\'Lexend\', sans-serif', fontSize: '12px', fontWeight: 400, lineHeight: '16px', color: 'var(--accent-lime-foreground, #3f6212)', whiteSpace: 'nowrap' }">3M Funded</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Details -->
      <div :style="{ display: 'flex', width: '100%', flexDirection: 'column', gap: '8px', padding: '0 8px 12px' }">
        <span :style="{ fontFamily: '\'Lexend\', sans-serif', fontSize: '15px', fontWeight: 600, lineHeight: '22px', color: 'var(--foreground, #2e2b2b)' }">Peter Harris</span>
        <div :style="{ display: 'flex', flexDirection: 'column', gap: '4px' }">
          <div :style="{ display: 'flex', alignItems: 'center', gap: '4px' }">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" :style="{ flexShrink: '0', color: 'var(--subtlest, #ada5a5)' }"><path d="M3 10.5V19C3 20.1046 3.89543 21 5 21H9V16H15V21H19C20.1046 21 21 20.1046 21 19V10.5L12 3L3 10.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <span :style="{ fontFamily: '\'Lexend\', sans-serif', fontSize: '12px', color: 'var(--subtlest, #ada5a5)' }">Crazy Critters (3-5 Years)</span>
          </div>
          <div :style="{ display: 'flex', alignItems: 'center', gap: '4px' }">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" :style="{ flexShrink: '0', color: 'var(--subtlest, #ada5a5)' }"><rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M8 2V6M16 2V6M3 10H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            <span :style="{ fontFamily: '\'Lexend\', sans-serif', fontSize: '12px', color: 'var(--subtlest, #ada5a5)' }">BRX4ABRX4ABRX4A</span>
          </div>
          <div :style="{ display: 'flex', alignItems: 'center', gap: '4px' }">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" :style="{ flexShrink: '0', color: 'var(--subtlest, #ada5a5)' }"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="1.5"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <span :style="{ fontFamily: '\'Lexend\', sans-serif', fontSize: '12px', color: 'var(--subtlest, #ada5a5)' }">Level 3 Practitioner</span>
          </div>
        </div>

        <!-- Schedule -->
        <div :style="{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between' }">
          <span
            v-for="day in schedule"
            :key="day.label"
            :style="{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '2px 6px', borderRadius: 'var(--radius-small, 4px)',
              fontFamily: '\'Lexend\', sans-serif', fontSize: '11px', fontWeight: 500,
              background: day.active ? 'var(--accent-blue, #d7e8ff)' : 'var(--accent-gray-subtler, #f4f4f4)',
              color: day.active ? 'var(--info, #2d70cf)' : 'var(--muted-foreground, #7a7272)',
            }"
          >{{ day.label }}</span>
        </div>

        <!-- Tags -->
        <div :style="{ display: 'flex', flexWrap: 'wrap', gap: '4px 8px' }">
          <span
            v-for="tag in tags"
            :key="tag"
            :style="{ display: 'inline-flex', alignItems: 'center', padding: '2px 8px', borderRadius: 'var(--radius-full, 99px)', background: 'var(--muted, #fafafa)', fontFamily: '\'Lexend\', sans-serif', fontSize: '12px', fontWeight: 400, color: 'var(--muted-foreground, #7a7272)' }"
          >{{ tag }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
