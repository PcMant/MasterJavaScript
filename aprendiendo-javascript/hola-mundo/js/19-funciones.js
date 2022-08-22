'use strict'

// Funciones
// Una función es una agrupación reutilizable  de un conjunto de instrucciones


// Defino la función los parámetro van entre los parentesis
	//Mostrar es un parámetro opcional, depende de un valor predefinido
function calculadora(numero1, numero2, mostrar = false){
	// Conjunto de instrucciones a ejecutar	
	/*console.log("Hola soy la calculadora");
	console.log("Si soy yo");*/

/* return devuelve un valor a la función es recomentable usarla
En lugar de imprimir valores*/
	//return "Hola soy la calculadora!!";
	
	if(mostrar == false){
		console.log("Suma: "+(numero1+numero2));
		console.log("Resta: "+(numero1-numero2));
		console.log("Multiplicación: "+(numero1*numero2));
		console.log("División: "+(numero1/numero2));
		// console.log(mostrar);
		console.log("************************");

	return "Hola soy la calculadora!!";
	}else{
		document.write("Suma: "+(numero1+numero2)+"<br/>");
		document.write("Resta: "+(numero1-numero2)+"<br/>");
		document.write("Multiplicación: "+(numero1*numero2)+"<br/>");
		document.write("División: "+(numero1/numero2)+"<br/>");
		// console.log(mostrar);
		document.write("************************");
	}
}

// console.log(calculadora(), calculadora(), calculadora());

// Invocar o llamar la función
/*calculadora();
calculadora();
calculadora();*/


//calculadora(12,8);
//calculadora(97,2);

/*for(var i = 1; i <= 10; i++){
	console.log(i);
	calculadora(i,8);
}*/

calculadora(2, 5, true);

function porConsola(numero1, numero2){
	console.log("Suma: "+(numero1+numero2));
		console.log("Resta: "+(numero1-numero2));
		console.log("Multiplicación: "+(numero1*numero2));
		console.log("División: "+(numero1/numero2));
		// console.log(mostrar);
		console.log("************************");
}
function porPantalla(numero1, numero2){
	document.write("Suma: "+(numero1+numero2)+"<br/>");
		document.write("Resta: "+(numero1-numero2)+"<br/>");
		document.write("Multiplicación: "+(numero1*numero2)+"<br/>");
		document.write("División: "+(numero1/numero2)+"<br/>");
		// console.log(mostrar);
		document.write("************************");	
}

//funciones dentro de otras y parámetos opcionales
function calc(numero1, numero2, mostrar = false /*parámetro opcional*/){
	if(mostrar == false){
		porConsola(numero1, numero2);
	}else{
		porPantalla(numero1, numero2);
	}
	return true; /* un flag en un true o false*/
}