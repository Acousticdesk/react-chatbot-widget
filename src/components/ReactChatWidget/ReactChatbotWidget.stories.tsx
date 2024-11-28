import { Meta } from "@storybook/react";
import { IoMoonOutline } from "react-icons/io5";
import { ReactChatbotWidget } from "./ReactChatbotWidget";

const meta: Meta<typeof ReactChatbotWidget> = {
  component: ReactChatbotWidget,
  title: "ReactChatbotWidget",
  tags: ["autodocs"],
  args: {
    className: "cw-relative cw-translate-x-0 cw-translate-y-0 !cw-inset-0 cw-mx-auto",
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [
    (Story) => {
      const handleDarkModeChange = (
        event: React.ChangeEvent<HTMLInputElement>
      ) => {
        const darkMode = event.target.checked;
        document.documentElement.classList.toggle("dark", darkMode);
      };

      return (
        <div>
          <label className="cw-text-white cw-flex cw-items-center cw-mb-4">
            <input type="checkbox" onChange={handleDarkModeChange} />
            <span className="cw-ml-2 cw-text-white cw-flex cw-items-center">
              <IoMoonOutline className="cw-mr-2" />
              Dark Theme
            </span>
          </label>
          <Story />
        </div>
      );
    },
  ],
};

export default meta;

export const Default = {
  args: {},
};
