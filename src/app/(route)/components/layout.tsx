import { Metadata } from "next";

interface IComponentsLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Components",
  description:
    "Browse all components — buttons, inputs, toggles, checkboxes, and more. Each component includes live previews, API references, and copy-ready code.",
  openGraph: {
    title: "Components | [Brand Name] Design System",
    description:
      "Browse all components — buttons, inputs, toggles, checkboxes, and more.",
  },
  twitter: {
    title: "Components | [Brand Name] Design System",
    description:
      "Browse all components — buttons, inputs, toggles, checkboxes, and more.",
  },
};

const ComponentsLayout = (props: IComponentsLayoutProps) => {
  return <>{props.children}</>;
};

export default ComponentsLayout;
