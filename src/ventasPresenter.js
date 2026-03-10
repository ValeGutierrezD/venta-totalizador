import { 
  MostrarPrecioNeto, 
  MostrarPorcentajeImpuesto, 
  CalcularImpuesto, 
  CalcularPrecioTotal,
  ObtenerPorcentajeDescuento,
  ObtenerImpuestoAdicionalPorCategoria,
  calcularCostoEnvioBase,
  ProcesarVentaCompleta
} from "./venta.js";

const cantidadInput = document.querySelector("#cantidad-items");
const precioInput = document.querySelector("#precio-item");
const estadoInput = document.querySelector("#codigo-estado");
const categoriaInput = document.querySelector("#categoria-producto");
const pesoInput = document.querySelector("#peso-volumetrico");
const form = document.querySelector("#ventas-form");
const div = document.querySelector("#total-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = Number.parseInt(cantidadInput.value);
  const precio = Number.parseFloat(precioInput.value);
  const estado = estadoInput.value;
  const categoria = categoriaInput.value;
  const peso = Number.parseFloat(pesoInput.value);

  const precioNeto = MostrarPrecioNeto(cantidad, precio);
  const porcentajeImpuesto = MostrarPorcentajeImpuesto(estado);
  const impuesto = CalcularImpuesto(precioNeto, estado);

  const precioTotal = CalcularPrecioTotal(precioNeto, estado);
  const descuento = ObtenerPorcentajeDescuento(precioTotal);
  // calcular total después del descuento (siempre que sea un porcentaje válido)
  const descuentoDecimal = parseFloat(descuento) / 100;
  const totalConDescuento = precioTotal * (1 - descuentoDecimal);
  const resultado = ProcesarVentaCompleta(cantidad, precio, estado, categoria, peso);

  div.innerHTML = `
    <p><strong>Cantidad de items:</strong> ${cantidad}</p>
    <p><strong>Precio por item:</strong> $${precio.toFixed(2)}</p>
    <p><strong>Código de estado:</strong> ${estado}</p>
    <hr>
    <p><strong>Precio neto (${cantidad} × $${precio.toFixed(2)}):</strong> $${precioNeto.toFixed(2)}</p>

    <p><strong>Impuesto para ${estado} (${porcentajeImpuesto}):</strong> $${impuesto.toFixed(2)}</p>
    <p><strong>Impuesto Categoría (${categoria}):</strong> $${resultado.impCategoria.toFixed(2)}</p>

    <p><strong>Descuento por monto:</strong> ${descuento}</p>
    <p><strong>Costo Envío:</strong> $${resultado.envio.toFixed(2)}</p>
    <p class="resultado"><strong>Precio total (+impuesto):</strong> $${precioTotal.toFixed(2)}</p>
    <p class="resultado"><strong>Precio final (-descuento):</strong> $${totalConDescuento.toFixed(2)}</p>
    <p class="resultado"><strong>TOTAL FINAL: $${resultado.totalFinal.toFixed(2)}</strong></p>
  `;
});