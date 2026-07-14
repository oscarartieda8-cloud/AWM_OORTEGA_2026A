import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import { api } from '../utils/api';
import { useEstudiante } from '../hooks/useEstudiante';
const DetalleEstudiante = (props) => {
    const [estudiante, setEstudiante] = useState({});

    const navigation = props.navigation;
    const { id, onEliminar, onEditar, actualizarEstudiante, estudiantes } = props.route.params;

    useEffect(() => {
        api.get(`/estudiantes/${id}`)
            .then(respuesta => setEstudiante(respuesta.data))
            .catch(error => console.log(error))
    }, [id])

    return (
        <View style={styles.container}>
            <Text>Nombre: {estudiante.nombre}</Text>
            <Text>Edad: {estudiante.edad}</Text>
            <Button title="Eliminar"
                onPress={() => {
                    onEliminar(id)
                    navigation.navigate('ListaDeEstudiantes')
                }}></Button>
            <Button title="Editar"
                onPress={() => {
                    navigation.navigate('FormularioDelEstudiante', {id: id, onEditar: onEditar, estudiantes: estudiantes })
                }}>

            </Button>
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