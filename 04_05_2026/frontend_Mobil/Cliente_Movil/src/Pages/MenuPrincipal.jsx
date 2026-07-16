import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const MenuPrincipal = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Menú Principal</Text>
            
            {/* Botón para ir al CRUD de estudiantes */}
            <View style={styles.grupoBoton}>
                <Button 
                    title="Gestión de Estudiantes" 
                    onPress={() => navigation.navigate('ListaDeEstudiantes')} 
                />
            </View>

            {/* Botón para ir a la pantalla de ubicación */}
            <View style={styles.grupoBoton}>
                <Button 
                    title="Ver Mi Ubicación" 
                    onPress={() => navigation.navigate('ComponenteDeUbicación')} 
                    color="#008080" // Un color distinto para diferenciarlo
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center', // Lo centramos para que parezca un menú real
        backgroundColor: '#fff',
    },
    titulo: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 40,
        textAlign: 'center',
    },
    grupoBoton: {
        marginBottom: 20, // Espacio entre los botones
    }
});

export default MenuPrincipal;