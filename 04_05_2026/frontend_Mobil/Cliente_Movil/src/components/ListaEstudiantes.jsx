import React from 'react';
import {useState, useEffect} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import axios from 'axios';

const ListaEstudiantes = () => {
    const [lista, setLista] = useState([]);
    useEffect(()=>{
        axios.get('http://172.31.45.42:8000/estudiantes')
            .then(response => {
                setLista(response.data);
                console.log(response.data);
            }
            )
            .catch(err => {
                console.log(err)
            })
    }
        ,)
    return(

    )
}