function MostrarCantidad(a) {
  return a
}

function MostrarPrecio(p) {
  return p;
}

function MostrarPrecioNeto(cant, precio) {
    return cant * precio;
}

function MostrarPorcentajeImpuesto(estado) {
    if (estado === "CA") {
        return "8.25%"; // 8.25% de impuesto para estado CA
    }
    if (estado === "UT") {
        return "6.65%"; 
    }
    if (estado === "NV") {
        return "8.00%"; 
    }
    if (estado === "TX") {
        return "6.25%"; 
    }
    if (estado === "AL") {
        return "4.00%"; 
    }
}

function CalcularImpuesto(precioNeto, estado) {
    const porcentajeImpuesto = MostrarPorcentajeImpuesto(estado);
    const impuestoDecimal = parseFloat(porcentajeImpuesto) / 100;
    return precioNeto * impuestoDecimal;
}

export {MostrarCantidad, MostrarPrecio, MostrarPrecioNeto, MostrarPorcentajeImpuesto, CalcularImpuesto};