import { 
  MostrarPrecioNeto, 
  MostrarPorcentajeImpuesto, 
  CalcularImpuesto, 
  CalcularPrecioTotal 
} from "./venta.js";

const cantidadInput = document.querySelector("#cantidad-items");
const precioInput = document.querySelector("#precio-item");
const estadoInput = document.querySelector("#codigo-estado");
const form = document.querySelector("#ventas-form");
const div = document.querySelector("#total-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = Number.parseInt(cantidadInput.value);
  const precio = Number.parseFloat(precioInput.value);
  const estado = estadoInput.value.toUpperCase();

  const precioNeto = MostrarPrecioNeto(cantidad, precio);
  const porcentajeImpuesto = MostrarPorcentajeImpuesto(estado);
  const impuesto = CalcularImpuesto(precioNeto, estado);
  const precioTotal = CalcularPrecioTotal(precioNeto, estado);

  div.innerHTML = `
    <p><strong>Cantidad de items:</strong> ${cantidad}</p>
    <p><strong>Precio por item:</strong> $${precio.toFixed(2)}</p>
    <p><strong>Código de estado:</strong> ${estado}</p>
    <hr>
    <p><strong>Precio neto (${cantidad} × $${precio.toFixed(2)}):</strong> $${precioNeto.toFixed(2)}</p>
    <p><strong>Impuesto para ${estado} (${porcentajeImpuesto}):</strong> $${impuesto.toFixed(2)}</p>
    <p><strong>Descuento aplicado:</strong> ($0.00)</p>
    <p class="resultado"><strong>Precio total (+impuesto):</strong> $${precioTotal.toFixed(2)}</p>
  `;
});