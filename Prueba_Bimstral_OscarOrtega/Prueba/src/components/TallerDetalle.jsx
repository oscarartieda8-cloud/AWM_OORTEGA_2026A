import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { api } from "../utils/api";
const TallerDetalle =()=>{
    const { id } = useParams();
    const [taller, setTaller] = useState({})

    useEffect(()=>{
        api.get(`/talleres/${id}`)
            .then((res)=>{
                setTaller(res.data)
            })
            .catch((err)=>{
                console.log("Error en la importación desde el servidor :( ")
            })
    }
        ,[])

    return(
        <div>
            <h1>{taller.nombre}</h1>
            <div>
            <span><strong>Nivel: </strong> {taller.nivel}</span>
            </div>
            <div>
            <span><strong>Duración: </strong>{taller.duracion}</span>
            </div>
        </div>
    )
}

export default TallerDetalle;