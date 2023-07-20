import { useEffect } from "react";
import { useState } from "react"
import { ApiWebURL } from "../utils"
import './Seleccionado.css'

function Seleccionado() {
    const [itemsListaEmpleados, setitemsListaEmpleados] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        leerDatosLista();
    }, []);

    const leerDatosLista = async () => {
        let DatosLista = await JSON.parse(sessionStorage.getItem("empleadoseleccionado"));
        //console.log(DatosLista);
        setitemsListaEmpleados(DatosLista);
        if (DatosLista !== null) {
            calcularTotal(DatosLista);
        }
    }

    const calcularTotal = (DatosLista) => {
        let suma = DatosLista.length;
        setTotal(suma);
    }

    const dibujarTabla = () => {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Foto</th>
                        <th className="text-end">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {itemsListaEmpleados === null
                        ? <></>
                        : itemsListaEmpleados.map((item) =>
                            <tr key={item.idempleado}>
                                <td>{item.idempleado}</td>
                                <td>{item.nombres}</td>
                                <td>{item.apellidos}</td>
                                <td>
                                    <div className="empleado-foto-container">
                                        <img className="empleado-foto" src={ApiWebURL + "fotos/" + item.foto} alt="" />
                                    </div>
                                </td>
                                <td className="text-end"><i className="bi bi-x-lg botonEliminar" title="Eliminar" onClick={() => eliminarItem(item)}> Quitar</i></td>
                            </tr>
                        )}
                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan="3" className="text-end">Total</th>
                        <th className="text-end">{total}</th>
                    </tr>
                </tfoot>
            </table>
        )
    }

    const eliminarItem = (item) => {
        let empleadoMenos = itemsListaEmpleados.filter(itemLista => itemLista.idempleado !== item.idempleado);
        setitemsListaEmpleados(empleadoMenos);
        sessionStorage.setItem("empleadoseleccionado", JSON.stringify(empleadoMenos));
        calcularTotal(empleadoMenos);
    }

    const vaciarLista = () => {
        sessionStorage.removeItem("empleadoseleccionado");
        setitemsListaEmpleados([]);
        setTotal(0);
    }

    return (
        <section className="padded">
            <div className="container">
                <h1>Empleados Seleccionados</h1>
                <div className="row">
                    <div className="col-md-10">
                        {dibujarTabla()}
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-danger" onClick={() => vaciarLista()}>Vaciar Lista</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Seleccionado