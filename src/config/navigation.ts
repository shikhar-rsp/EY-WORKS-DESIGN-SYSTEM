import {
  RADIO_GROUP_PAGE_ROUTE,
  BUTTON_PAGE_ROUTE,
  CALENDAR_PAGE_ROUTE,
  CHECKBOX_PAGE_ROUTE,
  COMPONENT_PAGE_ROUTE,
  INPUT_PAGE_ROUTE,
  INTRODUCTION_PAGE_ROUTE,
  UPLOAD_INPUT_PAGE_ROUTE,
  AVATAR_PAGE_ROUTE,
  LOZENGE_PAGE_ROUTE,
  TAG_PAGE_ROUTE,
  TABLE_PAGE_ROUTE,
  KEY_PAIR_VALUE_PAGE_ROUTE,
  ALERT_PAGE_ROUTE,
  TOAST_PAGE_ROUTE,
  DIVIDER_PAGE_ROUTE,
  PROFILE_CARD_PAGE_ROUTE,
  TOOLTIP_PAGE_ROUTE,
  PAGINATION_PAGE_ROUTE,
  ACCORDION_PAGE_ROUTE,
  TOP_BAR_PAGE_ROUTE,
  SIDEBAR_PAGE_ROUTE,
  PROGRESS_MENU_PAGE_ROUTE,
  BREADCRUMB_PAGE_ROUTE,
  TABS_PAGE_ROUTE,
  LABEL_PAGE_ROUTE,
  SKELETON_PAGE_ROUTE,
  KBD_PAGE_ROUTE,
  ASPECT_RATIO_PAGE_ROUTE,
  SPINNER_PAGE_ROUTE,
  PROGRESS_PAGE_ROUTE,
  CARD_PAGE_ROUTE,
  TEXTAREA_PAGE_ROUTE,
  SWITCH_PAGE_ROUTE,
  NATIVE_SELECT_PAGE_ROUTE,
  COLLAPSIBLE_PAGE_ROUTE,
  FIELD_PAGE_ROUTE,
  INPUT_GROUP_PAGE_ROUTE,
  SLIDER_PAGE_ROUTE,
  EMPTY_PAGE_ROUTE,
  DIALOG_PAGE_ROUTE,
  POPOVER_PAGE_ROUTE,
  DROPDOWN_MENU_PAGE_ROUTE,
  TOGGLE_GROUP_PAGE_ROUTE,
  HOVER_CARD_PAGE_ROUTE,
  ALERT_DIALOG_PAGE_ROUTE,
  SHEET_PAGE_ROUTE,
  DRAWER_PAGE_ROUTE,
  SELECT_PAGE_ROUTE,
  SCROLL_AREA_PAGE_ROUTE,
  INPUT_OTP_PAGE_ROUTE,
  CONTEXT_MENU_PAGE_ROUTE,
  MENUBAR_PAGE_ROUTE,
  COMMAND_PAGE_ROUTE,
  NAVIGATION_MENU_PAGE_ROUTE,
  RESIZABLE_PAGE_ROUTE,
  CAROUSEL_PAGE_ROUTE,
  FORM_PAGE_ROUTE,
  INPUT_NUMBER_PAGE_ROUTE,
  TIME_PICKER_PAGE_ROUTE,
  BADGE_PAGE_ROUTE,
  SEGMENTED_PAGE_ROUTE,
  STEPS_PAGE_ROUTE,
  LIST_PAGE_ROUTE,
  RESULT_PAGE_ROUTE,
  POPCONFIRM_PAGE_ROUTE,
  TYPOGRAPHY_COMPONENT_PAGE_ROUTE,
  CREDIT_CARD_INPUT_PAGE_ROUTE,
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

// Static pages
const PAGES: INavItem[] = [
  { name: "Introduction", href: INTRODUCTION_PAGE_ROUTE },
  { name: "Theming", href: `${INTRODUCTION_PAGE_ROUTE}${THEMING_PAGE_ROUTE}` },
  { name: "Components", href: COMPONENT_PAGE_ROUTE },
];

// Foundations pages — add new foundations pages HERE only.
const FOUNDATIONS: INavItem[] = [
  {
    name: "Iconography",
    href: `${FOUNDATIONS_PAGE_ROUTE}${ICONOGRAPHY_PAGE_ROUTE}`,
  },
  {
    name: "Typography",
    href: `${FOUNDATIONS_PAGE_ROUTE}${TYPOGRAPHY_PAGE_ROUTE}`,
  },
  { name: "Color", href: `${FOUNDATIONS_PAGE_ROUTE}${COLOR_PAGE_ROUTE}` },
];

// All components — add new components HERE only.
// Sidebar, search modal, and docs index all read from this array.
export const COMPONENTS: INavItem[] = [
  { name: "Accordion", href: `${COMPONENT_PAGE_ROUTE}${ACCORDION_PAGE_ROUTE}` },
  { name: "Avatar", href: `${COMPONENT_PAGE_ROUTE}${AVATAR_PAGE_ROUTE}` },
  {
    name: "Breadcrumb",
    href: `${COMPONENT_PAGE_ROUTE}${BREADCRUMB_PAGE_ROUTE}`,
  },
  { name: "Button", href: `${COMPONENT_PAGE_ROUTE}${BUTTON_PAGE_ROUTE}` },
  { name: "Calendar", href: `${COMPONENT_PAGE_ROUTE}${CALENDAR_PAGE_ROUTE}` },
  { name: "Checkbox", href: `${COMPONENT_PAGE_ROUTE}${CHECKBOX_PAGE_ROUTE}` },
  { name: "Divider", href: `${COMPONENT_PAGE_ROUTE}${DIVIDER_PAGE_ROUTE}` },
  { name: "Input", href: `${COMPONENT_PAGE_ROUTE}${INPUT_PAGE_ROUTE}` },
  {
    name: "Key Pair Value",
    href: `${COMPONENT_PAGE_ROUTE}${KEY_PAIR_VALUE_PAGE_ROUTE}`,
  },
  { name: "Lozenge", href: `${COMPONENT_PAGE_ROUTE}${LOZENGE_PAGE_ROUTE}` },
  {
    name: "Pagination",
    href: `${COMPONENT_PAGE_ROUTE}${PAGINATION_PAGE_ROUTE}`,
  },
  {
    name: "Profile Card",
    href: `${COMPONENT_PAGE_ROUTE}${PROFILE_CARD_PAGE_ROUTE}`,
  },
  {
    name: "Progress Menu",
    href: `${COMPONENT_PAGE_ROUTE}${PROGRESS_MENU_PAGE_ROUTE}`,
  },
  {
    name: "Radio Group",
    href: `${COMPONENT_PAGE_ROUTE}${RADIO_GROUP_PAGE_ROUTE}`,
  },
  { name: "Alert", href: `${COMPONENT_PAGE_ROUTE}${ALERT_PAGE_ROUTE}` },
  { name: "Sidebar", href: `${COMPONENT_PAGE_ROUTE}${SIDEBAR_PAGE_ROUTE}` },
  { name: "Tabs", href: `${COMPONENT_PAGE_ROUTE}${TABS_PAGE_ROUTE}` },
  { name: "Table", href: `${COMPONENT_PAGE_ROUTE}${TABLE_PAGE_ROUTE}` },
  { name: "Tag", href: `${COMPONENT_PAGE_ROUTE}${TAG_PAGE_ROUTE}` },
  { name: "Toast", href: `${COMPONENT_PAGE_ROUTE}${TOAST_PAGE_ROUTE}` },
  { name: "Tooltip", href: `${COMPONENT_PAGE_ROUTE}${TOOLTIP_PAGE_ROUTE}` },
  { name: "Top Bar", href: `${COMPONENT_PAGE_ROUTE}${TOP_BAR_PAGE_ROUTE}` },
  {
    name: "Upload Input",
    href: `${COMPONENT_PAGE_ROUTE}${UPLOAD_INPUT_PAGE_ROUTE}`,
  },
  // Batch 1 — shadcn ports
  { name: "Label", href: `${COMPONENT_PAGE_ROUTE}${LABEL_PAGE_ROUTE}` },
  { name: "Skeleton", href: `${COMPONENT_PAGE_ROUTE}${SKELETON_PAGE_ROUTE}` },
  { name: "Kbd", href: `${COMPONENT_PAGE_ROUTE}${KBD_PAGE_ROUTE}` },
  {
    name: "Aspect Ratio",
    href: `${COMPONENT_PAGE_ROUTE}${ASPECT_RATIO_PAGE_ROUTE}`,
  },
  { name: "Spinner", href: `${COMPONENT_PAGE_ROUTE}${SPINNER_PAGE_ROUTE}` },
  // Batch 2 — shadcn ports
  { name: "Progress", href: `${COMPONENT_PAGE_ROUTE}${PROGRESS_PAGE_ROUTE}` },
  { name: "Card", href: `${COMPONENT_PAGE_ROUTE}${CARD_PAGE_ROUTE}` },
  { name: "Textarea", href: `${COMPONENT_PAGE_ROUTE}${TEXTAREA_PAGE_ROUTE}` },
  { name: "Switch", href: `${COMPONENT_PAGE_ROUTE}${SWITCH_PAGE_ROUTE}` },
  {
    name: "Native Select",
    href: `${COMPONENT_PAGE_ROUTE}${NATIVE_SELECT_PAGE_ROUTE}`,
  },
  // Batch 3 — shadcn ports
  {
    name: "Collapsible",
    href: `${COMPONENT_PAGE_ROUTE}${COLLAPSIBLE_PAGE_ROUTE}`,
  },
  { name: "Field", href: `${COMPONENT_PAGE_ROUTE}${FIELD_PAGE_ROUTE}` },
  {
    name: "Input Group",
    href: `${COMPONENT_PAGE_ROUTE}${INPUT_GROUP_PAGE_ROUTE}`,
  },
  { name: "Slider", href: `${COMPONENT_PAGE_ROUTE}${SLIDER_PAGE_ROUTE}` },
  { name: "Empty", href: `${COMPONENT_PAGE_ROUTE}${EMPTY_PAGE_ROUTE}` },
  // Batch 4 — shadcn ports
  { name: "Dialog", href: `${COMPONENT_PAGE_ROUTE}${DIALOG_PAGE_ROUTE}` },
  { name: "Popover", href: `${COMPONENT_PAGE_ROUTE}${POPOVER_PAGE_ROUTE}` },
  {
    name: "Dropdown Menu",
    href: `${COMPONENT_PAGE_ROUTE}${DROPDOWN_MENU_PAGE_ROUTE}`,
  },
  {
    name: "Toggle Group",
    href: `${COMPONENT_PAGE_ROUTE}${TOGGLE_GROUP_PAGE_ROUTE}`,
  },
  {
    name: "Hover Card",
    href: `${COMPONENT_PAGE_ROUTE}${HOVER_CARD_PAGE_ROUTE}`,
  },
  // Batch 5 — shadcn ports
  {
    name: "Alert Dialog",
    href: `${COMPONENT_PAGE_ROUTE}${ALERT_DIALOG_PAGE_ROUTE}`,
  },
  { name: "Sheet", href: `${COMPONENT_PAGE_ROUTE}${SHEET_PAGE_ROUTE}` },
  { name: "Drawer", href: `${COMPONENT_PAGE_ROUTE}${DRAWER_PAGE_ROUTE}` },
  { name: "Select", href: `${COMPONENT_PAGE_ROUTE}${SELECT_PAGE_ROUTE}` },
  {
    name: "Scroll Area",
    href: `${COMPONENT_PAGE_ROUTE}${SCROLL_AREA_PAGE_ROUTE}`,
  },
  // Batch 6 — shadcn ports
  { name: "Input OTP", href: `${COMPONENT_PAGE_ROUTE}${INPUT_OTP_PAGE_ROUTE}` },
  {
    name: "Context Menu",
    href: `${COMPONENT_PAGE_ROUTE}${CONTEXT_MENU_PAGE_ROUTE}`,
  },
  { name: "Menubar", href: `${COMPONENT_PAGE_ROUTE}${MENUBAR_PAGE_ROUTE}` },
  { name: "Command", href: `${COMPONENT_PAGE_ROUTE}${COMMAND_PAGE_ROUTE}` },
  // Batch 7 — shadcn ports
  {
    name: "Navigation Menu",
    href: `${COMPONENT_PAGE_ROUTE}${NAVIGATION_MENU_PAGE_ROUTE}`,
  },
  { name: "Resizable", href: `${COMPONENT_PAGE_ROUTE}${RESIZABLE_PAGE_ROUTE}` },
  { name: "Carousel", href: `${COMPONENT_PAGE_ROUTE}${CAROUSEL_PAGE_ROUTE}` },
  // Batch 8 — AntD ports
  { name: "Badge", href: `${COMPONENT_PAGE_ROUTE}${BADGE_PAGE_ROUTE}` },
  { name: "Form", href: `${COMPONENT_PAGE_ROUTE}${FORM_PAGE_ROUTE}` },
  {
    name: "Input Number",
    href: `${COMPONENT_PAGE_ROUTE}${INPUT_NUMBER_PAGE_ROUTE}`,
  },
  { name: "List", href: `${COMPONENT_PAGE_ROUTE}${LIST_PAGE_ROUTE}` },
  {
    name: "Popconfirm",
    href: `${COMPONENT_PAGE_ROUTE}${POPCONFIRM_PAGE_ROUTE}`,
  },
  { name: "Result", href: `${COMPONENT_PAGE_ROUTE}${RESULT_PAGE_ROUTE}` },
  { name: "Segmented", href: `${COMPONENT_PAGE_ROUTE}${SEGMENTED_PAGE_ROUTE}` },
  { name: "Steps", href: `${COMPONENT_PAGE_ROUTE}${STEPS_PAGE_ROUTE}` },
  {
    name: "Time Picker",
    href: `${COMPONENT_PAGE_ROUTE}${TIME_PICKER_PAGE_ROUTE}`,
  },
  {
    name: "Typography",
    href: `${COMPONENT_PAGE_ROUTE}${TYPOGRAPHY_COMPONENT_PAGE_ROUTE}`,
  },
  // Batch 9 — domain components
  {
    name: "Credit Card Input",
    href: `${COMPONENT_PAGE_ROUTE}${CREDIT_CARD_INPUT_PAGE_ROUTE}`,
    status: "new",
  },
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
