export const PreviewRow = (props: {
  children: React.ReactNode;
  label?: string;
}) => (
  <div className="flex flex-wrap items-center gap-6">
    {props.label && (
      <span className="w-20 shrink-0 text-xs text-muted-foreground">{props.label}</span>
    )}
    {props.children}
  </div>
);
