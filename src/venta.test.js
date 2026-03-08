import  {MostrarPrecioNeto}  from "./venta.js"; 

describe("Totalizador de Ventas", () => {
  
  it("debería calcular el total bruto multiplicando cantidad y precio", () => {
    expect(MostrarPrecioNeto(5, 10)).toEqual(50);
  });

});
