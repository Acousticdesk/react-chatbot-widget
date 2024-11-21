/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: `var(--chatbot-widget-primary-color, #0078d7)`,
        secondary: `var(--chatbot-widget-secondary-color, #38b2ac)`,
        "primary-hover": `var(--chatbot-widget-primary-hover-color, #66b5f2)`,
        "primary-active": `var(--chatbot-widget-primary-active-color, #4da7e6)`,
        "secondary-hover": `var(--chatbot-widget-secondary-hover-color, #7fdcd1)`,
        "secondary-active": `var(--chatbot-widget-secondary-active-color, #68d3c5)`,
        background: `var(--chatbot-widget-background-color, #ffffff)`,
        border: `var(--chatbot-widget-border-color, #e0e0e0)`,
        "text-primary": `var(--chatbot-widget-text-color, #333333)`,
        "text-secondary": `var(--chatbot-widget-text-secondary-color, #666666)`,
        "user-message-bubble": `var(--chatbot-widget-message-bubble-color, #e1f5fe)`,
        "user-message-text": `var(--chatbot-widget-message-text-color, #01579b)`,
        "bot-message-bubble": `var(--chatbot-widget-bot-message-bubble-color, #f9f9f9)`,
      },
    },
  },
  plugins: [],
};
