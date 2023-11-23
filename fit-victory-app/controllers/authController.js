import { useContext, useState } from 'react';
import { authApi } from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../context/authContext';

export default useAuthController = () => {
  const [user, setUser] = useState(null);

  const {setIsLoggedIn, isLoggedIn} = useContext(AuthContext)

  const login = async (userData) => {
    try {
      const response = await authApi.post('/login', {
        "login": userData["login"],
        "password": userData["password"]
      });
      await AsyncStorage.setItem('userToken', response.data);
      console.log('Login successful');
  
      setIsLoggedIn(true);
      console.log(`isLoggedIn: ${isLoggedIn}`);
    } catch (err) {
      console.log('Erro durante o login:', err);
  
      if (err.code === 'ECONNREFUSED') {
        alert('Erro de conexão com a API. Verifique a conexão com o servidor.');
      } else {
        alert(`Usuário ou senha inválidos.`);
      }
    }
  };

  const logout = () => {
    AsyncStorage.removeItem('userToken');
    setIsLoggedIn(false);
    setUser(null);
  };

  const register = async (userData) => {
    try {
      const response = await authApi.post('/user/register', {
        "nickname": userData["nickname"],
        "name": userData["name"],
        "email": userData["email"],
        "password": userData["password"],
        "role": "USER",
      });
  
      alert("Usuário cadastrado com sucesso.");
      // Atualize o estado do usuário se o registro for bem-sucedido
      setUser(userData);
  
      // Corrigir aqui
      setIsLoggedIn(true);
    } catch (err) {
      console.log(`Erro: ${err}`);
  
      if (err.code === 'ECONNREFUSED') {
        alert('Erro de conexão com a API. Verifique a conexão com o servidor.');
      } else if (err.code === 'ECONNABORTED') {
        alert('Tempo de conexão excedido. Verifique sua conexão com a internet e tente novamente.');
      } else if (err.response && err.response.status === 400) {
        alert(`${err.response.data}`);
      } else {
        console.error('Erro ao registrar usuário:', err);
        alert('Erro ao cadastrar usuário. Tente novamente.');
      }
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