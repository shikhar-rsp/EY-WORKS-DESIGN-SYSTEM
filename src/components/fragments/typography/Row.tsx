export const Row = (props: { children: React.ReactNode; label?: string }) => (
  <div className="flex flex-wrap items-center gap-4">
    {props.label && (
      <span className="w-24 shrink-0 text-xs text-muted-foreground">{props.label}</span>
    )}
    {props.children}
  </div>
);
