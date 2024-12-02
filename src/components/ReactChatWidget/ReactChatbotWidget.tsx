import { BotIcon, XIcon, MenuIcon, SendHorizonalIcon } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

import { TextAreaAutoResize } from "../ui/TextAreaAutoResize";

import { ReactChatWidgetDrawer } from "./ReachChatbotWidgetDrawer";

import "../../index.css";
import { ReactChatbotWidgetProps } from "./ReactChatbotWidget.types";

// todo akicha: when missing the menu button click, the widget immediately changes position which disrupts the user flow
// todo akicha: allow users to customize fonts easily

// todo akicha: document the project uses lucide-react icons
// todo akicha: should be cross-browser compatible
// todo akicha: reference: https://sendbird.github.io/chat-ai-widget/
// todo akicha: add the typing indicator
// todo akicha: user and AI messages
// todo akicha: customizable rich text support
// todo akicha: error message
// todo akicha: loading states for when chats are loading
// todo akicha: the widget should support infinite loading

// todo akicha: explain in the docs the html, body should be full screen for the draggable handlers to work properly
export function ReactChatbotWidget({
  className,
  setHeaderElement,
}: ReactChatbotWidgetProps) {
  const [hasDrawer, setHasDrawer] = useState(false);

  function toggleDrawer() {
    setHasDrawer((isOpen) => !isOpen);
  }

  return (
    <div className="react-chatbot-widget">
      <div
        className={twMerge(
          "cw-relative cw-flex cw-flex-col cw-w-[480px] cw-h-[640px] cw-font-sans",
          className
        )}
      >
        <header
          ref={setHeaderElement}
          // todo akicha: the header should only have the cursor-move if it's draggable
          className="cw-rounded-t-lg cw-px-4 cw-py-2 cw-flex cw-justify-between cw-border-b cw-bg-background cw-border-border cw-cursor-move"
        >
          {/* todo akicha: make it a clickable button */}
          {/* todo akicha: we need an icon component to remember the color and the size */}
          <MenuIcon
            onClick={toggleDrawer}
            className="cw-text-text-secondary cw-cursor-pointer cw-text-3xl"
          />
          <XIcon className="cw-text-text-secondary cw-cursor-pointer cw-text-3xl" />
        </header>
        <div className="cw-flex-1 cw-bg-background cw-flex cw-flex-col cw-items-center cw-justify-center">
          <div>
            <BotIcon size={48} className="cw-text-text-secondary cw-mx-auto" />
            {/* todo akicha: we should allow to customize the color of the text */}
            <p className="cw-font-semibold cw-text-text-primary cw-mt-1">
              acousticdesk/chatbot-widget
            </p>
          </div>
        </div>
        {/* todo akicha: the pre-selected questions should be at the top of the footer (also add a nice floating animation) */}
        <footer className="cw-rounded-b-lg cw-px-4 cw-py-2 cw-bg-background cw-border-t cw-border-border cw-flex">
          {/* todo akicha: why the default font size is so huge? */}
          {/* todo akicha: add a proper active state for the textarea */}
          {/* todo akicha: the placeholders should be configurable */}
          {/* todo akicha: set the max-height */}
          <TextAreaAutoResize
            className="cw-resize-none cw-bg-background cw-rounded-lg cw-border cw-border-border cw-flex-1 cw-h-10 cw-px-2 cw-py-1 cw-text-text-primary cw-text-base cw-max-h-48 focus:cw-outline-none focus:cw-border-primary"
            textAreaProps={{ placeholder: "Ask me anything..." }}
          />
          {/* todo akicha: this should be disabled by default */}
          <SendHorizonalIcon className="cw-text-primary cw-cursor-pointer cw-ml-2 cw-mt-1 cw-text-3xl" />
        </footer>
        {hasDrawer ? (
          <ReactChatWidgetDrawer
            className="cw-absolute cw-left-0 cw-top-0"
            toggleDrawer={toggleDrawer}
          />
        ) : null}
      </div>
    </div>
  );
}
