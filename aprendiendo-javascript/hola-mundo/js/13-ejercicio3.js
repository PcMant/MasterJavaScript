'use strict'

/*
Hacer un programa que muestre todos los
numeros entre dos numeros introducidos por el
uruario.
*/

var numero1 = parseInt(prompt("Introduce el primero numero", 0));
var numero2 = parseInt(prompt("Introduce el segundo numero"));

document.write("<h1>De "+numero1+" a "+numero2+"</h1>");
for(var i = numero1; i <= numero2; i++){
	document.write(i+"<br/>");
}