import { useState, useEffect } from "react"
import { api } from "../utils/api"
export const useLugares = () => {

    const [lstLugar, setLstLugar] =useState([]);

    // fumc de list
    useEffect(()=>{
        api.get("/sitios")
            .then((res)=>{
                setLstLugar(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    }
        ,[])


    //fumc post
    const AgregarLugar =(lugar_arg)=>{
        api.post("/sitios",lugar_arg)
            .then((res)=>{
                setLstLugar(prev=>([...prev,res.data]))
            })
            .catch((err)=>{
                console.log(err)
            })
    }

    return {lstLugar, AgregarLugar}

}