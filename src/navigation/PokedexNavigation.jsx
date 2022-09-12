
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Pokedex from '../screens/Pokedex'
import Pokemon from '../screens/Pokemon'
const Stack = createNativeStackNavigator()
export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Pokedex1" component={Pokedex} options={{
            title: 'Pokedex'
        }}/>
        <Stack.Screen name="Pokemon" component={Pokemon}/>
    </Stack.Navigator>
  )
}