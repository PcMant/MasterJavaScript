'use strict'

// Arrays, Arreglos, Matrices
/* Es una coleción de tipos de datos que puede almacenar
una veriables, una coleción de valores o datos

- Array multidimensional: Array dentro de otro.

Soporta también array de objetos.
 */

var nombre = "Juan Molina";
var nombres = ["Juan Molina", "Victor Robles", "Manolo Garcia"];

var lenguajes = new Array("PHP", "JS", "Go", "Java", "C", "C#");
/*
-Cada dato es un índice.
-Se puede inicializar como objeto.
*/

console.log(nombres[0]); // Mostrando un un unico indice (el primero)
console.log(lenguajes[2]); // Mostrando el tercer indice
console.log(lenguajes); // Mostrando todos

console.log(nombres.length); // Mostrando longitud del array (cantidad de indices)

/*
var elemento = parseInt(prompt("Que elemento del array quieres?", 0));

if(elemento >= nombres.length){
	alert("Introduce el numero correcto menos que "+nombres.lenght);
}else{
	alert("El usuario seleccionado es "+nombres[elemento]);
}*/

document.write("<h1>Lenguajes de programación de 2018</h1>");
// Uno a uno no es práctico, para eso se usan bucles, para reccorrer arrays
// document.write(lenguajes[0]);
// document.write(lenguajes[1]);

document.write("<ul>");
//Recorriendo array con for
/*for(var i = 0; i < lenguajes.length; i++){
	document.write("<li>"+lenguajes[i]+"</li>");
}*/

/*// Recorriendo array con forEach //Los otros dos parámetros son opcionales
lenguajes.forEach((elemento, index, data) =>{
	console.log(data); //Data solo devuelve el array entero
	// index devuelve el indice y elemento el dato
	document.write("<li>"+index+" - "+elemento+"</li>");
});*/

// Recorriendo un array con for in
for(let lenguaje in lenguajes){ // El primer campo antes de in es el indice
	document.write("<li>"+lenguajes[lenguaje]+"</li>");
}

document.write("</ul>")

// Busquedas

var precios = [10,20,50,80,12];

//var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP7"); // En caso de no existir devuelve undefined y si existe devuelve el valor
var busqueda = precios.some(precio => precio >= 80); // Devuelve true o false en caso de haber coincidencias, busca que se cumpla una condición concreta

console.log(busqueda); 