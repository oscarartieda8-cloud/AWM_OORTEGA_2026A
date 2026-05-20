import EstudianteForm from "./components/EstudianteForm";
import EstudiantesPage from "./pages/EstudiantesPage";
import HomePage from "./pages/HomePage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEstudiante } from "./hooks/useEstudiante";  //1
import DetalleEstudiante from "./pages/DetalleEstudiante";

const App = () => {

  const { estudiantes, agregarEstudiante} = useEstudiante();  //2

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/estudiantes" element= {<EstudiantesPage estudiantes = {estudiantes}/>}></Route> {/* 3 */ }
        <Route path="/estudiantes/nuevo" element= {<EstudianteForm onAgregar = {agregarEstudiante} />}></Route>
        <Route path= "/estudiantes/:id/detalle" element= {<DetalleEstudiante/>}></Route> {/*Parece que estamos queriendo que el ID del ruteo sea variable =0 */}
        <Route path="/" element= {<HomePage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;