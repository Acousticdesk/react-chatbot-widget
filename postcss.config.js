export default {
  plugins: {
    // should go before tailwindcss, otherwise some styles generated by tailwindcss will not be scoped
    "tailwindcss/nesting": {},
    tailwindcss: {},
    autoprefixer: {},
  },
};
