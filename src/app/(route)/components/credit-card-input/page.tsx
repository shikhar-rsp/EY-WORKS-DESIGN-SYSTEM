import type { Metadata } from "next";

import { CodeBlock } from "@/components/fragments/typography/CodeBlock";
import { BrandPreviewToolbar } from "@/components/sections/interactive/BrandPreviewToolbar";
import { ComponentPreview } from "@/components/sections/interactive/ComponentPreview";
import { CreditCardInputDefault } from "@/examples/credit-card-input/credit-card-input-default";
import { CreditCardInputControlled } from "@/examples/credit-card-input/credit-card-input-controlled";
import { CreditCardInputError } from "@/examples/credit-card-input/credit-card-input-error";
import { CreditCardInputDisabled } from "@/examples/credit-card-input/credit-card-input-disabled";

export const metadata: Metadata = {
  title: "Credit Card Input | Design System",
  description:
    "A four-field credit card form (number, name, expiry, CVV) with a live, brand-tokened card preview that mirrors typed values and flips on CVV focus.",
};

const INSTALL_CODE = `cp src/components/figma/CreditCardInput.tsx your-project/components/CreditCardInput.tsx`;

const USAGE_IMPORT = `import {
  CreditCardInput,
  detectCreditCardNetwork,
  isValidCreditCardNumber,
  type ICreditCardValue,
} from "@/components/figma/CreditCardInput"`;

const USAGE_CODE = `{/* Uncontrolled */}
<CreditCardInput defaultValue={{ number: "4242 4242 4242 4242" }} />

{/* Controlled */}
const [card, setCard] = useState<ICreditCardValue>({ number: "", name: "", expiry: "", cvv: "" });
<CreditCardInput value={card} onChange={setCard} />

{/* Error state */}
<CreditCardInput error="Card has expired." />

{/* i18n */}
<CreditCardInput
  labels={{
    number: "Numéro de carte",
    name: "Titulaire",
    expiry: "Expiration",
    cvv: "CVV",
  }}
/>`;

const CreditCardInputPage = async () => {
  return (
    <div className="mx-auto max-w-3xl px-8 py-10 font-lexend">
      <div className="mb-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Credit Card Input</h1>
      </div>
      <p className="leading-7 text-secondary-foreground">
        A four-field card capture (<code className="font-mono text-sm">number</code>,
        <code className="font-mono text-sm"> name</code>,
        <code className="font-mono text-sm"> expiry</code>,
        <code className="font-mono text-sm"> cvv</code>) with a live, brand-tokened card preview that mirrors typed values, auto-detects the network from the BIN prefix, and flips to the back face when the CVV field is focused.
      </p>

      <BrandPreviewToolbar />

      <h2 id="examples" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Examples</h2>

      <h3 id="default" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Default</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Uncontrolled. The component owns the form state internally; consumers can read it via <code className="font-mono text-xs">onChange</code>.
      </p>
      <div className="mt-3"><ComponentPreview name="credit-card-input/credit-card-input-default" previewClassName="items-start"><CreditCardInputDefault /></ComponentPreview></div>

      <h3 id="controlled" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Controlled</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Pair <code className="font-mono text-xs">value</code> + <code className="font-mono text-xs">onChange</code>. The helpers <code className="font-mono text-xs">detectCreditCardNetwork</code> and <code className="font-mono text-xs">isValidCreditCardNumber</code> are exported for downstream validation.
      </p>
      <div className="mt-3"><ComponentPreview name="credit-card-input/credit-card-input-controlled" previewClassName="items-start"><CreditCardInputControlled /></ComponentPreview></div>

      <h3 id="error" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Error</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Pass an <code className="font-mono text-xs">error</code> string to flip every field to invalid styling and announce a <code className="font-mono text-xs">role=&quot;alert&quot;</code> message.
      </p>
      <div className="mt-3"><ComponentPreview name="credit-card-input/credit-card-input-error" previewClassName="items-start"><CreditCardInputError /></ComponentPreview></div>

      <h3 id="disabled" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">Disabled</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Disables every input + the CVV reveal button and dims the wrapper.
      </p>
      <div className="mt-3"><ComponentPreview name="credit-card-input/credit-card-input-disabled" previewClassName="items-start"><CreditCardInputDisabled /></ComponentPreview></div>

      <h2 id="installation" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Installation</h2>
      <div className="mt-4"><CodeBlock code={INSTALL_CODE} /></div>

      <h2 id="usage" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Usage</h2>
      <div className="mt-4 space-y-3"><CodeBlock code={USAGE_IMPORT} /><CodeBlock code={USAGE_CODE} /></div>

      <h2 id="api-reference" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">API Reference</h2>

      <h3 id="api-creditcardinput" className="mt-6 scroll-mt-20 text-lg font-semibold text-foreground">CreditCardInput</h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted"><th className="px-4 py-3 font-semibold text-foreground">Prop</th><th className="px-4 py-3 font-semibold text-foreground">Type</th><th className="px-4 py-3 font-semibold text-foreground">Default</th></tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">value</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">ICreditCardValue</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">defaultValue</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">Partial&lt;ICreditCardValue&gt;</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">onChange</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">(value: ICreditCardValue) =&gt; void</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">disabled</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">boolean</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">false</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">error</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">string</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">labels</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">{`{ number?, name?, expiry?, cvv? }`}</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">…HTMLAttributes</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">all native div props (minus onChange)</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">—</td></tr>
          </tbody>
        </table>
      </div>

      <h3 id="api-helpers" className="mt-6 scroll-mt-20 text-lg font-semibold text-foreground">Helpers</h3>
      <div className="mt-3 overflow-x-auto rounded-lg border border-border">
        <table className="w-full text-left text-sm">
          <thead><tr className="border-b border-border bg-muted"><th className="px-4 py-3 font-semibold text-foreground">Export</th><th className="px-4 py-3 font-semibold text-foreground">Signature</th><th className="px-4 py-3 font-semibold text-foreground">Notes</th></tr></thead>
          <tbody className="divide-y divide-border">
            <tr><td className="px-4 py-3 font-mono text-xs">detectCreditCardNetwork</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">(s: string) =&gt; CreditCardNetworkTypes</td><td className="px-4 py-3 text-xs text-secondary-foreground">BIN-prefix lookup. Returns <code className="font-mono">&quot;unknown&quot;</code> when nothing matches.</td></tr>
            <tr><td className="px-4 py-3 font-mono text-xs">isValidCreditCardNumber</td><td className="px-4 py-3 font-mono text-xs text-secondary-foreground">(s: string) =&gt; boolean</td><td className="px-4 py-3 text-xs text-secondary-foreground">Luhn check. Use for client-side hints only — confirm with your PSP server-side.</td></tr>
          </tbody>
        </table>
      </div>

      <h2 id="accessibility" className="mt-10 scroll-mt-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground">Accessibility</h2>
      <ul className="mt-4 list-disc space-y-1 pl-6 text-sm text-secondary-foreground">
        <li>Each field declares <code className="font-mono text-xs">autocomplete=&quot;cc-number|cc-name|cc-exp|cc-csc&quot;</code> so password managers and platform autofill (iOS, Android, 1Password, Bitwarden) can complete the form.</li>
        <li><code className="font-mono text-xs">inputMode=&quot;numeric&quot;</code> on the digit fields surfaces a numeric keypad on touch devices.</li>
        <li>The error message uses <code className="font-mono text-xs">role=&quot;alert&quot;</code> and is wired to the wrapper via <code className="font-mono text-xs">aria-describedby</code>.</li>
        <li>The CVV reveal button has a state-aware <code className="font-mono text-xs">aria-label</code> (&ldquo;Show CVV&rdquo; / &ldquo;Hide CVV&rdquo;).</li>
        <li>Decorative card-face glows are marked <code className="font-mono text-xs">aria-hidden</code> so they&apos;re skipped by screen readers.</li>
      </ul>
    </div>
  );
};

export default CreditCardInputPage;
