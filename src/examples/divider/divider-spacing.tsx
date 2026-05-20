import { Divider } from "@/components/figma/Divider";

export const DividerSpacing = () => {
  return (
    <div className="w-full px-4 space-y-0">
      {(["default", "8", "16", "20", "40", "80"] as const).map((spacing) => (
        <div key={spacing}>
          <p className="text-xs text-muted-foreground font-lexend">
            spacing=&quot;{spacing}&quot;
          </p>
          <Divider spacing={spacing} />
        </div>
      ))}
    </div>
  );
};
