import { useEffect, useState } from 'react'
import { ApiWebURL } from "../utils"

export default function Clientes() {
    const [listaclientes, setlistaclientes] = useState([]);
    const [cargando, setCargando] = useState(true);

    //ordenamiento tabla
    const [ascendente, setAscendente] = useState(1)
    const [columnaAnterior, setColumnaAnterior] = useState("empresa")

    //busqueda
    const [textoBuscar, setTextoBuscar] = useState("");
    const [listaclientesFiltrado, setlistaclientesFiltrado] = useState([]);

    //nro de clientes
    const [pagina, setpagina] = useState(0);
    const [filasPagina, setFilasPagina] = useState(20);
    const [numPaginas, setNumPaginas] = useState(0);



    useEffect(() => {
        leerServicio();
    }, [])

    const leerServicio = async () => {
        const rutaServicio = ApiWebURL + "servicioclientes.php ";
        const response = await fetch(rutaServicio)
        const data = await response.json();
        setlistaclientes(data);
        setlistaclientesFiltrado(data);
        setCargando(false);
        setNumPaginas(Math.ceil(data.length / filasPagina))
    }

    const dibujarTabla = () => {
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th columna="idcliente" onClick={(event) => seleccionarColumna(event)}>Código</th>
                        <th columna="empresa" onClick={(event) => seleccionarColumna(event)}>Empresa</th>
                        <th columna="nombres" onClick={(event) => seleccionarColumna(event)}>Contacto</th>
                        <th columna="cargo" onClick={(event) => seleccionarColumna(event)}>Cargo</th>
                        <th columna="telefono" onClick={(event) => seleccionarColumna(event)}>Telefono</th>
                    </tr>
                </thead>
                <tbody>
                    {listaclientesFiltrado.slice(pagina * filasPagina, (pagina + 1) * filasPagina).map(item =>
                        <tr key={item.idcliente}>
                            <td>{item.idcliente}</td>
                            <td>{item.empresa}</td>
                            <td>{item.nombres}</td>
                            <td>{item.cargo}</td>
                            <td>{item.telefono}</td>
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

        setlistaclientesFiltrado([...listaclientesFiltrado].sort((a, b) => {
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
        const resultado = listaclientes.filter((item) =>
            (item[columnaAnterior].toUpperCase()).includes(textoB.toUpperCase()));
        setlistaclientesFiltrado(resultado);
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
        setpagina(paginax-1)
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
                <h2>Clientes</h2>
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
