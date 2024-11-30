import React from "react";
import type { Preview } from "@storybook/react";

import "../src/index.css";
import "./preview.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "dark",
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
