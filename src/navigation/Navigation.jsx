import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5'

import FavoriteNavigation from './FavoriteNavigation'

import PokedexNavigation from './PokedexNavigation'
import AccountNavigation from './AccountNavigation'

const Tab = createBottomTabNavigator()

export default function Navigation() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}} initialRouteName="Pokedex" >
        <Tab.Screen name="Favorite" component={FavoriteNavigation} options={{
            tabBarLabel: "Favoritos",
            tabBarIcon: ({color, size})=>(
                <Icon name="heart" color={color} size={size}/>
            )
        }}/>
        <Tab.Screen name="Pokedex"  component={PokedexNavigation} options={{
            tabBarLabel: '',
            tabBarIcon: ()=> renderIcon()
        }}/>
        <Tab.Screen name="Account" component={AccountNavigation} options={{
            tabBarLabel: 'Mi cuenta',
            tabBarIcon: ({color, size})=>(
                <Icon name='user' color={color} size={size} />
            )
        }} />
    </Tab.Navigator>
  )
}


function renderIcon(){
    return(
        <Image 
            source={require('../assets/pokebola.png')}
            style={{width: 75, height: 75, top: -15}}
        />
    )
}