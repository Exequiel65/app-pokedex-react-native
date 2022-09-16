import React, { useState, useEffect} from 'react';
import {View, StyleSheet, Text, TextInput, Button, Keyboard} from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { user, userDetails } from '../../utils/userDB';
import useAuth from '../../hooks/useAuth';

const LoginForm = () => {
    const [Errors, setErrors] = useState("");
    const { login } = useAuth()
    
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        onSubmit: (formValue)=>{
            setErrors('')
            const { username, password } = formValue
            if (username !== user.userName || password !== user.password ) {
                setErrors('credenciales incorrectas')
            } else{
                login(userDetails)
            }
        },
        
    })

    return (
        <View>
            <Text style={styles.title} >Iniciar Sesion</Text>
            <TextInput
                placeholder='Nobre de usuario'
                style={styles.input}
                autoCapitalize="none"
                value={formik.values.username}
                onChangeText={(text)=> formik.setFieldValue('username', text)}
                
            />
            <TextInput
                placeholder='Contraseña'
                style={styles.input}
                autoCapitalize="none"
                secureTextEntry={true}
                value={formik.values.password}
                onChangeText={(text)=> formik.setFieldValue('password', text)}
            />
            <Button title='Entrar' onPress={formik.handleSubmit} />
            <Text style={styles.error}>{formik.errors.username}</Text>
            <Text style={styles.error}>{formik.errors.password}</Text>
            <Text style={styles.error}>{Errors}</Text>
        </View>
    );
}


function initialValues (){
    return{
        username : "",
        password: ""
    }
}

function validationSchema(){
    return{
        username: Yup.string().required("El usuario es obligatorio"),
        password: Yup.string().required("La contraseña es obligatoria")
    }
}
const styles = StyleSheet.create({
    title:{
        textAlign : "center",
        fontSize : 28,
        fontWeight :"bold",
        marginTop : 50,
        marginBottom : 15
    },
    input:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    },
    error:{
        textAlign: "center",
        color: "#f00",
        marginTop: 20
    }
})

export default LoginForm;
