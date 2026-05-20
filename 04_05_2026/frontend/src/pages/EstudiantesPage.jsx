import Estudiante from "../components/Estudiante";
import { useNavigate } from "react-router-dom";

//import { listaEstudiantes } from "../utils/data";
import EstudianteForm from "../components/EstudianteForm";
const EstudiantesPage = (props) => {
    const { estudiantes } = props;
    const navegar = useNavigate();
    return (
        <div>
            {
                estudiantes.map((estudiante) => 
                    <div key={estudiante.id}> {/*EL elemento individual ya no es el estudiante sino el DIV*/}
                        <Estudiante
                        nombre={estudiante.nombre}
                        edad={estudiante.edad}
                        url={estudiante.url}/>
                        <button onClick={() => navegar(`/estudiantes/${estudiante.id}/detalle`) }>Detalle</button>
                        <button>Eliminar</button>
                    </div>
                    
                )
            }


        </div>
    );
}
export default EstudiantesPage;