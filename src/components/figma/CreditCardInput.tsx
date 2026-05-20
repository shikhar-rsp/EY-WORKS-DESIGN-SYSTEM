"use client";

import { useId, useMemo, useState } from "react";

import { cn } from "@/lib/utils";
import { Chip, Eye, ViewOff } from "@/components/fragments/icons/catalog";

// ─── Types ────────────────────────────────────────────────────────────────────

export type CreditCardNetworkTypes =
  | "visa"
  | "mastercard"
  | "amex"
  | "discover"
  | "unknown";

export interface ICreditCardValue {
  number: string;
  name: string;
  expiry: string;
  cvv: string;
}

interface ICreditCardLabels {
  number?: string;
  name?: string;
  expiry?: string;
  cvv?: string;
}

interface ICreditCardInputProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "defaultValue"> {
  /** Controlled value. Pair with `onChange`. */
  value?: ICreditCardValue;
  /** Initial value for uncontrolled usage. */
  defaultValue?: Partial<ICreditCardValue>;
  /** Fires on every keystroke with the full card value. */
  onChange?: (value: ICreditCardValue) => void;
  /** Disables every input + the CVV reveal button. */
  disabled?: boolean;
  /** Renders a `role="alert"` message under the inputs and flips fields to invalid styling. */
  error?: string;
  /** Override field labels (e.g. for i18n). */
  labels?: ICreditCardLabels;
}

// ─── Utilities ────────────────────────────────────────────────────────────────

export const detectCreditCardNetwork = (
  numberOrDigits: string,
): CreditCardNetworkTypes => {
  const digits = numberOrDigits.replace(/\D/g, "");
  if (/^4/.test(digits)) return "visa";
  if (/^(5[1-5]|2[2-7])/.test(digits)) return "mastercard";
  if (/^3[47]/.test(digits)) return "amex";
  if (/^(6011|65|64[4-9])/.test(digits)) return "discover";
  return "unknown";
};

const formatCardNumber = (raw: string, network: CreditCardNetworkTypes) => {
  const max = network === "amex" ? 15 : 16;
  const digits = raw.replace(/\D/g, "").slice(0, max);
  if (network === "amex") {
    // 4-6-5 grouping
    const a = digits.slice(0, 4);
    const b = digits.slice(4, 10);
    const c = digits.slice(10, 15);
    return [a, b, c].filter(Boolean).join(" ");
  }
  // 4-4-4-4 grouping
  return digits.replace(/(.{4})/g, "$1 ").trim();
};

const formatExpiry = (raw: string) => {
  const digits = raw.replace(/\D/g, "").slice(0, 4);
  if (digits.length < 3) return digits;
  return `${digits.slice(0, 2)}/${digits.slice(2)}`;
};

// Luhn check — useful for consumers; not enforced inside the component.
export const isValidCreditCardNumber = (value: string) => {
  const digits = value.replace(/\D/g, "");
  if (digits.length < 12) return false;
  let sum = 0;
  let alt = false;
  for (let i = digits.length - 1; i >= 0; i--) {
    let n = Number(digits[i]);
    if (alt) {
      n *= 2;
      if (n > 9) n -= 9;
    }
    sum += n;
    alt = !alt;
  }
  return sum % 10 === 0;
};

// ─── Network badge (inline, trademark-safe wordmarks) ─────────────────────────

const NetworkBadge = ({ network }: { network: CreditCardNetworkTypes }) => {
  switch (network) {
    case "visa":
      return (
        <span
          aria-label="Visa"
          className="font-display text-base font-extrabold tracking-wide text-primary-foreground italic"
        >
          VISA
        </span>
      );
    case "mastercard":
      return (
        <div aria-label="Mastercard" className="flex items-center">
          <span className="block size-5 rounded-full bg-destructive opacity-90" />
          <span className="-ml-2 block size-5 rounded-full bg-warning-bold opacity-90 mix-blend-multiply" />
        </div>
      );
    case "amex":
      return (
        <span
          aria-label="American Express"
          className="font-display text-xs font-extrabold tracking-widest text-primary-foreground"
        >
          AMEX
        </span>
      );
    case "discover":
      return (
        <span
          aria-label="Discover"
          className="font-display text-xs font-extrabold tracking-widest text-primary-foreground uppercase"
        >
          Discover
        </span>
      );
    default:
      return null;
  }
};

// ─── Card preview surface ─────────────────────────────────────────────────────

interface ICardPreviewProps {
  value: ICreditCardValue;
  network: CreditCardNetworkTypes;
  showBack: boolean;
}

const CardPreview = ({ value, network, showBack }: ICardPreviewProps) => {
  const groupSizes = network === "amex" ? [4, 6, 5] : [4, 4, 4, 4];
  const digits = value.number.replace(/\D/g, "");

  let cursor = 0;
  const groups = groupSizes.map((g) => {
    const slice = digits.slice(cursor, cursor + g);
    cursor += g;
    return slice.padEnd(g, "•");
  });

  return (
    <div
      data-slot="credit-card-preview"
      data-side={showBack ? "back" : "front"}
      className={cn(
        "relative aspect-[1.586/1] w-full max-w-sm overflow-hidden rounded-large p-200",
        "bg-gradient-to-br from-primary via-primary-hover to-primary-active",
        "text-primary-foreground shadow-lg",
      )}
    >
      {/* Decorative ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -right-16 size-56 rounded-full bg-primary-foreground/10 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-12 size-56 rounded-full bg-accent-active/30 blur-2xl"
      />

      {!showBack && (
        <div className="relative flex h-full flex-col justify-between">
          <div className="flex items-start justify-between">
            <Chip className="size-9 text-primary-foreground/90" />
            <NetworkBadge network={network} />
          </div>

          <div className="flex flex-wrap gap-150 font-mono text-base font-semibold tracking-[0.18em] tabular-nums sm:text-lg">
            {groups.map((g, i) => (
              <span key={i}>{g}</span>
            ))}
          </div>

          <div className="flex items-end justify-between gap-200">
            <div className="min-w-0 flex-1">
              <div className="text-[0.6rem] tracking-widest text-primary-foreground/70 uppercase">
                Card holder
              </div>
              <div className="truncate text-sm font-medium tracking-wide uppercase">
                {value.name || "FULL NAME"}
              </div>
            </div>
            <div className="text-right">
              <div className="text-[0.6rem] tracking-widest text-primary-foreground/70 uppercase">
                Expires
              </div>
              <div className="font-mono text-sm font-medium tabular-nums">
                {value.expiry || "MM/YY"}
              </div>
            </div>
          </div>
        </div>
      )}

      {showBack && (
        <div className="relative flex h-full flex-col gap-200">
          {/* Magnetic stripe */}
          <div className="-mx-200 mt-100 h-10 bg-foreground/80" />
          {/* Signature + CVV strip */}
          <div className="ml-auto flex h-9 w-2/3 items-center justify-end rounded-small bg-primary-foreground/95 px-150 font-mono text-sm font-semibold text-foreground tabular-nums">
            {value.cvv || (network === "amex" ? "••••" : "•••")}
          </div>
          <div className="mt-auto text-[0.6rem] tracking-widest text-primary-foreground/80 uppercase">
            CVV / CVC
          </div>
        </div>
      )}
    </div>
  );
};

// ─── CreditCardInput ──────────────────────────────────────────────────────────

const fieldClass = cn(
  "h-9 w-full rounded-medium border border-border bg-background",
  "px-150 py-050 text-sm text-foreground placeholder:text-placeholder",
  "outline-none transition-colors",
  "focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30",
  "aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/30",
  "disabled:cursor-not-allowed disabled:bg-disabled-surface disabled:text-disabled disabled:border-disabled-border",
);

export const CreditCardInput = (props: ICreditCardInputProps) => {
  const {
    value: controlled,
    defaultValue,
    onChange,
    disabled,
    error,
    labels,
    className,
    id,
    ...rest
  } = props;

  const reactId = useId();
  const groupId = id ?? reactId;
  const errorId = `${groupId}-error`;

  const [internal, setInternal] = useState<ICreditCardValue>({
    number: defaultValue?.number ?? "",
    name: defaultValue?.name ?? "",
    expiry: defaultValue?.expiry ?? "",
    cvv: defaultValue?.cvv ?? "",
  });
  const [cvvFocused, setCvvFocused] = useState(false);
  const [revealCvv, setRevealCvv] = useState(false);

  const value = controlled ?? internal;
  const network = useMemo(
    () => detectCreditCardNetwork(value.number),
    [value.number],
  );
  const invalid = Boolean(error);

  const update = (patch: Partial<ICreditCardValue>) => {
    const next = { ...value, ...patch };
    if (controlled === undefined) setInternal(next);
    onChange?.(next);
  };

  const handleNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextNetwork = detectCreditCardNetwork(e.target.value);
    update({ number: formatCardNumber(e.target.value, nextNetwork) });
  };

  const handleExpiry = (e: React.ChangeEvent<HTMLInputElement>) => {
    update({ expiry: formatExpiry(e.target.value) });
  };

  const handleCvv = (e: React.ChangeEvent<HTMLInputElement>) => {
    const max = network === "amex" ? 4 : 3;
    update({ cvv: e.target.value.replace(/\D/g, "").slice(0, max) });
  };

  return (
    <div
      data-slot="credit-card-input"
      data-disabled={disabled || undefined}
      aria-invalid={invalid || undefined}
      aria-describedby={invalid ? errorId : undefined}
      className={cn(
        "flex w-full max-w-sm flex-col gap-200 font-lexend",
        "data-disabled:pointer-events-none data-disabled:opacity-60",
        className,
      )}
      {...rest}
    >
      <CardPreview value={value} network={network} showBack={cvvFocused} />

      <div className="flex flex-col gap-150">
        <label className="flex flex-col gap-050">
          <span className="text-xs font-medium text-secondary-foreground">
            {labels?.number ?? "Card number"}
          </span>
          <input
            type="text"
            inputMode="numeric"
            autoComplete="cc-number"
            placeholder={
              network === "amex" ? "0000 000000 00000" : "0000 0000 0000 0000"
            }
            value={value.number}
            onChange={handleNumber}
            disabled={disabled}
            aria-invalid={invalid || undefined}
            className={cn(fieldClass, "font-mono tabular-nums")}
          />
        </label>

        <label className="flex flex-col gap-050">
          <span className="text-xs font-medium text-secondary-foreground">
            {labels?.name ?? "Cardholder name"}
          </span>
          <input
            type="text"
            autoComplete="cc-name"
            placeholder="Jane Appleseed"
            value={value.name}
            onChange={(e) => update({ name: e.target.value })}
            disabled={disabled}
            aria-invalid={invalid || undefined}
            className={fieldClass}
          />
        </label>

        <div className="flex gap-150">
          <label className="flex flex-1 flex-col gap-050">
            <span className="text-xs font-medium text-secondary-foreground">
              {labels?.expiry ?? "Expiry"}
            </span>
            <input
              type="text"
              inputMode="numeric"
              autoComplete="cc-exp"
              placeholder="MM/YY"
              value={value.expiry}
              onChange={handleExpiry}
              disabled={disabled}
              aria-invalid={invalid || undefined}
              className={cn(fieldClass, "font-mono tabular-nums")}
            />
          </label>
          <label className="flex flex-1 flex-col gap-050">
            <span className="text-xs font-medium text-secondary-foreground">
              {labels?.cvv ?? "CVV"}
            </span>
            <div className="relative">
              <input
                type={revealCvv ? "text" : "password"}
                inputMode="numeric"
                autoComplete="cc-csc"
                placeholder={network === "amex" ? "••••" : "•••"}
                value={value.cvv}
                onChange={handleCvv}
                onFocus={() => setCvvFocused(true)}
                onBlur={() => setCvvFocused(false)}
                disabled={disabled}
                aria-invalid={invalid || undefined}
                className={cn(fieldClass, "pr-9 font-mono tabular-nums")}
              />
              <button
                type="button"
                onClick={() => setRevealCvv((s) => !s)}
                disabled={disabled}
                aria-label={revealCvv ? "Hide CVV" : "Show CVV"}
                className={cn(
                  "absolute inset-y-0 right-0 inline-flex items-center px-150",
                  "text-muted-foreground transition-colors hover:text-foreground",
                  "disabled:cursor-not-allowed",
                )}
              >
                {revealCvv ? (
                  <ViewOff className="size-4" />
                ) : (
                  <Eye className="size-4" />
                )}
              </button>
            </div>
          </label>
        </div>

        {error && (
          <p
            id={errorId}
            role="alert"
            className="text-xs text-destructive"
          >
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default CreditCardInput;
