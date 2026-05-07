import Estudiante from "../components/estudiante";
import { listaEstudiantes } from "../utils/data";

const EstudiantesPage = () => {
  return (
    <div>
      
      {/*} DATOS HARDCODEADOS 
      <Estudiante nombre={"Amogus"} edad={40} url={"https://www.youtube.com/"} />
      <Estudiante nombre={"Pacheko"} edad={77} url={"https://www.youtube.com/"} />
      <Estudiante nombre={"Manuela"} edad={66} url={"https://www.youtube.com/"} ></Estudiante>
      {*/}
      {
      listaEstudiantes.map((estudiante) => 
        {
          return <Estudiante nombre={estudiante.nombre} edad={estudiante.edad} url={estudiante.url}></Estudiante>
        })
      }
    </div>
  );
}

export default EstudiantesPage;