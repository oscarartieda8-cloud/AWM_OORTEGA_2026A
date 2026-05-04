import Estudiante from "../components/estudiante";
const EstudiantesPage = () => {
  return (
    <div>
      <Estudiante nombre={"Amogus"} edad={40} url={"https://www.youtube.com/"} />
      <Estudiante nombre={"Pacheko"} edad={77} url={"https://www.youtube.com/"} />
      <Estudiante nombre={"Manuela"} edad={66} url={"https://www.youtube.com/"} ></Estudiante>
    </div>
  );
}

export default EstudiantesPage;