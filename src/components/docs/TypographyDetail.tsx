"use client";

import {
  Typography,
  TypographyTitle,
  TypographyParagraph,
  TypographyText,
  TypographyLink,
} from "@/components/figma/Typography";

export const TypographyDetail = () => {
  return (
    <div className="mt-6 space-y-10">

      {/* ── Preview ──────────────────────────────────────────────── */}
      <div>
        <h3 id="detail-preview" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Preview
        </h3>
        <div className="mt-4 rounded-large border border-border p-6 space-y-3">
          <TypographyTitle level={1}>The quick brown fox</TypographyTitle>
          <TypographyParagraph>
            Typography helps establish hierarchy and communicate the relative importance of content.
          </TypographyParagraph>
          <div className="flex flex-wrap gap-3">
            <TypographyText>Default</TypographyText>
            <TypographyText type="secondary">Secondary</TypographyText>
            <TypographyText type="success">Success</TypographyText>
            <TypographyText type="warning">Warning</TypographyText>
            <TypographyText type="danger">Danger</TypographyText>
          </div>
          <TypographyLink href="#">Read the docs →</TypographyLink>
        </div>
      </div>

      {/* ── Title Levels ─────────────────────────────────────────── */}
      <div>
        <h3 id="detail-title-levels" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Title Levels
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          Use <code>level</code> (1–5) to render the correct semantic heading tag with matching size.
        </p>
        <div className="mt-4 rounded-large border border-border p-6 space-y-2">
          <TypographyTitle level={1}>H1 — Page Title (text-4xl)</TypographyTitle>
          <TypographyTitle level={2}>H2 — Section Title (text-3xl)</TypographyTitle>
          <TypographyTitle level={3}>H3 — Subsection Title (text-2xl)</TypographyTitle>
          <TypographyTitle level={4}>H4 — Card Title (text-xl)</TypographyTitle>
          <TypographyTitle level={5}>H5 — Label Title (text-lg)</TypographyTitle>
        </div>
      </div>

      {/* ── Paragraph ────────────────────────────────────────────── */}
      <div>
        <h3 id="detail-paragraph" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Paragraph
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          Block-level text with comfortable line-height for reading.
        </p>
        <div className="mt-4 rounded-large border border-border p-6 space-y-3">
          <TypographyParagraph>
            Design is the silent ambassador of your brand. Good design communicates values,
            intent, and personality without saying a word.
          </TypographyParagraph>
          <TypographyParagraph>
            Consistent use of typography creates rhythm and hierarchy — guiding the reader
            through content effortlessly.
          </TypographyParagraph>
        </div>
      </div>

      {/* ── Text Types ───────────────────────────────────────────── */}
      <div>
        <h3 id="detail-text-types" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Text Types
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          Semantic color intents for inline text.
        </p>
        <div className="mt-4 rounded-large border border-border p-6 space-y-2">
          {(["default", "secondary", "success", "warning", "danger"] as const).map((t) => (
            <div key={t} className="flex items-center gap-3">
              <span className="w-24 font-lexend text-xs text-muted-foreground capitalize">{t}</span>
              <TypographyText type={t}>The quick brown fox jumps over the lazy dog.</TypographyText>
            </div>
          ))}
        </div>
      </div>

      {/* ── Text Decorators ──────────────────────────────────────── */}
      <div>
        <h3 id="detail-text-decorators" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Text Decorators
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          Boolean props for inline formatting: <code>strong</code>, <code>italic</code>, <code>underline</code>, <code>delete</code>, <code>mark</code>, <code>code</code>.
        </p>
        <div className="mt-4 rounded-large border border-border p-6 flex flex-wrap gap-x-6 gap-y-3">
          <TypographyText strong>Strong</TypographyText>
          <TypographyText italic>Italic</TypographyText>
          <TypographyText underline>Underline</TypographyText>
          <TypographyText delete>Delete</TypographyText>
          <TypographyText mark>Mark</TypographyText>
          <TypographyText code>Code</TypographyText>
          <TypographyText strong italic underline>Combined</TypographyText>
        </div>
      </div>

      {/* ── Link ─────────────────────────────────────────────────── */}
      <div>
        <h3 id="detail-link" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Link
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          Inline anchor element with primary color and hover transition.
        </p>
        <div className="mt-4 rounded-large border border-border p-6 space-y-2">
          <TypographyParagraph>
            Read the full{" "}
            <TypographyLink href="#">documentation</TypographyLink>
            {" "}for usage and API reference.
          </TypographyParagraph>
          <div>
            <TypographyLink href="#">Standalone link →</TypographyLink>
          </div>
        </div>
      </div>

      {/* ── Composition ──────────────────────────────────────────── */}
      <div>
        <h3 id="detail-composition" className="mt-8 scroll-mt-20 text-lg font-semibold text-foreground">
          Composition with Typography wrapper
        </h3>
        <p className="mt-2 font-lexend text-sm text-muted-foreground">
          Wrap related content in <code>Typography</code> to apply shared font context.
        </p>
        <div className="mt-4 rounded-large border border-border p-6">
          <Typography className="space-y-3">
            <TypographyTitle level={2}>Getting Started</TypographyTitle>
            <TypographyParagraph>
              Install the package and import the components you need.
            </TypographyParagraph>
            <TypographyText type="secondary">
              See the{" "}
              <TypographyLink href="#">quickstart guide</TypographyLink>
              {" "}for detailed instructions.
            </TypographyText>
          </Typography>
        </div>
      </div>

    </div>
  );
};
