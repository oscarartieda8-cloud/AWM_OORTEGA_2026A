import Estudiante from "../components/estudiante";
import EstudianteForm from "../components/EstudianteForm";
import {useEstudiante} from "../hooks/useEstudiante"

const EstudiantesPage = (props) => {
  const {estudiantes} = props;
  
  return (
    <div>

      <h1>Estudiantes:</h1>
      <hr/>
      {
        estudiantes.map((estudiante) => {
          return <Estudiante 
                    key = {estudiante.id}
                    nombre={estudiante.nombre} 
                    edad={estudiante.edad} 
                    url={estudiante.url}
                    >
                  </Estudiante>
        })
      }
    </div>
  );
}

export default EstudiantesPage;


