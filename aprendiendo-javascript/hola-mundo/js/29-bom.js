'use strict'

// BOM - Broswer Object Model
function getBom(){ // Consigue el alto y el ancho actual de la ventana donde se muestra la página
	//console.log(window.innerWidth);
	console.log(screen.width);
	//console.log(window.innerHeight);
	console.log(screen.height);
	console.log(window.location); // Obtiene toda las propiedades BOM
}

function redirect(url){
	window.location.href = url;
}

function abrirVentana(url){
	window.open(url,"","width=400,height=300");
}

getBom();