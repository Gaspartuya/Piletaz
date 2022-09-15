function generadorAutomatico() {
    productos.push(new Producto(1, "METAL FRAME ROTONDA", 29950, "ROTONDA"))
    productos.push(new Producto(2, "SPA", 249900, "ROTONDA"))
    productos.push(new Producto(3, "METAL FRAME RETANGOLARE", 199949, "RETANGOLARE"))
    productos.push(new Producto(4, "ULTRA FRAME ROTONDA", 219890, "ROTONDA"))
    productos.push(new Producto(5, "ULTRA FRAME RETANGOLARE", 409090, "RETANGOLARE"))
    productos.push(new Producto(6, "PRISMA FRAME ROTONDA", 459000, "ROTONDA"))
    productos.push(new Producto(7, "PRISMA FRAME RETANGOLARE", 679800, "RETANGOLARE"))
}


generadorAutomatico()
generarCarrito()

function listarProductos() {
    productos.forEach((producto)=>{
        console.log(producto.nombre)
    })
    
}

function filtrarProductos() {
    let parametro = prompt("Ingresa el nombre del producto a filtrar:").toUpperCase()
    let resultado = productos.filter((producto)=> producto.nombre.includes(parametro))
        console.table(resultado)
}

function calcularCarrito() {
    let total = carrito.reduce((acumulador, producto)=>  acumulador + producto.importe, 0)
        console.log("Total del carrito:", total)
}
