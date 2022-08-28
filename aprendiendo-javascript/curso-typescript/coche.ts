/*
Las interfaces son como un contrato en el cuál indicamos a la clase
que implemente la intezfaz que propiedades o métodos básicos van a tener de manera
obligatoria
*/
interface CocheBase{
	getModelo(): string;
	getVelocidad(): number;
}

class Coche implements CocheBase{
	public color: string;
	public modelo: string;
	public velocidad: number;

	constructor(modelo:any = null){
		this.color = "Blanco";
		this.velocidad = 0;

		if(modelo == null){
			this.modelo = "BMW Generico";
		}else{
			this.modelo = modelo;
		}
	}

	public getModelo(): string{
		return this.modelo;
	}

	public setModelo(modelo: string){
		this.modelo = modelo;
	}

	public getColor(){
		return this.color;
	}

	public setColor(color: string){
		this.color = color;
	}

	public acelerar(){
		this.velocidad++;
	}

	// La clase private solo da acceso a la misma clase y no tiene acceso las que heredan de la clase
	/*private acelerar(){
		this.velocidad++;
	}*/

	// El nivel de acceso protected solo da acceso la clase a si misma, se tiene acceso desde la herencia
	/*protected acelerar(){
		this.velocidad++;
	}*/

	public frenar(){
		this.velocidad--;
	}

	public getVelocidad():number{
		return this.velocidad;
	}
}

var coche = new Coche();
var coche_dos = new Coche();
var coche_tres = new Coche();
// coche.setColor("ROJO");
coche.acelerar();
coche.acelerar();
coche.acelerar();

console.log('El modelo del coche 1 es: '+coche.getModelo());
console.log('El color del coche 1 es: '+coche.getColor());
console.log('La velocidad del coche 1 es: '+coche.getVelocidad());

coche.frenar();
console.log('La velocidad del coche 1 después de frenar es: '+coche.getVelocidad());

coche_dos.setColor('AZUL');
coche_tres.setColor('VERDE');
/*
console.log('El color del coche 2 es: '+coche_dos.getColor());
console.log('El color del coche 3 es: '+coche_tres.getColor());
*/