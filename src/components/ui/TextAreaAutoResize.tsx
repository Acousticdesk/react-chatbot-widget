import { twMerge } from "tailwind-merge";
import type { ChangeEvent, TextareaHTMLAttributes } from "react";

interface TextAreaAutoResizeProps {
  className?: string;
  // todo akicha: vetter pass all the properties inline
  textAreaProps?: TextareaHTMLAttributes<HTMLTextAreaElement>;
}

// todo akicha: BUG there is a mico-delay when typing in the textarea
// todo akicha: BUG textarea adjusts it's size right away when the first keystroke is captured
// todo akicha: set a proper max-height
export function TextAreaAutoResize({
  className,
  textAreaProps,
}: TextAreaAutoResizeProps) {
  function onChange(e: ChangeEvent<HTMLTextAreaElement>) {
    textAreaProps?.onChange?.(e);

    const textarea = e.target;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  }

  return (
    <textarea
      {...textAreaProps}
      className={twMerge(className || textAreaProps?.className)}
      onChange={onChange}
    />
  );
}
