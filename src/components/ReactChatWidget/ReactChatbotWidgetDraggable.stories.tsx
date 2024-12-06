import { Meta, StoryObj } from "@storybook/react";
import { ReactChatbotWidgetDraggable } from "./ReactChatbotWidgetDraggable";
import { useState } from "react";

const meta: Meta<typeof ReactChatbotWidgetDraggable> = {
  component: ReactChatbotWidgetDraggable,
  title: "ReactChatbotWidgetDraggable",
  args: {},
};

export default meta;

type Story = StoryObj<typeof ReactChatbotWidgetDraggable>;

export const Default: Story = {
  args: {},
};

function OpenOnClickComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        className="cw-rounded cw-bg-primary hover:cw-bg-primary-hover active:cw-bg-primary-active cw-px-4 cw-py-2 "
        onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
      >
        Toggle Chatbot
      </button>
      {isOpen ? <ReactChatbotWidgetDraggable /> : null}
    </div>
  );
}

export const OpenOnClick: Story = {
  args: {},
  decorators: [OpenOnClickComponent],
};
