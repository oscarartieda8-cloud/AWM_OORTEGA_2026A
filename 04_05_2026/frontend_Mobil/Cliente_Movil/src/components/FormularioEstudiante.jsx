import React, { useState, useEffect } from 'react';
// Importamos TextInput desde react-native para las cajas de texto
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const FormularioEstudiante = (props) => {
    const [nuevoEstudiante, setNuevoEstudiante] = useState({
        nombre: "",
        edad: 0,
        url: ""
    });
    const { onAgregar, onEditar, id, estudiantes } = props.route.params;
    const navigation = props.navigation;

    useEffect(() => {
        if (id) {
            const estudianteAEditar = estudiantes.find(e => e.id == id)

            if (estudianteAEditar) {
                setNuevoEstudiante(estudianteAEditar)
            }
        }

    }, [id])

    const handlerSubmit = () => {
        if (id) {
            onEditar(id, nuevoEstudiante)
        } else {
            onAgregar(nuevoEstudiante)
        }
        navigation.navigate('ListaDeEstudiantes')
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Nuevo Estudiante</Text>

            {/* Campo para el Nombre */}
            <View style={styles.grupoInput}>
                <Text>Nombre:</Text>
                <TextInput
                    style={styles.cajaTexto}
                    placeholder="Escribe el nombre aquí..."
                    onChangeText={texto => {
                        setNuevoEstudiante(prev => ({ ...prev, nombre: texto })
                        )
                    }}
                    value={nuevoEstudiante.nombre}
                />
            </View>

            {/* Campo para la Edad */}
            <View style={styles.grupoInput}>
                <Text>Edad:</Text>
                <TextInput
                    style={styles.cajaTexto}
                    placeholder="Ej. 21"
                    keyboardType="numeric" // Este prop es genial: saca el teclado numérico en el celular
                    onChangeText={texto => {
                        setNuevoEstudiante(prev => ({ ...prev, edad: texto })
                        )
                    }}
                    value={nuevoEstudiante.edad.toString()}
                />
            </View>

            {/* Campo para la URL */}
            <View style={styles.grupoInput}>
                <Text>URL (Opcional):</Text>
                <TextInput
                    style={styles.cajaTexto}
                    placeholder="https://..."
                    onChangeText={texto => {
                        setNuevoEstudiante(prev => ({ ...prev, url: texto })
                        )
                    }}
                    value={nuevoEstudiante.url}
                />
            </View>

            {/* El botón de enviar */}
            <Button title="AGREGAR"
                onPress={() => {
                    handlerSubmit()
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20, // Te sugiero cambiar alignItems a padding para que los inputs ocupen todo el ancho
        justifyContent: 'flex-start', // Y que todo empiece desde arriba
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

export default FormularioEstudiante;