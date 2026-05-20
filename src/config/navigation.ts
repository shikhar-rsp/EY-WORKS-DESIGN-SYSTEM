import {
  ACCORDION_PAGE_ROUTE,
  ALERT_PAGE_ROUTE,
  BADGE_PAGE_ROUTE,
  BREADCRUMB_PAGE_ROUTE,
  BUTTON_PAGE_ROUTE,
  COMPONENT_PAGE_ROUTE,
  INTRODUCTION_PAGE_ROUTE,
  FOUNDATIONS_PAGE_ROUTE,
  ICONOGRAPHY_PAGE_ROUTE,
  TYPOGRAPHY_PAGE_ROUTE,
  COLOR_PAGE_ROUTE,
  THEMING_PAGE_ROUTE,
} from "@/config/page";

// --- Interfaces ---

interface INavItem {
  name: string;
  href: string;
  status?: "new" | "updated";
}

interface INavLink {
  name: string;
  href: string;
}

interface ISidebarSection {
  title: string;
  mobileOnly?: boolean;
  items: INavItem[];
}

type SearchSectionTypes = "Pages" | "Components" | "Foundations";

interface ISearchItem {
  name: string;
  href: string;
  section: SearchSectionTypes;
}

// --- Single source of truth ---

const PAGES: INavItem[] = [
  { name: "Introduction", href: INTRODUCTION_PAGE_ROUTE },
  { name: "Theming", href: `${INTRODUCTION_PAGE_ROUTE}${THEMING_PAGE_ROUTE}` },
  { name: "Components", href: COMPONENT_PAGE_ROUTE },
];

const FOUNDATIONS: INavItem[] = [
  { name: "Iconography", href: `${FOUNDATIONS_PAGE_ROUTE}${ICONOGRAPHY_PAGE_ROUTE}` },
  { name: "Typography", href: `${FOUNDATIONS_PAGE_ROUTE}${TYPOGRAPHY_PAGE_ROUTE}` },
  { name: "Color", href: `${FOUNDATIONS_PAGE_ROUTE}${COLOR_PAGE_ROUTE}` },
];

// EY-main branch — only the five canonical components.
export const COMPONENTS: INavItem[] = [
  { name: "Accordion", href: `${COMPONENT_PAGE_ROUTE}${ACCORDION_PAGE_ROUTE}` },
  { name: "Alert", href: `${COMPONENT_PAGE_ROUTE}${ALERT_PAGE_ROUTE}` },
  { name: "Badge", href: `${COMPONENT_PAGE_ROUTE}${BADGE_PAGE_ROUTE}` },
  { name: "Breadcrumb", href: `${COMPONENT_PAGE_ROUTE}${BREADCRUMB_PAGE_ROUTE}` },
  { name: "Button", href: `${COMPONENT_PAGE_ROUTE}${BUTTON_PAGE_ROUTE}` },
];

// --- Derived configs ---

export const NAV_LINKS: INavLink[] = [
  { name: "Docs", href: INTRODUCTION_PAGE_ROUTE },
  { name: "Components", href: COMPONENT_PAGE_ROUTE },
];

export const SIDEBAR_SECTIONS: ISidebarSection[] = [
  {
    title: "Home",
    mobileOnly: true,
    items: [{ name: "Components", href: COMPONENT_PAGE_ROUTE }],
  },
  {
    title: "Getting Started",
    items: PAGES,
  },
  {
    title: "Foundations",
    items: FOUNDATIONS,
  },
  {
    title: "Components",
    items: COMPONENTS,
  },
];

export const SEARCH_ITEMS: ISearchItem[] = [
  ...NAV_LINKS.map((page) => ({ ...page, section: "Pages" as const })),
  ...FOUNDATIONS.map((item) => ({ ...item, section: "Foundations" as const })),
  ...COMPONENTS.map((comp) => ({ ...comp, section: "Components" as const })),
];
