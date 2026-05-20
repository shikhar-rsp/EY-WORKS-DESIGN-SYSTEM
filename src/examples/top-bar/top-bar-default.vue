<template>
  <div
    :style="{
      width: '100%',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-large)',
      overflow: 'hidden',
    }"
  >
    <header
      :style="{
        display: 'flex',
        height: '62px',
        maxHeight: '62px',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 var(--space-200)',
        background: 'var(--background)',
      }"
    >
      <!-- Left: Logo + Workspace + Search -->
      <div :style="{ display: 'flex', flex: 1, minWidth: 0, alignItems: 'center', gap: '16px' }">
        <!-- Logo + Workspace -->
        <div :style="{ display: 'flex', flexShrink: 0, alignItems: 'center', gap: 'var(--space-150)' }">
          <span
            :style="{
              fontFamily: 'var(--font-lexend), sans-serif',
              fontSize: '18px',
              fontWeight: 700,
            }"
          >
            <span :style="{ color: 'var(--primary)' }">ey</span>
            <span :style="{ color: 'var(--foreground)' }">works</span>
          </span>
          <button
            :style="{
              display: 'flex',
              height: '40px',
              alignItems: 'center',
              gap: '4px',
              borderRadius: 'var(--radius-medium)',
              border: '1px solid var(--border)',
              background: 'var(--background)',
              padding: 'var(--space-100) var(--space-150)',
              cursor: 'pointer',
            }"
          >
            <span :style="{ fontFamily: 'var(--font-lexend)', fontSize: '14px', lineHeight: '20px', color: 'var(--foreground)', whiteSpace: 'nowrap' }">
              Thatcham Nurseries
            </span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" :style="{ color: 'var(--foreground)', flexShrink: 0 }">
              <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>

        <!-- Search -->
        <button
          :style="{
            display: 'flex',
            height: '38px',
            flex: 1,
            minWidth: 0,
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: 'var(--radius-medium)',
            border: '1px solid var(--border)',
            background: 'var(--background)',
            padding: 'var(--space-100) var(--space-150)',
            cursor: 'pointer',
          }"
        >
          <span :style="{ fontFamily: 'var(--font-lexend)', fontSize: '14px', lineHeight: '20px', color: 'var(--placeholder)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }">
            Search anything
          </span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" :style="{ color: 'var(--muted-foreground)', flexShrink: 0, marginLeft: '8px' }">
            <path d="M17.5 17.5L22 22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
          </svg>
        </button>
      </div>

      <!-- Right: Settings + Notifications + Avatar -->
      <div :style="{ display: 'flex', flexShrink: 0, alignItems: 'center', gap: '20px', marginLeft: '16px' }">
        <!-- Settings -->
        <button
          :style="{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'var(--radius-medium)', padding: 'var(--space-100) var(--space-050)', background: 'transparent', border: 'none', cursor: 'pointer' }"
          aria-label="Settings"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" :style="{ color: 'var(--muted-foreground)' }">
            <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M2 12h1M21 12h1M12 2v1M12 21v1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
          </svg>
        </button>

        <!-- Notification + badge -->
        <div :style="{ position: 'relative', display: 'flex' }">
          <button
            :style="{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'var(--radius-medium)', padding: 'var(--space-100) var(--space-050)', background: 'transparent', border: 'none', cursor: 'pointer' }"
            aria-label="Notifications"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" :style="{ color: 'var(--muted-foreground)' }">
              <path d="M2.52992 14.394C2.31727 15.7471 3.268 16.6862 4.43205 17.1542C8.89481 18.9486 15.1052 18.9486 19.5679 17.1542C20.732 16.6862 21.6827 15.7471 21.4701 14.394C21.3394 13.5625 20.6932 12.8701 20.2144 12.194C19.5873 11.2975 19.525 10.3197 19.5249 9.27941C19.5249 5.2591 16.1559 2 12 2C7.84413 2 4.47513 5.2591 4.47513 9.27941C4.47503 10.3197 4.41272 11.2975 3.78561 12.194C3.30684 12.8701 2.66061 13.5625 2.52992 14.394Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M9 21C9.79613 21.6219 10.8475 22 12 22C13.1525 22 14.2039 21.6219 15 21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <span
            :style="{
              position: 'absolute',
              top: 0,
              right: '-5px',
              display: 'flex',
              width: '16px',
              height: '16px',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '99px',
              background: 'var(--destructive-bold)',
              fontFamily: 'var(--font-lexend)',
              fontSize: '10px',
              lineHeight: '16px',
              color: 'var(--primary-foreground)',
            }"
          >
            9+
          </span>
        </div>

        <!-- Avatar -->
        <button
          :style="{
            width: '40px',
            height: '40px',
            flexShrink: 0,
            overflow: 'hidden',
            borderRadius: '99px',
            border: '1px solid var(--border)',
            cursor: 'pointer',
            padding: 0,
          }"
          aria-label="User menu"
        >
          <img
            src="https://i.pravatar.cc/40?img=5"
            alt="User avatar"
            :style="{ width: '100%', height: '100%', objectFit: 'cover' }"
          />
        </button>
      </div>
    </header>
  </div>
</template>
