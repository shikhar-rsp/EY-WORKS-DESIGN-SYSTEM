import path from "path";
import fs from "fs/promises";

import { PreviewClient } from "@/components/sections/interactive/PreviewClient";

import type { ICodeEntry } from "@/types/docs";

interface IComponentPreviewProps {
  /**
   * Path relative to src/examples/, WITHOUT extension.
   * e.g. "button/button-primary"
   * ComponentPreview will automatically look for .tsx, .html, .vue, and .dart variants.
   */
  name: string;
  /** Optional title shown above the preview */
  title?: string;
  /** Extra classes merged onto the preview container (e.g. "items-start" for expanding components) */
  previewClassName?: string;
  /** The live rendered component */
  children: React.ReactNode;
}

const readSource = async (filePath: string): Promise<string | null> => {
  try {
    return await fs.readFile(filePath, "utf-8");
  } catch {
    return null;
  }
};

export const ComponentPreview = async (props: IComponentPreviewProps) => {
  const basePath = path.join(process.cwd(), "src", "examples");

  const [reactSource, htmlSource, vueSource, flutterSource] = await Promise.all([
    readSource(path.join(basePath, `${props.name}.tsx`)),
    readSource(path.join(basePath, `${props.name}.html`)),
    readSource(path.join(basePath, `${props.name}.vue`)),
    readSource(path.join(basePath, `${props.name}.dart`)),
  ]);

  const codes: ICodeEntry[] = [];

  if (reactSource !== null) {
    codes.push({ label: "React", language: "tsx", code: reactSource });
  } else {
    codes.push({
      label: "React",
      language: "tsx",
      code: `// Example source not found: src/examples/${props.name}.tsx`,
    });
  }

  if (htmlSource !== null) {
    codes.push({ label: "HTML", language: "html", code: htmlSource });
  }

  if (vueSource !== null) {
    codes.push({ label: "Vue", language: "vue", code: vueSource });
  }

  if (flutterSource !== null) {
    codes.push({ label: "Flutter", language: "dart", code: flutterSource });
  }

  return (
    <PreviewClient title={props.title} previewClassName={props.previewClassName} codes={codes}>
      {props.children}
    </PreviewClient>
  );
};
