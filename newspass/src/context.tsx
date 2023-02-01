import { createContext } from 'react';

export interface ContextProps  {
    payWallPass: boolean;
    setPayWallPass: Function;
    logged: boolean;
    setLogged: Function;
}

export const Context = createContext<ContextProps>({} as ContextProps);
