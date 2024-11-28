import { IoIosClose, IoIosMenu, IoMdSend } from "react-icons/io";
import { FaRobot } from "react-icons/fa";

import { TextAreaAutoResize } from "../ui/TextAreaAutoResize";
import { ReactChatWidgetDrawer } from "./ReachChatbotWidgetDrawer";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

import "../../index.css";

interface ReactChatbotWidgetProps {
  className?: string;
}

// todo akicha: motion was removed because tree shaking wasn't working, see if it's common for all the libraries and bring back motion
// todo akicha: should be cross-browser compatible
// todo akicha: check the bundle size
// todo akicha: configure typography
// todo akicha: react and react-dom (maybe more libraries) should be marked as peer dependencies
// todo akicha: export types from the npm package
// todo akicha: we need to re-deploy to gh-pages every time we release a new version

// todo akicha: the styles should be configured to use prefix
// todo akicha: reference: https://sendbird.github.io/chat-ai-widget/
// todo akicha: allow users to customize fonts
// todo akicha: add the typing indicator
// todo akicha: user and AI messages
// todo akicha: customizable rich text support
// todo akicha: error message
// todo akicha: loading states and allow to turn them on whenever needed
// todo akicha: chatHistory should support infinite loading
// todo akicha: bundle size should be reasonable
export function ReactChatbotWidget({ className }: ReactChatbotWidgetProps) {
  const [hasDrawer, setHasDrawer] = useState(false);

  function toggleDrawer() {
    setHasDrawer((isOpen) => !isOpen);
  }

  return (
    <div className="react-chatbot-widget">
      {/* todo akicha: absolute -> relative after the move-able popover is added */}
      <div
        className={twMerge(
          "cw-absolute cw-inset-1/2 -cw-translate-x-1/2 -cw-translate-y-1/2 cw-flex cw-flex-col cw-w-[480px] cw-h-[640px] cw-font-sans",
          className
        )}
      >
        <header className="cw-rounded-t-lg cw-px-4 cw-py-2 cw-flex cw-justify-between cw-border-b cw-bg-background cw-border-border">
          {/* todo akicha: this icon is very wide */}
          {/* todo akicha: make it a clickable button */}
          {/* todo akicha: we need an icon component to remember the color and the size */}
          <IoIosMenu
            // todo akicha: move this function definition to the top
            onClick={toggleDrawer}
            className="cw-text-text-secondary cw-cursor-pointer cw-text-3xl"
          />
          <IoIosClose className="cw-text-text-secondary cw-cursor-pointer cw-text-3xl" />
        </header>
        <div className="cw-flex-1 cw-bg-background cw-flex cw-flex-col cw-items-center cw-justify-center">
          <div>
            <FaRobot className="cw-text-text-secondary cw-text-5xl cw-mx-auto" />
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
          <IoMdSend className="cw-text-primary cw-cursor-pointer cw-ml-2 cw-mt-1 cw-text-3xl" />
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
