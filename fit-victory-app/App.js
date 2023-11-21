import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { globalStyles } from './styles.js';
import { ActivityScreen, AccessScreen } from './screens/index.js';
import { AuthProvider } from './context/authContext.js';
import { useAuthController } from './services/controllers/authController.js';

export default function App() {
  // const { isLoggedIn } = useAuthController();

  return (
    <AuthProvider>
      <View style={globalStyles.container}>
        {false ? <ActivityScreen /> : <ActivityScreen />}        
        <StatusBar style="auto" />
      </View>
    </AuthProvider>
  );
}
