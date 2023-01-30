import { createContext } from 'react';

export interface ContextProps  {
    payWallPass: boolean;
    setPayWallPass: Function;
}

export const Context = createContext<ContextProps>({} as ContextProps);
