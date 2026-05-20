"use client";

import { cn } from "@/lib/utils";
import { ArrowDown01Round, Sorting05 } from "@/components/fragments/icons/catalog";

// ═══ Table ═══

interface ITableProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

export const Table = (props: ITableProps) => {
  const { className, children, ...rest } = props;

  return (
    <div className={cn("overflow-clip rounded-large border border-border", className)} {...rest}>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          {children}
        </table>
      </div>
    </div>
  );
};

// ═══ TableHeader ═══

interface ITableHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  className?: string;
  children?: React.ReactNode;
}

export const TableHeader = (props: ITableHeaderProps) => {
  const { className, children, ...rest } = props;

  return (
    <thead className={cn(className)} {...rest}>
      {children}
    </thead>
  );
};

// ═══ TableBody ═══

interface ITableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  className?: string;
  children?: React.ReactNode;
}

export const TableBody = (props: ITableBodyProps) => {
  const { className, children, ...rest } = props;

  return (
    <tbody className={cn(className)} {...rest}>
      {children}
    </tbody>
  );
};

// ═══ TableRow ═══

interface ITableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  className?: string;
  children?: React.ReactNode;
}

export const TableRow = (props: ITableRowProps) => {
  const { className, children, ...rest } = props;

  return (
    <tr className={cn("group", className)} {...rest}>
      {children}
    </tr>
  );
};

// ═══ TableHead ═══

type TableHeadTypeTypes = "default" | "checkbox" | "dropdown";
type TableHeadAlignTypes = "left" | "right";

interface ITableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {
  type?: TableHeadTypeTypes;
  align?: TableHeadAlignTypes;
  sortable?: boolean;
  hasDropdown?: boolean;
  label?: string;
  className?: string;
  children?: React.ReactNode;
}

export const TableHead = (props: ITableHeadProps) => {
  const {
    type = "default",
    align = "left",
    sortable = false,
    hasDropdown = false,
    label,
    className,
    children,
    ...rest
  } = props;

  if (type === "checkbox") {
    return (
      <th
        className={cn(
          "bg-secondary border-b border-border",
          "h-10 w-10 px-200",
          "text-left",
          className
        )}
        {...rest}
      >
        {children}
      </th>
    );
  }

  if (type === "dropdown") {
    return (
      <th
        className={cn(
          "bg-secondary border-b border-border",
          "h-10 w-10 px-200",
          className
        )}
        {...rest}
      >
        {children}
      </th>
    );
  }

  return (
    <th
      className={cn(
        "bg-secondary hover:bg-accent-gray-subtle border-b border-border",
        "h-10 px-200",
        "transition-colors duration-150",
        align === "right" ? "text-right" : "text-left",
        className
      )}
      {...rest}
    >
      <div
        className={cn(
          "flex items-center gap-1",
          align === "right" ? "justify-end" : "justify-start"
        )}
      >
        <span className="font-lexend font-medium text-xs leading-4 uppercase tracking-wide text-muted-foreground whitespace-nowrap">
          {label ?? children}
        </span>
        {sortable && (
          <Sorting05 className="size-3 text-muted-foreground shrink-0" />
        )}
        {hasDropdown && !sortable && (
          <ArrowDown01Round className="size-3 text-muted-foreground shrink-0" />
        )}
      </div>
    </th>
  );
};

// ═══ TableCell ═══

type TableCellAlignTypes = "left" | "right";

interface ITableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  align?: TableCellAlignTypes;
  isLast?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const TableCell = (props: ITableCellProps) => {
  const { align = "left", isLast = false, className, children, ...rest } = props;

  return (
    <td
      className={cn(
        "bg-background group-hover:bg-secondary",
        !isLast && "border-b border-border",
        "h-18 px-200 py-100",
        "transition-colors duration-150",
        align === "right" ? "text-right" : "text-left",
        className
      )}
      {...rest}
    >
      {children}
    </td>
  );
};
