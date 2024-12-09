import { Meta } from "@storybook/react";
import { ReactChatbotWidgetHeadless } from "./ReactChatbotWidgetHeadless";
import { useContext } from "react";
import { ReactChatbotWidgetContext } from "../../context/ReactChatbotWidgetContext";
import { ReactChatWidgetDrawer } from "./ReachChatbotWidgetDrawer";

const meta: Meta = {
  title: "ReactChatbotWidgetHeadless",
  args: {},
};

export default meta;

// todo akicha: document that we don't need to use the prefix when the component is imported into the existing Tailwind application
function ReactChatbotWidgetCustom() {
  const { hasDrawer, toggleDrawer } = useContext(ReactChatbotWidgetContext);

  return (
    <div className="cw-w-[360px] cw-relative">
      {/* todo akicha: modify the styles to make it different from the ReactChatbotWidget component look */}
      <header className="cw-flex cw-justify-between cw-border-b cw-border-border cw-bg-background cw-p-2">
        <button onClick={toggleDrawer}>Menu</button>
        {/* todo akicha: add the onClose handler */}
        <button>Close</button>
      </header>

      <div className="cw-flex-1 cw-bg-background cw-flex cw-flex-col cw-items-center cw-justify-center cw-h-[360px]">
        {/* todo akicha: we should allow to customize the color of the text */}
        <p>New Look! 😎</p>
      </div>

      <footer className="cw-bg-background cw-border-t cw-border-border cw-flex cw-p-2">
        <textarea className="cw-flex-1 cw-resize-none cw-border cw-border-border" placeholder="Type your message here..." />
        <button className="cw-ml-2">Send</button>
      </footer>
      {hasDrawer ? (
        // todo akicha: add a headless variation to the drawer component
        <ReactChatWidgetDrawer
          className="cw-absolute cw-left-0 cw-top-0"
          toggleDrawer={toggleDrawer}
        />
      ) : null}
    </div>
  );
}

// todo akicha: add a draggabe variation
export const Default = {
  args: {},
  decorators: [
    () => {
      return (
        <ReactChatbotWidgetHeadless>
          <ReactChatbotWidgetCustom />
        </ReactChatbotWidgetHeadless>
      );
    },
  ],
};
