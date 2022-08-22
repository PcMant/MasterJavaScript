'use strict'

// JSON - JavaScript Object Notation

window.addEventListener('load', function(){
	var pelicula = {
	titulo: 'Batman vs Superman',
	year: 2017,
	pais: 'Estados unidos'
	};

	//elicula.titulo = 'Superman Begins';

	var peliculas = [
		{titulo: "La verdad duele", year: 2016, pais: "Francia"},
		pelicula
	];

	//console.log(peliculas);

	var caja_peliculas = document.getElementById("peliculas");
	var index;
	for(index in peliculas){
		var p = document.createElement("p");
		p.append(peliculas[index].titulo+" - "+peliculas[index].year);
		caja_peliculas.append(p);
	}
});