const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // todo akicha: also add light and dark variants
      // todo akicha: text-primary, secondary, muted, link, error
      // todo akicha: add button variants, inputs, shadows
      // todo akicha: the hover, focus, etc states can be shared between multiple components like inputs and buttons
      colors: {
        primary: `var(--chatbot-widget-primary-color, ${colors.gray[800]})`,
        secondary: `var(--chatbot-widget-secondary-color, ${colors.gray[600]})`,
        background: `var(--chatbot-widget-background-color, ${colors.white})`,
        border: `var(--chatbot-widget-border-color, ${colors.gray[400]})`,
        text: `var(--chatbot-widget-text-color, ${colors.gray[800]})`,
      },
    },
  },
  plugins: [],
};
