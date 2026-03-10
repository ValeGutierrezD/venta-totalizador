import { 
  MostrarPrecioNeto, 
  MostrarPorcentajeImpuesto, 
  CalcularImpuesto, 
  CalcularPrecio,
  ObtenerPorcentajeDescuento,
  ProcesarVentaCompleta,
  CalcularPrecioConDescuento,
  calcularCostoEnvioBase,
  calcularEnvioConDescuento
} from "./venta.js";

const cantidadInput = document.querySelector("#cantidad-items");
const precioInput = document.querySelector("#precio-item");
const estadoInput = document.querySelector("#codigo-estado");
const categoriaInput = document.querySelector("#categoria-producto");
const pesoInput = document.querySelector("#peso-volumetrico");
const clienteInput = document.querySelector("#tipo-cliente");

const btnCalcular = document.querySelector("#btn-calcular");
const btnFinal = document.querySelector("#btn-total-final");

const div_1 = document.querySelector("#total-div");


// Función para obtener los datos del formulario
function obtenerDatosFormulario() {
  return {
    cantidad: Number.parseInt(cantidadInput.value),
    precio: Number.parseFloat(precioInput.value),
    estado: estadoInput.value,
    categoria: categoriaInput.value,
    peso: Number.parseFloat(pesoInput.value)
  };
}


// BOTÓN 1: calcular precio base
btnCalcular.addEventListener("click", () => {

  const { cantidad, precio, estado } = obtenerDatosFormulario();

  const precioNeto = MostrarPrecioNeto(cantidad, precio);
  const porcentajeImpuesto = MostrarPorcentajeImpuesto(estado);
  const impuesto = CalcularImpuesto(precioNeto, estado);

  const precioTotal = CalcularPrecio(precioNeto, estado);
  const descuento = ObtenerPorcentajeDescuento(precioTotal);
  const totalConDescuento = CalcularPrecioConDescuento(precioTotal, descuento);

  

  div_1.innerHTML = `
    <p><strong>Cantidad de items:</strong> ${cantidad}</p>
    <p><strong>Precio por item:</strong> $${precio.toFixed(2)}</p>
    <p><strong>Código de estado:</strong> ${estado}</p>
    <hr>
    <p><strong>Precio neto (${cantidad} × $${precio.toFixed(2)}):</strong> $${precioNeto.toFixed(2)}</p>
    <p><strong>Impuesto por estado (${estado} - ${porcentajeImpuesto}):</strong> $${impuesto.toFixed(2)}</p>
    <p><strong>Descuento por monto:</strong> ${descuento}</p>

    <p class="resultado"><strong>Precio total (+impuesto):</strong> $${precioTotal.toFixed(2)}</p>
    <p class="resultado"><strong>Precio final con descuento:</strong> $${totalConDescuento.toFixed(2)}</p>
  `;
});


// BOTÓN 2: calcular precio final
btnFinal.addEventListener("click", () => {

  const { cantidad, precio, estado, categoria, peso } = obtenerDatosFormulario();
  const cliente = clienteInput.value;

  const envioBase = calcularCostoEnvioBase(peso);
  const envioFinal = calcularEnvioConDescuento(envioBase, cliente);

  const resultado = ProcesarVentaCompleta(cantidad, precio, estado, categoria, peso, cliente);
  const totalFinal = resultado.totalFinal - envioBase + envioFinal;

  div_1.innerHTML += `
    <hr>
    <p><strong>Categoría:</strong> ${categoria}</p>
    <p><strong>Tipo de cliente:</strong> ${cliente}</p>
    <p><strong>Impuesto categoría:</strong> $${resultado.impCategoria.toFixed(2)}</p>
    <p><strong>Costo envío:</strong> $${resultado.envio.toFixed(2)}</p>
    <p><strong>Envío con descuento cliente:</strong> $${envioFinal.toFixed(2)}</p>
    <h2>TOTAL FINAL: $${totalFinal.toFixed(2)}</h2>
    
  `;
});