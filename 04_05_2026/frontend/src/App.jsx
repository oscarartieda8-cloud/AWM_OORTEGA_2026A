import Estudiante from "./components/Estudiante";
import EstudianteForm from "./components/EstudianteForm";
import EstudiantesPage from "./pages/EstudiantesPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";

function App(){

  return(

      <BrowserRouter> 
      {/*tablita de enrutamiento */}
        <Routes>
          <Route path="/estudiantes" element={<EstudiantesPage></EstudiantesPage>}></Route>
          <Route path="/estudiantes/nuevo" element={<EstudianteForm></EstudianteForm>}></Route>
          <Route path="/" element={<HomePage></HomePage>}></Route>

        </Routes>
      </BrowserRouter>

  );
}

export default App;