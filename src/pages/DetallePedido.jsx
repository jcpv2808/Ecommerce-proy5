import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import noImage from './../assets/images/no-image.svg';
import { ApiWebURL } from "../utils"

function DetallePedido() {
    const [itemPedido, setitemPedido] = useState([]);

    let params = useParams();
    //console.log(params);
    useEffect(() => {
        leerServicio();
    }, [])

    const leerServicio = () => {
        //console.log(idproducto);
        const rutaServicio = ApiWebURL + "pedidosdetalle.php?idpedido=" + params.idpedido;
        fetch(rutaServicio)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setitemPedido(data);
            })
    }

    return (
        <div className="padded">
            <div className="container">
                <h2>Detalle Pedido</h2>
                <div className="row row-cols-xxl-5 row-cols-xl-4 row-cols-lg-3 row-cols-2 g-4">
                    {itemPedido.map(item =>
                        <div className="col" key={item.idproducto}>
                            <div className="card h-100">
                                <figure className="image-content">
                                    <img src={item.imagenchica === null
                                        ? noImage
                                        : ApiWebURL + item.imagenchica
                                    }
                                        className="card-img-top" alt="..." />
                                </figure>
                                <div className="card-body">
                                    <h5 className="card-title">{item.nombre}</h5>
                                    <p className="card-text">S/ {parseFloat(item.precio).toFixed(2)}</p>
                                    <p className="card-text">Cantidad: {item.cantidad}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>

    )

}

export default DetallePedido