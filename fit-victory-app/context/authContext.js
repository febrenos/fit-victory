// authContext.js
import { createContext, useState } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  user: null,
  login: () => {},
  logout: () => {},
  register: () => {},
  setIsLoggedIn: (value) => {}
});


export const AuthProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return(
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn}}>

      { children }
  
    </AuthContext.Provider>
  )
}



