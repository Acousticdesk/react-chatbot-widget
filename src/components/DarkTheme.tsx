import { useEffect, type ReactNode } from "react";

interface DarkThemeProps {
  children: ReactNode;
}

// todo akicha: ask ChatGPT to refine the dark theme based on the existing light theme
export function DarkTheme({ children }: DarkThemeProps) {
  useEffect(() => {
    // todo akicha: instead of hardcoding the colors, see if we can get them from tailwind config
    // todo akicha: add the colors config to the storybook
    document.body.style.setProperty("--chatbot-widget-primary-color", "#fff");
    document.body.style.setProperty("--chatbot-widget-secondary-color", "#fff");
    document.body.style.setProperty(
      "--chatbot-widget-background-color",
      "#000"
    );
    document.body.style.setProperty("--chatbot-widget-border-color", "#fff");
    document.body.style.setProperty("--chatbot-widget-text-color", "#fff");
  }, []);

  return children;
}
