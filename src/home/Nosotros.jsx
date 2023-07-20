import './Nosotros.css'
export default function WhyVault() {
    return (
        <section className="why" id='nosotros'>
            <div className="container">
                <div className="padded titulo row justify-content-center">
                    <div className='section-tittle col col-12 justify-content-center'>Quienes Somos?</div>
                    <div className='section-text col col-12'>Vault es la plataforma líder en venta de celulares, ofreciendo productos de calidad, variedad y precios competitivos. ¡Únete a nuestra comunidad tecnológica!</div>
                </div>
                <div className="row">
                    <div className="card-container col col-12 col-md-6 col-xl-4">
                        <div className="card">
                            <div className="card-body">
                                <div className='icon-circle'>
                                    <i className="bi bi-image"></i>
                                </div>
                                <h5 className="card-title">Fotos</h5>
                                <p className="card-text">

                                    Los celulares de alta calidad capturan imágenes nítidas y detalladas, ofreciendo una experiencia visual impresionante en cada fotografía que se toma.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-container col col-12 col-md-6 col-xl-4">
                        <div className="card">
                            <div className="card-body">
                                <div className='icon-circle'>
                                    <i className="bi bi-person-fill"></i>
                                </div>
                                <h5 className="card-title">Usabilidad</h5>
                                <p className="card-text">Tenemos celulares con buena usabilidad, fáciles de navegar y brindan una experiencia fluida, facilitando la interacción con las funciones del dispositivo.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-container col col-12 col-md-6 col-xl-4">
                        <div className="card">
                            <div className="card-body">
                                <div className='icon-circle'>
                                    <i className="bi bi-wifi"></i>
                                </div>
                                <h5 className="card-title">Conexión</h5>
                                <p className="card-text">
                                    Los celulares con buena conexión ofrecen una rápida y estable conectividad, permitiendo una experiencia fluida en la navegación web y comunicación en línea.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-container col col-12 col-md-6 col-xl-4">
                        <div className="card">
                            <div className="card-body">
                                <div className='icon-circle'>
                                    <i className="bi bi-diagram-2-fill"></i>
                                </div>
                                <h5 className="card-title">Rendimiento</h5>
                                <p className="card-text">
                                    Los celulares con buen rendimiento ofrecen un funcionamiento rápido, ejecutando aplicaciones y juegos exigentes sin problemas ni demoras.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-container col col-12 col-md-6 col-xl-4">
                        <div className="card">
                            <div className="card-body">
                                <div className='icon-circle'>
                                    <i className="bi bi-eye-slash-fill"></i>
                                </div>
                                <h5 className="card-title">Seguridad</h5>
                                <p className="card-text">Los celulares seguros tienen reconocimiento facial, huella dactilar y encriptación para proteger la privacidad y evitar accesos no autorizados.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-container col col-12 col-md-6 col-xl-4">
                        <div className="card">
                            <div className="card-body">
                                <div className='icon-circle'>
                                    <i className="bi bi-currency-dollar"></i>
                                </div>
                                <h5 className="card-title">Precio</h5>
                                <p className="card-text">Ofrecemos celulares con un excelente precio, brindando características y rendimiento destacados a un costo accesible para los usuarios.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
