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

function App() {
  return (
    <>{/* Este es un comentario */}
      <BrowserRouter>
        <Circulo></Circulo>

        <MainNav />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inversiones" element={<Inversiones />} />
          <Route path="/proveedores" element={<Proveedores />} />
          <Route path="/empleados" element={<Empleados />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/productodetalles/:idproducto" element={<ProductoDetalles />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/seleccionado" element={<Seleccionado />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/clientes" element={<Clientes />} />
        </Routes>
        <MainFooter />


      </BrowserRouter>

    </>
  )
}

export default App
