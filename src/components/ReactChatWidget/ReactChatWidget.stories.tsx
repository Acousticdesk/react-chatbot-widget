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
