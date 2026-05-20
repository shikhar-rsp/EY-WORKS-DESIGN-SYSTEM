"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";

type ThemeTypes = "light" | "dark";

interface IThemeContext {
  theme: ThemeTypes;
  toggleTheme: () => void;
}

const STORAGE_KEY = "eyds-theme";

const ThemeContext = createContext<IThemeContext>({
  theme: "light",
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

interface IThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = (props: IThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeTypes>("light");

  // Sync React state from localStorage on mount via rAF callback.
  // The inline script in layout.tsx already applied the .dark class
  // before hydration, so the CSS is correct immediately — this just
  // syncs the React state (e.g. which icon to show in the toggle).
  useEffect(() => {
    const rafId = requestAnimationFrame(() => {
      const stored = localStorage.getItem(STORAGE_KEY) as ThemeTypes | null;
      if (stored) setTheme(stored);
    });
    return () => cancelAnimationFrame(rafId);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "light" ? "dark" : "light";
      localStorage.setItem(STORAGE_KEY, next);
      document.documentElement.classList.toggle("dark", next === "dark");
      return next;
    });
  }, []);

  return (
    <ThemeContext value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext>
  );
};
