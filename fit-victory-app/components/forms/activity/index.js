import React, { useState, useContext } from 'react';
import { Text, TextInput, View, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { ActivityContext } from '../../../context/activity';
import { globalStyles, colors } from '../../../styles';
import { ButtonPrimary } from '../../../components/index';
import logo from '../../../assets/img/activityLogo.png';
import { generateRandomActivity } from './generateRandomActivity';

export const ActivityForm = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");

  const { save } = useContext(ActivityContext);

  const runRandomFunction = () => {
    const randomActivity = generateRandomActivity();
    setTitle(randomActivity.title);
    setDate(randomActivity.date);
    setDuration(randomActivity.duration);
    setDescription(randomActivity.description);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={globalStyles.containerPage}
    >
      <View style={styles.center}>
        <Text style={styles.title}>Cadastrar Atividades</Text>
        <View style={[globalStyles.form, styles.formContainer]}>
          <View>
            <Image style={{ width: '100%', height: 100 }} source={logo} />
          </View>
          <TextInput
            value={title}
            onChangeText={setTitle}
            placeholder="Título"
            style={globalStyles.textInput}
            placeholderTextColor={colors.text}
          />
          <TextInput
            value={date}
            onChangeText={setDate}
            placeholder="Data"
            style={globalStyles.textInput}
            placeholderTextColor={colors.text}
          />
          <TextInput
            value={description}
            onChangeText={setDescription}
            placeholder="Descrição"
            style={globalStyles.textInput}
            placeholderTextColor={colors.text}
          />
          <TextInput
            value={duration}
            onChangeText={setDuration}
            placeholder="Duração"
            style={globalStyles.textInput}
            placeholderTextColor={colors.text}
          />
          <ButtonPrimary text="Cadastrar" onPress={() => save({ title, date, duration, description })} />
          <ButtonPrimary text="Gerar Sugestões" onPress={runRandomFunction} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
