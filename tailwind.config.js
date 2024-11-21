/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // todo akicha: text-primary, secondary, muted, link, error
      // todo akicha: add button variants, inputs, shadows
      // todo akicha: the hover, focus, etc states can be shared between multiple components like inputs and buttons
      // todo akicha: ask chatGPT to give the color scheme for both the light and dark themes
      colors: {
        primary: `var(--chatbot-widget-primary-color, #0078d7)`,
        secondary: `var(--chatbot-widget-secondary-color, #38b2ac)`,
        background: `var(--chatbot-widget-background-color, #ffffff)`,
        border: `var(--chatbot-widget-border-color, #e0e0e0)`,
        // todo akicha: find the text-text class names and change it to text-text-primary
        'text-primary': `var(--chatbot-widget-text-color, #333333)`,
        'text-secondary': `var(--chatbot-widget-text-secondary-color, #666666)`,
        'user-message-bubble': `var(--chatbot-widget-message-bubble-color, #e1f5fe)`,
        'user-message-text': `var(--chatbot-widget-message-text-color, #01579b)`,
        // todo akicha: most likely we don't need to put this color into the theme
        'bot-message-bubble': `var(--chatbot-widget-bot-message-bubble-color, #f9f9f9)`,
        'focus': `var(--chatbot-widget-focus-color, #80deea)`,
      },
    },
  },
  plugins: [],
};
