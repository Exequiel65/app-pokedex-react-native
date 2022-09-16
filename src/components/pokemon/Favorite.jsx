import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { addPokemonFavoriteApi, getPokemonsFavoriteApi, isPokemonFavoriteApi, removePokemonFavoriteApi } from '../../api/favorite';

const Favorite = (props) => {
    const { id } = props
    const [isFavorite, setisFavorite] = useState(undefined);
    const [Reload, setReload] = useState(false);
    const Icon = isFavorite ? FontAwesome : FontAwesome5;

    useEffect(() => {
        (async () => {
            try {
                const response = await isPokemonFavoriteApi(id)
                setisFavorite(response)
            } catch (error) {
                setisFavorite(false)
            }
        })()

    }, [id, Reload]);

    const onReload = () => {
        setReload((prev) => !prev)
    }

    const addFavorite = async () => {
        try {
            await addPokemonFavoriteApi(id)
            Alert.alert("Se agrego Exitosamente a Favoritos")
            onReload() 
        } catch (error) {
            throw error
        }
        
    }

    const removeFavorites = async () => {
        setisFavorite(false)
        try {
            await removePokemonFavoriteApi(id)
            Alert.alert("Se quito exitosamente de Favoritos")
            onReload()
        } catch (error) {
            console.log(error)
        }
    }
    return (

        <Icon name="heart" color="#fff" size={20} onPress={isFavorite ? removeFavorites : addFavorite} style={{ marginRight: 20, zIndex: 20 }} />

    );
}

const styles = StyleSheet.create({})

export default Favorite;
