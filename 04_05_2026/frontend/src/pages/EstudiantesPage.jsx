import Estudiante from "../components/estudiante";
import EstudianteForm from "../components/EstudianteForm";
import { listaEstudiantes } from "../utils/data";
import { useState } from "react";

const EstudiantesPage = () => {
  /*ESTADO GLOBAL - PASO 1 del "State Lifting" */
  const [lstEstudiantes, setLstEstudiantes] = useState(listaEstudiantes);

  console.log("renderizando")

  const agregarEstudiante = (nuevo) =>{
    const estudianteFinal ={...nuevo, id: Date.now()} /*temporal y para que el id ya no moleste en base a la fecha*/
    setLstEstudiantes([...lstEstudiantes, estudianteFinal])
  }
  return (
    <div>

      <h1>Estudiantes:</h1>
      <hr />
      /*Paso 2: pasar la referencia de la función */
      <EstudianteForm onAgregar = {agregarEstudiante}/>
      {
        lstEstudiantes.map((estudiante) => {
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


{/* DATOS HARDCODEADOS 
      <Estudiante nombre={"Amogus"} edad={40} url={"https://www.youtube.com/"} />
      <Estudiante nombre={"Pacheko"} edad={77} url={"https://www.youtube.com/"} />
      <Estudiante nombre={"Manuela"} edad={66} url={"https://www.youtube.com/"} ></Estudiante>
      */}