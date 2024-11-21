import { motion } from "motion/react";
import { IoIosMenu } from "react-icons/io";
import { twMerge } from "tailwind-merge";

interface ReactChatWidgetDrawerProps {
  toggleDrawer: () => void;
  className?: string;
}

// todo akicha: add some branding here
// todo akicha: allow to customize the branding
export function ReactChatWidgetDrawer({
  toggleDrawer,
  className,
}: ReactChatWidgetDrawerProps) {
  // todo akicha: it should have a darker background color, similar to what ChatGPT has
  return (
    <div className={twMerge("overflow-hidden h-full w-3/4 rounded-tl-lg rounded-bl-lg", className)}>
      <motion.div
        initial={{
          x: -100,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{ ease: "easeInOut" }}
        // todo akicha: should we allow the width defined in %?
        className="h-full bg-background border-r-border border-r w-full px-4 py-2"
      >
        <IoIosMenu
          // todo akicha: move this function definition to the top
          onClick={toggleDrawer}
          // todo akicha: repetitive className with what we have in the container component
          className="text-text-secondary cursor-pointer text-3xl"
        />
      </motion.div>
    </div>
  );
}
