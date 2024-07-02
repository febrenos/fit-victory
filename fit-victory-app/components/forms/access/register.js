import { useState } from "react"
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"
import { useNavigation } from "@react-navigation/native"

import Logo from "../../../assets/img/logo.png"
import { ButtonPrimary } from "../../../components/buttons/primary/buttonPrimary.js"
import { colors, globalStyles } from "../../../styles.js"
import styles from "./styles"
import useAuthController from "../../../controllers/authController.js"

export const Register = () => {
  const [nickname, setNickname] = useState()
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigation = useNavigation()
  const authController = useAuthController()

  const handleRegister = async () => {
    try {
      await authController.register({
        nickname: nickname,
        name: name,
        email: email,
        password: password,
      })
    } catch (error) {
      console.error("Error during registration:", error)
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={globalStyles.containerPage}
    >
      <View style={styles.center}>
        <Text style={styles.title}>Registro</Text>
        <View style={globalStyles.form}>
          <View>
            <Image style={styles.logo} source={Logo} />
          </View>
          <View style={{ marginBottom: 10 }}>
            <TextInput
              placeholder={"nome de usuário"}
              value={nickname}
              onChangeText={setNickname}
              placeholderTextColor={colors.text}
              style={globalStyles.textInput}
            />
            <TextInput
              placeholder={"Nome"}
              value={name}
              onChangeText={setName}
              placeholderTextColor={colors.text}
              style={globalStyles.textInput}
            />
            <TextInput
              placeholder={"E-mail"}
              value={email}
              onChangeText={setEmail}
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
          <ButtonPrimary text="Registrar" onPress={() => handleRegister()} />
          <View style={styles.box}>
            <Text style={globalStyles.text}>Já possui cadastro?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={globalStyles.textBold}>Faça o Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}
