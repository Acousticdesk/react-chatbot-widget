import { useEffect, type ReactNode } from "react";

interface ReactChatWidgetDarkThemeProps {
  children: ReactNode;
}

export function ReactChatWidgetDarkTheme({
  children,
}: ReactChatWidgetDarkThemeProps) {
  useEffect(() => {
    // todo akicha: add the color definitions to the storybook
    document.documentElement.classList.add("dark");

    return () => {
      document.documentElement.classList.remove("dark");
    };
  }, []);

  return children;
}
