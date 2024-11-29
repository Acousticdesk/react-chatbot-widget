// todo akicha: this component should be exported and let the user know if widget should be draggable
import { createPortal } from "react-dom";
import { useEffect, useRef, useState, type ReactNode } from "react";

interface ReactChatbotDraggableProps {
  children: ReactNode;
}

// todo akicha: mention in the documentation that the widget is not mobile friendly
export function ReactChatbotDraggable({
  children,
}: ReactChatbotDraggableProps) {
  const [{ x, y }, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const containerElement = containerRef.current;
    const contentElement = contentRef.current;

    if (!containerElement || !contentElement) {
      return;
    }

    let canDrag = false;

    const position: { x: number; y: number } = {
      x: window.innerWidth / 2 - contentElement.clientWidth / 2,
      y: window.innerHeight / 2 - contentElement.clientHeight / 2,
    };

    setPosition({ ...position });

    const handleMouseDown = () => {
      canDrag = true;
    };

    const handleMouseUp = () => {
      canDrag = false;
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!canDrag) {
        return;
      }

      position.x = Math.max(
        0,
        Math.min(
          event.clientX - containerElement.clientWidth / 2,
          window.innerWidth - contentElement.clientWidth
        )
      );

      // todo akicha: we should allow dragging only when drag handle (header) is targeted
      position.y = Math.max(
        0,
        Math.min(
          event.clientY - 20,
          window.innerHeight - contentElement.clientHeight
        )
      );

      setPosition({ ...position });
    };

    containerElement.addEventListener("mousedown", handleMouseDown);
    containerElement.addEventListener("mouseup", handleMouseUp);
    containerElement.addEventListener("mousemove", handleMouseMove);

    return () => {
      containerElement.removeEventListener("mousedown", handleMouseDown);
      containerElement.removeEventListener("mouseup", handleMouseUp);
      containerElement?.removeEventListener("mousemove", handleMouseMove);
    };
  }, [containerRef, contentRef]);

  return createPortal(
    <div style={{ position: "fixed", left: x, top: y }} ref={containerRef}>
      <div style={{ display: "inline-block" }} ref={contentRef}>
        {children}
      </div>
    </div>,
    document.body
  );
}
