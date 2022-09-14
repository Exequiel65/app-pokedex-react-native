import { View, ScrollView } from 'react-native'
import React, {useState, useEffect } from 'react'
import { getPokemonDetailsApi } from '../api/pokemon'
import Header from '../components/pokemon/Header'
import Type from '../components/pokemon/Type'
import Stats from '../components/pokemon/Stats'

export default function Pokemon(props) {
  const { route: {params}, navigation } = props
  const [Pokemon, setPokemon] = useState(null);
  useEffect(() => {
    ( async ()=>{
      try {
        const response = await getPokemonDetailsApi(params.id)
        setPokemon(response)
      } catch (error) {
        navigation.goBack();
      }
    })()
  }, [params]);

  if (!Pokemon) {
    return null
  }
  return (
    <ScrollView>
      <Header name={Pokemon.name} order={Pokemon.order} image={Pokemon.sprites.other["official-artwork"].front_default} type={Pokemon.types[0].type.name}/>
      <Type 
        type={Pokemon.types}
      />
      <Stats
        stats={Pokemon.stats} 
      />
    </ScrollView>
  )
}