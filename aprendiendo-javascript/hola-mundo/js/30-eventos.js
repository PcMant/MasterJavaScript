'use strict'

// Eventos
// Es una función que se ejecuta cuando ocurre algo

/*
El evento load permite cargar el script en el head debido a que no
ejecuta sus sentendicas hasta que no se cargue todos los elementos.
*/
window.addEventListener('load', ()=> {
	// Eventos de ratón
	var boton = document.querySelector("#boton");

	function cambiarColor(){
		console.log("Me has dado click");

		var bg = boton.style.background;
		
		if(bg == "green" || bg == "green none repeat scroll 0% 0%"){
			boton.style.background = "red";
		}else{
			boton.style.background = "green";
		}

		boton.style.padding = "10px";
		boton.style.border = "1px solid #ccc";

		return true;
	}

	// Eventos desde el JS
	// Click
	boton.addEventListener('click', function() {
		cambiarColor();
		this.style.border = "10px solid black";
	});

	// Mouse over - Al pasar el cursor por encima
	//boton.addEventListener('mouseover', () => boton.style.background = "#ccc");

	// Mouse out - Al quitar el cursor de encima
	//boton.addEventListener('mouseout', () => boton.style.background = "yellow");

	// Focus - Cuando se hace focus a un input
	var input= document.querySelector("#campo_nombre");
	input.addEventListener('focus', () => {
		console.log("[focus] Estás dentro del input");
	});

	// Blur - Cuando se sale del focus
	input.addEventListener('blur', () => {
		console.log("[blur] Estás fuera del input");
	});

	// Keydown - Cuando se presiona una tecla
	input.addEventListener('keydown', () => {
		console.log("[keydown] Pulsando una tecla",String.fromCharCode(event.keyCode));
	});

	// Keypress - Cuando una tecla ha sido presionada
	input.addEventListener('keypress', () => {
		console.log("[keypress] Se ha pulsado la tecla",String.fromCharCode(event.keyCode));
	});

	// Keyup - Cuando se suelta una tecla
	input.addEventListener('keyup', () => {
		console.log("[keyup] Tecla soltada",String.fromCharCode(event.keyCode));
	});
});