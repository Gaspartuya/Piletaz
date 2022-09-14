class Producto {
    constructor(id, nombre, importe, categoria) {
        this.id = id
        this.nombre = nombre
        this.importe = importe
        this.categoria = categoria
    }
    precioFinal () {
        return "$ " + parseFloat ((this.importe * IVA).toFixed(2))
    }

}