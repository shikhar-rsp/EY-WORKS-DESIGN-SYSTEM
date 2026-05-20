// ─── Lightweight syntax highlighter ───────────────────────────────
// Zero-dependency tokenizer for TSX / JSX / TS / JS / HTML / Vue / Dart / CSS.
// Returns a flat array of tokens the UI renders as colored spans.
//
// This is NOT a full parser — it's a regex-driven tokenizer tuned to look
// great for code snippets in docs. It handles: comments, strings (single /
// double / template), JSX tag names, JSX attribute names, numbers, keywords,
// builtins, and punctuation. For unknown languages it falls back to generic
// identifier + string + number highlighting.

export type TokenTypes =
  | "comment"
  | "string"
  | "keyword"
  | "builtin"
  | "number"
  | "tag"
  | "attr"
  | "punct"
  | "operator"
  | "function"
  | "type"
  | "plain";

export interface IHighlightToken {
  type: TokenTypes;
  text: string;
}

// ─── Keyword tables ────────────────────────────────────────────────

const JS_KEYWORDS = new Set([
  "import",
  "from",
  "export",
  "default",
  "const",
  "let",
  "var",
  "function",
  "return",
  "if",
  "else",
  "for",
  "while",
  "do",
  "switch",
  "case",
  "break",
  "continue",
  "new",
  "class",
  "extends",
  "implements",
  "interface",
  "type",
  "enum",
  "async",
  "await",
  "try",
  "catch",
  "finally",
  "throw",
  "typeof",
  "instanceof",
  "in",
  "of",
  "as",
  "public",
  "private",
  "protected",
  "readonly",
  "static",
  "yield",
  "void",
  "delete",
  "declare",
  "namespace",
  "module",
  "satisfies",
  "keyof",
  "infer",
  "never",
]);

const JS_BUILTINS = new Set([
  "null",
  "undefined",
  "true",
  "false",
  "this",
  "super",
  "NaN",
  "Infinity",
  "console",
  "document",
  "window",
  "globalThis",
  "Array",
  "Object",
  "String",
  "Number",
  "Boolean",
  "Promise",
  "Error",
  "Map",
  "Set",
  "Symbol",
  "Math",
  "JSON",
  "Date",
  "RegExp",
  "React",
]);

const DART_KEYWORDS = new Set([
  "import",
  "const",
  "final",
  "var",
  "void",
  "return",
  "if",
  "else",
  "for",
  "while",
  "do",
  "switch",
  "case",
  "break",
  "continue",
  "new",
  "class",
  "extends",
  "implements",
  "with",
  "async",
  "await",
  "try",
  "catch",
  "finally",
  "throw",
  "static",
  "required",
  "abstract",
  "factory",
  "get",
  "set",
  "typedef",
  "part",
  "show",
  "hide",
  "as",
  "in",
  "is",
  "late",
  "mixin",
  "on",
  "yield",
  "rethrow",
]);

const DART_BUILTINS = new Set([
  "null",
  "true",
  "false",
  "this",
  "super",
  "override",
  "String",
  "int",
  "double",
  "num",
  "bool",
  "List",
  "Map",
  "Set",
  "Future",
  "Stream",
  "dynamic",
  "Object",
]);

const CSS_KEYWORDS = new Set([
  "important",
  "inherit",
  "initial",
  "unset",
  "auto",
  "none",
  "block",
  "inline",
  "flex",
  "grid",
  "absolute",
  "relative",
  "fixed",
  "sticky",
]);

// ─── Tokenizer ─────────────────────────────────────────────────────

// Master regex — each alternation group maps to a token category.
//  1: block + line comments
//  2: strings (", ', `)
//  3: JSX tag start  <Name  or  </Name
//  4: JSX tag close  />  or  >
//  5: numeric literal (incl. hex)
//  6: identifier
//  7: operator / punctuation
//  8: whitespace (kept as plain so indentation survives)
const MASTER_RE =
  /(\/\/[^\n]*|\/\*[\s\S]*?\*\/|<!--[\s\S]*?-->)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)|(<\/?[A-Za-z][\w.:-]*)|(\/?>)|(\b0x[0-9a-fA-F]+|\b\d+(?:\.\d+)?(?:px|rem|em|%|vh|vw)?\b)|(#[0-9a-fA-F]{3,8}\b|[A-Za-z_$@][\w$-]*)|([=+\-*/%<>!&|?:{}()\[\];,.])|(\s+)/g;

const isKeyword = (word: string, language: string): boolean => {
  if (language === "dart") return DART_KEYWORDS.has(word);
  if (language === "css" || language === "scss") return CSS_KEYWORDS.has(word);
  return JS_KEYWORDS.has(word);
};

const isBuiltin = (word: string, language: string): boolean => {
  if (language === "dart") return DART_BUILTINS.has(word);
  return JS_BUILTINS.has(word);
};

// Look backwards through emitted tokens to decide whether we're inside a JSX
// tag (which makes `ident=` an attribute) or ordinary JS (plain assignment).
const isInsideJsxTag = (tokens: IHighlightToken[]): boolean => {
  for (let i = tokens.length - 1; i >= 0; i--) {
    const t = tokens[i];
    if (t.type === "tag") return true;
    if (t.type === "punct") {
      if (t.text === ">") return false;
      if (t.text === "/>") return false;
      if (t.text === "{" || t.text === "}" || t.text === ";") return false;
    }
  }
  return false;
};

export const highlightCode = (
  code: string,
  language: string = "tsx",
): IHighlightToken[] => {
  // Normalise line endings so line numbering is stable.
  const source = code.replace(/\r\n?/g, "\n");
  const tokens: IHighlightToken[] = [];
  const lang = language.toLowerCase();

  // Bash / shell: keep it mostly plain but still color strings + comments.
  const isShell = lang === "bash" || lang === "sh" || lang === "shell";

  let cursor = 0;
  MASTER_RE.lastIndex = 0;
  let m: RegExpExecArray | null;

  while ((m = MASTER_RE.exec(source)) !== null) {
    if (m.index > cursor) {
      tokens.push({ type: "plain", text: source.slice(cursor, m.index) });
    }

    const [
      full,
      comment,
      str,
      jsxOpen,
      jsxClose,
      num,
      ident,
      op,
      ws,
    ] = m;

    if (comment) {
      tokens.push({ type: "comment", text: full });
    } else if (str) {
      tokens.push({ type: "string", text: full });
    } else if (jsxOpen) {
      // Split `</Button` → punct `</` + tag `Button`
      // or      `<Button` → punct `<`  + tag `Button`
      if (full.startsWith("</")) {
        tokens.push({ type: "punct", text: "</" });
        tokens.push({ type: "tag", text: full.slice(2) });
      } else {
        tokens.push({ type: "punct", text: "<" });
        tokens.push({ type: "tag", text: full.slice(1) });
      }
    } else if (jsxClose) {
      tokens.push({ type: "punct", text: full });
    } else if (num) {
      tokens.push({ type: "number", text: full });
    } else if (ident) {
      // Hex color literal (#fff, #f8785e, …)
      if (ident.startsWith("#") && /^#[0-9a-fA-F]{3,8}$/.test(ident)) {
        tokens.push({ type: "number", text: ident });
      } else if (isShell) {
        tokens.push({ type: "plain", text: ident });
      } else if (isKeyword(ident, lang)) {
        tokens.push({ type: "keyword", text: ident });
      } else if (isBuiltin(ident, lang)) {
        tokens.push({ type: "builtin", text: ident });
      } else {
        // Disambiguate by what follows.
        const next = source[MASTER_RE.lastIndex] ?? "";
        if (next === "(") {
          tokens.push({ type: "function", text: ident });
        } else if (next === "=" && source[MASTER_RE.lastIndex + 1] !== "=") {
          if (isInsideJsxTag(tokens)) {
            tokens.push({ type: "attr", text: ident });
          } else {
            tokens.push({ type: "plain", text: ident });
          }
        } else if (/^[A-Z]/.test(ident)) {
          // PascalCase → treat as type/component identifier (consistent blue)
          tokens.push({ type: "type", text: ident });
        } else {
          tokens.push({ type: "plain", text: ident });
        }
      }
    } else if (op) {
      tokens.push({ type: "punct", text: op });
    } else if (ws) {
      tokens.push({ type: "plain", text: ws });
    }

    cursor = MASTER_RE.lastIndex;
  }

  if (cursor < source.length) {
    tokens.push({ type: "plain", text: source.slice(cursor) });
  }

  return tokens;
};

// ─── Line splitter ─────────────────────────────────────────────────
// Converts a flat token stream into rows of tokens, one row per source line.
// Whitespace tokens containing "\n" are split so the line break lands at a
// token boundary.

export const splitTokensByLine = (
  tokens: IHighlightToken[],
): IHighlightToken[][] => {
  const lines: IHighlightToken[][] = [[]];

  for (const tok of tokens) {
    if (!tok.text.includes("\n")) {
      lines[lines.length - 1].push(tok);
      continue;
    }
    const parts = tok.text.split("\n");
    for (let i = 0; i < parts.length; i++) {
      if (parts[i].length > 0) {
        lines[lines.length - 1].push({ type: tok.type, text: parts[i] });
      }
      if (i < parts.length - 1) {
        lines.push([]);
      }
    }
  }

  // Trim a trailing empty line introduced by files ending with "\n".
  if (
    lines.length > 1 &&
    lines[lines.length - 1].length === 0
  ) {
    lines.pop();
  }

  return lines;
};
