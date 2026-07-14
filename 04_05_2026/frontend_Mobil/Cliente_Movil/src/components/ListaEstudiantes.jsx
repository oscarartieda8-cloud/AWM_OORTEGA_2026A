import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import { useEstudiante } from '../hooks/useEstudiante';
import FormularioEstudiante from './FormularioEstudiante';

const ListaEstudiantes = ({navigation}) => {
    const {listaEstudiantes, agregarEstudiante, eliminarEstudiante, actualizarEstudiante} = useEstudiante() //mi nueva variable de estado
    return (
        <ScrollView style={styles.contenedor}>
            <Button title="AGREGAR ESTUDIANTE" onPress={() => navigation.navigate('FormularioDelEstudiante', {onAgregar:agregarEstudiante})} ></Button>
            <Text style={styles.titulo}>Lista de Estudiantes</Text>
            
            {listaEstudiantes.map((estudiante) => (
                <View key={estudiante.id} style={styles.item}>
                    <Text onPress={() => navigation.navigate('DetalleDelEstudiante', {id: estudiante.id, onEliminar: eliminarEstudiante, onEditar: actualizarEstudiante ,estudiantes:listaEstudiantes})}> Nombre: {estudiante.nombre}</Text>
                    <Button title='Detalle' onPress={()=> navigation.navigate('DetalleDelEstudiante', {id: estudiante.id, onEliminar: eliminarEstudiante, onEditar: actualizarEstudiante ,estudiantes:listaEstudiantes })} ></Button>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        padding: 20,
    },
    titulo: {
        fontSize: 22,
        marginBottom: 20,
    },
    item: {
        marginBottom: 15,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    }
});

export default ListaEstudiantes;