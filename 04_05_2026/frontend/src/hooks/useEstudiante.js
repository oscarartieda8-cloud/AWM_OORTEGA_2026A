import { useState, useEffect } from "react";
import { api } from "../utils/api";

export const useEstudiante = () => {
    const [estudiantes, setEstudiantes] = useState([]); //esta antes era la lista jaja

    useEffect(() => {
        api.get("/estudiantes")
            .then((response) => {
                setEstudiantes(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const agregarEstudiante = (nuevo) => { /*pq sube 2 veces? */

        api.post("/estudiantes", nuevo)
            .then((res) => {
                setEstudiantes(prev => ([...prev, res.data]))
            })
            .catch((err) => {
                console.log("Error al agregar estudiante jeje")
            })
    }

     const eliminarEstudiante = (id) => {
        api.delete(`/estudiantes/${id}`)
        .then(()=> {setEstudiantes(prev=> estudiantes.filter(e => e._id != id))})
        .catch(err=>console.log(err))
    }

    const actualizarEstudiante = (id, nuevo) => {
        api.put(`/estudiantes/${id}`, nuevo)
        .then((res)=>{
            setEstudiantes((prev)=>prev.map(
                (estudiante)=> estudiante.id === id ? res.data : estudiante))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    return { estudiantes, agregarEstudiante, eliminarEstudiante, actualizarEstudiante } //estamos trabajando con objetos es una contracción como si la clave y el valor se llamaran igual {estudiantes:estudiantes, agregarEstudiantes:agregarEstudiantes}

}