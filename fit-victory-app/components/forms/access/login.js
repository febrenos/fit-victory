import { useEffect, useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ButtonPrimary } from '../../../components/buttons/primary/buttonPrimary.js';
import Logo from '../../../assets/img/logo.png';
import {colors, globalStyles} from '../../../styles.js';
import styles from './styles';
import useAuthController from '../../../controllers/authController.js';

export const Login = ({ onLogin }) => {
    const [users, setUsers] = useState([]);
    const [email, setEmail] = useState("fe@fiap.com");
    const [password, setPassword] = useState("teste123");
    const navigation = useNavigation();
    const authController = useAuthController();

    const handleLogin = async () => {
        try {
          await authController.login({
            "login": email,
            "password": password
          });
        } catch (error) {
          console.error('Error during registration:', error);
        }
    };


    return (
        <View style={globalStyles.containerPage}>
            <View style={styles.center}>
                <Text style={ styles.title }>Login</Text>
                <View style={ globalStyles.form }>
                    <View>
                        <Image style={styles.logo} source={ Logo }/>
                    </View>
                    <View>
                        <View style={{marginBottom: 10}}>
                            <TextInput 
                                placeholder={"E-mail"} 
                                value={email} 
                                onChangeText={setEmail} 
                                placeholderTextColor={colors.lightGray} 
                                style={globalStyles.textInput}
                            />
                            <TextInput 
                                placeholder={"Senha"} 
                                secureTextEntry={true}
                                value={password} 
                                onChangeText={setPassword} 
                                placeholderTextColor={colors.lightGray} 
                                style={globalStyles.textInput}
                            />
                        </View>
                        <ButtonPrimary text="Login" onPress={handleLogin} />
                        <View style={styles.box}>
                            <Text style={globalStyles.text}>Ainda não tem uma conta?</Text>
                            <TouchableOpacity onPress={()=> navigation.navigate("Register")}>
                                <Text style={globalStyles.textBold}>
                                    Cadastre-se aqui!
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}