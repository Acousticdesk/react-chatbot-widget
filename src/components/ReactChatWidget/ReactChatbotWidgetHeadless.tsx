import { ReactNode } from "react";

import { ReactChatbotWidgetContextProvider } from "../../context/ReactChatbotWidgetContext";

// todo akicha: make sure tailwind preflight isn't included when the headless component is imported

interface ReactChatbotWidgetHeadlessProps {
  children: ReactNode;
  className?: string;
}

export function ReactChatbotWidgetHeadless({
  children,
  className,
}: ReactChatbotWidgetHeadlessProps) {
  return (
    <div className="react-chatbot-widget">
      <div className={className}>
        <ReactChatbotWidgetContextProvider>
          {children}
        </ReactChatbotWidgetContextProvider>
      </div>
    </div>
  );
}
