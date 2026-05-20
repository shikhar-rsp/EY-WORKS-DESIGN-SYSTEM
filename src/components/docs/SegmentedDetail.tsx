"use client";

import { Segmented, SegmentedItem } from "@/components/figma/Segmented";
import { Menu01, GridView, MenuSquare } from "@/components/fragments/icons/catalog";

export const SegmentedDetail = () => {
  return (
    <div className="mt-6 space-y-10">
      {/* ── Preview ──────────────────────────────────────────────── */}
      <div>
        <h3
          id="detail-preview"
          className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
        >
          Preview
        </h3>
        <div className="mt-4 rounded-large border border-border p-6">
          <Segmented defaultValue="day">
            <SegmentedItem value="day">Day</SegmentedItem>
            <SegmentedItem value="week">Week</SegmentedItem>
            <SegmentedItem value="month">Month</SegmentedItem>
            <SegmentedItem value="year">Year</SegmentedItem>
          </Segmented>
        </div>
      </div>

      {/* ── Sizes ────────────────────────────────────────────────── */}
      <div>
        <h3
          id="detail-sizes"
          className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
        >
          Sizes
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          Three sizes available: <code>sm</code>, <code>default</code>,{" "}
          <code>lg</code>.
        </p>
        <div className="mt-4 rounded-large border border-border p-6 flex flex-col items-start gap-4">
          {(["sm", "default", "lg"] as const).map((size) => (
            <div
              key={size}
              className="flex flex-col items-start gap-4 sm:flex-row sm:items-center"
            >
              <span className="w-20 font-lexend text-xs text-muted-foreground">
                size=&quot;{size}&quot;
              </span>
              <Segmented defaultValue="week" size={size}>
                <SegmentedItem value="day">Day</SegmentedItem>
                <SegmentedItem value="week">Week</SegmentedItem>
                <SegmentedItem value="month">Month</SegmentedItem>
              </Segmented>
            </div>
          ))}
        </div>
      </div>

      {/* ── Disabled ─────────────────────────────────────────────── */}
      <div>
        <h3
          id="detail-disabled"
          className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
        >
          Disabled
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          Disable the entire control or individual items.
        </p>
        <div className="mt-4 rounded-large border border-border p-6 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <span className="w-28 font-lexend text-xs text-muted-foreground">
              Root disabled
            </span>
            <Segmented defaultValue="day" disabled>
              <SegmentedItem value="day">Day</SegmentedItem>
              <SegmentedItem value="week">Week</SegmentedItem>
              <SegmentedItem value="month">Month</SegmentedItem>
            </Segmented>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-28 font-lexend text-xs text-muted-foreground">
              Item disabled
            </span>
            <Segmented defaultValue="day">
              <SegmentedItem value="day">Day</SegmentedItem>
              <SegmentedItem value="week" disabled>
                Week
              </SegmentedItem>
              <SegmentedItem value="month">Month</SegmentedItem>
            </Segmented>
          </div>
        </div>
      </div>

      {/* ── With Icons ───────────────────────────────────────────── */}
      <div>
        <h3
          id="detail-icons"
          className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
        >
          With Icons
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          Pass <code>leftIcon</code> or <code>rightIcon</code> to each item for
          icon-enhanced labels.
        </p>
        <div className="mt-4 rounded-large border border-border p-6">
          <Segmented defaultValue="list">
            <SegmentedItem
              value="list"
              leftIcon={<Menu01 className="size-3.5" />}
            >
              List
            </SegmentedItem>
            <SegmentedItem
              value="grid"
              leftIcon={<GridView className="size-3.5" />}
            >
              Grid
            </SegmentedItem>
            <SegmentedItem
              value="board"
              leftIcon={<MenuSquare className="size-3.5" />}
            >
              Board
            </SegmentedItem>
          </Segmented>
        </div>
      </div>

      {/* ── Controlled ───────────────────────────────────────────── */}
      <div>
        <h3
          id="detail-controlled"
          className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground"
        >
          Controlled vs Uncontrolled
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          Use <code>value</code> + <code>onValueChange</code> for controlled
          mode, or <code>defaultValue</code> for uncontrolled.
        </p>
        <div className="mt-4 rounded-large border border-border p-6 space-y-4">
          <div>
            <span className="font-lexend text-xs text-muted-foreground block mb-2">
              Uncontrolled (defaultValue=&quot;b&quot;)
            </span>
            <Segmented defaultValue="b">
              <SegmentedItem value="a">Option A</SegmentedItem>
              <SegmentedItem value="b">Option B</SegmentedItem>
              <SegmentedItem value="c">Option C</SegmentedItem>
            </Segmented>
          </div>
        </div>
      </div>
    </div>
  );
};
