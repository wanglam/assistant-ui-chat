import { HttpChatTransportInitOptions, UIMessage } from 'ai';

interface ChatWindowProps {
    transportOptions: HttpChatTransportInitOptions<UIMessage>;
}

interface MountOptions extends ChatWindowProps {
    element: HTMLElement;
}
declare const mount: ({ transportOptions, element }: MountOptions) => () => void;

export { type MountOptions, mount };
