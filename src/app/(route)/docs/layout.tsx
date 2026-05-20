import { Metadata } from "next";

interface IDocsLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Introduction",
  description:
    "A collection of reusable components, design tokens, and guidelines for building consistent, accessible UIs.",
  openGraph: {
    title: "Introduction | EYWorks Design System",
    description:
      "A collection of reusable components, design tokens, and guidelines for building consistent, accessible UIs.",
  },
  twitter: {
    title: "Introduction | EYWorks Design System",
    description:
      "A collection of reusable components, design tokens, and guidelines for building consistent, accessible UIs.",
  },
};

const DocsLayout = (props: IDocsLayoutProps) => {
  return <>{props.children}</>;
};

export default DocsLayout;
