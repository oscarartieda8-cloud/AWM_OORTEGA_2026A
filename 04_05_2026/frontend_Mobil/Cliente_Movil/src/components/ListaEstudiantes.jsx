import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import axios from 'axios';

const ListaEstudiantes = () => {
    const [lista, setLista] = useState([]);

    useEffect(() => {
        axios.get('http://192.168.1.28:8000/estudiantes')
            .then(response => {
                setLista(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []); 

    return (
        <ScrollView style={styles.contenedor}>
            <Text style={styles.titulo}>Lista de Estudiantes</Text>
            
            {lista.map((estudiante) => (
                <View key={estudiante.id} style={styles.item}>
                    <Text>Nombre: {estudiante.nombre}</Text>
                    <Text>Edad: {estudiante.edad}</Text>
                    <Text>URL: {estudiante.url}</Text> 
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