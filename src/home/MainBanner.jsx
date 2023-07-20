import './MainBanner.css'
import phone1 from '../assets/images/phone1.png'
import { Link } from 'react-router-dom'
function MainBanner() {
    return (
        <div id="banner">
            <div className='container'>
                <div className="row align-items-start">
                    <div className='info col col-12 col-md-6'>
                        <h2><span id='vault'>Vault</span> la página líder en celulares de última generación</h2>
                        <p id='p-info'>Tu destino en línea para explorar el mundo de los celulares. Descubre los dispositivos más innovadores y encuentra el tuyo entre nuestras exclusivas ofertas. ¡Bienvenido al futuro de la comunicación móvil!</p>
                        <div className="info-btn-wrapper">
                            <a className="info-btn" href="#nosotros">Conoce Más</a>
                        </div>
                    </div>
                    <div className="col col-12 col-md-6">
                        <div className="banner-phone-container">
                            <img src={phone1} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner