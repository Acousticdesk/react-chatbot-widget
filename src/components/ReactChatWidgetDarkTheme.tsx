import { useEffect, type ReactNode } from "react";

interface ReactChatWidgetDarkThemeProps {
  children: ReactNode;
}

// todo akicha: ask ChatGPT to refine the dark theme based on the existing light theme
export function ReactChatWidgetDarkTheme({
  children,
}: ReactChatWidgetDarkThemeProps) {
  useEffect(() => {
    // todo akicha: instead of hardcoding the colors, see if we can get them from tailwind config
    // todo akicha: add the color definitions to the storybook
    document.body.style.setProperty(
      "--chatbot-widget-primary-color",
      "#80cbc4"
    );
    document.body.style.setProperty(
      "--chatbot-widget-secondary-color",
      "#26a69a"
    );
    document.body.style.setProperty(
      "--chatbot-widget-background-color",
      "#121212"
    );
    document.body.style.setProperty("--chatbot-widget-border-color", "#424242");
    document.body.style.setProperty("--chatbot-widget-text-color", "#ffffff");
    document.body.style.setProperty(
      "--chatbot-widget-text-secondary-color",
      "#bdbdbd"
    );
    document.body.style.setProperty(
      "--chatbot-widget-message-bubble-color",
      "#37474f"
    );
    document.body.style.setProperty(
      "--chatbot-widget-message-text-color",
      "#ffffff"
    );
    document.body.style.setProperty(
      "--chatbot-widget-bot-message-bubble-color",
      "#263238"
    );
    document.body.style.setProperty("--chatbot-widget-focus-color", "#4db6ac");
  }, []);

  return children;
}
