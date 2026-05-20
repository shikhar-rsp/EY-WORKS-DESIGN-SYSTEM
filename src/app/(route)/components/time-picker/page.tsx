import type { Metadata } from "next";

import { CodeBlock } from "@/components/fragments/typography/CodeBlock";
import { ComponentPreview } from "@/components/sections/interactive/ComponentPreview";
import { BrandPreviewToolbar } from "@/components/sections/interactive/BrandPreviewToolbar";
import { TimePickerDetail } from "@/components/docs/TimePickerDetail";
import { TimePickerDefault } from "@/examples/time-picker/time-picker-default";
import { TimePicker12h } from "@/examples/time-picker/time-picker-12h";
import { TimePickerControlled } from "@/examples/time-picker/time-picker-controlled";

export const metadata: Metadata = {
  title: "Time Picker | Design System",
  description:
    "A compound time picker with scrollable hour, minute, second, and period columns. Supports 12h and 24h formats.",
};

const INSTALL_CODE = `cp src/components/figma/TimePicker.tsx your-project/components/TimePicker.tsx`;

const USAGE_IMPORT = `import {
  TimePicker,
  TimePickerTrigger,
  TimePickerValue,
  TimePickerContent,
  TimePickerColumn,
} from "@/components/figma/TimePicker"`;

const USAGE_CODE = `<TimePicker defaultValue="14:30">
  <TimePickerTrigger>
    <TimePickerValue placeholder="Select time" />
  </TimePickerTrigger>
  <TimePickerContent>
    <TimePickerColumn unit="hour" />
    <TimePickerColumn unit="minute" />
  </TimePickerContent>
</TimePicker>`;

const TimePickerPage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      {/* ── Title ─────────────────────────────────────────────────── */}
      <div className="mb-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Time Picker</h1>
      </div>
      <p className="leading-7 text-secondary-foreground">
        A compound time picker that opens a portaled panel with scrollable columns for hours, minutes,
        seconds, and AM/PM. Supports{" "}
        <code className="rounded bg-muted px-1 py-0.5 text-xs">12h</code> and{" "}
        <code className="rounded bg-muted px-1 py-0.5 text-xs">24h</code> formats, optional seconds
        column, controlled and uncontrolled state, and keyboard/click-outside dismissal.
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
        Default (24h)
      </h3>
      <ComponentPreview name="time-picker/time-picker-default">
        <TimePickerDefault />
      </ComponentPreview>

      <h3 id="twelve-hour" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        12-Hour Format
      </h3>
      <ComponentPreview name="time-picker/time-picker-12h">
        <TimePicker12h />
      </ComponentPreview>

      <h3 id="controlled" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        Controlled
      </h3>
      <ComponentPreview name="time-picker/time-picker-controlled">
        <TimePickerControlled />
      </ComponentPreview>

      {/* ── Detail ────────────────────────────────────────────────── */}
      <h2
        id="detail"
        className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground"
      >
        Detail
      </h2>
      <TimePickerDetail />

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

      <h3 id="api-time-picker" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        TimePicker
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
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string — &quot;HH:MM&quot; or &quot;HH:MM:SS&quot;</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">defaultValue</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;00:00&quot;</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">onValueChange</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">(value: string) =&gt; void</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">format</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;12h&quot; | &quot;24h&quot;</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;24h&quot;</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">showSeconds</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">open</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">defaultOpen</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-mono text-xs">onOpenChange</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">(open: boolean) =&gt; void</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 id="api-time-picker-column" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
        TimePickerColumn
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
              <td className="px-4 py-3 font-mono text-xs">unit</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">&quot;hour&quot; | &quot;minute&quot; | &quot;second&quot; | &quot;period&quot;</td>
              <td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td>
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

export default TimePickerPage;
