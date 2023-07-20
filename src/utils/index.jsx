export const ApiWebURL = "https://servicios.campus.pe/"

export const agregarCarrito = (item, cantidad) => {
    item.cantidad = cantidad == null ? 1 : cantidad;

    if (item.preciorebajado !== "0") {
        item.precio = item.preciorebajado;
    }
    console.log(item);

    let carrito = [];
    /*si hay items en el carrito*/
    if (sessionStorage.getItem("carritocompras")) {
        carrito = JSON.parse(sessionStorage.getItem("carritocompras"));
        let index = -1;
        for (let i = 0; i < carrito.length; i++) {
            if (item.idproducto === carrito[i].idproducto) {
                index = i;
                break;
            }
        }
        if (index === -1) {
            carrito.push(item);
            sessionStorage.setItem("carritocompras", JSON.stringify(carrito));
        }
        else {
            carrito[index].cantidad++
            sessionStorage.setItem("carritocompras", JSON.stringify(carrito));
        }
    }/*si no hay items en el carrito*/
    else {
        carrito.push(item);
        sessionStorage.setItem("carritocompras", JSON.stringify(carrito));
    }
}

export const agregarEmpleado = (item) => {
    //console.log(item);

    let empleados = [];
    /*si hay items en el array*/
    if (sessionStorage.getItem("empleadoseleccionado")) {
        empleados = JSON.parse(sessionStorage.getItem("empleadoseleccionado"));
        let index = -1;
        for (let i = 0; i < empleados.length; i++) {
            if (item.idempleado === empleados[i].idempleado) {
                index = i;
                break;
            }
        }
        if (index === -1) {
            empleados.push(item);
            sessionStorage.setItem("empleadoseleccionado", JSON.stringify(empleados));
        }
        else {
            empleados[index].cantidad++
            sessionStorage.setItem("empleadoseleccionado", JSON.stringify(empleados));
        }
    }/*si no hay items en el array*/
    else {
        empleados.push(item);
        sessionStorage.setItem("empleadoseleccionado", JSON.stringify(empleados));
    }
}