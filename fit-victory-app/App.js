import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { globalStyles } from './styles.js';
import { ActivityScreen, AccessScreen } from './screens/index.js';
import { AuthContext } from './context/authContext.js';
import useAuthController from './controllers/authController.js';

export default function App() {
  const { isLoggedIn, login, logout, register } = useAuthController();

  useEffect(() => {
    console.log('isLoggedIn changed:', isLoggedIn);
  }, [isLoggedIn]);


  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, register }}>
      <View style={globalStyles.container}>
        {true ? <ActivityScreen /> : <AccessScreen />}        
        <StatusBar style="auto" />
      </View>
    </AuthContext.Provider>
  );
}
