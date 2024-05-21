const { CarritoCompra } = require("../index");

describe("Test CarritoCompra", () => {
  const producto1 = { name: "tv", precio: 20, cantidad: 1 };
  const producto2 = { name: "dvd", precio: 50, cantidad: 2 };
  const producto3 = { name: "cama", precio: 10, cantidad: 3 };
  let carro = new CarritoCompra();
  carro.agregarProducto(producto1);

  it("Tiene una funcion constructora?", () => {
    expect(typeof CarritoCompra.prototype.constructor).toBe("function");
  });
  it("tiene el medoto calcularTotal", () => {
    expect(carro.calcularTotal).toBeDefined();
  });
  it("Agrega un producto, y devuelve un array", () => {
    expect(Array.isArray(carro.carrito)).toBeTruthy();
  });
  it("Que objeto devuelve un array", () => {
    expect(carro.carrito[0]).toEqual({ name: "tv", precio: 20, cantidad: 1 });
  });
  it("Calcular total del carro", () => {
    carro.agregarProducto(producto2);
    carro.agregarProducto(producto3);
    expect(carro.calcularTotal()).toBe(150);
  });
  it("Calcular descuento del total del carrito", () => {
    expect(carro.aplicarDescuento(50)).toBe(75);
  });
  it("Cuantos productos hay en el carro", () => {
    expect(carro.carrito.length).toBe(3);
  });
});
