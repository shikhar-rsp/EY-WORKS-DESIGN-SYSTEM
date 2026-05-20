import Link from "next/link";

import { COMPONENTS } from "@/config/navigation";

const ComponentsPage = () => {
  const sorted = [...COMPONENTS].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="flex flex-col gap-10 px-8 py-12 mx-auto w-full max-w-3xl font-lexend lg:gap-12">
      <section className="flex flex-col gap-3 w-full h-fit">
        <h1 className="text-4xl font-bold text-foreground">Components</h1>
        <p className="text-sm text-secondary-foreground">
          All the components available in the EYWorks DS library. Each component
          is synced from the Figma master file with full variant, state, and
          token coverage.
        </p>
      </section>
      <ul className="space-y-0 grid grid-cols-2 auto-rows-fr gap-5 sm:grid-cols-3 lg:gap-6">
        {sorted.map((component, colIndex) => (
          <li key={colIndex} className="w-full h-fit">
            <Link
              href={component.href}
              className="flex h-full w-full flex-col items-start justify-between gap-3 rounded-large border border-border bg-background p-5 transition-colors hover:border-border-hover hover:bg-muted"
            >
              <span className="text-sm font-semibold text-foreground">
                {component.name}
              </span>
              <span className="text-xs text-muted-foreground">
                View documentation →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ComponentsPage;
