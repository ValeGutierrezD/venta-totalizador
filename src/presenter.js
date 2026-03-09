import { MostrarCantidad, MostrarPrecio, MostrarPrecioNeto } from "./venta.js";

const cantidadInput = document.querySelector("#cantidad-items");
const precioInput = document.querySelector("#precio-item"); // Nueva referencia
const form = document.querySelector("#ventas-form");
const div = document.querySelector("#total-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = Number.parseInt(cantidadInput.value);
  const precio = Number.parseFloat(precioInput.value); // Usamos Float para decimales

  div.innerHTML = `
    <p>Precio neto: $${MostrarPrecioNeto(cantidad, precio)}</p>
  `;
});