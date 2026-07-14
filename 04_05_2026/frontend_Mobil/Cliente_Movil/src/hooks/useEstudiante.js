import { useState, useEffect } from "react";
import { api } from "../utils/api";

export const useEstudiante = () => {

    const [listaEstudiantes, setListaEstudiantes] = useState([]);

    useEffect(() => {
        api.get('/estudiantes')
            .then(response => {
                setListaEstudiantes(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []); 


    const agregarEstudiante = (nuevoEstudiante) => {
        api.post('/estudiantes', nuevoEstudiante)
            .then(respuesta => {
                setListaEstudiantes( Listaprev => ([...Listaprev, respuesta.data]))
            })
            .catch(error => {
                console.log(error)
            })
    }

    const eliminarEstudiante = (id) => {
        api.delete(`/estudiantes/${id}`)
            .then(() => {
                setListaEstudiantes(prev => prev.filter( e => e.id !== id))
            } )
            .catch(error => console.log(error)) 
    }

    const actualizarEstudiante = (id, nuevoEstudiante) => {
        api.put(`/estudiantes/${id}`, nuevoEstudiante)
            .then(respuesta => {
                setListaEstudiantes(prev => prev.map(e =>e.id == id ? respuesta.data : e ))
            })
            .catch(error => console.log(error))
    }

    return { listaEstudiantes, agregarEstudiante, eliminarEstudiante, actualizarEstudiante}

}