

function loginWithGoogle() {
  alert("Acceder a autenticación con Google...");
  // Aquí podrías integrar Firebase/Auth0
}

function loginWithPhone() {
  const phone = prompt("Ingresa tu número de WhatsApp:");
  if (phone) {
    const msg = encodeURIComponent("Tu código de verificación de Aztlan NET es: 123456");
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phone}&text=${msg}`;
    window.open(whatsappLink, "_blank");
  }
}

function registerAccount() {
  alert("Acceder a la página de registro...");
  // location.href = "registro.html";
}

function recoverPassword() {
  alert("Acceder a recuperación de contraseña...");
  // location.href = "recuperar.html";
}

document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Validando credenciales...");
  // Aquí iría lógica real de login o conexión a backend
});

let codigoGenerado = "";

function generarCodigo() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

function actualizarProgreso() {
  const campos = ["nombre", "email", "usuario", "password", "confirmar"];
  let llenos = 0;

  campos.forEach(id => {
    const valor = document.getElementById(id).value.trim();
    if (valor !== "") llenos++;
  });

  const progreso = (llenos / campos.length) * 100;
  document.getElementById("barraProgreso").style.width = progreso + "%";

  const btnRegistro = document.getElementById("btnRegistro");
  btnRegistro.disabled = progreso < 100;
}

document.querySelectorAll("#formRegistro input").forEach(input => {
  input.addEventListener("input", actualizarProgreso);
});

function enviarCodigo() {
  const email = document.getElementById("email").value;
  if (!email) return alert("Por favor ingresa un correo válido.");

  codigoGenerado = generarCodigo();

  fetch("/enviar-codigo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email: email, codigo: codigoGenerado })
  })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        alert("Código enviado a tu Gmail. Revisa tu bandeja.");
        document.getElementById("codigoVerificacion").disabled = false;
      } else {
        alert("Error al enviar el correo.");
      }
    })
    .catch(err => console.error("Error:", err));
}

document.getElementById("formRegistro").addEventListener("submit", function (e) {
  e.preventDefault();

  const codigoUsuario = document.getElementById("codigoVerificacion").value.trim();
  if (codigoUsuario !== codigoGenerado) {
    alert("El código ingresado no es válido.");
    return;
  }

  alert("Registro exitoso. Ahora puedes iniciar sesión.");
  window.location.href = "login.html"; // o el nombre de tu login
});

