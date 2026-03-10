export function MostrarCantidad(a) {
  return a
}

export function MostrarPrecio(p) {
  return p;
}

export function MostrarPrecioNeto(cant, precio) {
    return cant * precio;
}

export function MostrarPorcentajeImpuesto(estado) {
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

export function CalcularImpuesto(precioNeto, estado) {
    const porcentajeImpuesto = MostrarPorcentajeImpuesto(estado);
    const impuestoDecimal = parseFloat(porcentajeImpuesto) / 100;
    return precioNeto * impuestoDecimal;
}

export function CalcularPrecio(precioNeto, estado) {
  return precioNeto + CalcularImpuesto(precioNeto, estado);
}

export function ObtenerPorcentajeDescuento(precioTotal) {
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

export function CalcularPrecioConDescuento(precioTotal, porcentajeDescuento) {
  const descuentoDecimal = parseFloat(porcentajeDescuento) / 100;
  return precioTotal * (1 - descuentoDecimal);
}

export function ObtenerImpuestoAdicionalPorCategoria(categoria) {
  if (categoria === "Alimentos") {
    return "0"; 
  }
  if (categoria === "Bebidas alcohólicas") {
    return "0.07"; 
  }
  if (categoria === "Material de escritorio") {
    return "0"; 
  }
  if (categoria === "Muebles") {
    return "0.03"; 
  }
  if (categoria === "Electrónicos") {
    return "0.04"; 
  }
  if (categoria === "Vestimenta") {
    return "0.02"; 
  }
  if (categoria === "Varios") {
    return "0"; 
  }
  return "0"; // Por defecto, si no se reconoce la categoría, no se aplica impuesto adicional
}

export function calcularCostoEnvioBase(peso) {
  if (peso >= 0 && peso <= 10) {
    return 0;
  }
  if (peso >= 11 && peso <= 20) {
    return 3.5;
  }
  if (peso >= 21 && peso <= 40) {
    return 5;
  }
  if (peso >= 41 && peso <= 80) {
    return 6;
  }
  if (peso >= 81 && peso <= 100) {
    return 6.5;
  }
  if (peso >= 101 && peso <= 200) {
    return 8;
  }
  if (peso > 200) {
    return 9;
  } 
  return 0; // Por defecto, si el peso es negativo o no se reconoce, no se aplica costo de envío  
}

// Calcula el monto de dinero del impuesto por categoría
export function CalcularMontoImpuestoCategoria(precioNeto, categoria) {
  const porcentaje = parseFloat(ObtenerImpuestoAdicionalPorCategoria(categoria));
  return precioNeto * porcentaje;
}

// Calcula el costo total de envío (Costo unitario x cantidad)
export function CalcularMontoEnvioTotal(peso, cantidad) {
  const costoUnitario = calcularCostoEnvioBase(peso);
  return costoUnitario * cantidad;
}

// Nueva función maestra que orquestará todo el detalle
export function ProcesarVentaCompleta(cantidad, precio, estado, categoria, peso) {
    const neto = MostrarPrecioNeto(cantidad, precio);
    const impEstado = CalcularImpuesto(neto, estado);
    const impCategoria = CalcularMontoImpuestoCategoria(neto, categoria);
    
    const subtotalConImpuestos = neto + impEstado + impCategoria;
    
    const porcentajeDesc = ObtenerPorcentajeDescuento(subtotalConImpuestos);
    const montoDesc = subtotalConImpuestos * (parseFloat(porcentajeDesc) / 100);
    
    const envio = CalcularMontoEnvioTotal(peso, cantidad);
    const totalFinal = subtotalConImpuestos - montoDesc + envio;

    return {
        neto: neto,
        impEstado: impEstado,
        impCategoria: impCategoria,
        porcentajeDesc: porcentajeDesc,
        montoDesc: montoDesc,
        envio: envio,
        totalFinal: totalFinal
    };
}

export function ObtenerDescuentoCliente(tipoCliente) {
  if(tipoCliente === "Normal") return 0;
  if(tipoCliente === "Recurrente") return 0.005;
  if(tipoCliente === "Antiguo Recurrente") return 0.01;
  if(tipoCliente === "Especial") return 0.015;
}

export function calcularEnvioConDescuento(envioBase, tipoCliente) {
  const descuento = ObtenerDescuentoCliente(tipoCliente);
  return envioBase - (envioBase * descuento);
}

