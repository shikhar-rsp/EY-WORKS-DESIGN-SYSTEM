"use client";

import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/figma/Select";

export const SelectDetail = () => {
  const [fruit, setFruit] = useState("");
  const [timezone, setTimezone] = useState("utc");

  return (
    <div className="mt-6 space-y-10">

      {/* ── Preview ──────────────────────────────────────────── */}
      <div>
        <h3 id="detail-preview" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Preview
        </h3>
        <div className="mt-4 flex flex-wrap items-start gap-4">
          <div className="w-56">
            <Select value={fruit} onValueChange={setFruit}>
              <SelectTrigger>
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {fruit && <p className="mt-1 text-xs text-muted-foreground">Selected: {fruit}</p>}
          </div>
        </div>
      </div>

      {/* ── Sizes ────────────────────────────────────────────── */}
      <div>
        <h3 id="detail-all-sizes" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Sizes
        </h3>
        <div className="mt-4 flex flex-wrap items-start gap-4">
          <div className="space-y-1">
            <span className="font-lexend text-xs text-muted-foreground">default (h-9)</span>
            <div className="w-48">
              <Select>
                <SelectTrigger size="default">
                  <SelectValue placeholder="Default size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="a">Option A</SelectItem>
                  <SelectItem value="b">Option B</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-1">
            <span className="font-lexend text-xs text-muted-foreground">sm (h-8)</span>
            <div className="w-48">
              <Select>
                <SelectTrigger size="sm">
                  <SelectValue placeholder="Small size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="a">Option A</SelectItem>
                  <SelectItem value="b">Option B</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* ── Grouped with Separator ───────────────────────────── */}
      <div>
        <h3 id="detail-groups" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Grouped with Separator
        </h3>
        <div className="mt-4 w-64">
          <Select value={timezone} onValueChange={setTimezone}>
            <SelectTrigger>
              <SelectValue placeholder="Select timezone" />
            </SelectTrigger>
            <SelectContent>
              <SelectScrollUpButton />
              <SelectGroup>
                <SelectLabel>North America</SelectLabel>
                <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
              </SelectGroup>
              <SelectSeparator />
              <SelectGroup>
                <SelectLabel>Europe</SelectLabel>
                <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                <SelectItem value="cet">Central European Time (CET)</SelectItem>
              </SelectGroup>
              <SelectSeparator />
              <SelectGroup>
                <SelectLabel>UTC</SelectLabel>
                <SelectItem value="utc">Coordinated Universal Time (UTC)</SelectItem>
              </SelectGroup>
              <SelectScrollDownButton />
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* ── Disabled States ──────────────────────────────────── */}
      <div>
        <h3 id="detail-disabled" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Disabled States
        </h3>
        <div className="mt-4 flex flex-wrap items-start gap-4">
          <div className="w-48">
            <Select disabled>
              <SelectTrigger>
                <SelectValue placeholder="Disabled select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="a">Option A</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-48">
            <Select defaultValue="b">
              <SelectTrigger>
                <SelectValue placeholder="Has disabled item" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="a">Option A</SelectItem>
                <SelectItem value="b">Option B</SelectItem>
                <SelectItem value="c" disabled>Option C (disabled)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

    </div>
  );
};
