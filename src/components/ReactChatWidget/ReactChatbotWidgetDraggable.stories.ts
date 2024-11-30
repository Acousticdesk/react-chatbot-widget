import { Meta } from "@storybook/react";
import { ReactChatbotWidgetDraggable } from "./ReactChatbotWidgetDraggable";

// todo akicha: hide the docs tab for this story
const meta: Meta<typeof ReactChatbotWidgetDraggable> = {
  component: ReactChatbotWidgetDraggable,
  title: "ReactChatbotWidgetDraggable",
  tags: ["autodocs"],
  args: {},
};

export default meta;

export const Default = {
  args: {},
};
