import { StoryObj } from "@storybook/react";
import { ReactChatWidget } from "./ReactChatWidget";
import { ReactChatWidgetDarkTheme } from "../ReactChatWidgetDarkTheme";

// todo akicha: the component is hidden under the scrollbar
export default {
  component: ReactChatWidget,
  title: "ReactChatWidget",
  tags: ["autodocs"],
};

type Story = StoryObj<typeof ReactChatWidget>;

export const Default = {
  args: {},
};

// todo akicha: when changing the theme to dark and than back to light, it's still dark
export const DarkTheme: Story = {
  args: {},
  decorators: [
    (Story) => (
      <ReactChatWidgetDarkTheme>
        <Story />
      </ReactChatWidgetDarkTheme>
    ),
  ],
};
