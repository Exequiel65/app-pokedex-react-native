import React from 'react'
import { StatusBar} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation'
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
        <Navigation />
    </NavigationContainer>
  );
}

