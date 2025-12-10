// Variables para almacenar productos
let carrito = [];
let favoritos = [];

// Mostrar/Ocultar ventanas flotantes
document.getElementById('icono-carrito').addEventListener('click', () => {
  const cuadro = document.getElementById('carrito-cuadro');
  cuadro.style.display = cuadro.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('icono-favorito').addEventListener('click', () => {
  const cuadro = document.getElementById('favoritos-cuadro');
  cuadro.style.display = cuadro.style.display === 'none' ? 'block' : 'none';
});

// Función para agregar producto al carrito
function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  actualizarCarrito();
}

// Función para agregar producto a favoritos
function agregarAFavoritos(nombre) {
  if (!favoritos.includes(nombre)) {
    favoritos.push(nombre);
    actualizarFavoritos();
  }
}

// Función para actualizar visualmente el carrito
function actualizarCarrito() {
  const lista = document.getElementById('lista-carrito');
  lista.innerHTML = '';
  let total = 0;
  carrito.forEach((item, index) => {
    total += item.precio;
    const li = document.createElement('li');
    li.innerHTML = `${item.nombre} - $${item.precio.toFixed(2)} <button onclick="eliminarDelCarrito(${index})">X</button>`;
    lista.appendChild(li);
  });
  document.getElementById('total-carrito').innerText = total.toFixed(2);
}

// Función para actualizar favoritos
function actualizarFavoritos() {
  const lista = document.getElementById('lista-favoritos');
  lista.innerHTML = '';
  favoritos.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `${item} <button onclick="eliminarDeFavoritos(${index})">X</button>`;
    lista.appendChild(li);
  });
}

// Eliminar un producto del carrito
function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}

// Eliminar un producto de favoritos
function eliminarDeFavoritos(index) {
  favoritos.splice(index, 1);
  actualizarFavoritos();
}

// Vaciar carrito completo
document.getElementById('vaciar-carrito').addEventListener('click', () => {
  carrito = [];
  actualizarCarrito();
});

// Simular pago
document.getElementById('btn-pagar').addEventListener('click', () => {
  if (carrito.length === 0) {
    alert("El carrito está vacío.");
    return;
  }
  alert("Procesando pago por $" + carrito.reduce((acc, item) => acc + item.precio, 0).toFixed(2));
  carrito = [];
  actualizarCarrito();
});


