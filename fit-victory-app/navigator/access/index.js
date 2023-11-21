import React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { globalStyles } from '../../styles.js'

import { Login } from '../../components/forms/access/login.js';
import { Register } from '../../components/forms/access/register.js';

// const { Navigator, Group, Screen } = createStackNavigator();

const Stack = createStackNavigator();

export const AccessNavigator = () => {

  return (
    <NavigationContainer>
      <View style={globalStyles.container}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}
