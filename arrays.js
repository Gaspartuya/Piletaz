function generadorAutomatico() {
    productos.push(new Producto(1, "Metal Frame Rotonda", 29950, "rotonda"))
    productos.push(new Producto(2, "Spa", 249900, "rotonda"))
    productos.push(new Producto(3, "Metal Frame Retangolare", 199949, "retangolare"))
    productos.push(new Producto(4, "Ultra Frame Rotonda", 219890, "rotonda"))
    productos.push(new Producto(5, "Ultra Frame Retangolare", 409090, "retangolare"))
    productos.push(new Producto(6, "Prisma Frame Rotonda", 459000, "rotonda"))
    productos.push(new Producto(7, "Prisma Frame Retangolare", 679800, "retangolare"))
}

function generarCarrito() {
    carrito.push(new Producto(1, "Metal Frame Rotonda", 29950))
    carrito.push(new Producto(3, "Metal Frame Retangolare", 199949))
    carrito.push(new Producto(7, "Prisma Frame Retangolare", 679800))
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
