import { Meta } from "@storybook/react";

function getReactChatWidgetColors() {
  const prefix = "--chatbot-widget-";
  const colors: Record<"light" | "dark", Record<string, string>> = {
    light: {},
    dark: {},
  };

  for (const sheet of document.styleSheets) {
    try {
      for (const rule of sheet.cssRules || []) {
        if (rule instanceof CSSStyleRule) {
          for (const property of rule.style) {
            if (property.startsWith(prefix)) {
              const value = rule.style.getPropertyValue(property).trim();
              const theme = rule.selectorText === ":root" ? "light" : "dark";
              colors[theme][property] = value;
            }
          }
        }
      }
    } catch (e) {
      console.error("Could not access stylesheet:", e);
    }
  }

  return colors;
}

interface ColorsProps {
  colors: Record<string, string>;
}

function Colors({ colors }: ColorsProps) {
  return (
    <ul className="grid grid-cols-3 gap-4">
      {Object.entries(colors).map(([key, value]) => (
        <li key={key} className="shadow rounded overflow-hidden bg-white">
          <div className="h-20" style={{ backgroundColor: value }} />
          <p className="px-4 py-2">{key}</p>
        </li>
      ))}
    </ul>
  );
}

const colors = getReactChatWidgetColors();

const meta: Meta<typeof Colors> = {
  component: Colors,
  title: "ReactChatWidget Color Scheme",
  tags: ["autodocs"],
  args: {
    colors: colors.light,
  },
};

export default meta;

export const Default = {
  args: {},
};

export const DarkTheme = {
  args: {
    colors: colors.dark,
  },
};
