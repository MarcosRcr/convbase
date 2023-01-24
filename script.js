// Selecciona el título
var title = document.querySelector("h1");

// Array de caracteres del título
var titleText = ["C" ,"O" ,"N" ,"V","E","R","S","O","R", " D","E "," B","A","S","E","S"];

// Contador para el array
var counter = 0;

// Función para escribir el título
function type() {
  if (counter < titleText.length) {
    title.innerHTML += titleText[counter];
    counter++;
    setTimeout(type, 100);
  }
}

// Agrega la clase .typing al título
title.classList.add("typing");

// Ejecuta la función type()
type();

// Función para convertir el número
function convertNumber() {
  // Obtener el número a convertir, la base actual y la base deseada
  var number = document.getElementById("number").value;
  var currentBase = parseInt(document.getElementById("currentBase").value);
  var desiredBase = parseInt(document.getElementById("desiredBase").value);

  // Convertir el número a base decimal
  var decimalNumber = parseInt(number, currentBase);

  // Convertir el número decimal a la base deseada
  var result = decimalNumber.toString(desiredBase);

  // Mostrar el resultado
  document.getElementById("result").innerHTML = result;
}

// Obtener el año actual
var year = new Date().getFullYear();

// Asignar el año actual al elemento con id "year"
document.getElementById("year").innerHTML = year;

// Asignar tu nombre al elemento con id "name"
document.getElementById("name").innerHTML = "Marcos Roman Cuellar Recillas";