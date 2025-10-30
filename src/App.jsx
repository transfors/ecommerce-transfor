import './App.css'
import { Routes, Route } from 'react-router-dom'
import Carrito from './pages/Carrito'
import Layout from './components/Layout'
import Inicio from './pages/Inicio'
import Servicios from './pages/Servicios'
import Gatos from './pages/Gatos'
import DetalleGatos from './pages/DetalleGatos'
import DetallePerros from './pages/DetallePerros'
import Pagar from './pages/Pagar'
import RutaProtegida from './pages/RutaProtegida'
import IniciarSesion from './pages/IniciarSesion'
import Perros from './pages/Perros'
import { AuthProvider } from './context/AuthContext'
import { CartProvider } from './context/CartContext'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path='/' element={<Inicio />} />
              <Route path='/servicios' element={<Servicios />} />
              <Route path='/gatos' element={<Gatos />} />
              <Route path='/perros' element={<Perros />} />
              <Route path='/gatos/:id/:nombre' element={<DetalleGatos />} />
              <Route path='/perros/:id/:nombre' element={<DetallePerros />} />
              <Route path="/carrito" element={<Carrito />} />
              <Route path="/iniciar-sesion" element={<IniciarSesion />} />
              <Route path="/dashboard" element={
                <RutaProtegida soloAdmin={true}>
                  <Dashboard />
                </RutaProtegida>} />
              <Route path="/pagar" element={
                <RutaProtegida>
                  <Pagar />
                </RutaProtegida>} />
            </Route>
          </Routes>
        </CartProvider>
      </AuthProvider >
    </>
  )
}

export default App
