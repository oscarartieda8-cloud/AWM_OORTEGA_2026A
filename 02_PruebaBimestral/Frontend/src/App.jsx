import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAutor } from "./hooks/useAutor";
import AutoresPage from "./pages/AutoresPage";
import AutorForm from "./components/AutorForm";
import Login from "./pages/Login";
import Registro from "./pages/Registro";

const App = () => {
  const { autores, agregarAutor, eliminarAutor, actualizarAutor } = useAutor();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/registro" element={<Registro />}></Route>
        <Route path="/autores" element={<AutoresPage autores={autores} onEliminar={eliminarAutor} />}></Route>
        <Route path="/autores/nuevo" element={<AutorForm onAgregar={agregarAutor} />}></Route>
        <Route path="/autores/:id/editar" element={<AutorForm onActualizar={actualizarAutor} autores={autores} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
