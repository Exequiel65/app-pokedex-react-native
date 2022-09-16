import { View, Text, FlatList, StyleSheet, ActivityIndicator, Platform } from 'react-native'
import React from 'react'
import PokemonCard from './PokemonCard'


export default function PokemonList(props) {
  const { pokemons, loadPokemons, isNext, load } = props
  const loadMore = ()=>{
    loadPokemons();
  }
  return (
    <FlatList 
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon)=> String(pokemon.id) }
      renderItem={({item})=> (<PokemonCard pokemon={item} />)}
      contentContainerStyle={styles.flatListContain}
      onEndReached={isNext && loadMore}
      onEndReachedThreshold={0.1}
      
      ListFooterComponent={ load ?
        <ActivityIndicator
          size='large'
          style={styles.spinner}
          color='#AEAEAE'
        /> : 
        <View style={{height: 100}}></View>
      }
    />
  )
}

const styles= StyleSheet.create({
  flatListContain:{
    paddingHorizontal: 5,
    marginTop: Platform.OS == 'android' ? 30 : 0,
  },
  spinner:{
    marginTop: 20,
    marginBottom: Platform.OS == 'android' ? 90 : 60
  }
})