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

      if (
        position.x < 0 ||
        position.x > window.innerWidth - contentElement.clientWidth ||
        position.y < 0 ||
        position.y > window.innerHeight - contentElement.clientHeight
      ) {
        // reset the position to the last valid position on the screen
        return;
      }

      position.x = event.clientX - containerElement.clientWidth / 2;
      // todo akicha: we should allow dragging only when drag handle (header) is targeted
      position.y = event.clientY - 20;

      setPosition({ ...position });
    };

    // todo akicha: animate the movement
    const ensureBoundaries = () => {
      if (position.x < 0) {
        position.x = 0;
        setPosition({ ...position });
      }

      if (position.x > window.innerWidth - contentElement.clientWidth) {
        position.x = window.innerWidth - contentElement.clientWidth;
        setPosition({ ...position });
      }

      if (position.y < 0) {
        position.y = 0;
        setPosition({ ...position });
      }

      if (position.y > window.innerHeight - contentElement.clientHeight) {
        position.y = window.innerHeight - contentElement.clientHeight;
        setPosition({ ...position });
      }

      window.requestAnimationFrame(ensureBoundaries);
    };

    containerElement.addEventListener("mousedown", handleMouseDown);
    containerElement.addEventListener("mouseup", handleMouseUp);
    containerElement.addEventListener("mousemove", handleMouseMove);
    // todo akicha: clean it up
    window.requestAnimationFrame(ensureBoundaries);

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
