'use strict'

/*
1. Pida 6 números por pantalla y que meta en un array
2. Mostrar el array entero (en todos los elementos) en el cuerpo de la pagina y en consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducciodo por el usuario, que nos diga si lo encuentra y su indice
(se valorará el uso de funciones)
*/

var numeros = [];
// var numeros = new Array(6); // Seria otra forma de hacerlo

// Guardar elementos introsducidos por el usuario al array
for(var i = 1; i < 7; i++){
	numeros.push(parseInt(prompt("Introducce un número",0)));
}

console.log(numeros);

// Mostrando números
const mostrarDatos = num => {
	document.write("<ul>");
	for(let index in num){
		document.write(`<li>${num[index]}</li>`);
	}
	document.write("</ul>");
}

mostrarDatos(numeros);

// Ordenar elementos
numeros.sort(function(a,b){return a-b});
console.log(numeros);

// Invertir elementos
numeros.reverse();
console.log(numeros);

// Contar elementos
console.log(numeros.length);

// Buscar valor intreoducido por el usuario para saber si existe o no
var indexado = numeros.indexOf(parseInt(prompt("Introducce un número para Buscar")));
console.log(indexado); // Si no existe devuelve -1 y devuelve el indice del que exista