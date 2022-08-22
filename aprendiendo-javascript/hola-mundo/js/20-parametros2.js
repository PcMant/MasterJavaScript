'use strict'

// Parametros REST y SPREAD

// rest con los ...parametro, crea un array
/* Sirve para cuando se desconoce el número de etradas */
// REST
function listadoFrutas(fruta1, fruta2, ...resto_de_frutas){
	console.log("Fruta1: ", fruta1);
	console.log("Fruta2: ", fruta2);
	console.log(resto_de_frutas);
}

listadoFrutas("Naranja", "Manzana", "Sandia", "Melon");

// SPREAD
var frutas = ["Naranja", "Manzana"];
listadoFrutas( ...frutas, "Sandia", "Pera", "Coco");