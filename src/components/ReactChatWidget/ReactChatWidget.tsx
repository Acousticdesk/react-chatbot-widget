import { IoIosClose, IoIosMenu, IoMdSend } from "react-icons/io";
import { FaRobot } from "react-icons/fa";

// todo akicha: prettify all the components
// todo akicha: add acousticdesk and react to the chat file names
import { TextAreaAutoResize } from "../ui/TextAreaAutoResize";
import { ReactChatWidgetDrawer } from "./ReachChatWidgetDrawer";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

import "../../index.css";

interface ReactChatWidgetProps {
  className?: string;
}

// todo akicha: rename to ReactChatbotWidget
// todo akicha: add the prefix to the tailwing classes!
// todo akicha: should be cross-browser compatible
// todo akicha: add peer dependecies
// todo akicha: check the bundle size
// todo akicha: see if we want to exclude tailwind from the bundle and re-use user's tailwind config
// todo akicha: configure typography
// todo akicha: react and react-dom (maybe more libraries) should be marked as peer dependencies
// todo akicha: export types from the npm package

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
export function ReactChatWidget({ className }: ReactChatWidgetProps) {
  const [hasDrawer, setHasDrawer] = useState(false);

  function toggleDrawer() {
    setHasDrawer((isOpen) => !isOpen);
  }

  return (
    // todo akicha: absolute -> relative after the move-able popover is added
    <div
      className={twMerge(
        "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col w-[480px] h-[640px]",
        className
      )}
    >
      <header className="rounded-t-lg px-4 py-2 flex justify-between border-b bg-background border-border">
        {/* todo akicha: this icon is very wide */}
        {/* todo akicha: make it a clickable button */}
        {/* todo akicha: we need an icon component to remember the color and the size */}
        <IoIosMenu
          // todo akicha: move this function definition to the top
          onClick={toggleDrawer}
          className="text-text-secondary cursor-pointer text-3xl"
        />
        <IoIosClose className="text-text-secondary cursor-pointer text-3xl" />
      </header>
      <div className="flex-1 bg-background flex flex-col items-center justify-center">
        <div>
          <FaRobot className="text-text-secondary text-5xl mx-auto" />
          {/* todo akicha: we should allow to customize the color of the text */}
          <p className="font-semibold text-text-primary mt-1">
            acousticdesk/chatbot-widget
          </p>
        </div>
      </div>
      {/* todo akicha: the pre-selected questions should be at the top of the footer (also add a nice floating animation) */}
      <footer className="rounded-b-lg px-4 py-2 bg-background border-t border-border flex">
        {/* todo akicha: why the default font size is so huge? */}
        {/* todo akicha: add a proper active state for the textarea */}
        {/* todo akicha: the placeholders should be configurable */}
        {/* todo akicha: set the max-height */}
        <TextAreaAutoResize
          className="resize-none bg-background rounded-lg border border-border flex-1 h-10 px-2 py-1 text-text-primary text-base max-h-48 focus:outline-none focus:border-primary"
          textAreaProps={{ placeholder: "Ask me anything..." }}
        />
        {/* todo akicha: this should be disabled by default */}
        <IoMdSend className="text-primary cursor-pointer ml-2 mt-1 text-3xl" />
      </footer>
      {hasDrawer ? (
        <ReactChatWidgetDrawer
          className="absolute left-0 top-0"
          toggleDrawer={toggleDrawer}
        />
      ) : null}
    </div>
  );
}
