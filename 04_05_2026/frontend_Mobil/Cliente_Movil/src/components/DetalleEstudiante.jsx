import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import axios from 'axios';

const DetalleEstudiante = (props) => {
    const [estudiante, setEstudiante] = useState({});
    const navigation = props.navigation;
    const id = props.route.params.id;

    useEffect(() => {
        axios.get(`http://172.31.45.30:8000/estudiantes/${id}`)
            .then(respuesta => setEstudiante(respuesta.data))
            .catch(error => console.log(error))
    }, [id])

    return (
        <View style={styles.container}>
            <Text>Nombre: {estudiante.nombre}</Text>
            <Text>Edad: {estudiante.edad}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center'
    }
});

export default DetalleEstudiante;