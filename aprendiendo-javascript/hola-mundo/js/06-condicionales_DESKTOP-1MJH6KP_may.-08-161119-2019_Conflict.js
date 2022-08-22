'use strict'

// Condicional IF
/*
Si A es igual a B entonces haz algo
*/

var edad1 = 30;
var edad2 = 12;

// Si pasa esto
if(edad1 > 12){
	// Ejecuta esto
	console.log("Edad uno es mayor que edad2");
}else{
	console.log("La edad uno es inferior")
}

var edad = 20;
var nombre = 'David Suarez';
/*
// Operadores relacionales
	Mayor: >
	Menor: <
	Mayor o igual: >=
	Menor o igual: <=
	Igual: ==
	Distinto: !=
*/

if(edad >= 18){
	// Es mayor de edad
	console.log(nombre+" tiene "+edad+" años, es mayor de edad");
	
	if(edad <= 33){
		console.log('Todavia eres millenial');
	}else if(edad >= 70){
		console.log('Eres anciano');
	}else{
		console.log('Ya no eres millenial');
	}
}else{
// Es menor de edad
	console.log(nombre+" tiene "+edad+" años, es menor de edad");	
}