import { useEffect, useState } from 'react'
import { ApiWebURL } from "../utils"
import { Link } from 'react-router-dom'; 
export default function Consultas() {
    const [listapedidos, setlistapedidos] = useState([]);
    const [cargando, setCargando] = useState(true);

    //ordenamiento tabla
    const [ascendente, setAscendente] = useState(1)
    const [columnaAnterior, setColumnaAnterior] = useState("empresa")

    //busqueda
    const [textoBuscar, setTextoBuscar] = useState("");
    const [listapedidosFiltrado, setlistapedidosFiltrado] = useState([]);

    //nro de clientes
    const [pagina, setpagina] = useState(0);
    const [filasPagina, setFilasPagina] = useState(30);
    const [numPaginas, setNumPaginas] = useState(0);


    useEffect(() => {
        leerServicio();
    }, [])

    const leerServicio = async () => {
        const rutaServicio = ApiWebURL + "pedidos.php ";
        const response = await fetch(rutaServicio)
        const data = await response.json();
        setlistapedidos(data);
        setlistapedidosFiltrado(data);
        setCargando(false);
        setNumPaginas(Math.ceil(data.length / filasPagina))
    }

    const dibujarTabla = () => {
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th columna="idpedido" onClick={(event) => seleccionarColumna(event)}>Idpedido</th>
                        <th columna="usuario" onClick={(event) => seleccionarColumna(event)}>Usuario</th>
                        <th columna="nombres" onClick={(event) => seleccionarColumna(event)}>Nombres</th>
                        <th columna="fechapedido" onClick={(event) => seleccionarColumna(event)}>Fechapedido</th>
                        <th columna="total" onClick={(event) => seleccionarColumna(event)}>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {listapedidosFiltrado.slice(pagina * filasPagina, (pagina + 1) * filasPagina).map(item =>
                        <tr key={item.idpedido}>
                            <td><Link to={"/detallepedido/" + item.idpedido}>{item.idpedido}</Link></td>
                            <td>{item.usuario}</td>
                            <td>{item.nombres}</td>
                            <td>{item.fechapedido}</td>
                            <td>{item.total}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }

    const seleccionarColumna = (event) => {
        let columnaSeleccionada = event.target.getAttribute("columna");

        if (columnaAnterior === columnaSeleccionada) {
            setAscendente(-ascendente);
        }
        else {
            setAscendente(1);
        }
        setColumnaAnterior(columnaSeleccionada)
        //console.log(columnaSeleccionada)

        setlistapedidosFiltrado([...listapedidosFiltrado].sort((a, b) => {
            const codigoMenor = "return a." + columnaSeleccionada + " < b." + columnaSeleccionada + "? true : false";
            const funcionMenor = new Function('a', 'b', codigoMenor);
            if (funcionMenor(a, b)) {
                return -ascendente;
            }

            const codigoMayor = "return a." + columnaSeleccionada + " > b." + columnaSeleccionada + "? true : false";
            const funcionMayor = new Function('a', 'b', codigoMayor);
            if (funcionMayor(a, b)) {
                return ascendente;
            }
            return 0
        }))

    }

    const buscarTexto = (event) => {
        let textoB = event.target.value;
        setTextoBuscar(textoB);
        const resultado = listapedidos.filter((item) =>
            (item[columnaAnterior].toUpperCase()).includes(textoB.toUpperCase()));
        setlistapedidosFiltrado(resultado);
    }

    const avanzar = () => {
        if (pagina < numPaginas - 1) {
            setpagina(pagina + 1)
        }
    }

    const retroceder = () => {
        if (pagina > 0) {
            setpagina(pagina - 1)
        }
    }

    const irpagina = (event) => {
        let paginax = event.target.innerHTML
        setpagina(paginax - 1)
    }

    const dibujarPrecarga = () => {
        return (
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )
    }

    return (
        <section className="padded">
            <div className="container">
                <h2>Consultas</h2>
                <div className="mb-3">
                    <input type="text" value={textoBuscar} onChange={(event) => buscarTexto(event)}
                        className="form-control" placeholder="Indique expresión a buscar" />
                </div>

                {cargando
                    ? dibujarPrecarga()
                    : dibujarTabla()}

                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item" onClick={() => retroceder()}><a className="page-link">Previous</a></li>

                        {[...Array(numPaginas)].map((_, index) => (
                            <li key={index} className="page-item" onClick={(event) => irpagina(event)}><a className="page-link">{index + 1}</a></li>
                        ))}

                        <li className="page-item" onClick={() => avanzar()}><a className="page-link">Next</a></li>
                    </ul>
                </nav>
            </div>
        </section>

    )
}
