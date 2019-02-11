//iniciar el DOM
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var h3 = document.querySelector("h3");
var body = document.getElementById("gradient");

//funcion de para cambiar el string dentro del css

function colorPalette(){
  body.style.background =
  "linear-gradient(to right, "
  + color1.value +
  ", "
  + color2.value + ")";

  h3.textContent = body.style.background + ";";
}

//Se escucha el input

color1.addEventListener("input", colorPalette);

color2.addEventListener("input", colorPalette);
