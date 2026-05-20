<template>
  <div :style="{ display: 'flex', flexWrap: 'wrap', gap: '24px', padding: '24px' }">

    <!-- Default -->
    <div :style="{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }">
      <div
        :style="{
          width: '218px',
          height: '156px',
          borderRadius: '10px',
          overflow: 'hidden',
          padding: '10px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #f8785e 0%, #f472b6 50%, #a78bfa 100%)',
        }"
      >
        <div :style="{ display: 'flex', flexDirection: 'column', gap: '4px' }">
          <span :style="{ color: 'var(--primary-foreground)', fontSize: '18px', letterSpacing: '0.43px', fontFamily: '\'Abel\', var(--font-lexend), sans-serif' }">
            Ellie
          </span>
          <p :style="{ fontFamily: 'var(--font-lexend), sans-serif', fontSize: '20px', fontWeight: 700, lineHeight: '24px', color: 'var(--primary-foreground)', margin: 0 }">
            How can I help you today?
          </p>
        </div>
        <button
          :style="{
            alignSelf: 'flex-start',
            padding: '4px var(--space-200)',
            borderRadius: 'var(--radius-medium)',
            border: 'none',
            background: 'var(--background)',
            color: 'var(--muted-foreground)',
            fontFamily: 'var(--font-lexend), sans-serif',
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: '20px',
            cursor: 'pointer',
          }"
        >
          Button
        </button>
      </div>
      <span :style="{ fontFamily: 'var(--font-lexend), sans-serif', fontSize: '12px', color: 'var(--muted-foreground)' }">Default</span>
    </div>

    <!-- Hovered -->
    <div :style="{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }">
      <div
        :style="{
          width: '218px',
          height: '156px',
          borderRadius: '10px',
          overflow: 'hidden',
          padding: '10px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #f8785e 0%, #f472b6 50%, #a78bfa 100%)',
        }"
      >
        <div :style="{ display: 'flex', flexDirection: 'column', gap: '4px' }">
          <span :style="{ color: 'var(--primary-foreground)', fontSize: '18px', letterSpacing: '0.43px', fontFamily: '\'Abel\', var(--font-lexend), sans-serif' }">
            Ellie
          </span>
          <p :style="{ fontFamily: 'var(--font-lexend), sans-serif', fontSize: '20px', fontWeight: 700, lineHeight: '24px', color: 'var(--primary-foreground)', margin: 0 }">
            How can I help you today?
          </p>
        </div>
        <button
          :style="{
            alignSelf: 'flex-start',
            padding: '4px var(--space-200)',
            borderRadius: 'var(--radius-medium)',
            border: 'none',
            background: 'var(--primary)',
            color: 'var(--primary-foreground)',
            fontFamily: 'var(--font-lexend), sans-serif',
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: '20px',
            cursor: 'pointer',
          }"
        >
          Button
        </button>
      </div>
      <span :style="{ fontFamily: 'var(--font-lexend), sans-serif', fontSize: '12px', color: 'var(--muted-foreground)' }">Hovered</span>
    </div>

  </div>
</template>
