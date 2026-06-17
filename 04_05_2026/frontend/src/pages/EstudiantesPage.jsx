import Estudiante from "../components/Estudiante";
import { useNavigate } from "react-router-dom";

//import { listaEstudiantes } from "../utils/data";
import EstudianteForm from "../components/EstudianteForm";
const EstudiantesPage = (props) => {
    const { estudiantes, onEliminar } = props;
    const navegar = useNavigate();
    return (
        <div>
            <button onClick={() => navegar("/estudiantes/nuevo")}>+</button>
            {
                estudiantes.map((estudiante) => 
                    <div key={estudiante._id}> {/*EL elemento individual ya no es el estudiante sino el DIV*/}
                        <Estudiante
                        nombre={estudiante.nombre}
                        edad={estudiante.edad}
                        url={estudiante.url}/>
                        <button onClick={() => navegar(`/estudiantes/${estudiante._id}/detalle`) }>Detalle</button>
                        <button onClick={()=> {onEliminar(estudiante._id)} }>Eliminar</button>
                    </div>
                    
                )
            }


        </div>
    );
}
export default EstudiantesPage;