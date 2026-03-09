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

function CalcularPrecioTotal(precioNeto, estado) {
  return precioNeto + CalcularImpuesto(precioNeto, estado);
}
function ObtenerPorcentajeDescuento(precioTotal) {
  if (precioTotal >= 30000) {
    return "15%";
  }
  if (precioTotal >= 10000) {
    return "10%";
  }  
  if (precioTotal >= 7000) {
     return "7%";
  }
  if (precioTotal >= 3000) {
    return "5%";
  }
  if (precioTotal >= 1000) {
    return "3%";
  }
  if (precioTotal < 1000) {
    return "0%";
  }  
}

export {MostrarCantidad, MostrarPrecio, MostrarPrecioNeto, MostrarPorcentajeImpuesto, CalcularImpuesto, CalcularPrecioTotal, ObtenerPorcentajeDescuento};