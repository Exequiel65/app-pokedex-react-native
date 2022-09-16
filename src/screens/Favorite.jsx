import { View, Text, SafeAreaView, Button } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'
import { getPokemonDetailsApi } from '../api/pokemon'
import { getPokemonsFavoriteApi } from '../api/favorite';
import useAuth from '../hooks/useAuth';
import PokemonList from "../components/PokemonList"
import { useFocusEffect } from '@react-navigation/native';
import NotLoged from '../components/NotLoged';
export default function Favorite() {
    const { auth } = useAuth();
    const [Pokemons, setPokemons] = useState([]);
  
    useFocusEffect(
        useCallback(() => {
            if (auth) {
                (async () => {
                    const response = await getPokemonsFavoriteApi()
                    const pokemons = [];
                    for await (const id of response) {
                        const pokemonDetail = await getPokemonDetailsApi(id)
                        pokemons.push({
                            id: pokemonDetail.id,
                            name: pokemonDetail.name,
                            type: pokemonDetail.types[0].type.name,
                            order: pokemonDetail.order,
                            image: pokemonDetail.sprites.other["official-artwork"].front_default
    
                        })
                    }
                    setPokemons(pokemons)
                })()
            }
    
        }, [auth])
    )

    return (
        <SafeAreaView>
            {!auth ? (<NotLoged />) : (<PokemonList pokemons={Pokemons} />)}


        </SafeAreaView>
    )
}