// Creando un tipo de dato customizado
type alfanumerico = string | number;

// string y number (tipado múltiple)
let cadena: alfanumerico = 'pcmant.com';
cadena = 100;

// number
let numero: number =  12;

// Booleano
let verdadero_falso: boolean = true;

// Any (cualquier valor)
let cualquiera: any = 'hola';
cualquiera = 77;

// Arrays
var lenguajes: Array<string> = ['PHP', 'JS', 'CSS'];

let years: number[] = [12, 13, 14];

// Let vs var
/*var actua a nivel global mientras que let a nivel de bloque*/
var numero1 = 10;
var numero2 = 12;

if(numero1 == 10){
	let numero1 = 44;
	let numero2 = 55;

	console.log(numero1, numero2);
}
console.log(numero1, numero2);

console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, years);