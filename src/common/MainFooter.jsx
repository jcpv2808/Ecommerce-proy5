import './MainFooter.css'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo-blanco.jpg'

function MainFooter() {
    return (
        <footer id="main-footer">
            <div className="container">
                <div className="content-wrapper">
                    <div className="logo-container" id='logo-footer'>
                        <Link className="navbar-brand" to="/"><img src={logo} className="img-fluid" /></Link>
                    </div>
                    <div>
                        <p>Líder en celulares de última generación</p>
                    </div>
                    <div className="redes">
                        <a href="">
                            <i className="bi bi-instagram red"></i>
                        </a>
                        <a href="">
                            <i className="bi bi-facebook red"></i>
                        </a>
                        <a href="">
                            <i className="bi bi-twitter red"></i>
                        </a>
                        <a href="">
                            <i className="bi bi-linkedin red"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default MainFooter