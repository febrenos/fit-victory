// authContext.js
import { createContext } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  user: null,
  login: () => {},
  logout: () => {},
  register: () => {},
});
