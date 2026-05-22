import { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import useMateria from './hooks/useMateria'
import MateriasLista from './pages/MateriasLista'
import MateriaForm from "../src/components/MateriaForm"
function App() {
  const {materias, AgregarMateria} = useMateria();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MateriasLista lista={materias}></MateriasLista>}></Route>
        <Route path="/crear" element={<MateriaForm></MateriaForm>}></Route>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
