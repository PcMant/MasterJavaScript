'use strict'

/*
Programa que pida dos numeros
y que nos diga cual es mayor,
el menor y si son iguales.
PLUS: Si los numeros no son un numero
o son menores o iguales a cero, no los
vuelva a pedir.
*/


var numero1 = parseInt(prompt('Introduce el primer numero', 0));
var numero2 = parseInt(prompt('Introduce del segundo numero', 0));

while(numero1 <= 0 || numero1 <= 0 || isNaN(numero1) || isNaN(numero2)){
	var numero1 = parseInt(prompt('Introduce el primer numero', 0));
	var numero2 = parseInt(prompt('Introduce del segundo numero', 0));
}

if(numero1 == numero2){
	alert("LOS NUMERO SON IGUALES")
}else if(numero1 > numero2){
	alert("EL NUMERO MAYOR ES: "+numero1);
	alert("EL NUMERO MENOR ES: "+numero2);
}else if(numero2 > numero1){
	alert("EL NUMERO MAYOR ES: "+numero2);
	alert("EL NUMERO MENOR ES: "+numero1);
}else{
	alert("INTRODUCE NUMEROS CORRECTOS");
}