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

    const eliminarEstudiante = (id) => {
        api.delete(`/estudiantes/${id}`)
            .then(() => { setEstudiantes(prev => estudiantes.filter(e => e._id != id)) })
            .catch(err => console.log(err))
    }

    const actualizarEstudiante = (id, nuevo) => {
        api.put(`/estudiantes/${id}`, nuevo)
            .then((res) => {
                setEstudiantes((prev) => prev.map(
                    (estudiante) => estudiante.id === id ? res.data : estudiante))
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const agregarEstudiante = (nuevo) => {
        return api.post("/estudiantes", nuevo)
            .then((res) => {
                setEstudiantes(prev => ([...prev, res.data]))
                return { status: true }
            })
            .catch((err) => {
                console.log("Error al agregar estudiante jeje");
                const mensajeBackend = err.response?.data?.message || "Error al registrar";
                return { status: false, message: mensajeBackend };
            })
    }

    const loginEstudiante = (user) => {
        return api.post("/estudiantes/login", user)
            .then((res) => {
                // Devolvemos status true y el mensaje de éxito del backend
                return { status: true, message: res.data.message };
            })
            .catch((err) => {
                console.log(err.message);
                // Capturamos "Login Fallido" desde err.response.data.message
                return { status: false, message: err.response.data.message || "Error en el servidor" };
            });
    }

    return { estudiantes, agregarEstudiante, eliminarEstudiante, actualizarEstudiante, loginEstudiante } //estamos trabajando con objetos es una contracción como si la clave y el valor se llamaran igual {estudiantes:estudiantes, agregarEstudiantes:agregarEstudiantes}

}