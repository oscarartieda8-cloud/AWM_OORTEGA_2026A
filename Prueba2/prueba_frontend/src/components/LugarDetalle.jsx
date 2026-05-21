import { useState, useEffect } from "react";
import { api } from "../utils/api";
import { useParams } from "react-router-dom";

const LugarDetalle = () => {
    const [lugar, setLugar] = useState({});
    const {id} = useParams();
    useEffect(()=>{
        api.get(`/sitios/${id}`)
            .then((res)=>{
                setLugar(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    }
        ,[])

        return(
            <div>
                <h1>{lugar.nombre}</h1>
                <span>{lugar.descripción}</span>
            </div>
        )

}

export default LugarDetalle;