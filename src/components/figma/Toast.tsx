"use client";

import {
  useState,
  useEffect,
  useRef,
  useCallback,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";

import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import {
  CancelCircle,
  InformationCircle,
  Alert02,
  CheckmarkCircle02,
  CancelSquare,
} from "@/components/fragments/icons/catalog";

// ═══ Types ═══

type ToastTypeTypes = "danger" | "info" | "warning" | "success";
type ToastStyleTypes = "solid" | "outline" | "subtle";
type ToastIdTypes = string | number;

// ─── Options accepted by the imperative toast() API ───────────────

interface IToastOptions {
  id?: ToastIdTypes;
  duration?: number;
  description?: string;
  action?: { label: string; onClick: () => void };
  onDismiss?: (t: IToastData) => void;
  onAutoClose?: (t: IToastData) => void;
  icon?: ReactNode;
  className?: string;
  // Design-system extensions (not in shadcn Sonner)
  type?: ToastTypeTypes;
  style?: ToastStyleTypes;
  showIcon?: boolean;
  showClose?: boolean;
}

interface IToastData extends IToastOptions {
  id: ToastIdTypes;
  message: ReactNode;
  createdAt: number;
}

// ─── Internal store (module-level — shared across all Toasters) ───

type ToastListenerTypes = (toasts: IToastData[]) => void;

let _toasts: IToastData[] = [];
const _listeners = new Set<ToastListenerTypes>();

const _notify = () => {
  _listeners.forEach((l) => l([..._toasts]));
};

const _addToast = (
  data: Omit<IToastData, "id" | "createdAt"> & { id?: ToastIdTypes },
): ToastIdTypes => {
  const id =
    data.id ?? `toast-${Date.now()}-${Math.random().toString(36).slice(2)}`;
  const newToast: IToastData = { ...data, id, createdAt: Date.now() };
  _toasts = [..._toasts, newToast];
  _notify();
  return id;
};

const _updateToast = (id: ToastIdTypes, updates: Partial<IToastData>) => {
  _toasts = _toasts.map((t) =>
    t.id === id ? { ...t, ...updates, createdAt: Date.now() } : t,
  );
  _notify();
};

const _dismissToast = (id?: ToastIdTypes) => {
  if (id === undefined) {
    _toasts = [];
  } else {
    _toasts = _toasts.filter((t) => t.id !== id);
  }
  _notify();
};

const _subscribe = (listener: ToastListenerTypes): (() => void) => {
  _listeners.add(listener);
  listener([..._toasts]);
  return () => _listeners.delete(listener);
};

// ═══════════════════════════════════════════════════════════════════

// ─── Public imperative API ────────────────────────────────────────

export const toast = Object.assign(
  (message: ReactNode, opts?: IToastOptions): ToastIdTypes => {
    return _addToast({ message, type: "danger", ...opts });
  },
  {
    success: (message: ReactNode, opts?: IToastOptions): ToastIdTypes =>
      _addToast({ message, type: "success", ...opts }),

    error: (message: ReactNode, opts?: IToastOptions): ToastIdTypes =>
      _addToast({ message, type: "danger", ...opts }),

    info: (message: ReactNode, opts?: IToastOptions): ToastIdTypes =>
      _addToast({ message, type: "info", ...opts }),

    warning: (message: ReactNode, opts?: IToastOptions): ToastIdTypes =>
      _addToast({ message, type: "warning", ...opts }),

    dismiss: (id?: ToastIdTypes): void => _dismissToast(id),

    custom: (
      jsx: ReactNode,
      opts?: Omit<IToastOptions, "type" | "style">,
    ): ToastIdTypes => _addToast({ message: jsx, ...opts }),

    promise: async <T,>(
      promise: Promise<T>,
      msgs: {
        loading: ReactNode;
        success: ReactNode;
        error: ReactNode;
      },
      opts?: Omit<IToastOptions, "type">,
    ): Promise<T> => {
      const id = _addToast({
        message: msgs.loading,
        type: "info",
        duration: Infinity,
        ...opts,
      });
      try {
        const result = await promise;
        _updateToast(id, {
          message: msgs.success,
          type: "success",
          duration: opts?.duration ?? 4000,
        });
        return result;
      } catch (err) {
        _updateToast(id, {
          message: msgs.error,
          type: "danger",
          duration: opts?.duration ?? 4000,
        });
        throw err;
      }
    },
  },
);

// ═══════════════════════════════════════════════════════════════════

// ─── Toaster ──────────────────────────────────────────────────────

type ToastPositionTypes =
  | "top-right"
  | "top-left"
  | "top-center"
  | "bottom-right"
  | "bottom-left"
  | "bottom-center";

interface IToasterProps {
  position?: ToastPositionTypes;
  duration?: number;
  closeButton?: boolean;
}

const POSITION_CLASSES: Record<ToastPositionTypes, string> = {
  "top-right": "top-4 right-4",
  "top-left": "top-4 left-4",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "bottom-right": "bottom-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
};

// Internal per-toast entry component
interface IToastEntryProps {
  data: IToastData;
  globalDuration: number;
  globalCloseButton: boolean;
  onDismiss: (id: ToastIdTypes) => void;
}

const ToastEntry = (props: IToastEntryProps) => {
  const { data: t, globalDuration, globalCloseButton, onDismiss } = props;
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const effectiveDuration =
    t.duration !== undefined ? t.duration : globalDuration;

  const startTimer = useCallback(() => {
    if (!isFinite(effectiveDuration)) return;
    timerRef.current = setTimeout(() => {
      t.onAutoClose?.(t);
      onDismiss(t.id);
    }, effectiveDuration);
  }, [effectiveDuration, t, onDismiss]);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setVisible(true));
    startTimer();
    return () => {
      cancelAnimationFrame(raf);
      clearTimer();
    };
  }, [startTimer, clearTimer]);

  const handleClose = useCallback(() => {
    clearTimer();
    t.onDismiss?.(t);
    onDismiss(t.id);
  }, [clearTimer, t, onDismiss]);

  const showClose =
    t.showClose !== undefined ? t.showClose : globalCloseButton;

  return (
    <div
      className={cn(
        "transition-all duration-300 ease-out",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
      )}
      onMouseEnter={clearTimer}
      onMouseLeave={startTimer}
    >
      <Toast
        type={t.type ?? "danger"}
        style={t.style ?? "solid"}
        message={t.message}
        actionLabel={t.action?.label}
        onAction={t.action?.onClick}
        showIcon={t.showIcon}
        showClose={showClose}
        onClose={handleClose}
        className={t.className}
      />
    </div>
  );
};

export const Toaster = (props: IToasterProps) => {
  const position = props.position ?? "bottom-right";
  const globalDuration = props.duration ?? 4000;
  const globalCloseButton = props.closeButton ?? true;

  const [mounted, setMounted] = useState(false);
  const [toastList, setToastList] = useState<IToastData[]>([]);

  useEffect(() => {
    setMounted(true);
    const unsubscribe = _subscribe(setToastList);
    return unsubscribe;
  }, []);

  const handleDismiss = useCallback((id: ToastIdTypes) => {
    _dismissToast(id);
  }, []);

  if (!mounted || typeof document === "undefined") return null;

  const isTopPosition = position.startsWith("top");
  const displayList = isTopPosition ? [...toastList].reverse() : toastList;

  return createPortal(
    <div
      className={cn(
        "fixed z-[9999] flex flex-col gap-2",
        POSITION_CLASSES[position],
        "max-sm:left-[2.5%] max-sm:right-[2.5%] max-sm:translate-x-0",
      )}
    >
      {displayList.map((t) => (
        <ToastEntry
          key={t.id}
          data={t}
          globalDuration={globalDuration}
          globalCloseButton={globalCloseButton}
          onDismiss={handleDismiss}
        />
      ))}
    </div>,
    document.body,
  );
};

// ═══════════════════════════════════════════════════════════════════

// ─── Toast (JSX component — preserved for manual composition) ─────

interface IToastProps {
  type?: ToastTypeTypes;
  style?: ToastStyleTypes;
  message: ReactNode;
  actionLabel?: string;
  onAction?: () => void;
  showClose?: boolean;
  onClose?: () => void;
  showIcon?: boolean;
  className?: string;
}

const toastVariants = cva(
  [
    "flex items-center gap-200",
    "p-100",
    "rounded-medium",
    "shadow-sm",
    "w-[480px] max-w-full",
  ].join(" "),
  {
    variants: {
      type: {
        danger: "",
        info: "",
        warning: "",
        success: "",
      },
      style: {
        solid: "",
        outline: "bg-background border",
        subtle: "bg-background",
      },
    },
    compoundVariants: [
      // Solid backgrounds
      { type: "danger", style: "solid", className: "bg-accent-red-subtlest" },
      { type: "info", style: "solid", className: "bg-accent-blue" },
      { type: "warning", style: "solid", className: "bg-accent-orange" },
      { type: "success", style: "solid", className: "bg-accent-lime" },
      // Outline borders
      { type: "danger", style: "outline", className: "border-destructive" },
      { type: "info", style: "outline", className: "border-discovery" },
      { type: "warning", style: "outline", className: "border-warning" },
      { type: "success", style: "outline", className: "border-success" },
    ],
    defaultVariants: {
      type: "danger",
      style: "solid",
    },
  },
);

const iconColorMap: Record<ToastTypeTypes, string> = {
  danger: "text-destructive",
  info: "text-info",
  warning: "text-warning",
  success: "text-success",
};

const ToastIcon = (props: { type: ToastTypeTypes; className?: string }) => {
  const cls = cn("size-6 shrink-0", props.className);
  switch (props.type) {
    case "danger":
      return <CancelCircle className={cls} />;
    case "info":
      return <InformationCircle className={cls} />;
    case "warning":
      return <Alert02 className={cls} />;
    case "success":
      return <CheckmarkCircle02 className={cls} />;
  }
};

export const Toast = (props: IToastProps) => {
  const {
    type = "danger",
    style = "solid",
    message,
    actionLabel,
    onAction,
    showClose = true,
    onClose,
    showIcon = true,
    className,
  } = props;

  return (
    <div className={cn(toastVariants({ type, style }), className)}>
      {/* Content area */}
      <div className="flex flex-1 items-center gap-100 min-w-0">
        {showIcon && (
          <span className={iconColorMap[type]}>
            <ToastIcon type={type} />
          </span>
        )}
        <p className="flex-1 font-lexend font-medium text-sm leading-5 text-foreground min-w-0">
          {message}
        </p>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-1 shrink-0">
        {actionLabel && (
          <button
            type="button"
            onClick={onAction}
            className="flex items-center justify-center h-8 min-w-[40px] px-200 py-100 rounded-medium font-lexend font-normal text-sm leading-5 text-primary hover:text-primary-hover transition-colors duration-150 cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {actionLabel}
          </button>
        )}
        {showClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Dismiss"
            className="flex flex-col items-center justify-center px-050 py-100 rounded-medium text-subtlest hover:text-foreground transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <CancelSquare className="size-4" />
          </button>
        )}
      </div>
    </div>
  );
};
