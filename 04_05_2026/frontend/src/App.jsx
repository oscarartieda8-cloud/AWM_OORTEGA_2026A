import Estudiante from "./components/Estudiante";
import EstudianteForm from "./components/EstudianteForm";
import EstudiantesPage from "./pages/EstudiantesPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import { useEstudiante } from "./hooks/useEstudiante";

function App(){

    const { estudiantes, agregarEstudiante } = useEstudiante();
  return(

      <BrowserRouter> 
      {/*tablita de enrutamiento */}
        <Routes>
          <Route path="/estudiantes" element={<EstudiantesPage estudiantes = {estudiantes}></EstudiantesPage>}></Route>
          <Route path="/estudiantes/nuevo" element={<EstudianteForm onAgregar={agregarEstudiante}></EstudianteForm>}></Route>
          <Route path="/" element={<HomePage></HomePage>}></Route>

        </Routes>
      </BrowserRouter>

  );
}

export default App;