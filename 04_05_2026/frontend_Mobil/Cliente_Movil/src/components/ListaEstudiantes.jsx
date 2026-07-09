import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';
import axios from 'axios';
import FormularioEstudiante from './FormularioEstudiante';

const ListaEstudiantes = ({navigation}) => {
    const [lista, setLista] = useState([]);

    useEffect(() => {
        axios.get('http://172.31.45.30:8000/estudiantes')
            .then(response => {
                setLista(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []); 

    const AgregarEstudiante_func = (estudiante_arg) => {
        axios.post('http://172.31.45.30:8000/estudiantes', estudiante_arg)
            .then(response => setLista([...lista, response.data]))
            .catch(err => console.log(err))
    }
    return (
        <ScrollView style={styles.contenedor}>
            <Button title="AGREGAR ESTUDIANTE" onPress={() => navigation.navigate('FormularioDelEstudiante', {onAgregar:{AgregarEstudiante_func}})} ></Button>
            <Text style={styles.titulo}>Lista de Estudiantes</Text>
            
            {lista.map((estudiante) => (
                <View key={estudiante.id} style={styles.item}>
                    <Text onPress={() => navigation.navigate('DetalleDelEstudiante', {id: estudiante.id})}> Nombre: {estudiante.nombre}</Text>
                    <Button title='Edit' onPress={()=> navigation.navigate('DetalleDelEstudiante', {id: estudiante.id})} ></Button>
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