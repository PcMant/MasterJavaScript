var bicicleta = {
	color: 'rojo',
	modelo: 'bmx',
	frenos: 'De disco',
	velocidadMaxima: '60km',
	cambiaColor: function(nuevo_color){
		// bicicleta.color = nuevo_color;
		this.color = nuevo_color;
	}
};

bicicleta.cambiaColor('Azul');
console.log(bicicleta);