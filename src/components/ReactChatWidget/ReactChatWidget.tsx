import { IoIosClose, IoIosMenu, IoMdSend } from "react-icons/io";
import { FaRobot } from "react-icons/fa";

// todo akicha: prettify all the components
// todo akicha: add acousticdesk and react to the chat file names
import { TextAreaAutoResize } from "../ui/TextAreaAutoResize";

// todo akicha: the styles should be configured to use prefix
// todo akicha: how to customize theme?
// todo akicha: reference: https://sendbird.github.io/chat-ai-widget/
export function ReactChatWidget() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col w-[480px] h-[640px]">
      <header className="rounded-t-lg px-4 py-2 flex justify-between border-b bg-white border-gray-400">
        {/* todo akicha: this icon is very wide */}
        {/* todo akicha: add animation to the drawer when the menu button is clicked */}
        <IoIosMenu className="text-gray-400 cursor-pointer text-3xl" />
        {/* todo akicha: icon size and icon color should be configured somehow */}
        <IoIosClose className="text-gray-400 cursor-pointer text-3xl" />
      </header>
      <div className="flex-1 bg-white flex flex-col items-center justify-center">
        <div>
          <FaRobot className="text-gray-400 text-5xl mx-auto" />
          {/* todo akicha: we should allow to customize the color of the text */}
          <p className="font-semibold text-primary mt-1">
            acousticdesk/chatbot-widget
          </p>
        </div>
      </div>
      {/* todo akicha: the pre-selected questions should be at the top of the footer (also add a nice floating animation) */}
      <footer className="rounded-b-lg px-4 py-2 bg-white border-t border-gray-400 flex">
        {/* todo akicha: why the default font size is so huge? */}
        {/* todo akicha: add a proper active state for the textarea */}
        <TextAreaAutoResize className="resize-none bg-white rounded-lg border border-gray-400 flex-1 h-10 px-2 py-1 text-black text-base max-h-48" />
        <IoMdSend className="text-gray-400 cursor-pointer ml-2 mt-1 text-3xl" />
      </footer>
    </div>
  );
}
