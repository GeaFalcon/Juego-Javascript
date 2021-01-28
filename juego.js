var contexto = document.getElementById("lienzoJuego").getContext("2d");

contexto.canvas.width = 300;
contexto.canvas.height = 700;
var FPS = 60;

var gravedad = 1.5;

var personaje = {
  x: 100,
  y: 150,
  w: 50,
  h: 50,
};
setInterval(loop, 1000 / FPS);

// CONTROLES
function flechaAbajo() {
  personaje.y -= 25;
}
function loop() {
  contexto.clearRect(0, 0, 300, 700);
  contexto.fillStyle = "rgba(100,0,0,1)";
  contexto.fillRect(personaje.x, personaje.y, personaje.w, personaje.h);

  personaje.y += gravedad;
}

window.addEventListener("keydown", flechaAbajo);
