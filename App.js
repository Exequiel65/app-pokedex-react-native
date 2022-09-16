import React from 'react'
import { StatusBar} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation'
import { AuthProvider } from './src/context/AuthContext';
export default function App() {
  return (

    <NavigationContainer>
      <AuthProvider>
        <StatusBar
          barStyle='dark-content'
          backgroundColor="#FFFFFF"
        />

        <Navigation />
      </AuthProvider>
    </NavigationContainer>
  );
}

