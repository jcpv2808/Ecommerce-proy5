import { useEffect, useState } from "react";
import {ApiWebURL} from "../utils"
import { agregarEmpleado } from "../utils";
import './Empleados.css'

function Empleados() {
    const [listaEmpleados, setListaEmpleados] = useState([]);

    useEffect(() => {
        leerServicio();
    }, [])

    const leerServicio = () => {
        const rutaServicio = ApiWebURL + "empleados.php";
        fetch(rutaServicio)
            .then(response => response.json())
            .then(data => {
                //console.log(data);
                setListaEmpleados(data);
            })
    }

    const dibujarCuadricula = () => {
        return (
            <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2 g-4">
                
                {listaEmpleados.map( item => 
                <div className="col" key={item.idempleado}>
                    <div className="card h-100">
                        <img src={ApiWebURL + "fotos/" + item.foto} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{item.cargo}</h5>
                                <p className="card-text">{item.nombres} {item.apellidos}</p>
                                <i className="bi bi-plus-circle btnCarrito fa-lg" id="btnAñadir" title="Añadir al carrito"
                                        onClick={() => agregarEmpleado(item)}></i>
                            </div>
                    </div>
                </div>
                )}
            </div>
        )
    }

    return (
        <section className="padded">
            <div className="container">
                <h2>Empleados</h2>
                {dibujarCuadricula()}
            </div>
        </section>
    )
}

export default Empleados