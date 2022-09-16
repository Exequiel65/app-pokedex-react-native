import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Favorite from '../screens/Favorite'
import Pokemon from '../screens/Pokemon'

const Stack = createNativeStackNavigator()

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Favorite1" component={Favorite} options={{
            title: 'Favoritos'
        }} />
        <Stack.Screen 
          name='Pokemon'
          component={Pokemon}
          options={{title: "", headerTransparent: true}}
        />
        
    </Stack.Navigator>
  )
}