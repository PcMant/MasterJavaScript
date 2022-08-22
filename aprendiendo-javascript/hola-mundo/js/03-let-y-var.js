'use strict'
// Pruebas con Let y var
/*al definir variables con let solo
actuan a nivel de bloque o declaración
en la que este y var siempre es globalmente*/
var numero = 40;
console.log(numero); // valor 40

if(true){
	var numero = 50;
	console.log(numero); // valor 50
}

console.log(numero); //valor 50

// Prueba con Let
var texto = "Curso JS";
console.log(texto); // valor

if(true){
	let texto = "Curso Laravel"
	console.log(texto);
}

console.log(texto); //valor js