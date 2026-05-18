//gestionar el Estado y las conexiones a la API que afectan a ese estado?
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
    return { estudiantes, agregarEstudiante } //estamos trabajando con objetos es una contracción como si la clave y el valor se llamaran igual {estudiantes:estudiantes, agregarEstudiantes:agregarEstudiantes}
}