import { View, Text, SafeAreaView } from 'react-native'
import React, {useState, useEffect} from 'react'
import { getPokemonApi, getPokemonDetailsByUrlApi } from '../api/pokemon';
import PokemonList from '../components/PokemonList';

export default function Pokedex() {
    const [Pokemons, setPokemons] = useState([]);
    useEffect(() => {
        ( async ()=> { await loadPokemons() } )()
    }, []);

    const loadPokemons = async ()=>{
        try {
            const response = await getPokemonApi();
            const pokemons = [];
            for await(const pokemon of response.results){
                const pokemonDetail = await getPokemonDetailsByUrlApi(pokemon.url)
                pokemons.push({
                    id: pokemonDetail.id,
                    name : pokemonDetail.name,
                    type: pokemonDetail.types[0].type.name,
                    order: pokemonDetail.order,
                    image: pokemonDetail.sprites.other["official-artwork"].front_default

                })
            }
            setPokemons([...Pokemons, ...pokemons])

        } catch (error) {
            console.log(error)
        }
    }
  return (
    <SafeAreaView>
      <PokemonList pokemons={Pokemons}/>
    </SafeAreaView>
  )
}