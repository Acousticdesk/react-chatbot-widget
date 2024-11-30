import { Meta, StoryObj } from "@storybook/react";
import { MoonIcon } from "lucide-react";
import { ReactChatbotWidget } from "./ReactChatbotWidget";
import type { ReactNode } from "react";

interface WithDarkThemeProps {
  children: ReactNode;
}

function WithDarkTheme({ children }: WithDarkThemeProps) {
  const handleDarkModeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const darkMode = event.target.checked;
    document.documentElement.classList.toggle("dark", darkMode);
  };

  return (
    <div>
      <label className="cw-text-white cw-flex cw-items-center cw-mb-4">
        <input type="checkbox" onChange={handleDarkModeChange} />
        <span className="cw-ml-2 cw-text-white cw-flex cw-items-center">
          <MoonIcon className="cw-mr-2" />
          Dark Theme
        </span>
      </label>
      {children}
    </div>
  );
}

const meta: Meta<typeof ReactChatbotWidget> = {
  component: ReactChatbotWidget,
  title: "ReactChatbotWidget",
  tags: ["autodocs"],
  args: {
    className: "cw-mx-auto",
  },
};

type Story = StoryObj<typeof ReactChatbotWidget>;

export default meta;

export const Default = {
  args: {},
};

export const DarkTheme: Story = {
  args: {},
  decorators: [
    (Story) => {
      return (
        <WithDarkTheme>
          <Story />
        </WithDarkTheme>
      );
    },
  ],
};
