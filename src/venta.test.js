import MostrarCantidad from "./venta.js"; 

describe("MostrarCantidad", () => {
  it("deberia mostrar la cantidad de items", () => {
    expect(MostrarCantidad(5)).toEqual(5);
  });
});
