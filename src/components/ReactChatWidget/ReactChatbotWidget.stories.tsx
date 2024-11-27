import { Meta } from "@storybook/react";
import { IoMoonOutline } from "react-icons/io5";
import { ReactChatbotWidget } from "./ReactChatbotWidget";

const meta: Meta<typeof ReactChatbotWidget> = {
  component: ReactChatbotWidget,
  title: "ReactChatbotWidget",
  tags: ["autodocs"],
  args: {
    className: "relative translate-x-0 translate-y-0 inset-0 mx-auto",
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
          <label className="text-white flex items-center mb-4">
            <input type="checkbox" onChange={handleDarkModeChange} />
            <span className="ml-2 text-white flex items-center">
              <IoMoonOutline className="mr-2" />
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
