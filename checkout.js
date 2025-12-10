// Simulación de productos seleccionados (puedes cargar desde localStorage si lo usas)
let carrito = JSON.parse(localStorage.getItem('carrito')) || [
  { nombre: 'Laptop Gaming', precio: 18000 },
  { nombre: 'Cámara de Seguridad HD', precio: 2500 }
];

let subtotal = 0;
let descuentoAplicado = 0;
const cuponesValidos = {
  "AZTLAN10": 0.10,
  "TECNODESC20": 0.20
};

function mostrarProductos() {
  const lista = document.getElementById('lista-compra');
  lista.innerHTML = '';
  subtotal = 0;
  carrito.forEach(p => {
    subtotal += p.precio;
    const li = document.createElement('li');
    li.textContent = `${p.nombre} - $${p.precio.toFixed(2)}`;
    lista.appendChild(li);
  });
  document.getElementById('subtotal').textContent = subtotal.toFixed(2);
  document.getElementById('total-descuento').textContent = (subtotal - descuentoAplicado).toFixed(2);
}

function aplicarCupon() {
  const cuponIngresado = document.getElementById('cupon').value.toUpperCase();
  const descuento = cuponesValidos[cuponIngresado];
  const msg = document.getElementById('descuento-msg');

  if (descuento) {
    descuentoAplicado = subtotal * descuento;
    msg.textContent = `Cupón aplicado: -${(descuento * 100)}%`;
  } else {
    descuentoAplicado = 0;
    msg.textContent = 'Cupón no válido.';
  }

  document.getElementById('total-descuento').textContent = (subtotal - descuentoAplicado).toFixed(2);
}

document.getElementById('formulario-pago').addEventListener('submit', function(e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const direccion = document.getElementById('direccion').value;
  const telefono = document.getElementById('telefono').value;
  const email = document.getElementById('email').value;

  if (!nombre || !direccion || !telefono || !email) {
    alert('Por favor llena todos los campos.');
    return;
  }

  const totalFinal = subtotal - descuentoAplicado;

  alert(`¡Gracias por tu compra, ${nombre}!\n\nTu pedido por $${totalFinal.toFixed(2)} será enviado a:\n${direccion}\n\nTe hemos enviado un correo con los detalles. Realiza la transferencia bancaria a la cuenta proporcionada.`);

  carrito = [];
  localStorage.setItem('carrito', JSON.stringify([]));
  location.href = 'index.html'; // Redirige a inicio
});

mostrarProductos();


