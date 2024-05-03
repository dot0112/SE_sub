import { createContext } from "react";

export const ModalsDispatchContext = createContext({
    open: () => {},
    close: () => {},
});

export const ModalsStateContext = createContext([]);

/*https://nakta.dev/how-to-manage-modals-1*/ 