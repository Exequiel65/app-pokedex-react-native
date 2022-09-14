import React from 'react';
import {View, StyleSheet, Text, Image, TouchableWithoutFeedback} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import getColorByPokemonType from '../utils/getColorByPokemonType';
import { capitalize } from 'lodash'

const PokemonCard = (props) => {
    const { pokemon } = props;
    const navigation = useNavigation()
    const goToPokemon= ()=>{
        console.log('Vamos al pokemon', pokemon.id)
        navigation.navigate('Pokemon', {id : pokemon.id})
    }
    const typePokemon = getColorByPokemonType(pokemon.type)
    const bgStyles = {backgroundColor : typePokemon , ...styles.bgStyles}
    return (
        <TouchableWithoutFeedback onPress={goToPokemon}>
            <View style={styles.card}>
                <View style={styles.spacing}>
                    <View style={bgStyles}>
                        <Text style={styles.number}>#{`${pokemon.id}`.padStart(3, 0)}</Text>
                        <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
                        <Image source={{uri: pokemon.image}} style={styles.image}/>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    card:{
        flex:1,
        height: 130
    },
    spacing:{
        flex:1,
        padding: 5,
    },
    name:{
        color: '#fff',
        fontWeight: "bold",
        fontSize: 15,
        paddingTop: 10
    },
    bgStyles:{
        flex : 1,
        borderRadius: 15,
        padding : 10,
    },
    image:{
        position: "absolute",
        bottom: 2,
        right: 2,
        height: 90,
        width : 90
    },
    number:{
        position:'absolute',
        right: 10,
        top: 10,
        color: '#fff',
        fontSize: 11
    }
})

export default PokemonCard;
