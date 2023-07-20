import { useEffect, useState } from 'react';


function DetallePedidos(props) {
  const [listaDetalle, setListaDetalle] = useState([]);

  useEffect(() => {
    //  console.log(props.codigoPedido)
    leerServicio(props.codigoPedido);
  }, [props.codigoPedido])



  const leerServicio = async (idpedido) => {
    const rutaServicio = "https://servicios.campus.pe/pedidosdetalle.php?idpedido=" + idpedido;
    fetch(rutaServicio)
      .then(response => response.json())
      .then(data => {
        setListaDetalle(data);

      })
  }


  const dibujarCuadricula = () => {
    return (
      <div className="row row-cols-xl-3 row-cols-lg-3 row-cols-md-3 row-cols-2 g-4">

        {listaDetalle.map(item =>
          <div className="col" key={item.idproducto}>
            <div className="card h-100">
              <img src={"https://servicios.campus.pe/" + item.imagenchica}
                className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.nombre}</h5>
                <p className="card-text">{"Precio: S/"}{Number(item.precio).toFixed(2)}</p>
                <p className="card-text">{"Cantidad: "}{item.cantidad}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    )
  }


  return (

    <>
      <h2>Detalle:</h2>
      {dibujarCuadricula()}
    </>

  )
}

export default DetallePedidos