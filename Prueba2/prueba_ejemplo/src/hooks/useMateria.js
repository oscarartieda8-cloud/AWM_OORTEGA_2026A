import {api} from "../utils/api"
import { useState, useEffect } from "react";
const useMateria =()=>{
    const [materias, setMaterias] = useState([]);


        useEffect(()=>{
            api.get("/materias2")
            .then((res)=>{
                setMaterias(res.data)
            })
            .catch((err)=>{
                console.log("Error en la petición:" + {err})
            })
        },[])
    
    const AgregarMateria=(materia_arg)=>{
        api.post("/materias2",materia_arg)
            .then((res)=>{
                setMaterias(prev=>([...prev,res.data]))
            })
            .catch((err)=>{
                console.log("Error al ingresar")
            })
    }
    return {materias, AgregarMateria }
}

export default useMateria;