import { Dispatch, SetStateAction } from "react";

export interface ReactChatbotWidgetProps {
  className?: string;
  setHeaderElement?: Dispatch<SetStateAction<HTMLElement | null | undefined>>;
}
