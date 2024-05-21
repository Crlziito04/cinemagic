class CarritoCompra {
  constructor() {
    this.carrito = [];
  }
  agregarProducto(obtenerProducto) {
    return this.carrito.push(obtenerProducto);
  }
  calcularTotal() {
    return this.carrito.reduce(
      (acc, item) => acc + item.precio * item.cantidad,
      0
    );
  }
  aplicarDescuento(porcentaje) {
    let total = this.calcularTotal();
    let descuento = (total * porcentaje) / 100;
    return total - descuento;
  }
}

module.exports = { CarritoCompra };
