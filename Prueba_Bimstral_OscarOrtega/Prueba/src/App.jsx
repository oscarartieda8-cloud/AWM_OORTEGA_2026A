import {BrowserRouter, Routes, Route} from "react-router-dom"
import TallerPage from "./pages/TallerPage"
import useTalleres from "./hooks/useTalleres"
import TallerForm from "./components/TallerForm";
import TallerDetalle from "./components/TallerDetalle";

function App() {
  const {listaTalleres, crearTaller} = useTalleres();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/talleres" element={<TallerPage lista={listaTalleres}></TallerPage>}></Route> {/*para mi lista */}
        <Route path="/taller/:id" element={<TallerDetalle></TallerDetalle>}></Route> {/*para mi detalle */}
        <Route path="/crear" element={<TallerForm onSubmit={crearTaller}></TallerForm>}></Route> {/*para mi form */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
