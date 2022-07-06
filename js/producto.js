//clase producto
class Producto {
    constructor(id, nombre, precio, jugador, cantidad, imagen) {
        this.id = parseInt(id);
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.jugador = jugador;
        this.cantidad = parseInt(cantidad);
        this.imagen = imagen;
    }

    agregarCantidad(valor) {
        this.cantidad += valor;
    }

    subtotal() {
        return this.cantidad * this.precio;
    }
}