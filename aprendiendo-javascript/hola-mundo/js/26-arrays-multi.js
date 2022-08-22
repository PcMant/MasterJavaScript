'use strict'

/*
Los arrays son arrays dentro de otro array
*/

var categorias = ['Accion', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran torino'];

peliculas.sort(); // Ordena numéricamente o alphabeticamente
console.log(peliculas);

peliculas.reverse(); // Ordena en orden inverso

console.log(peliculas);

var cine = [categorias, peliculas];

//console.log(cine[0][1]);
/*
var elemento = prompt("Introduce tu pelicula:");

do{
	elemento = prompt("Introducce tu pelicula:");
	peliculas.push(elemento); // Añadiendo elementos a un array
}while(elemento != "ACABAR");

peliculas.pop(); // Elimina el ultimo elemento de un Array

// peliculas[] = "Bataman"; // Esto no sirve en JS, pero si en PHP
peliculas.push("Batman");
*/

// Como eliminar un indice
var indice = peliculas.indexOf('Gran torino'); // Obteiene el indice de la primera coincidencia

if(indice > - 1){
	peliculas.splice(indice, 1); // Eliminando un indice en concreto de un array
	// En el segundo parámetro indico que unicamente un índice
}

var peliculas_string = peliculas.join(); //Convierte un array en string
console.log(peliculas_string); // Lo muestra en un string separado por comas

console.log(peliculas);

var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", "); //Convierte un string a Array y el parámetro es el separador
console.log(cadena_array);