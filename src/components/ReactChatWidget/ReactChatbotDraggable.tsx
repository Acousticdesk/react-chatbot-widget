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

  useEffect(() => {
    const containerElement = containerRef.current;
    const contentElement = contentRef.current;

    if (!containerElement || !contentElement || !handleElement) {
      return;
    }

    let canDrag = false;

    const position: { x: number; y: number } = {
      x: document.body.clientWidth / 2 - contentElement.clientWidth / 2,
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

      // todo akicha: test with different paddings set on body and html
      // todo akicha: instead of doing all the calculatons, use window.innerWidth and window.innerHeight
      const bodyStyle = window.getComputedStyle(document.body);
      const htmlStyle = window.getComputedStyle(document.documentElement);

      const extraPaddingLeft =
        window.parseFloat(bodyStyle.paddingLeft) +
        window.parseFloat(htmlStyle.paddingLeft);

      const extraPaddingRight =
        window.parseFloat(bodyStyle.paddingRight) +
        window.parseFloat(htmlStyle.paddingRight);

      const extraPaddingTop =
        window.parseFloat(bodyStyle.paddingTop) +
        window.parseFloat(htmlStyle.paddingTop);

      const extraPaddingBottom =
        window.parseFloat(bodyStyle.paddingBottom) +
        window.parseFloat(htmlStyle.paddingBottom);

      position.x += event.movementX;

      position.x = Math.min(
        document.body.clientWidth -
          contentElement.clientWidth -
          extraPaddingRight,
        position.x
      );

      position.x = Math.max(0 - extraPaddingLeft, position.x);

      position.y += event.movementY;

      position.y = Math.min(
        window.innerHeight - contentElement.clientHeight - extraPaddingBottom,
        position.y
      );

      position.y = Math.max(0 - extraPaddingTop, position.y);

      setPosition({ ...position });
    };

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
      style={{ position: "fixed", transform: `translate(${x}px, ${y}px)` }}
      ref={containerRef}
    >
      <div style={{ display: "inline-block" }} ref={contentRef}>
        {children}
      </div>
    </div>,
    document.body
  );
}
