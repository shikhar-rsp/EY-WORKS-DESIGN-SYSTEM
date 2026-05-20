import type { Metadata, Viewport } from "next";

import { Geist, Geist_Mono, Lexend } from "next/font/google";

import { ThemeProvider } from "@/components/providers/ThemeProvider";

import { cn } from "@/lib/utils";

import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  display: "optional", // Faster rendering - no layout shift
  weight: ["200", "400", "700", "800"],
  variable: "--font-geist-sans",
  preload: true,
  fallback: ["system-ui", "arial"],
  adjustFontFallback: true,
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "optional", // Faster rendering - no layout shift
  weight: ["200", "400", "700", "800"],
  variable: "--font-geist-mono",
  preload: true,
  fallback: ["system-ui", "arial"],
  adjustFontFallback: true,
});

const lexend = Lexend({
  subsets: ["latin"],
  display: "optional", // Faster rendering - no layout shift
  weight: ["200", "400", "700", "800"],
  variable: "--font-lexend",
  preload: true,
  fallback: ["system-ui", "arial"],
  adjustFontFallback: true,
});

// Viewport configuration for proper iOS Safari rendering
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover", // Extends content into safe areas for iOS
  themeColor: "#fafafa", // Match background color for iOS status bar
};

export const metadata: Metadata = {
  title: {
    default: "EYWorks Design System",
    template: "%s | EYWorks DS",
  },
  description:
    "A collection of reusable components, design tokens, and guidelines for building consistent, accessible UIs.",
  keywords: ["design system", "components", "UI"],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "EYWorks Design System",
    description:
      "A collection of reusable components, design tokens, and guidelines for building consistent, accessible UIs.",
    siteName: "EYWorks Design System",
  },
  twitter: {
    card: "summary_large_image",
    title: "EYWorks Design System",
    description:
      "A collection of reusable components, design tokens, and guidelines for building consistent, accessible UIs.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full antialiased",
        geistSans.variable,
        geistMono.variable,
        lexend.variable,
      )}
    >
      <head>
        {/* Anti-flash script: reads localStorage and applies .dark before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('eyds-theme');if(t==='dark')document.documentElement.classList.add('dark');}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
