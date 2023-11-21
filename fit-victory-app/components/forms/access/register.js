import { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Logo from '../../../assets/img/logo.png';
import ButtonPrimary from '../../../components/buttons/primary/buttonPrimary.js';
import {colors, globalStyles} from '../../../styles.js';
import styles from './styles';

export const Register = () => {
    const [username, setUsername] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [cpf, setCpf] = useState();
    const [cellphone, setCellphone] = useState();
    const [password, setPassword] = useState();
    const navigation = useNavigation();

    return (
        <View style={globalStyles.containerPage}>
            <View style={styles.center}>
                <Text style={ styles.title }>Registro</Text>
                <View style={ globalStyles.form }>
                    <View>
                        <Image style={styles.logo} source={ Logo }/>
                    </View>
                    <View style={{marginBottom: 10}}>
                        <TextInput 
                            placeholder={"Username"} 
                            value={username} 
                            onChangeText={setUsername} 
                            placeholderTextColor={colors.text} 
                            style={globalStyles.textInput}
                        />
                        <TextInput 
                            placeholder={"Nome"} 
                            value={name} onChangeText={setName} 
                            placeholderTextColor={colors.text} 
                            style={globalStyles.textInput}
                        />
                        <TextInput 
                            placeholder={"E-mail"} 
                            value={email} onChangeText={setEmail} 
                            placeholderTextColor={colors.text} 
                            style={globalStyles.textInput}
                        />
                        <TextInput 
                            placeholder={"CPF"} 
                            value={cpf} 
                            onChangeText={setCpf} 
                            placeholderTextColor={colors.text} 
                            style={globalStyles.textInput}
                        />
                        <TextInput 
                            placeholder={"Telefone"} 
                            value={cellphone} 
                            onChangeText={setCellphone} 
                            placeholderTextColor={colors.text} 
                            style={globalStyles.textInput}
                        />
                        <TextInput 
                            placeholder={"Senha"} 
                            value={password} 
                            onChangeText={setPassword} 
                            placeholderTextColor={colors.text} 
                            style={globalStyles.textInput}
                        />
                    </View>
                    <ButtonPrimary text="Registrar"/>
                    <View style={styles.box}>
                        <Text style={globalStyles.text}>Já possui cadastro?</Text>
                        <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
                            <Text style={globalStyles.textBold}>
                                Faça o Login
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}