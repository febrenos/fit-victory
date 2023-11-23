import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { globalStyles } from './styles.js';
import { ActivityScreen, AccessScreen, ToggleAccess } from './screens/index.js';
import { AuthProvider } from './context/authContext.js';
import useAuthController from './controllers/authController.js';

export default function App() {

  return (
   <AuthProvider>
      <View style={globalStyles.container}>
      <ToggleAccess />
        <StatusBar style="auto" />
      </View>
     </AuthProvider>
  );
}
