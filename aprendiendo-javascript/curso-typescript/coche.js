var Coche = /** @class */ (function () {
    function Coche(modelo) {
        if (modelo === void 0) { modelo = null; }
        this.color = "Blanco";
        this.velocidad = 0;
        if (modelo == null) {
            this.modelo = "BMW Generico";
        }
        else {
            this.modelo = modelo;
        }
    }
    Coche.prototype.getModelo = function () {
        return this.modelo;
    };
    Coche.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    Coche.prototype.acelerar = function () {
        this.velocidad++;
    };
    // La clase private solo da acceso a la misma clase y no tiene acceso las que heredan de la clase
    /*private acelerar(){
        this.velocidad++;
    }*/
    // El nivel de acceso protected solo da acceso la clase a si misma, se tiene acceso desde la herencia
    /*protected acelerar(){
        this.velocidad++;
    }*/
    Coche.prototype.frenar = function () {
        this.velocidad--;
    };
    Coche.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    return Coche;
}());
var coche = new Coche();
var coche_dos = new Coche();
var coche_tres = new Coche();
// coche.setColor("ROJO");
coche.acelerar();
coche.acelerar();
coche.acelerar();
console.log('El modelo del coche 1 es: ' + coche.getModelo());
console.log('El color del coche 1 es: ' + coche.getColor());
console.log('La velocidad del coche 1 es: ' + coche.getVelocidad());
coche.frenar();
console.log('La velocidad del coche 1 después de frenar es: ' + coche.getVelocidad());
coche_dos.setColor('AZUL');
coche_tres.setColor('VERDE');
/*
console.log('El color del coche 2 es: '+coche_dos.getColor());
console.log('El color del coche 3 es: '+coche_tres.getColor());
*/ 
