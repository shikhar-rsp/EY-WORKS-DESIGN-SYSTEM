"use client";

import { Label } from "@/components/figma/Label";
import { Textarea } from "@/components/figma/Textarea";

export const TextareaDetail = () => {
  return (
    <div className="mt-6 space-y-10">
      {/* Preview */}
      <div>
        <h3 id="detail-preview" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Preview
        </h3>
        <div className="mt-4">
          <Textarea placeholder="Type something…" className="w-72" />
        </div>
      </div>

      {/* States */}
      <div>
        <h3 id="detail-states" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          States
        </h3>
        <div className="mt-4 flex flex-col gap-300">
          <div className="flex flex-col gap-075">
            <span className="text-xs text-muted-foreground font-lexend">Default</span>
            <Textarea placeholder="Placeholder text…" className="w-72" />
          </div>
          <div className="flex flex-col gap-075">
            <span className="text-xs text-muted-foreground font-lexend">With value</span>
            <Textarea defaultValue="This textarea has a pre-filled value." className="w-72" />
          </div>
          <div className="flex flex-col gap-075">
            <span className="text-xs text-muted-foreground font-lexend">Disabled</span>
            <Textarea disabled placeholder="Disabled" className="w-72" />
          </div>
          <div className="flex flex-col gap-075">
            <span className="text-xs text-muted-foreground font-lexend">Invalid</span>
            <Textarea aria-invalid={true} placeholder="Invalid input" className="w-72" />
          </div>
        </div>
      </div>

      {/* With label */}
      <div>
        <h3 id="detail-with-label" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          With Label
        </h3>
        <div className="mt-4 flex flex-col gap-075 w-72">
          <Label htmlFor="detail-bio">Bio</Label>
          <Textarea id="detail-bio" placeholder="Tell us about yourself…" rows={4} />
          <p className="text-xs text-muted-foreground font-lexend">Write a short bio, max 160 characters.</p>
        </div>
      </div>
    </div>
  );
};
