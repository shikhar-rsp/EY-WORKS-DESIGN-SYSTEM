import { ShowcaseHeader } from "./_components/ShowcaseHeader";

interface IShowcaseLayoutProps {
  children: React.ReactNode;
}

const ShowcaseLayout = (props: IShowcaseLayoutProps) => (
  <div className="min-h-screen bg-background font-sans text-foreground">
    <ShowcaseHeader />
    <main>{props.children}</main>
  </div>
);

export default ShowcaseLayout;
