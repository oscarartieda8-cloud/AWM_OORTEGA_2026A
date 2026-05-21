import { useState } from "react"
import Lugar from "../components/lugar"
import { useNavigate } from "react-router-dom"
const LugaresPage = (props) => {
    const { lugares } = props
    const navegar = useNavigate();
    return (
        <div>
            {
                lugares.map((sitio) => 
                    <div key={sitio.id}>
                        <Lugar
                        nombre={sitio.nombre} 
                        ciudad={sitio.ciudad} 
                        pais={sitio.pais}>
                        </Lugar>
                        <button onClick={()=>{navegar(`/sitios/${sitio.id}/detalle`)}}>Detalle</button>
                    </div>
                )
            }
        </div>
    )
}

export default LugaresPage;