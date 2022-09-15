import { View, Text, SafeAreaView, Button } from 'react-native'
import React, { useState, useEffect} from 'react'
import { testApiFetch } from '../api/pokemon'
import { getPokemonsFavoriteApi } from '../api/favorite';

export default function Favorite() {
  // testApiFetch()
  
  const checkFavoritos = async()=>{
    const response = await getPokemonsFavoriteApi();
    console.log(response)
  }
  return (
    <SafeAreaView>
      <Text>Favorite</Text>
      <Button title='Obtener favoritos' onPress={checkFavoritos} />
    </SafeAreaView>
  )
}