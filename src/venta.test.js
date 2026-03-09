import { MostrarPrecioNeto, MostrarPorcentajeImpuesto, CalcularImpuesto, CalcularPrecioTotal } from "./venta.js";

describe("Totalizador de Ventas", () => {
  
  it("debería calcular el total bruto multiplicando cantidad y precio", () => {
    expect(MostrarPrecioNeto(5, 10)).toEqual(50);
  });

  // Pruebas para MostrarPorcentajeImpuesto
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

  // Pruebas para CalcularImpuesto
  it("debería calcular impuesto de CA: 60 * 8.25% = 4.95", () => {
    expect(CalcularImpuesto(60, "CA")).toBeCloseTo(4.95, 2);
  });

  it("debería calcular impuesto de UT: 60 * 6.65% = 3.99", () => {
    expect(CalcularImpuesto(60, "UT")).toBeCloseTo(3.99, 2);
  });

  it("debería calcular impuesto de NV: 60 * 8.00% = 4.80", () => {
    expect(CalcularImpuesto(60, "NV")).toBeCloseTo(4.80, 2);
  });

  it("debería calcular impuesto de TX: 60 * 6.25% = 3.75", () => {
    expect(CalcularImpuesto(60, "TX")).toBeCloseTo(3.75, 2);
  });

  it("debería calcular impuesto de AL: 60 * 4.00% = 2.40", () => {
    expect(CalcularImpuesto(60, "AL")).toBeCloseTo(2.40, 2);
  });

  // Prueba para CalcularPrecioTotal
  it("debería calcular precio total para CA: 60 + 4.95 = 64.95", () => {
    expect(CalcularPrecioTotal(60, "CA")).toBeCloseTo(64.95, 2);
  });

  it("debería calcular precio total para AL: 60 + 2.40 = 62.40", () => {
    expect(CalcularPrecioTotal(60, "AL")).toBeCloseTo(62.40, 2);
  });

  it("debería calcular precio total para UT: 60 + 3.99 = 63.99", () => {
    expect(CalcularPrecioTotal(60, "UT")).toBeCloseTo(63.99, 2);
  });

  it("debería calcular precio total para NV: 60 + 4.80 = 64.80", () => {
    expect(CalcularPrecioTotal(60, "NV")).toBeCloseTo(64.80, 2);
  });
});
