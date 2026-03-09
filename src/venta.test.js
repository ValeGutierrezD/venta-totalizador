import { MostrarPrecioNeto, MostrarPorcentajeImpuesto, CalcularImpuesto, CalcularPrecioTotal } from "./venta.js";

describe("Totalizador de Ventas", () => {
  
  it("debería calcular el total bruto multiplicando cantidad y precio", () => {
    expect(MostrarPrecioNeto(5, 10)).toEqual(50);
  });

  it("debería mostrar 8.25% de impuesto para CA", () => {
    expect(MostrarPorcentajeImpuesto("CA")).toEqual("8.25%");
  });

  it("debería mostrar 6.65% de impuesto para UT", () => {
    expect(MostrarPorcentajeImpuesto("UT")).toEqual("6.65%");
  });

  it("debería mostrar 8.00% de impuesto para NV", () => {
    expect(MostrarPorcentajeImpuesto("NV")).toEqual("8.00%");
  });

  it("debería mostrar 6.25% de impuesto para TX", () => {
    expect(MostrarPorcentajeImpuesto("TX")).toEqual("6.25%");
  });

  it("debería mostrar 4.00% de impuesto para AL", () => {
    expect(MostrarPorcentajeImpuesto("AL")).toEqual("4.00%");
  });

});
