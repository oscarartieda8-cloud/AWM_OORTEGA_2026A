//a este componente lo visitamos a través del path /estudiante/:id/detalle
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../utils/api";
import { useNavigate } from "react-router-dom";

const DetalleEstudiante = (props) => {
    const [estudiante, setEstudiante] = useState({});
    const { id } = useParams();
    const nav = useNavigate();
    const { onEliminar } = props;

    useEffect(() => {
        api.get(`/estudiantes/${id}`)
            .then(res => setEstudiante(res.data))
            .catch(err => console.log(err))
    }, []);

    return (
        <div>
            <h2>{estudiante.nombre}</h2>
            <h4>Edad: {estudiante.edad}</h4>
            {estudiante.url ? <a href={estudiante.url}>Home Page</a> : <span>Home page no disponible</span>}
            <div>
                <button onClick={() => nav(`/estudiantes/${id}/editar`) }>Editar</button>
            </div>
            <button onClick={() => {
                onEliminar(estudiante._id);
                nav('/estudiantes');
                }}>
                Eliminar
            </button>
        </div>
    )
}

export default DetalleEstudiante;