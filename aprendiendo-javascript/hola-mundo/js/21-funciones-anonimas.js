'use strict'

// Funciones anonimas
/* Es una función que no tiene nombre*/
/*Unicamente en estos casos se pueden usar funciones de flechas*/

var pelicula = function(nombre){
	return "La pelucula es: "+nombre;
}
function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
	var sumar = numero1 + numero2;

	sumaYmuestra(sumar);
	sumaPorDos(sumar);

	return sumar;
}
sumame(5, 7, dato => {
	console.log("La suma es: ", dato);
},
dato => {
	console.log("La suma por dos es: ", (dato*2));
});

//Callbacks son funciones dentro de otras
/* En la funciones de tipo flecha si es un unico parámetro
no necesita parentesis, a partir de 2 parámetros si.*/