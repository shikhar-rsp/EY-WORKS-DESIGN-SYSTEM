import type { Metadata } from "next";

import { CodeBlock } from "@/components/fragments/typography/CodeBlock";
import { BrandPreviewToolbar } from "@/components/sections/interactive/BrandPreviewToolbar";
import { ComponentPreview } from "@/components/sections/interactive/ComponentPreview";
import { InputNumberDetail } from "@/components/docs/InputNumberDetail";
import { InputNumberDefault } from "@/examples/input-number/input-number-default";
import { InputNumberControlled } from "@/examples/input-number/input-number-controlled";
import { InputNumberDisabled } from "@/examples/input-number/input-number-disabled";

export const metadata: Metadata = {
  title: "Input Number | Design System",
  description:
    "A numeric input with increment and decrement buttons, min/max bounds, and configurable step.",
};

const INSTALL_CODE = `cp src/components/figma/InputNumber.tsx your-project/components/InputNumber.tsx`;

const USAGE_IMPORT = `import {
  InputNumber,
  InputNumberDecrement,
  InputNumberField,
  InputNumberIncrement,
} from "@/components/figma/InputNumber"`;

const USAGE_CODE = `<InputNumber defaultValue={1} min={0} max={100} step={1}>
  <InputNumberDecrement />
  <InputNumberField placeholder="0" />
  <InputNumberIncrement />
</InputNumber>`;

const InputNumberPage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      {/* ── Title ─────────────────────────────────────────────────── */}
      <div className="mb-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Input Number</h1>
      </div>
      <p className="leading-7 text-secondary-foreground">
        A compound numeric input with decrement, field, and increment slots. Supports controlled and
        uncontrolled state, min/max bounds (with automatic button disabling at limits), configurable
        step, keyboard arrow navigation, and a disabled state.
      </p>

      {/* ── Brand Toolbar ─────────────────────────────────────────── */}
      <BrandPreviewToolbar />

      {/* ── Examples ──────────────────────────────────────────────── */}
      <h2
        id="examples"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Examples
      </h2>
      <h3 id="default" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Default
      </h3>
      <div className="mt-3">
        <ComponentPreview name="input-number/input-number-default">
          <InputNumberDefault />
        </ComponentPreview>
      </div>

      <h3 id="controlled" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Controlled
      </h3>
      <div className="mt-3">
        <ComponentPreview name="input-number/input-number-controlled">
          <InputNumberControlled />
        </ComponentPreview>
      </div>

      <h3 id="disabled" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Disabled
      </h3>
      <div className="mt-3">
        <ComponentPreview name="input-number/input-number-disabled">
          <InputNumberDisabled />
        </ComponentPreview>
      </div>

      {/* ── Detail ────────────────────────────────────────────────── */}
      <h2
        id="detail"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Detail
      </h2>
      <InputNumberDetail />

      {/* ── Installation ──────────────────────────────────────────── */}
      <h2
        id="installation"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Installation
      </h2>
      <p className="mt-3 text-sm text-secondary-foreground">
        Copy the component file into your project.
      </p>
      <div className="mt-3">
        <CodeBlock code={INSTALL_CODE} />
      </div>

      {/* ── Usage ─────────────────────────────────────────────────── */}
      <h2
        id="usage"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Usage
      </h2>
      <div className="mt-3 space-y-3">
        <CodeBlock code={USAGE_IMPORT} />
        <CodeBlock code={USAGE_CODE} />
      </div>

      {/* ── API Reference ─────────────────────────────────────────── */}
      <h2
        id="api-reference"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        API Reference
      </h2>

      <h3 id="api-input-number" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        InputNumber
      </h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-muted">
              <th className="px-4 py-3 font-semibold text-foreground">Prop</th>
              <th className="px-4 py-3 font-semibold text-foreground">Type</th>
              <th className="px-4 py-3 font-semibold text-foreground">Default</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr>
              <td className="px-4 py-3 font-mono text-xs">value</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">number</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">defaultValue</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">number</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">0</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">onValueChange</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">(value: number) =&gt; void</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">min</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">number</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">-Infinity</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">max</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">number</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">Infinity</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">step</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">number</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">1</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">disabled</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">className</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InputNumberPage;
