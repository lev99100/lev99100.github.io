document.addEventListener('DOMContentLoaded', () => {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const listaCarrito = document.getElementById('lista-carrito');
  const totalCompra = document.getElementById('total-compra');
  const vaciarBtn = document.getElementById('vaciar-carrito');

  function renderCarrito() {
    listaCarrito.innerHTML = '';
    let total = 0;

    carrito.forEach((producto, index) => {
      const item = document.createElement('div');
      item.classList.add('producto-carrito');
      item.innerHTML = `
        <p><strong>${producto.nombre}</strong></p>
        <p>Precio: $${producto.precio}</p>
        <button class="btn-eliminar" data-index="${index}">Eliminar</button
