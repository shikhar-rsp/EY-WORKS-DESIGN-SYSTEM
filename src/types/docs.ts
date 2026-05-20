export interface ICodeEntry {
  /** Display label for the tab, e.g. "React" or "HTML" */
  label: string;
  /** File language identifier, e.g. "tsx" or "html" */
  language: string;
  /** Raw source code string */
  code: string;
}
