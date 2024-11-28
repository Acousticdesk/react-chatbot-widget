import { motion } from "motion/react";
import { IoIosMenu } from "react-icons/io";
import { twMerge } from "tailwind-merge";

import { FaRobot } from "react-icons/fa";

interface ReactChatWidgetDrawerProps {
  toggleDrawer: () => void;
  className?: string;
}

// todo akicha: allow to customize the branding
export function ReactChatWidgetDrawer({
  toggleDrawer,
  className,
}: ReactChatWidgetDrawerProps) {
  // todo akicha: it should have a darker background color, similar to what ChatGPT has
  return (
    <div
      className={twMerge(
        "cw-overflow-hidden cw-h-full cw-w-3/4 cw-rounded-tl-lg cw-rounded-bl-lg",
        className
      )}
    >
      <motion.div
        initial={{
          x: -100,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{ duration: 0.1, ease: "easeInOut" }}
        // todo akicha: should we allow the width defined in %?
        className="cw-h-full cw-bg-background cw-border-r-border cw-border-r cw-w-full cw-px-4 cw-py-2"
      >
        <header>
          <IoIosMenu
            // todo akicha: move this function definition to the top
            onClick={toggleDrawer}
            // todo akicha: repetitive className with what we have in the container component
            className="cw-text-text-secondary cw-cursor-pointer cw-text-3xl"
          />
        </header>

        <button
          onClick={toggleDrawer}
          className="cw-my-8 cw-flex cw-w-full cw-items-center hover:cw-bg-primary-hover active:cw-bg-primary-active cw-px-4 cw-py-2 cw-rounded"
        >
          <FaRobot className="cw-text-text-secondary cw-text-2xl" />
          <p className="cw-font-semibold cw-text-text-primary cw-ml-2">
            acousticdesk/chatbot-widget
          </p>
        </button>

        {/* todo akicha: this whole section should be configurable and support infinite scrolling and grouping by date */}
        <section className="cw-pl-2">
          <p className="cw-text-text-primary cw-font-semibold cw-px-2">Previous Chats</p>

          {/* todo akicha: test the layout to see how it renders many items */}
          <ul className="cw-mt-4">
            <li>
              <button className="cw-text-text-primary cw-w-full cw-px-2 cw-py-1 hover:cw-bg-primary-hover active:cw-bg-primary-active cw-text-left cw-rounded">
                My first chat
              </button>
            </li>
          </ul>
        </section>
      </motion.div>
    </div>
  );
}
