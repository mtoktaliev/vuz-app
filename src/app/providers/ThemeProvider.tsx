import { useState, useEffect, useMemo, type ReactNode } from "react";
import { ConfigProvider, theme as antTheme } from "antd";
import { ThemeContext, type Theme } from "../../shared/lib/theme";

interface ThemeProviderProps {
  children: ReactNode;
}

const STORAGE_KEY = "app-theme";

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  // Tailwind dark mode — добавляем/убираем класс на <html>
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const contextValue = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {/* Ant Design ConfigProvider */}
      <ConfigProvider
        theme={{
          algorithm:
            theme === "dark"
              ? antTheme.darkAlgorithm
              : antTheme.defaultAlgorithm,
          token: {
            colorPrimary: "#6366f1", // замените на свой
          },
        }}
      >
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  );
};
