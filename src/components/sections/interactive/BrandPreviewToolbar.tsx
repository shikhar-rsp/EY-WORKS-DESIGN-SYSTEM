import { SizeSlider } from "@/components/sections/interactive/SizeSlider";
import { FontPicker } from "@/components/sections/interactive/FontPicker";
import { ColorPicker } from "@/components/sections/interactive/ColorPicker";

import { cn } from "@/lib/utils";

interface IBrandPreviewToolbarProps {
  className?: string;
}

/**
 * Brand-preview toolbar shown above component documentation previews.
 *
 * To enable/disable any tool, uncomment/comment the matching line below.
 * Every component docs page imports this single component instead of the
 * three pickers individually — so changes here propagate across all pages.
 */
export const BrandPreviewToolbar = (props: IBrandPreviewToolbarProps) => (
  <div className={cn("mt-4 space-y-4", props.className)}>
    <SizeSlider />
    {/* <FontPicker />
    <ColorPicker /> */}
  </div>
);
