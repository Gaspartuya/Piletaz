const filtroProducto = document.getElementById("filtroProducto")


function cargarProductos() {
    let fila = ""

    productos.forEach(producto => {
        fila = `<tr>
                    <td>${producto.id}</td>
                    <td>${producto.nombre}</td>
                    <td>${producto.importe}</td>
                    <td>${producto.precioFinal()}</td>
                </tr>`

                tabla.innerHTML += fila
    });

}