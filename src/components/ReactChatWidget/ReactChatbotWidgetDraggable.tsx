import { useState } from "react";
import { ReactChatbotDraggable } from "./ReactChatbotDraggable";
import { ReactChatbotWidget } from "./ReactChatbotWidget";
import type { ReactChatbotWidgetProps } from "./ReactChatbotWidget.types";

export function ReactChatbotWidgetDraggable(props: ReactChatbotWidgetProps) {
  const [dragHandleRef, setDragHandleRef] = useState<
    HTMLElement | null | undefined
  >(undefined);

  return (
    <ReactChatbotDraggable handleElement={dragHandleRef}>
      <ReactChatbotWidget {...props} setHeaderElement={setDragHandleRef} />
    </ReactChatbotDraggable>
  );
}
