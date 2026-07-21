import React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import * as Ubicacion from 'expo-location';

const GeoComponent = () => {

    const [ubicacion, setUbicacion] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            var { status } = await Ubicacion.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setError('Permiso denegado para acceder a la ubicación');
                return;
            }

            var UbicacionOtorgada = await Ubicacion.getCurrentPositionAsync({});
            setUbicacion(UbicacionOtorgada);
        })() /*Está horrible pero este parentesis es porque es una función que se debe ejecutar func(); pero no esta declarada sino que la escribimos ahi todo feo */

    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Mi Ubicación</Text>

            {/* Campo para la Latitud */}
            <View style={styles.grupoInput}>
                <Text>Latitud: {ubicacion ? JSON.stringify(ubicacion.coords.latitude) : error}</Text>
            </View>

            {/* Campo para la Longitud */}
            <View style={styles.grupoInput}>
                <Text>Longitud: {ubicacion ? JSON.stringify(ubicacion.coords.longitude) : error}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20, 
        justifyContent: 'flex-start', 
        marginTop: 20,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    grupoInput: {
        marginBottom: 15,
    },
    cajaTexto: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        marginTop: 5,
    }
});

export default GeoComponent;
