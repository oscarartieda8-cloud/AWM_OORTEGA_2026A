import { useState } from "react";
import { useNavigate } from "react-router-dom";
const TallerForm =(props)=>{

    const [taller, setTaller]= useState({
        id:0,
        nombre:"",
        nivel:"",
        duracion:""
    })
    const {onSubmit} = props;
    const navegador = useNavigate();
    const submitHandler =()=>{
        onSubmit(taller)
    }
    return(
        <div>
            <h1>Crear Nuevo Taller</h1>
            <form onSubmit={submitHandler}></form>
            <div>
                <label htmlFor="ID">ID: </label>
                <input 
                type="number" 
                id="ID"
                placeholder="Ej: Hooks en React"
                value={taller.id}
                onChange={(e)=>{setTaller(prev=>([...prev,e.target.value]))}}
                />
            </div>
            <div>
                <label htmlFor="ID">Nombre: </label>
                <input 
                type="text" 
                id="Nombre"
                placeholder="Ej: Hooks en React"
                value={taller.id}
                onChange={(e)=>{setTaller(prev=>([...prev,e.target.value]))}}
                />
            </div>
            <div>
                <label htmlFor="Nivel">Nivel:</label>
                <select 
                type="text" 
                id="Nivel"
                placeholder="Ej: Hooks en React"
                value={taller.id}
                onChange={(e)=>{setTaller(prev=>([...prev,e.target.value]))}}
                >
                    
                    <option>Básico</option>
                    <option>Medio</option>
                    <option>Alto</option>
                </select>
            </div>
            <div>
                <label htmlFor="Duración">Duración: </label>
                <input 
                type="number" 
                id="Duración"
                placeholder="Ej: Hooks en React"
                value={taller.id}
                onChange={(e)=>{setTaller(prev=>([...prev,e.target.value]))}}
                />
            </div>
            <div>
                <input type="Submit"/>
            </div>
            <div></div>
            
        </div>
    )
}

export default TallerForm;