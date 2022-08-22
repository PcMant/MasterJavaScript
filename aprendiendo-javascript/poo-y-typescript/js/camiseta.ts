// Interface
/*
Una intefaz es un contrato en el que definimos que propiedades y que métodos
obligatorios van a tener una clase.
Entonces a las clases donde se implemente una interfaz tiene que cuplir el contrato.
*/
interface CamisetaBase{
	setColor(color:string):void;
}

// Decorador
/*
Decorador es un patrón de diseño que nos permite mediante unos metadatos que nosotros nos definimos
a hacer una copia de esa misma clase y modificarla o que haga unas cosas u otra dependiendo de los parámetros que se le pasen. 
*/
function estampar(logo: string){
	return function(target: Function){
		target.prototype.estampacion = function():void{
			console.log('Camiseta estampada con el logo de: '+logo);
		}
	}
}

// Clase (molde del objeto)
@estampar('Gucci Gang')
/*export*/ class Camiseta implements CamisetaBase{
	// Propidades (características del objeto)	
	private color: string;
	private modelo: string;
	private marca: string;
	private talla: string;
	private precio: number;

	// Métodos (funciones o acciones del objeto)
	constructor(color, modelo, marca, talla, precio){
		this.color = color;
		this.modelo = modelo;
		this.marca = marca;
		this.talla = talla;
		this.precio = precio;
	}

	public setColor(color: string):void{
		this.color = color;
	}

	public getColor():string{
		return this.color;
	}


}

// Clase hija
class Sudadera extends Camiseta{
	public capucha: boolean;

	public setCapucha(capucha: boolean):void{
		this.capucha = capucha;
	}

	public getCapucha():boolean{
		return this.capucha;
	}	
	
}

var camiseta = new Camiseta('fdas', 'fdas', 'fdas', 'fdas', 12);
console.log(camiseta);
camiseta.estampacion();

var sudadera_nike = new Sudadera('Rojo', 'Manga Larga', 'Nike', 'L', 30);
sudadera_nike.setCapucha(true);
sudadera_nike.setColor('Gris Jaspeado');
console.log(sudadera_nike);