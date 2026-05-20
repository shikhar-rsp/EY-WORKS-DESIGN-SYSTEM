"use client";

import { useState } from "react";

import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { SidebarLeft } from "@/components/fragments/icons/catalog";
import { BrandLogo } from "@/components/fragments/BrandLogo";

// ═══ SidebarNavLink ═══

type SidebarNavLinkStateTypes =
  | "default"
  | "hover"
  | "selected"
  | "disabled"
  | "pressed";

interface ISidebarNavLinkProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  state?: SidebarNavLinkStateTypes;
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
  className?: string;
}

const sidebarNavLinkVariants = cva(
  [
    "flex w-full items-center gap-150 px-100 py-100 rounded-medium",
    "cursor-pointer transition-colors font-lexend text-[14px] leading-5",
    "border-none outline-none text-left",
  ].join(" "),
  {
    variants: {
      state: {
        default:
          "bg-background text-subtle hover:bg-primary-subtle hover:text-subtle",
        hover: "bg-primary-subtle text-subtle",
        selected:
          "bg-accent-gray-subtlest text-foreground font-semibold",
        disabled: "text-disabled pointer-events-none bg-background",
        pressed: "bg-primary-subtle-pressed text-subtle",
      },
    },
    defaultVariants: {
      state: "default",
    },
  }
);

export const SidebarNavLink = (props: ISidebarNavLinkProps) => {
  const { label, state = "default", iconBefore, iconAfter, className, ...rest } = props;
  return (
    <button
      className={cn(sidebarNavLinkVariants({ state }), className)}
      disabled={state === "disabled"}
      aria-disabled={state === "disabled"}
      {...rest}
    >
      {iconBefore && (
        <span className="shrink-0 size-4 flex items-center justify-center">
          {iconBefore}
        </span>
      )}
      <span className="flex-1 truncate">{label}</span>
      {iconAfter && (
        <span className="shrink-0 size-4 flex items-center justify-center">
          {iconAfter}
        </span>
      )}
    </button>
  );
};

// ═══ SideNavModule ═══

type SideNavModuleStateTypes = "default" | "hover" | "active";

interface ISideNavModuleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  label?: string;
  state?: SideNavModuleStateTypes;
  notification?: boolean;
  connect?: boolean;
  className?: string;
}

const sideNavModuleVariants = cva(
  [
    "relative flex items-center justify-center",
    "w-[50px] h-[50px] rounded-medium",
    "cursor-pointer transition-colors border-none outline-none",
    "bg-transparent",
  ].join(" "),
  {
    variants: {
      state: {
        default: "text-subtle hover:text-primary",
        hover: "text-primary",
        active: "text-primary",
      },
    },
    defaultVariants: {
      state: "default",
    },
  }
);

const sideNavModuleCircleVariants = cva(
  "flex items-center justify-center w-[42px] h-[42px] rounded-medium transition-colors",
  {
    variants: {
      state: {
        default: "bg-transparent group-hover:bg-primary-subtle",
        hover: "bg-primary-subtle",
        active: "bg-primary",
      },
    },
    defaultVariants: {
      state: "default",
    },
  }
);

export const SideNavModule = (props: ISideNavModuleProps) => {
  const {
    icon,
    label,
    state = "default",
    notification,
    connect,
    className,
    ...rest
  } = props;

  return (
    <button
      className={cn(sideNavModuleVariants({ state }), "group", className)}
      aria-label={label}
      title={label}
      {...rest}
    >
      <span
        className={cn(
          sideNavModuleCircleVariants({ state }),
          state === "active" ? "text-primary-foreground" : "text-inherit"
        )}
      >
        {icon}
      </span>
      {notification && (
        <span className="absolute top-[6px] right-[6px] size-2 rounded-full bg-destructive-bold" />
      )}
      {connect && state === "active" && (
        <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-[12px] h-[2px] bg-primary" />
      )}
    </button>
  );
};

// ═══ EllieCTA ═══

interface IEllieCTAProps extends React.HTMLAttributes<HTMLDivElement> {
  heading?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
  isHovered?: boolean;
  className?: string;
}

export const EllieCTA = (props: IEllieCTAProps) => {
  const {
    heading = "How can I help you today?",
    buttonLabel = "Button",
    onButtonClick,
    isHovered = false,
    className,
    ...rest
  } = props;

  return (
    <div
      className={cn(
        "relative w-full h-[156px] rounded-card overflow-clip p-[10px] flex flex-col justify-between",
        className
      )}
      style={{
        background: "var(--brand-card-gradient)",
      }}
      {...rest}
    >
      <div className="flex flex-col gap-050">
        <span
          className="text-primary-foreground text-[18px] tracking-[0.43px] font-display"
        >
          Ellie
        </span>
        <p className="font-lexend font-bold text-[20px] leading-6 text-primary-foreground m-0">
          {heading}
        </p>
      </div>
      <button
        onClick={onButtonClick}
        className={cn(
          "self-start px-200 py-050 rounded-medium font-lexend text-[14px] leading-5 font-medium transition-colors border-none cursor-pointer",
          isHovered
            ? "bg-primary text-primary-foreground"
            : "bg-background text-muted-foreground"
        )}
      >
        {buttonLabel}
      </button>
    </div>
  );
};

// ═══ Submenu ═══

interface ISubmenuProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  title: string;
  onClose?: () => void;
  children: React.ReactNode;
  showEllieCTA?: boolean;
  ellieCTAProps?: Partial<IEllieCTAProps>;
  floating?: boolean;
  className?: string;
}

export const Submenu = (props: ISubmenuProps) => {
  const {
    icon,
    title,
    onClose,
    children,
    showEllieCTA,
    ellieCTAProps,
    floating,
    className,
    ...rest
  } = props;

  return (
    <div
      className={cn(
        "flex flex-col justify-between h-full",
        floating &&
          "border border-primary shadow-md rounded-card w-[218px] bg-background",
        className
      )}
      {...rest}
    >
      {/* Header */}
      <div>
        <div className="flex items-center justify-between gap-100 px-150 py-150 border-b border-border">
          <div className="flex items-center gap-100">
            {icon && (
              <span className="flex items-center justify-center size-8 text-primary">
                {icon}
              </span>
            )}
            <span className="font-lexend font-medium text-[16px] leading-5 text-primary">
              {title}
            </span>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="flex items-center justify-center size-8 rounded-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors border-none bg-transparent cursor-pointer"
              aria-label="Close submenu"
            >
              <SidebarLeft className="size-4" />
            </button>
          )}
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-050 px-100 py-100">
          {children}
        </nav>
      </div>

      {/* Footer */}
      {showEllieCTA && (
        <div className="px-100 pb-100">
          <EllieCTA {...ellieCTAProps} />
        </div>
      )}
    </div>
  );
};

// ═══ SidebarBase ═══

interface ISidebarItem {
  icon: React.ReactNode;
  label: string;
  module: string;
  links: {
    label: string;
    href?: string;
    onClick?: () => void;
  }[];
}

interface ISidebarProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  modules: ISidebarItem[];
  productIcons?: { icon: React.ReactNode; label: string; onClick?: () => void }[];
  activeModule?: string;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  onModuleChange?: (module: string) => void;
  showEllieCTA?: boolean;
  className?: string;
}

export const SidebarBase = (props: ISidebarProps) => {
  const {
    logo,
    modules,
    productIcons,
    activeModule,
    isOpen = true,
    onOpenChange,
    onModuleChange,
    showEllieCTA = true,
    className,
    ...rest
  } = props;

  const [internalOpen, setInternalOpen] = useState(isOpen);
  const [internalActive, setInternalActive] = useState(
    activeModule ?? modules[0]?.module ?? ""
  );

  const open = onOpenChange ? isOpen : internalOpen;
  const active = onModuleChange ? (activeModule ?? "") : internalActive;

  const handleModuleClick = (module: string) => {
    if (onModuleChange) {
      onModuleChange(module);
    } else {
      if (internalActive === module && open) {
        setInternalOpen(false);
        if (onOpenChange) onOpenChange(false);
      } else {
        setInternalActive(module);
        setInternalOpen(true);
        if (onOpenChange) onOpenChange(true);
      }
    }
  };

  const activeModuleData = modules.find((m) => m.module === active);

  return (
    <aside
      className={cn(
        "flex h-full bg-background shadow-lg transition-all duration-200",
        open ? "w-[322px]" : "w-[72px]",
        className
      )}
      {...rest}
    >
      {/* Icon Rail */}
      <div className="flex w-[72px] shrink-0 flex-col items-center border-r border-border py-200">
        {/* Logo */}
        <div className="flex items-center justify-center w-full overflow-hidden px-150 h-11 mb-100">
          {logo ?? <BrandLogo className="text-primary" />}
        </div>

        {/* Module icons */}
        <div className="flex flex-col items-center">
          {modules.map((item) => (
            <div key={item.module} className="h-[52px] flex items-center">
              <SideNavModule
                icon={item.icon}
                label={item.label}
                state={active === item.module ? "active" : "default"}
                connect={active === item.module && open}
                onClick={() => handleModuleClick(item.module)}
              />
            </div>
          ))}
        </div>

        {/* Divider */}
        {productIcons && productIcons.length > 0 && (
          <>
            <div className="w-[50px] h-px bg-border-hover mx-auto my-100" />
            <div className="flex flex-col items-center">
              {productIcons.map((item, idx) => (
                <div key={idx} className="h-[52px] flex items-center">
                  <SideNavModule
                    icon={item.icon}
                    label={item.label}
                    state="default"
                    onClick={item.onClick}
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Submenu Panel */}
      {open && activeModuleData && (
        <div className="flex-1 px-100 py-200 overflow-hidden">
          <Submenu
            icon={activeModuleData.icon}
            title={activeModuleData.label}
            onClose={() => {
              setInternalOpen(false);
              if (onOpenChange) onOpenChange(false);
            }}
            showEllieCTA={showEllieCTA}
          >
            {activeModuleData.links.map((link, idx) => (
              <SidebarNavLink
                key={idx}
                label={link.label}
                onClick={link.onClick}
              />
            ))}
          </Submenu>
        </div>
      )}
    </aside>
  );
};
