import Estudiante from "../components/estudiante";
import { listaEstudiantes } from "../utils/data";
import { useState } from "react";

const EstudiantesPage = () => {
  const [lstEstudiantes, setLstEstudiantes] = useState(listaEstudiantes);
  const [nuevoEstudiante, setNuevoEstudiante] = useState(
    {
      id : Date.now(), /*simplemente para que los ids sean diferentes*/
      nombre: "NOMBRE",
      edad: 0,
      url: "AQUI TU URL"

    }
  );

  const handerAgregarEstudiante = (e) =>{
    e.preventDefault();
    setLstEstudiantes([...lstEstudiantes, nuevoEstudiante])
    setNuevoEstudiante({...nuevoEstudiante, nombre:"", edad: 0, url:""})
  }
  return (
    <div>

      <h1>Estudiantes:</h1>
      <hr />
      <form onSubmit={handerAgregarEstudiante}>
        <div>
          <label htmlFor="est_nombre">Nombre: </label>
          <input
            type="text"
            name="est_nombre"
            id="est_nombre"
            placeholder="Ingresa tu nombre" required
            value={nuevoEstudiante.nombre}
            onChange={(e) => setNuevoEstudiante({ ...nuevoEstudiante, nombre: e.target.value })} /> 
            {/*e de Event, contiene toda la info del evento - target es para obtener el elemento 
            del input pq ese genero el evento y con value saco el valor xd */}
        </div>
        <div>
          <label htmlFor="est_edad">Edad:  </label>
          <input 
            type="number" 
            name="est_edad" 
            id="est_edad" 
            placeholder="Ingresa tu edad" required 
            value={nuevoEstudiante.edad}
            onChange={(e) => setLstEstudiantes({...nuevoEstudiante, edad: e.target.value})}
            />
        </div>
        <div>
          <label htmlFor="est_url">URL:  </label>
          <input 
            type="text" 
            name="est_url" 
            id="est_url" 
            placeholder="URL del home page" 
            value={nuevoEstudiante.url}
            onChange={(e) => setLstEstudiantes({...nuevoEstudiante, url: e.target.value})}
            />
        </div>
        <div>

          <input type="submit" id="est_submit" value={"Agregar"} />
        </div>
      </form>
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


      {/* DATOS HARDCODEADOS 
      <Estudiante nombre={"Amogus"} edad={40} url={"https://www.youtube.com/"} />
      <Estudiante nombre={"Pacheko"} edad={77} url={"https://www.youtube.com/"} />
      <Estudiante nombre={"Manuela"} edad={66} url={"https://www.youtube.com/"} ></Estudiante>
      */}
    </div>
  );
}

export default EstudiantesPage;