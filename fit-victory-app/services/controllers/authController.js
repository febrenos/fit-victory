import { useState } from 'react';

export const useAuthController = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const login = async (userData) => {
      setIsLoggedIn(true); 
      const response = await api.post('/login', {
          "login": userData["email"],
          "password": userData["password"]
      }).then((resp) => {
          console.log("Verificando acesso");
          AsyncStorage.setItem('userToken', resp.data);
          onLogin();
      }).then(() => {
          console.log("Acesso autorizado");
          navigation.navigate("Home");
      }).catch((err) => {
          console.log(`Erro: ${err}`);
          alert(`Usuario ou senha invalido.`);
      });
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  const register = async (userData) => {
    try {
      const response = await api.post('/user/register', {
        "name": userData["name"],
        "email": userData["email"],
        "password": userData["password"],
      }).then(() => {
          alert("Usuário cadastrado com sucesso.");
      }).catch((err) => {
          console.log(`Erro: ${err}`);
          alert(`Erro ao cadastrar usuário.`);
      })
      
      // Atualize o estado do usuário se o registro for bem-sucedido
      setUser(userData);
      setIsLoggedIn(true);
    } catch (error) {
      // Trate erros de registro, se necessário
      console.error('Erro ao registrar usuário:', error);
    }
  };

  
  return {
    isLoggedIn,
    user,
    login,
    logout,
    register,
  };
};

// isLoggedIn: isLoggedIn,
// user: user,
// login: login,
// logout: logout,
// register: register,