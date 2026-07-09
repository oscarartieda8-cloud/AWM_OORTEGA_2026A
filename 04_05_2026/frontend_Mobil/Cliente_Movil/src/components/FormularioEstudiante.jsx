import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import axios from 'axios';

const FormularioEstudiante = (props) => {

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

export default FormularioEstudiante;