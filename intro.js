// Esperar que el video termine (15 segundos) y redirigir
document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("introVideo");

  // Redirigir automáticamente después de la duración del video (15s)
  video.addEventListener("ended", () => {
    window.location.href = "index.html";
  });

  // Fallback por si "ended" no se dispara
  setTimeout(() => {
    window.location.href = "index.html";
  }, 20000); // 15 segundos
});


