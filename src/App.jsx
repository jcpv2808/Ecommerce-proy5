import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainFooter from './common/MainFooter'
import MainNav from './common/MainNav'
import Inicio from './pages/Inicio'
import Inversiones from './pages/Inversiones'
import Proveedores from './pages/Proveedores'
import Empleados from './pages/Empleados'
import Tienda from './pages/Tienda'
import ProductoDetalles from './pages/ProductoDetalles'
import Carrito from './pages/Carrito'
import Circulo from './common/Circulo'
import Seleccionado from './pages/Seleccionado'
import Pedidos from './pages/Pedidos'
import Clientes from './pages/Clientes'
import Consultas from './pages/Consultas'
import DetallePedido from './pages/DetallePedido'
import Login from './pages/Login'
import { useState } from 'react'
import ProtectedRoute from './utils/ProtectedRoute'
import Escritorio from './pages/Escritorio'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [usuario, setUsuario] = useState(null);


  const handleLogin = (data) => {
    setIsAuthenticated(true);
    console.log(data);
    setUsuario(data);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    alert("Su sesión ha sido cerrada");
  };

  return (
    <>{/* Este es un comentario */}
      <BrowserRouter>
        <Circulo></Circulo>

        <MainNav isAuthenticated={isAuthenticated} onLogout={handleLogout} usuario={usuario} />
        <Routes>
          <Route path="/" element={<Inicio />} />
          {/*protected inversiones*/}
          <Route path="/inversiones" element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Inversiones />
            </ProtectedRoute>} />

          <Route path="/proveedores" element={<Proveedores />} />
          <Route path="/empleados" element={<Empleados />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/productodetalles/:idproducto" element={<ProductoDetalles />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/seleccionado" element={<Seleccionado />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/consultas" element={<Consultas />} />
          <Route path="/detallepedido/:idpedido" element={<DetallePedido />} />

          <Route
            path="/login"
            element={<Login onLogin={(data) => handleLogin(data)} isAuthenticated={isAuthenticated} />}
          />

          <Route path="/escritorio" element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Escritorio/>
            </ProtectedRoute>
          } />
        </Routes>
        <MainFooter />

      </BrowserRouter>

    </>
  )
}

export default App
