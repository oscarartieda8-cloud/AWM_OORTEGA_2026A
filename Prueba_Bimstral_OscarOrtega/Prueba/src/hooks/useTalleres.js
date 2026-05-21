import { api } from "../utils/api";
import { useEffect, useState } from "react";

const useTalleres = () =>{
    const [listaTalleres, setListaTalleres] = useState([]);
    //GET
    useEffect(()=>{
        api.get("/talleres")
            .then((res)=>{
                setListaTalleres(res.data)
            })
            .catch((err)=>{
                console.log("Error en la importación desde el servidor :( ")
            })
    }
        ,[])


    //POST
    const crearTaller = (Taller_nuevo) =>{
        api.post("/talleres", Taller_nuevo)
            .then(()=>{
                setListaTalleres((prev)=>({...prev,Taller_nuevo}))
            })
            .catch((err)=>{
                console.log("Error al añadir hacia el servidor :::(((((((")
            })
    }

    return{listaTalleres, crearTaller}
}

export default useTalleres;