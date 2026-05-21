import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Lugar from './components/lugar'
import LugarForm from './components/LugarForm'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useLugares } from './hooks/useLugares'
import LugaresPage from './pages/LugaresPage'
import LugarDetalle from './components/LugarDetalle'
function App() {
  const {lstLugar, AgregarLugar} = useLugares();

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LugaresPage lugares={lstLugar}></LugaresPage>}></Route>
          <Route path="/sitio/new" element={<LugarForm onAgregar={AgregarLugar} />}></Route>
          <Route path="/sitios/:id/detalle" element={<LugarDetalle></LugarDetalle>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
