import { Metadata } from "next";

interface IFoundationsLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Foundations",
  description:
    "Design foundations — icons, iconography, typography, colors, and spacing tokens that power the component library.",
  openGraph: {
    title: "Foundations | EYWorks Design System",
    description:
      "Design foundations — icons, iconography, typography, colors, and spacing tokens that power the component library.",
  },
  twitter: {
    title: "Foundations | EYWorks Design System",
    description:
      "Design foundations — icons, iconography, typography, colors, and spacing tokens that power the component library.",
  },
};

const FoundationsLayout = (props: IFoundationsLayoutProps) => {
  return <>{props.children}</>;
};

export default FoundationsLayout;
