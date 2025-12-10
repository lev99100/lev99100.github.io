// -------------------- CARGA INICIAL --------------------
window.addEventListener("DOMContentLoaded", () => {
  // -------------------- MENÚ HAMBURGUESA RESPONSIVO --------------------
  const hamburguesa = document.getElementById("hamburguesa");
  const navLinks = document.getElementById("nav-links");

  if (hamburguesa && navLinks) {
    hamburguesa.addEventListener("click", () => {
      navLinks.classList.toggle("activo");
      hamburguesa.classList.toggle("abierto");
    });
  }
});

  // -------------------- MARQUESINA TRANSICIÓN SUAVE --------------------
  const marquesina = document.querySelector(".marquesina span");
  if (marquesina) {
    marquesina.style.animation = "desplazar 20s linear infinite";
  }

 // script.js funcional para logo, buscador e iconos

window.addEventListener("DOMContentLoaded", () => {
  
  // -------------------- LOGIN MODAL --------------------
// Mostrar nombre del usuario si está logueado
document.addEventListener('DOMContentLoaded', function () {
  const nombreUsuario = localStorage.getItem('nombreUsuario');
  if (nombreUsuario) {
    document.getElementById('icono-usuario').style.display = 'none';
    document.getElementById('usuario-logueado').style.display = 'inline-block';
    document.getElementById('nombre-usuario').textContent = nombreUsuario;
  }
});

// Mostrar/ocultar cuadro de favoritos al pasar mouse
document.getElementById('icono-favorito').addEventListener('mouseenter', function () {
  document.getElementById('favoritos-cuadro').style.display = 'block';
});
document.getElementById('icono-favorito').addEventListener('mouseleave', function () {
  document.getElementById('favoritos-cuadro').style.display = 'none';
});

// Mostrar/ocultar carrito de compras
document.getElementById('icono-carrito').addEventListener('mouseenter', function () {
  document.getElementById('carrito-cuadro').classList.add('mostrar');
});
document.getElementById('icono-carrito').addEventListener('mouseleave', function () {
  document.getElementById('carrito-cuadro').classList.remove('mostrar');
});

// Carrito de compras
let carrito = [];
const listaCarrito = document.getElementById('lista-carrito');
const totalCarrito = document.getElementById('total-carrito');

function actualizarCarrito() {
  listaCarrito.innerHTML = '';
  let total = 0;

  carrito.forEach((item, index) => {
    const li = document.createElement('li');
    li.classList.add('item-carrito');
    li.innerHTML = `
      ${item.nombre} - $${item.precio.toFixed(2)}
      <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
    `;
    listaCarrito.appendChild(li);
    total += item.precio;
  });

  totalCarrito.textContent = total.toFixed(2);
}

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  actualizarCarrito();
}

function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}

document.getElementById('vaciar-carrito').addEventListener('click', function () {
  carrito = [];
  actualizarCarrito();
});

document.getElementById('btn-pagar').addEventListener('click', function () {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío.");
    return;
  }
  alert("Pago simulado exitoso. ¡Gracias por tu compra!");
  carrito = [];
  actualizarCarrito();
});

// Sistema de favoritos
const listaFavoritos = document.getElementById('lista-favoritos');
let favoritos = [];

function agregarAFavoritos(nombre) {
  if (!favoritos.includes(nombre)) {
    favoritos.push(nombre);
    mostrarFavoritos();
  }
}

function mostrarFavoritos() {
  listaFavoritos.innerHTML = '';
  favoritos.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ❤️ ${item}
      <button onclick="eliminarFavorito(${index})">Quitar</button>
    `;
    listaFavoritos.appendChild(li);
  });
}

function eliminarFavorito(index) {
  favoritos.splice(index, 1);
  mostrarFavoritos();
}

// Ejemplos de uso (puedes quitarlos después)
agregarAlCarrito("Laptop Dell", 15000);
agregarAlCarrito("Cámara IP", 2500);
agregarAFavoritos("Kit de Seguridad 4 Cámaras");

  // -------------------- CARRUSEL AUTOMÁTICO Y MANUAL --------------------
  const carrusel = document.querySelector(".carrusel-imagenes");
  const slides = carrusel?.querySelectorAll("img");
  const prevBtn = document.querySelector(".btn-carrusel.prev");
  const nextBtn = document.querySelector(".btn-carrusel.next");

  let currentIndex = 0;

  function showSlide(index) {
    if (!slides || slides.length === 0) return;

    carrusel.style.transform = `translateX(-${index * 100}%)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  if (nextBtn && prevBtn && carrusel && slides.length > 0) {
    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);
    showSlide(currentIndex);
    setInterval(nextSlide, 5000); // auto-slide cada 5s
  }

});


document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".hero-card");
  const dots = document.querySelectorAll(".dot");
  let currentIndex = 0;
  let interval;

  function showCard(index) {
    cards.forEach((card, i) => {
      card.classList.remove("active");
      dots[i].classList.remove("active");
      if (i === index) {
        card.classList.add("active");
        dots[i].classList.add("active");
      }
    });
    currentIndex = index;
  }

  function nextCard() {
    let nextIndex = (currentIndex + 1) % cards.length;
    showCard(nextIndex);
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showCard(index);
      clearInterval(interval); // Reiniciar auto cambio si se hace clic
      startAutoSlide();
    });
  });

  function startAutoSlide() {
    interval = setInterval(nextCard, 5000);
  }

  showCard(0);
  startAutoSlide();
});

// -------------------- BENEFICIOS CARRUSEL --------------------
// ----------- BENEFICIOS CARRUSEL DESLIZANTE (2025) -----------
window.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("beneficios-slider");
  let scrollAmount = 0;
  let autoScroll;

  function startAutoScroll(direction = 1) {
    stopAutoScroll();
    autoScroll = setInterval(() => {
      scrollAmount += direction * 1.5;
      slider.scrollLeft = scrollAmount;
      if (scrollAmount >= slider.scrollWidth - slider.clientWidth) scrollAmount = 0;
      if (scrollAmount < 0) scrollAmount = slider.scrollWidth - slider.clientWidth;
    }, 15);
  }

  function stopAutoScroll() {
    if (autoScroll) clearInterval(autoScroll);
  }

  // Dirección según posición del cursor
  slider.addEventListener("mousemove", e => {
    const sliderCenter = slider.offsetLeft + slider.offsetWidth / 2;
    const cursorDirection = e.clientX < sliderCenter ? -1 : 1;
    startAutoScroll(cursorDirection);
  });

  slider.addEventListener("mouseleave", () => stopAutoScroll());

  // Iniciar auto scroll al cargar
  startAutoScroll(1);
});
// -------------------- PROMOCIONES 3D INTERACTIVAS --------------------
document.addEventListener("DOMContentLoaded", () => {
  const promoCards = document.querySelectorAll(".promo-card");

  promoCards.forEach(card => {
    // Animación de entrada
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    setTimeout(() => {
      card.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, 300);

    // Efecto 3D al mover el mouse dentro
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      card.style.transform = `rotateY(${x / 20}deg) rotateX(${y / -20}deg) scale(1.05)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "rotateY(0) rotateX(0) scale(1)";
    });
  });
});
// ------------------- MÁS VENDIDOS - EFECTOS 3D Y RESPONSIVOS --------------------
document.addEventListener("DOMContentLoaded", () => {
  const productos = document.querySelectorAll(".mas-vendidos .producto");

  // Animación de entrada en cascada con efecto
  productos.forEach((producto, i) => {
    producto.style.opacity = "0";
    producto.style.transform = "translateY(50px)";
    setTimeout(() => {
      producto.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
      producto.style.opacity = "1";
      producto.style.transform = "translateY(0)";
    }, i * 100); // efecto tipo cascada
  });

  // Efecto 3D al pasar el mouse
  productos.forEach(producto => {
    producto.addEventListener("mousemove", (e) => {
      const rect = producto.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = -(y - centerY) / 15;
      const rotateY = (x - centerX) / 15;

      producto.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    producto.addEventListener("mouseleave", () => {
      producto.style.transform = "rotateX(0) rotateY(0) scale(1)";
    });
  });

  // Botón "Ver todo"
  const verTodoBtn = document.querySelector(".ver-todo");
  if (verTodoBtn) {
    verTodoBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = "mas_vendidos.html";
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const carrusel = document.getElementById("carrusel");
  const prevBtn = document.querySelector(".control.prev");
  const nextBtn = document.querySelector(".control.next");
  const categorias = document.querySelectorAll(".categoria");

  let scrollAmount = 0;
  const scrollStep = 300;

  // Efecto de entrada animado (fade + slide)
  categorias.forEach((cat, index) => {
    cat.style.opacity = "0";
    cat.style.transform = "translateY(30px)";
    setTimeout(() => {
      cat.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
      cat.style.opacity = "1";
      cat.style.transform = "translateY(0)";
    }, index * 100);
  });

  // Botones de navegación (scroll horizontal)
  nextBtn.addEventListener("click", () => {
    carrusel.scrollBy({
      left: scrollStep,
      behavior: "smooth"
    });
  });

  prevBtn.addEventListener("click", () => {
    carrusel.scrollBy({
      left: -scrollStep,
      behavior: "smooth"
    });
  });

  // Efecto 3D al pasar el mouse sobre categoría
  categorias.forEach(categoria => {
    categoria.addEventListener("mousemove", (e) => {
      const rect = categoria.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = -(y - rect.height / 2) / 15;
      const rotateY = (x - rect.width / 2) / 15;
      categoria.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    categoria.addEventListener("mouseleave", () => {
      categoria.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const heroSections = document.querySelectorAll(".hero-content");

  heroSections.forEach((section, index) => {
    // Efecto de entrada animado (fade + slide)
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    setTimeout(() => {
      section.style.transition = "opacity 0.7s ease-out, transform 0.7s ease-out";
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }, index * 300);

    // Efecto 3D al mover el mouse (solo para escritorio)
    section.addEventListener("mousemove", (e) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = -(y - rect.height / 2) / 15;
      const rotateY = (x - rect.width / 2) / 15;
      section.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    section.addEventListener("mouseleave", () => {
      section.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const productos = document.querySelectorAll(".producto");

  productos.forEach(producto => {
    // Animación de entrada
    producto.style.opacity = 0;
    producto.style.transform = "translateY(50px)";
    setTimeout(() => {
      producto.style.transition = "all 0.8s ease";
      producto.style.opacity = 1;
      producto.style.transform = "translateY(0)";
    }, 200 + Math.random() * 500);

    // Efecto 3D al mover el mouse
    producto.addEventListener("mousemove", e => {
      const rect = producto.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = ((y / rect.height) - 0.5) * 20;
      const rotateY = ((x / rect.width) - 0.5) * -20;

      producto.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    });

    producto.addEventListener("mouseleave", () => {
      producto.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
      producto.style.transition = "transform 0.5s ease";
    });
  });

  // Botón "Ver Todo"
  const btnVerTodo = document.querySelector(".ver-todo");
  btnVerTodo.addEventListener("click", () => {
    window.location.href = "ofertas.html";
  });
});
// Animar elementos al hacer scroll
document.addEventListener("DOMContentLoaded", () => {
  const elementosAnimados = document.querySelectorAll('.card3d, .fade-in, .presentacion img, .historia-video video');

  const observador = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observador.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3
  });

  elementosAnimados.forEach(el => {
    el.classList.add('fade-in'); // Clase para iniciar invisible
    observador.observe(el);
  });
});

// Smooth scroll para anclas internas (por si usas menú de navegación)
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
  enlace.addEventListener('click', function (e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    if (destino) {
      destino.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Efecto de 3D al pasar el mouse sobre tarjetas (interactivo)
document.querySelectorAll('.card3d').forEach(card => {
  card.addEventListener('mousemove', e => {
    const { width, height } = card.getBoundingClientRect();
    const x = e.offsetX;
    const y = e.offsetY;
    const rotateX = ((y / height) - 0.5) * 10;
    const rotateY = ((x / width) - 0.5) * -10;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
});
// Scroll Reveal Animado
document.addEventListener("DOMContentLoaded", () => {
  const elementosAnimados = document.querySelectorAll(".fade-in");

  const mostrarElemento = (entry) => {
    entry.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
      }
    });
  };

  const observer = new IntersectionObserver(mostrarElemento, {
    threshold: 0.2,
  });

  elementosAnimados.forEach((elemento) => {
    observer.observe(elemento);
  });
});

// Validación del formulario de contacto
const formulario = document.querySelector("#form-ayuda");
if (formulario) {
  formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.querySelector("#nombre").value.trim();
    const correo = document.querySelector("#correo").value.trim();
    const mensaje = document.querySelector("#mensaje").value.trim();

    if (!nombre || !correo || !mensaje) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    if (!correo.includes("@") || !correo.includes(".")) {
      alert("Ingresa un correo electrónico válido.");
      return;
    }

    alert("¡Gracias por tu mensaje! Pronto te contactaremos.");
    formulario.reset();
  });
}

// Acordeón en preguntas frecuentes
document.querySelectorAll("details").forEach((detalle) => {
  detalle.addEventListener("toggle", () => {
    document.querySelectorAll("details").forEach((d) => {
      if (d !== detalle) d.removeAttribute("open");
    });
  });
});

// Botón flotante de Ayuda estilo Chatbot
const btnChat = document.createElement("div");
btnChat.innerHTML = `<div id="btn-ayuda" style="position:fixed;bottom:30px;right:30px;z-index:999;background:#00e0ff;color:#fff;padding:12px 16px;border-radius:50%;box-shadow:0 0 15px #00e0ff88;cursor:pointer;">
  <i class="fas fa-comment-dots"></i>
</div>`;

document.body.appendChild(btnChat);

// Ventana de chat flotante
const chatBox = document.createElement("div");
chatBox.innerHTML = `
  <div id="chat-ayuda" style="display:none;position:fixed;bottom:90px;right:30px;width:300px;height:400px;background:#0e1726;border-radius:10px;padding:10px;box-shadow:0 0 20px #00e0ffaa;z-index:999;">
    <h4 style="color:#00e0ff;text-align:center;">Asistente Virtual</h4>
    <div id="chat-mensajes" style="height:300px;overflow-y:auto;padding:5px;background:#1c2b3a;border-radius:5px;margin-bottom:10px;"></div>
    <input type="text" id="chat-input" placeholder="Escribe tu duda..." style="width:100%;padding:8px;border-radius:5px;border:none;">
  </div>
`;
document.body.appendChild(chatBox);

document.getElementById("btn-ayuda").addEventListener("click", () => {
  const chat = document.getElementById("chat-ayuda");
  chat.style.display = (chat.style.display === "none") ? "block" : "none";
});

// Simulación de respuestas automáticas
document.getElementById("chat-input").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const entrada = e.target.value.trim();
    if (entrada !== "") {
      const chatMensajes = document.getElementById("chat-mensajes");
      const userMsg = `<div style="color:#fff;margin:5px 0;">Tú: ${entrada}</div>`;
      chatMensajes.innerHTML += userMsg;

      // Simular respuesta del bot
      setTimeout(() => {
        let respuesta = "Gracias por tu mensaje. Un técnico te atenderá pronto.";
        if (entrada.toLowerCase().includes("servicio")) {
          respuesta = "Para solicitar un servicio técnico, visita la sección 'Servicios'.";
        } else if (entrada.toLowerCase().includes("compra")) {
          respuesta = "Puedes hacer tu compra desde el carrito de compras.";
        }
        const botMsg = `<div style="color:#00e0ff;margin:5px 0;">Bot: ${respuesta}</div>`;
        chatMensajes.innerHTML += botMsg;
        chatMensajes.scrollTop = chatMensajes.scrollHeight;
      }, 1000);
      e.target.value = "";
    }
  }
});



// Animación de scroll: aparición suave de entradas del blog
const entradas = document.querySelectorAll('.entrada-blog');

const mostrarEntradas = () => {
  const trigger = window.innerHeight * 0.85;

  entradas.forEach((entrada) => {
    const topEntrada = entrada.getBoundingClientRect().top;

    if (topEntrada < trigger) {
      entrada.classList.add('fade-in');
    } else {
      entrada.classList.remove('fade-in');
    }
  });
};

window.addEventListener('scroll', mostrarEntradas);
window.addEventListener('load', mostrarEntradas);

// Scroll suave para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
  enlace.addEventListener('click', function (e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    if (destino) {
      destino.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Hover 3D efecto en las tarjetas del blog
document.querySelectorAll('.entrada-blog').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    card.style.transform = `rotateY(${x * 0.05}deg) rotateX(${-y * 0.05}deg) scale(1.03)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)';
  });
});

// Botón "leer más" simulando navegación o expansión de contenido
document.querySelectorAll('.btn-leer-mas').forEach(boton => {
  boton.addEventListener('click', () => {
    alert('Funcionalidad de leer más aún en desarrollo.');
    // Aquí puedes insertar lógica para mostrar contenido completo.
  });
});

