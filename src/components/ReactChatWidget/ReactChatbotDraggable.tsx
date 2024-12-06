// todo akicha: this component should be exported and let the user know if widget should be draggable
import { createPortal } from "react-dom";
import { useEffect, useRef, useState, type ReactNode } from "react";

interface ReactChatbotDraggableProps {
  children: ReactNode;
  handleElement?: HTMLElement | null;
}

// todo akicha: mention in the documentation that the widget is not mobile friendly
export function ReactChatbotDraggable({
  handleElement,
  children,
}: ReactChatbotDraggableProps) {
  const [{ x, y }, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  // use this state to show the component only when the position was applied to prevent
  // the position changing abruptly when user opens the widget on button click
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const containerElement = containerRef.current;
    const contentElement = contentRef.current;

    if (!containerElement || !contentElement || !handleElement) {
      return;
    }

    let canDrag = false;

    const position: { x: number; y: number } = {
      x: window.innerWidth / 2 - contentElement.clientWidth / 2,
      y: window.innerHeight / 2 - contentElement.clientHeight / 2,
    };

    // we can't use containerElement.getBoundingClientRect() after we set the position of the container
    // containerElement.getBoundingClientRect() returned by the browser will be before the position is set
    // there is no way to know the new position in the hook since it won't be updated as we don't have the position in the dependency array
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

      position.x += event.movementX;

      position.x = Math.min(
        window.innerWidth -
          contentElement.clientWidth,
        position.x
      );

      position.x = Math.max(0, position.x);

      position.y += event.movementY;

      position.y = Math.min(
        window.innerHeight - contentElement.clientHeight,
        position.y
      );

      position.y = Math.max(0, position.y);

      setPosition({ ...position });
    };

    setIsVisible(true);

    handleElement.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      handleElement.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [containerRef, contentRef, handleElement]);

  return createPortal(
    <div
      style={{
        position: "fixed",
        transform: `translate(${x}px, ${y}px)`,
        left: 0,
        top: 0,
        opacity: isVisible ? 1 : 0,
      }}
      ref={containerRef}
    >
      <div style={{ display: "inline-block" }} ref={contentRef}>
        {children}
      </div>
    </div>,
    document.body
  );
}
