'use strict'

var formulario = document.querySelector("#formpeliculas");

formulario.addEventListener('submit',function(){

	var titulo = document.querySelector('#addpelicula').value;

	//if(titulo.length >= 1){
		console.log('true');
		localStorage.setItem(titulo, titulo);
	//}
	
});

var ul = document.querySelector('#peliculas-list');
for(var i in localStorage){

	console.log(localStorage[i]);
	var li = document.createElement("li");
	
	if(typeof localStorage[i] == 'string'){
		li.append(localStorage[i]);
		ul.append(li);
	}
}

var formulariob = document.querySelector("#formBorrarPeliculas");

formulariob.addEventListener('submit',function(){

	var titulo = document.querySelector('#borrarPelicula').value;

	if(titulo.length >= 1){
		localStorage.removeItem(titulo);
	}
	
});