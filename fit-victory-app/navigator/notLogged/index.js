import React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { globalStyles } from '../../styles.js'

import { Login, Register} from '../../components/index.js';

// const { Navigator, Group, Screen } = createStackNavigator();

const Stack = createStackNavigator();

export const NotLoggedNavigator = () => {

  return (
    <NavigationContainer>
      <View style={globalStyles.container}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}
