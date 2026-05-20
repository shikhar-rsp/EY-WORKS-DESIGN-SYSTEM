import type { Metadata } from "next";

import { SliderDetail } from "@/components/docs/SliderDetail";
import { CodeBlock } from "@/components/fragments/typography/CodeBlock";
import { BrandPreviewToolbar } from "@/components/sections/interactive/BrandPreviewToolbar";
import { ComponentPreview } from "@/components/sections/interactive/ComponentPreview";
import { SliderDefault } from "@/examples/slider/slider-default";
import { SliderRange } from "@/examples/slider/slider-range";

export const metadata: Metadata = {
  title: "Slider | Design System",
  description: "An input where the user selects a value from a given range.",
};

const INSTALL_CODE = `cp src/components/figma/Slider.tsx your-project/components/Slider.tsx`;
const USAGE_IMPORT = `import { Slider } from "@/components/figma/Slider"`;
const USAGE_CODE = `<Slider defaultValue={[33]} max={100} step={1} />
<Slider value={[20, 80]} onValueChange={setRange} />
<Slider defaultValue={[30]} step={10} min={0} max={100} />
<Slider disabled defaultValue={[60]} />`;

const SliderPage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      <div className="mb-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Slider</h1>
      </div>
      <p className="leading-7 text-secondary-foreground">
        An input where the user selects a value from within a given range. Supports single and multi-thumb (range) modes, stepped increments, horizontal and vertical orientations, and disabled state.
      </p>

      <BrandPreviewToolbar />

      <h2 id="examples" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Examples</h2>

      <h3 id="default" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Default</h3>
      <div className="mt-3">
        <ComponentPreview name="slider/slider-default">
          <SliderDefault />
        </ComponentPreview>
      </div>

      <h3 id="range" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Range</h3>
      <div className="mt-3">
        <ComponentPreview name="slider/slider-range">
          <SliderRange />
        </ComponentPreview>
      </div>

      <h2 id="detail" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Detail</h2>
      <SliderDetail />

      <h2 id="installation" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Installation</h2>
      <div className="mt-4"><CodeBlock code={INSTALL_CODE} /></div>

      <h2 id="usage" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Usage</h2>
      <div className="mt-4 space-y-3">
        <CodeBlock code={USAGE_IMPORT} />
        <CodeBlock code={USAGE_CODE} />
      </div>

      <h2 id="api-reference" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">API Reference</h2>

      <h3 id="api-slider" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Slider</h3>
      <div className="mt-4 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-4 py-3 font-semibold text-foreground">Prop</th>
              <th className="px-4 py-3 font-semibold text-foreground">Type</th>
              <th className="px-4 py-3 font-semibold text-foreground">Default</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">value</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">number[]</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">defaultValue</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">number[]</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">[0]</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">onValueChange</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">(value: number[]) =&gt; void</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">min</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">number</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">0</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">max</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">number</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">100</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">step</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">number</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">1</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">disabled</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">orientation</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;horizontal&quot; | &quot;vertical&quot;</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;horizontal&quot;</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">className</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SliderPage;
