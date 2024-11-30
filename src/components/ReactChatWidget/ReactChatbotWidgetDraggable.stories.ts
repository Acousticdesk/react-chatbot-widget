import { Meta } from "@storybook/react";
import { ReactChatbotWidgetDraggable } from "./ReactChatbotWidgetDraggable";

const meta: Meta<typeof ReactChatbotWidgetDraggable> = {
  component: ReactChatbotWidgetDraggable,
  title: "ReactChatbotWidgetDraggable",
  tags: ["autodocs"],
  args: {},
  parameters: {
    previewTabs: {
        'storybook/docs/panel': { hidden: true }
      }
  },
};

export default meta;

export const Default = {
  args: {},
};
