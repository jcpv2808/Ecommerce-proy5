import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import logo from '../assets/images/logo.jpg'
import './MainNav.css'
function MainNav() {
    const [transparente, setTransparente] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setTransparente(false);
            } else {
                setTransparente(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`flotante container navbar navbar-expand-lg bg-body-tertiary navbar-dark ${transparente ? 'not-transparent' : 'transparent'}`}>
                <div className="logo-container">
                    <Link className="navbar-brand" to="/"><img src={logo} className="img-fluid" /></Link>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#nosotros">Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/inversiones">Inversiones</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/proveedores">Proveedores</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/clientes">Clientes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/empleados">Empleados</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/pedidos">Pedidos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/tienda">Tienda</Link>
                        </li>
                        <li className="nav-item carrito">
                            <Link className="nav-link" to="/carrito">
                                <i className="bi bi-basket-fill" title="Carrito de compras"></i> Carrito
                            </Link>
                        </li>
                        <li className="nav-item carrito">
                            <Link className="nav-link" to="/seleccionado">Seleccionados</Link>
                        </li>
                    </ul>
                </div>

        </nav>
    )
}

export default MainNav