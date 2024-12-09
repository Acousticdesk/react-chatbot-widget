import { createContext, ReactNode, useState } from "react";

const initialState = {
    hasDrawer: false,
    toggleDrawer: () => {},
};

export const ReactChatbotWidgetContext = createContext(initialState);

interface ReactChatbotWidgetContextProviderProps {
  children: ReactNode;
}

export const ReactChatbotWidgetContextProvider = ({
  children,
}: ReactChatbotWidgetContextProviderProps) => {
  const [hasDrawer, setHasDrawer] = useState(false);

  function toggleDrawer() {
    setHasDrawer((isOpen) => !isOpen);
  }

  return (
    <ReactChatbotWidgetContext.Provider value={{ hasDrawer, toggleDrawer }}>
      {children}
    </ReactChatbotWidgetContext.Provider>
  );
};
