import Estudiante from "../components/estudiante";
import EstudianteForm from "../components/EstudianteForm";
import { useState, useEffect } from "react";
import axios from "axios";

const EstudiantesPage = () => {
  console.log("renderizando")
  /* INICIALIZADO CON LISTA VACIA */
  const [lstEstudiantes, setLstEstudiantes] = useState([]);
  
  //COSAS QUE DEBEN QUEDAR CLARAS PARA EL HTTP CON AXIOS
      //1. Petición HTTP con axios

      //2. Manejo de una promesa

      //3. Manejo de side-effects usando hook: useEffect
      useEffect(()=>{
          axios.get("http://172.31.45.10:8000/estudiantes")
          .then(
            (response)=>{ /*entre otras cosas en resp estará la lista de estudiantes */
            console.log(response);
            setLstEstudiantes(response.data) /*aqui estamos reemplazando la lst vacia por lo que viene del server jejejeje lol */
            }
          )
          .catch(
            (err)=>{
            console.log(err)
            }
          )
      }, []) /*Aqui está el vector de dependencia que evita el side effect */

    

  const agregarEstudiante = (nuevo) =>{
    const estudianteFinal ={...nuevo, id: Date.now()} 
    setLstEstudiantes( prev => [...prev, estudianteFinal])
  }
  return (
    <div>

      <h1>Estudiantes:</h1>
      <hr />
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


