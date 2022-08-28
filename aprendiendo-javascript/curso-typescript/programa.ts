/*
Módulos:
Los módulos, los exports y los imports. Nos permite modulizar la aplicación de tal forma
que organizamos muchisimo mejor el código.
Sirve para organizar la funcionalidad del programa por diferentes ficheros, diferentes funcionalidades
y fucerebtes clases, para optimizar mucho el código, para organizar, para abstraer y tener mayor moduladidad

Export: Es para exportar
Import: Es para importar las clases / ficheros
*/
module Tienda {
	export class Ropa{
		constructor(public titulo: string){
			alert(titulo);
		}
	}

	export class Informatica{
		constructor(public titulo: string){
			alert('Tienda de tecnología: '+titulo);
		}
	}
}

/*
Los decoradores son una nueva funcionalidad que podemos utilizar tanto como dentro de Angular como de TypeScript,
como también próximamente en JavaScript con los nuevos estandares de ECMAScript.
Lo que nos permite básicamente un decorador es mediante puedes definir antes de una clase una intrucción un @ lo que sea,
cuando utilizamos un decorador de una clase lo que hacemos es añadirle unos metadatos a una clase, hacer una copia de la clase
a la que le estamos aplicando el decorador y mediante unos metadatos que son unos argumentos / parámetos que le pasamos,
los decoradores lo que hacemos es modificar la clase que creamos originalmente y añadiendo más información o quitarla,
añadirle una funcionalidad y que luego ese decorador nos devuelva la clase que estamos decorado nos la devuelva con la nueva información
o funcionalidad que ha añadido ese decorador.
*/
function arranque(lanzar:string){
	return function(target: Function){
		target.prototype.lanzamiento = function(): void{
			alert(lanzar);
		}
	}
}

import Informatica = Tienda.Informatica;
let cargar_ifomatica = new Informatica('supertienda');

@arranque('Lanzamiento del curso de JS')
class Programa{
	public nombre: string;
	public version: number;
	lanzamiento: any;

	getNombre(): string{
		return this.nombre;
	}

	setNombre(nombre:string){
		this.nombre = nombre;
	}

	getVersion(): number{
		return this.version;
	}

	setVersion(version:number){
		this.version = version;
	}
}

// Probando el método del decorador @arranque
var programa = new Programa();
programa.lanzamiento();

/*
El concepto de la herencia en la programación orientada a objetos es un mecanismo muy básico por el cual
las clases hijas heredan  de una clase padre sus propiedades y métodos.
*/
class EditorVideo extends Programa{
	public timeline: number;

	setTimeline(timeline:number){
		this.timeline = timeline;
	}

	getTimeline(): number{
		return this.timeline;
	}

	getAllData():string{
		return this.getNombre()+' - '+this.getVersion()+' - '+this.getTimeline();
	}
}

var editor = new EditorVideo();
editor.setNombre('Camtasia Studio');
editor.setVersion(8);
editor.setTimeline(4000);
console.log(editor.getAllData());

// Logica del formulario
var programas: Array<any> = [];

function guardar(){
	var nombre = (<HTMLInputElement>document.getElementById("nombre")).value.toString();

	var programa = new Programa();
	programa.setNombre(nombre);
	programa.setVersion(1);
	
	programas.push(programa);

	var list =  "";
	for(var i = 0; i < programas.length; i++){
		list = list+"<li>"+programas[i].getNombre()+'</li>';
	}

	var listado = <HTMLElement> document.getElementById("listado");
	listado.innerHTML = list;

	(<HTMLInputElement>document.getElementById("nombre")).value = "";
}