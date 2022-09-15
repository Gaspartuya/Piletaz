const titulo = document.getElementById("titulo")
const parrafo = document.getElementById("parrafo")
const parrafos = document.getElementsByTagName("p")
const tabla = document.getElementById("tabla")
const filtroProducto = document.getElementById("filtroProducto")


function elementosParagraph() {
    for (elemento of parrafos) {
        elemento.innerHTML = "ESTO ES UN <strong>TEXTO MASIVO</strong>!"
    }
}

function cargarProductos(array) {
let fila = ""
    tabla.innerHTML = ""
    array.forEach(producto => {
        fila = `<tr>
                    <td>${producto.id}</td>
                    <td>${producto.nombre}</td>
                    <td>${producto.importe}</td>
                    <td>${producto.categoria}</td>
                </tr>`
                tabla.innerHTML += fila
    })
} 
cargarProductos(productos)

const parrafoFinal = document.createElement("p")


const inputFiltrar = document.querySelector("input")

function filtrarProductos() { 
    inputFiltrar.value = inputFiltrar.value.trim().toUpperCase()
    if (inputFiltrar.value !== "") {
        const resultado = productos.filter(producto => producto.nombre.includes(inputFiltrar.value))
              if (resultado.length === 0) {
                console.clear()
                console.warn("No se encontraron productos.")
                cargarProductos(productos)
              } else {
                cargarProductos(resultado)
              }
    } else {
        cargarProductos(productos)
    }
}

inputFiltrar.addEventListener("input", filtrarProductos)