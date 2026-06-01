import Materia from "../components/Materia";
import { useNavigate } from "react-router-dom";

const MateriasLista = (props) => {

    const { lista } = props
    return (
        <div>
            {
                lista.map((materia) => (
                    <div key={materia.id}>
                        <Materia
                            nombre={materia.nombre}
                            nivel={materia.nivel}
                            duracion={materia.duracion}
                        ></Materia>
                    </div>
                ))
            }
        </div>
    )
}

export default MateriasLista;