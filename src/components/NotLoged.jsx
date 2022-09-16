import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';

const NotLoged = () => {
    const navigate = useNavigation()
    return (
        <View style={styles.content}>
            <Text style={styles.text}>Para ver esta pantalla tienes que iniciar sesión</Text>
            <Button title='Ir al login' onPress={()=> navigate.navigate("Account")} />
        </View>
    );
}

const styles = StyleSheet.create({
    content:{
        marginVertical: 50,
        paddingHorizontal: 50,
    },
    text:{
        textAlign: "center",
        marginBottom: 10
    }
})

export default NotLoged;
