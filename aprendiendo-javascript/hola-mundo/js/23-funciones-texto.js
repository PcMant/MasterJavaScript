'use strict'

// Transformación de textos
var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript de Victor Robles";
var texto2 = "es muy buen curso";

var dato = numero.toString(); /*convierte a string */
	dato = texto1.toLowerCase(); /*convierte a minusculas*/
	dato = texto2.toUpperCase(); /*convierte a mayusculas*/
console.log(typeof dato);

// Calcular longitud (solo sirve para texto)
var nombre = "hola juan";
// console.log(nombre);
	// también vale para contar elementos dentro de un array
	nombre = ["hola", "hola"];

console.log(nombre.length);

// Concatenar - unir textos

var textoTotal = texto1+" "+texto2;
	textoTotal = texto1.concat(" "+texto2);

console.log(textoTotal);

// Métodos de busqueda
var busqueda = texto1.indexOf("curso"); /*encuentra la primera coincidencia y muestra su posición*/
	busqueda = texto1.lastindexOf("curso"); /*muestra la posición de la ultima coincidencia*/
	busqueda = texto1.search("curso"); /*lo mismo que indexof, si no aparece debuelven -1*/
	busqueda = texto1.match("curso"); /*Devuelve una coleción de los resultados que encuentré en un arry (las coincidencias y donde aparece*/
	busqueda = texto1.match(/curso/g); /*busqueda global con caracteres regulares*/
	busqueda = texto1.substr(14,5); /*Muestra texto dentro de un rango de caracteres*/
	busqueda = texto1.CharArt(44); /*devuelve una letra en concreto*/
	busqueda = texto1.startsWith("Victor"); /*busca al inicio del string y devuelve TRUE o FALSE dependiendo de si lo encuentra o no*/
	busqueda = texto1.includes("JavaScript"); /*busca devolviendo true o false, es sensitivo*/

// Remplazar texto
busqueda = texto1.remplace("JavaScript", "Symfony");

// Separar un string, y muestra a partir de cierto punto y un rango (recortar)
busqueda = texto1.slice(14, 22);

//Separa un string creando un array
busqueda = texto1.split(" ");

//Eliminar espacios en blanco, entre delante y atrás
busqueda = texto1.trim();