import { useState } from "react";
import Taller from "../components/Taller";
import { useNavigate } from "react-router-dom";

const TallerPage = (props) => {

    const { lista } = props
    const navegador = useNavigate();
    console.log(lista)
    return (
        <div>
            <h1>Talleres de Programación</h1>
            {
                lista.map(taller => {
                    <div key={taller.id}>
                        <Taller
                            nombre={taller.nombre}
                            nivel={taller.nivel}
                        >
                        </Taller>;
                    </div>
                })
            }
        </div>
    )
}

export default TallerPage;