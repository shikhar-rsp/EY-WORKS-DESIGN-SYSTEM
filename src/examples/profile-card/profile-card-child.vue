<script setup lang="ts">
const schedule = [
  { label: 'Mo', active: true },
  { label: 'Tu', active: false },
  { label: 'We', active: true },
  { label: 'Th', active: false },
  { label: 'Fr', active: true },
  { label: 'Sa', active: true },
]
const tags = ['Uncollectable', 'Late', '+2']
</script>

<template>
  <div :style="{ padding: '24px' }">
    <div :style="{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '244px', borderRadius: '12px', background: 'var(--background, #ffffff)', boxShadow: '0px 8px 16px rgba(0,0,0,0.08)', overflow: 'hidden' }">
      <!-- Cover -->
      <div :style="{ position: 'relative', height: '128px', width: '100%', flexShrink: '0' }">
        <div :style="{ position: 'absolute', left: '50%', top: '50%', width: '236px', height: '120px', transform: 'translate(-50%, -50%)', borderRadius: 'var(--radius-medium, 8px)', overflow: 'hidden' }">
          <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=300&h=200&fit=crop" alt="Mark Zuckerberg Carter" :style="{ position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover' }" />
        </div>
        <div :style="{ position: 'absolute', left: '50%', top: '50%', width: '220px', height: '112px', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }">
          <div :style="{ display: 'flex', height: '32px', width: '100%', alignItems: 'flex-start' }">
            <div role="checkbox" aria-checked="false" tabindex="0" :style="{ width: '16px', height: '16px', borderRadius: 'var(--radius-small, 4px)', border: '1.5px solid var(--border, #ebe9e8)', background: 'var(--background, #ffffff)', cursor: 'pointer' }"></div>
          </div>
          <div :style="{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between' }">
            <!-- Status badges -->
            <div :style="{ display: 'flex', alignItems: 'center', gap: '4px' }">
              <div :style="{ display: 'flex', width: '24px', height: '24px', alignItems: 'center', justifyContent: 'center', borderRadius: 'var(--radius-small, 4px)', border: '1px solid var(--destructive, #cc0000)', background: 'var(--background, #ffffff)' }">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" :style="{ color: 'var(--destructive, #cc0000)' }"><path d="M12 2L22 20H2L12 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 9V13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 17H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </div>
              <div :style="{ display: 'flex', width: '24px', height: '24px', alignItems: 'center', justifyContent: 'center', borderRadius: 'var(--radius-small, 4px)', border: '1px solid var(--accent-green-bold, #229666)', background: 'var(--background, #ffffff)' }">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" :style="{ color: 'var(--accent-green-bold, #229666)' }"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 12L10.5 14.5L16 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </div>
              <div :style="{ display: 'flex', width: '24px', height: '24px', alignItems: 'center', justifyContent: 'center', borderRadius: 'var(--radius-small, 4px)', border: '1px solid var(--border-hover, #c2bcbb)', background: 'var(--background, #ffffff)' }">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" :style="{ color: 'var(--accent-gray, #999898)' }"><path d="M2 2L22 22M4.5 4.5C3.2 6 2 8 2 10C2 12.5 3 14.5 4.5 16C6 17.5 8 18.5 10 18.5C12 18.5 14 17.5 15.5 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
              </div>
            </div>
            <!-- Funding -->
            <div :style="{ display: 'flex', height: '24px', alignItems: 'center', gap: '4px', borderRadius: 'var(--radius-small, 4px)', background: 'var(--accent-lime, #ecfccb)', padding: '0 4px' }">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" :style="{ color: 'var(--success, #65a30d)' }"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/><path d="M12 6V18M9 9H13.5C14.33 9 15 9.67 15 10.5V10.5C15 11.33 14.33 12 13.5 12H10.5C9.67 12 9 12.67 9 13.5V13.5C9 14.33 9.67 15 10.5 15H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
              <span :style="{ fontFamily: '\'Lexend\', sans-serif', fontSize: '12px', fontWeight: 400, lineHeight: '16px', color: 'var(--accent-lime-foreground, #3f6212)', whiteSpace: 'nowrap' }">3M Funded</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Details -->
      <div :style="{ display: 'flex', width: '100%', flexDirection: 'column', gap: '8px', padding: '0 8px 12px' }">
        <span :style="{ fontFamily: '\'Lexend\', sans-serif', fontSize: '15px', fontWeight: 600, lineHeight: '22px', color: 'var(--foreground, #2e2b2b)' }">Mark Zuckerberg Carter</span>
        <div :style="{ display: 'flex', flexDirection: 'column', gap: '4px' }">
          <div :style="{ display: 'flex', alignItems: 'center', gap: '4px' }">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" :style="{ flexShrink: '0', color: 'var(--subtlest, #ada5a5)' }"><path d="M3 10.5V19C3 20.1046 3.89543 21 5 21H9V16H15V21H19C20.1046 21 21 20.1046 21 19V10.5L12 3L3 10.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <span :style="{ fontFamily: '\'Lexend\', sans-serif', fontSize: '12px', fontWeight: 400, lineHeight: '16px', color: 'var(--subtlest, #ada5a5)' }">Crazy Critters (3-5 Years)</span>
          </div>
          <div :style="{ display: 'flex', alignItems: 'center', gap: '4px' }">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" :style="{ flexShrink: '0', color: 'var(--subtlest, #ada5a5)' }"><rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M8 2V6M16 2V6M3 10H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            <span :style="{ fontFamily: '\'Lexend\', sans-serif', fontSize: '12px', fontWeight: 400, lineHeight: '16px', color: 'var(--subtlest, #ada5a5)' }">BRX4ABRX4ABRX4A</span>
          </div>
          <div :style="{ display: 'flex', alignItems: 'center', gap: '12px' }">
            <div :style="{ display: 'flex', alignItems: 'center', gap: '4px' }">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" :style="{ flexShrink: '0', color: 'var(--subtlest, #ada5a5)' }"><path d="M16 11C16 13.2091 14.2091 15 12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11Z" stroke="currentColor" stroke-width="1.5"/><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
              <span :style="{ fontFamily: '\'Lexend\', sans-serif', fontSize: '12px', color: 'var(--subtlest, #ada5a5)' }">Sarah Thomas</span>
            </div>
            <span :style="{ fontFamily: '\'Lexend\', sans-serif', fontSize: '15px', fontWeight: 600, color: 'var(--muted-foreground, #7a7272)' }">·</span>
            <div :style="{ display: 'flex', alignItems: 'center', gap: '4px' }">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" :style="{ flexShrink: '0', color: 'var(--subtlest, #ada5a5)' }"><path d="M12 2C9 2 7 4 7 7C7 10 9 12 12 12C15 12 17 10 17 7C17 4 15 2 12 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 22C3 17.5817 7.02944 14 12 14C16.9706 14 21 17.5817 21 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
              <span :style="{ fontFamily: '\'Lexend\', sans-serif', fontSize: '12px', color: 'var(--subtlest, #ada5a5)' }">5Y 11M</span>
            </div>
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
          >
            {{ day.label }}
          </span>
        </div>

        <!-- Tags -->
        <div :style="{ display: 'flex', flexWrap: 'wrap', gap: '4px 8px' }">
          <span
            v-for="tag in tags"
            :key="tag"
            :style="{ display: 'inline-flex', alignItems: 'center', padding: '2px 8px', borderRadius: 'var(--radius-full, 99px)', background: 'var(--muted, #fafafa)', fontFamily: '\'Lexend\', sans-serif', fontSize: '12px', fontWeight: 400, color: 'var(--muted-foreground, #7a7272)' }"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
