import type { Metadata } from "next";

import { CarouselDefault } from "@/examples/carousel/carousel-default";
import { CarouselMultiple } from "@/examples/carousel/carousel-multiple";
import { CarouselLoop } from "@/examples/carousel/carousel-loop";
import { CarouselVertical } from "@/examples/carousel/carousel-vertical";
import { CarouselWithApi } from "@/examples/carousel/carousel-with-api";
import { CarouselDetail } from "@/components/docs/CarouselDetail";
import { CodeBlock } from "@/components/fragments/typography/CodeBlock";
import { BrandPreviewToolbar } from "@/components/sections/interactive/BrandPreviewToolbar";
import { ComponentPreview } from "@/components/sections/interactive/ComponentPreview";

export const metadata: Metadata = {
  title: "Carousel | Design System",
  description: "Accessible slide carousel with keyboard navigation, loop support, and horizontal/vertical orientation.",
};

const INSTALL_CODE = `cp src/components/figma/Carousel.tsx your-project/components/Carousel.tsx`;
const USAGE_IMPORT = `import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/figma/Carousel"`;
const USAGE_CODE = `<Carousel opts={{ loop: true }}>
  <CarouselContent>
    {items.map((item) => (
      <CarouselItem key={item.id}>
        <img src={item.src} alt={item.alt} className="w-full rounded-large" />
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`;

const CarouselPage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      <div className="mb-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Carousel</h1>
      </div>
      <p className="leading-7 text-secondary-foreground">
        A slide-based carousel built on CSS transforms with no external dependencies. Supports horizontal and vertical orientations, infinite loop mode, keyboard arrow-key navigation, and a <code className="rounded bg-muted px-1 py-0.5 text-xs">setApi</code> callback for programmatic control.
      </p>

      <BrandPreviewToolbar />

      <h2 id="examples" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Examples</h2>
      <h3 id="default" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Default</h3>
      <div className="mt-3"><ComponentPreview name="carousel/carousel-default"><CarouselDefault /></ComponentPreview></div>

      <h3 id="multiple" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Multiple Items</h3>
      <div className="mt-3"><ComponentPreview name="carousel/carousel-multiple"><CarouselMultiple /></ComponentPreview></div>

      <h3 id="loop" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Loop</h3>
      <div className="mt-3"><ComponentPreview name="carousel/carousel-loop"><CarouselLoop /></ComponentPreview></div>

      <h3 id="vertical" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Vertical</h3>
      <div className="mt-3"><ComponentPreview name="carousel/carousel-vertical"><CarouselVertical /></ComponentPreview></div>

      <h3 id="with-api" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">With API</h3>
      <div className="mt-3"><ComponentPreview name="carousel/carousel-with-api"><CarouselWithApi /></ComponentPreview></div>

      <h2 id="detail" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Detail</h2>
      <CarouselDetail />

      <h2 id="installation" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Installation</h2>
      <div className="mt-4"><CodeBlock code={INSTALL_CODE} /></div>

      <h2 id="usage" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Usage</h2>
      <div className="mt-4 space-y-3"><CodeBlock code={USAGE_IMPORT} /><CodeBlock code={USAGE_CODE} /></div>

      <h2 id="api-reference" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">API Reference</h2>

      <h3 id="api-carousel" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Carousel</h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted"><th className="px-4 py-3 font-semibold text-foreground">Prop</th><th className="px-4 py-3 font-semibold text-foreground">Type</th><th className="px-4 py-3 font-semibold text-foreground">Default</th></tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">orientation</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;horizontal&quot; | &quot;vertical&quot;</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;horizontal&quot;</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">opts</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">{"{ loop?: boolean; align?: \"start\" | \"center\" | \"end\" }"}</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">loop</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">setApi</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">(api: CarouselApi) =&gt; void</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">className</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
          </tbody>
        </table>
      </div>

      <h3 id="api-carousel-content" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">CarouselContent</h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted"><th className="px-4 py-3 font-semibold text-foreground">Prop</th><th className="px-4 py-3 font-semibold text-foreground">Type</th><th className="px-4 py-3 font-semibold text-foreground">Default</th></tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">className</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
          </tbody>
        </table>
      </div>

      <h3 id="api-carousel-item" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">CarouselItem</h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted"><th className="px-4 py-3 font-semibold text-foreground">Prop</th><th className="px-4 py-3 font-semibold text-foreground">Type</th><th className="px-4 py-3 font-semibold text-foreground">Default</th></tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">className</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
          </tbody>
        </table>
      </div>

      <h3 id="api-carousel-api-type" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">CarouselApi</h3>
      <p className="mt-2 text-sm text-secondary-foreground">
        Instance received by the <code className="rounded bg-muted px-1 py-0.5 text-xs font-mono">setApi</code> callback. Use it for programmatic control and state reading.
      </p>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted"><th className="px-4 py-3 font-semibold text-foreground">Member</th><th className="px-4 py-3 font-semibold text-foreground">Type</th><th className="px-4 py-3 font-semibold text-foreground">Default</th></tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">scrollPrev</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">() =&gt; void</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">scrollNext</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">() =&gt; void</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">scrollTo</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">(index: number) =&gt; void</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">canScrollPrev</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">() =&gt; boolean</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">canScrollNext</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">() =&gt; boolean</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">selectedScrollSnap</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">() =&gt; number</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">scrollSnapList</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">() =&gt; number[]</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">on</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">(event: &quot;select&quot; | &quot;reInit&quot;, handler: () =&gt; void) =&gt; void</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">off</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">(event: &quot;select&quot; | &quot;reInit&quot;, handler: () =&gt; void) =&gt; void</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CarouselPage;
