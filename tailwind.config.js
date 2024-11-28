export const colors = {
  primary: "#0078d7",
  secondary: "#38b2ac",
  "primary-hover": "#66b5f2",
  "primary-active": "#4da7e6",
  "secondary-hover": "#7fdcd1",
  "secondary-active": "#68d3c5",
  background: "#ffffff",
  border: "#e0e0e0",
  "text-primary": "#333333",
  "text-secondary": "#666666",
  "user-message-bubble": "#e1f5fe",
  "user-message-text": "#01579b",
  "bot-message-bubble": "#f9f9f9",
};

/** @type {import('tailwindcss').Config} */
export default {
  // we don't want to collide with the user defined tailwind classnames so we are adding the prefix
  prefix: "cw-",
  // this will help us prefix the .hover, .active, .focus, etc. tailwind generated CSS rules
  important: ".react-chatbot-widget",
  content: ["./src/**/*.{ts,tsx,html}", "./.storybook/**/*.{ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        primary: `var(--chatbot-widget-primary-color, ${colors.primary})`,
        secondary: `var(--chatbot-widget-secondary-color, ${colors.secondary})`,
        "primary-hover": `var(--chatbot-widget-primary-hover-color, ${colors["primary-hover"]})`,
        "primary-active": `var(--chatbot-widget-primary-active-color, ${colors["primary-active"]})`,
        "secondary-hover": `var(--chatbot-widget-secondary-hover-color, ${colors["secondary-hover"]})`,
        "secondary-active": `var(--chatbot-widget-secondary-active-color, ${colors["secondary-active"]})`,
        background: `var(--chatbot-widget-background-color, ${colors.background})`,
        border: `var(--chatbot-widget-border-color, ${colors.border})`,
        "text-primary": `var(--chatbot-widget-text-color, ${colors["text-primary"]})`,
        "text-secondary": `var(--chatbot-widget-text-color, ${colors["text-secondary"]})`,
        "user-message-bubble": `var(--chatbot-widget-message-bubble-color, ${colors["user-message-bubble"]})`,
        "user-message-text": `var(--chatbot-widget-message-text-color, ${colors["user-message-text"]})`,
        "bot-message-bubble": `var(--chatbot-widget-bot-message-bubble-color, ${colors["bot-message-bubble"]})`,
      },
    },
  },
  plugins: [],
};
