'use strict'

// DOM - Document Object Model
/*
DOM - Document Object Model: Es cada uno de los elementos del html (tratados como objetos)
*/

function cambiaColor(color){
	caja.style.background = color;
}

// SELECCION DE ELEMENTOS POR ID //
var caja = document.getElementById("micaja"); // Obtiene la información de un elemento html por Id

// EDITANDO PROPIEDADES //
caja.innerHTML = "¡TEXTO EN LA CAJA DESDE JS!"; // Modifica el contenido

// Modifica estilos
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";

caja.class = "hola";
caja.className = "hola hola2"; // Añade clases

console.log(caja);

// SELECCION DE ELEMENTOS POR QUERY SELECTOR //
/* Es similar a jquery */

var caja = document.querySelector("#micaja"); // Usa por parámetro un selector como el de CSS
/* Se puede editar las porpiedades de igual forma, solo ha variado el modo de seleccionar */

// Conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName('div');
//console.log(todosLosDivs);
var section = document.querySelector("#miseccion");
var hr = document.createElement("hr");

//var contenidoEnTexto = todosLosDivs[2].textContent; //Es similar a innerHTML pero sin la opción de modificar el contenido
/*todosLosDivs.forEach((valor, indice)=> { //el forEach no sirve para cosas de este tipo
	var parrafo = document.createElement("p");
	var texto = document.createTextNode(valor);
	parrafo.appendChild(texto);
	document.querySelector("#miseccion").appendChild(parrafo);
});*/
var valor;
for(valor in todosLosDivs){
	if(typeof todosLosDivs[valor].textContent == 'string'){
		var parrafo = document.createElement("p");
		var texto = document.createTextNode(todosLosDivs[valor].textContent);
		//parrafo.appendChild(texto); // Este realmente no hace falta, sirve para añadir
		parrafo.append(texto); // Significa añade antes
		// parrafo.prepend(texto); // Significa añade después
		document.querySelector("#miseccion").append(parrafo);
	}
}

section.prepend(hr);
//console.log(contenidoEnTexto);

// Conseguir elementos por su clase css
var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName('amarillo');
//divsRojos[0].style.background = 'red';

console.log(divsAmarillos);

divsAmarillos[0].style.background = "yellow";

var div;
for(div in divsRojos){
	console.log(divsRojos[div]);
	if(divsRojos[div].className == "rojo")divsRojos[div].style.background = 'red'; // Para evitar errores se comprueba la propiedad className
}

console.log(divsRojos);

// Query selector. Solo sirve para seleccionar un elemento, en caso de querer seleccionar todos usar querySelectorAll
var id = document.querySelector("#encabezado");
console.log(id);

var claseRojo = document.querySelector("div.rojo");
console.log(claseRojo);