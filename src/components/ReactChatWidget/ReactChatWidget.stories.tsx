import { Meta, StoryObj } from "@storybook/react";
import { ReactChatWidget } from "./ReactChatWidget";
import { ReactChatWidgetDarkTheme } from "../ReactChatWidgetDarkTheme";

// todo akicha: the Default story should have the light theme in Storybook UI
const meta: Meta<typeof ReactChatWidget> = {
  component: ReactChatWidget,
  title: "ReactChatWidget",
  tags: ["autodocs"],
  args: {
    className: "relative translate-x-0 translate-y-0 inset-0 mx-auto",
  },
};

export default meta;

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
