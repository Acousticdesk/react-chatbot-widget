import { Meta } from "@storybook/react";
import { ReactChatWidget } from "./ReactChatWidget";

// todo akicha: add a toggle to toggle the dark class on the html element to preview the dark theme
const meta: Meta<typeof ReactChatWidget> = {
  component: ReactChatWidget,
  title: "ReactChatWidget",
  tags: ["autodocs"],
  args: {
    className: "relative translate-x-0 translate-y-0 inset-0 mx-auto",
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;

export const Default = {
  args: {},
};
