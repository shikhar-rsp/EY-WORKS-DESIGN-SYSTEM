"use client";

import { CopyButton } from "@/components/fragments/button/CopyButton";

import type { TokenTypes } from "@/lib/highlight";

import { cn } from "@/lib/utils";
import { highlightCode, splitTokensByLine } from "@/lib/highlight";

interface ICodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

// ─── Token → CSS class ────────────────────────────────────────────

const TOKEN_CLASS: Record<TokenTypes, string> = {
  comment: "code-token-comment",
  string: "code-token-string",
  keyword: "code-token-keyword",
  builtin: "code-token-builtin",
  number: "code-token-number",
  tag: "code-token-tag",
  attr: "code-token-attr",
  punct: "code-token-punct",
  operator: "code-token-operator",
  function: "code-token-function",
  type: "code-token-type",
  plain: "",
};

// ─── Component ────────────────────────────────────────────────────

export const CodeBlock = (props: ICodeBlockProps) => {
  const { code, language = "tsx", className } = props;

  const tokens = highlightCode(code, language);
  const lines = splitTokensByLine(tokens);

  return (
    <div className={cn("code-block-root relative font-mono", className)}>
      {/* Max-height container with internal scroll */}
      <div className="code-block-scroll overflow-auto py-4">
        <table className="code-block-table w-full border-collapse">
          <tbody>
            {lines.map((lineTokens, lineIndex) => (
              <tr key={lineIndex} className="code-block-line group">
                {/* Line number gutter */}
                <td
                  className="code-block-lineno select-none"
                  aria-hidden="true"
                >
                  {lineIndex + 1}
                </td>
                {/* Code content */}
                <td className="code-block-linecontent">
                  {lineTokens.length === 0 ? (
                    // Empty line — preserve height via non-breaking space
                    <span>&nbsp;</span>
                  ) : (
                    lineTokens.map((tok, tIdx) => {
                      const cls = TOKEN_CLASS[tok.type];
                      return cls ? (
                        <span key={tIdx} className={cls}>
                          {tok.text}
                        </span>
                      ) : (
                        <span key={tIdx}>{tok.text}</span>
                      );
                    })
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <CopyButton code={code} />
    </div>
  );
};
