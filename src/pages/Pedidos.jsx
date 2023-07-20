import { useEffect, useState } from 'react';
import './Pedidos.css'
import DetallePedidos from './DetallePedidos';


function Pedidos() {
    const [ListaPedidos, setListaPedidos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [filaSeleccionada, setFilaSeleccionada] = useState({});
    const [mostrarDetalle, setMostrarDetalle] = useState(false);

    useEffect(() => {
        leerServicio();
    }, [])

    const leerServicio = async () => {
        const rutaServicio = "https://servicios.campus.pe/pedidos.php";
        const response = await fetch(rutaServicio);
        const data = await response.json();
        setListaPedidos(data);
        setCargando(false);
    }

    const seleccionarPedido = (event, index) => {
        if (filaSeleccionada !== ListaPedidos[index]) {
            setFilaSeleccionada(ListaPedidos[index]);
            setMostrarDetalle(true);

            event.currentTarget.classList.add("active");
        }
    };


    const dibujarTabla = () => {
        return (
            <>
                <h2>Pedidos</h2>

                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th className='text-center'>Código</th>
                            <th>Nombres</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ListaPedidos.map((item, index) => (
                            <tr
                                key={item.idpedido}
                                className={filaSeleccionada === item ? "active" : ""}
                                onClick={(event) => seleccionarPedido(event, index)}
                            >
                                <td className='text-center'>{item.idpedido}</td>
                                <td>{item.nombres}</td>
                                <td>S/{Number(item.total).toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </>
        )
    }

    const dibujarPrecarga = () => {
        return (
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        )
    }

    return (


        <section className="padded">
            <div className="container">
                <div className="row">
                    <div className="col">
                        {cargando === true
                            ? dibujarPrecarga()
                            : dibujarTabla()}
                    </div>
                    <div className="col">
                        {mostrarDetalle && <DetallePedidos codigoPedido={filaSeleccionada.idpedido}></DetallePedidos>}
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Pedidos