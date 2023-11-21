import { createContext } from 'react';

export const ActivityContext = createContext({
    list: [],
    save: () => {},
    load: () => {},
    edit: () => {},
    del: () => {},
});