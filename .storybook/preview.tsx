import type { Preview } from "@storybook/react";

import "../src/index.css";
import React from "react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#333333" },
      ],
    },
  },
  decorators: [
    (Story) => {
      return (
        <div className="react-chatbot-widget">
          <div className="cw-font-sans">
            <Story />
          </div>
        </div>
      );
    },
  ],
};

export default preview;
