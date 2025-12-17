declare const mount: ({ api, element, }: {
    api: string;
    element: HTMLElement;
}) => () => void;

export { mount };
