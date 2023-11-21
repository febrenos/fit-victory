import axios from 'axios';

export const api = axios.create({
  baseURL: "https://fiap-2023-2tdst-default-rtdb.firebaseio.com",
});

export const handleLogin = async () => {
  api.post('/login', {
      "login": email,
      "password": password
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
}