import { Dispatch } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { SetStateAction } from 'react';

export declare function ReactChatbotWidget({ className, setHeaderElement, }: ReactChatbotWidgetProps): JSX_2.Element;

declare interface ReactChatbotWidgetProps {
    className?: string;
    setHeaderElement?: Dispatch<SetStateAction<HTMLElement | null | undefined>>;
}

export { }
