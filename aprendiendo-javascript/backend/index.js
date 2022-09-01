'use strict'

/*teniendo objeto de mongoose en la variable mongose*/
var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

/*Creo una promesa*/
mongoose.Promise = global.Promise;
/*creo la conexión, la cual es una promesa*/
mongoose.connect('mongodb://localhost:27017/portafolio')
	.then(() => {
		console.log('Conexión a la base de datos establecida sastifactoriamente...');
		
		// Creación del servidor
		app.listen(port, () => {
			console.log('servidor corriendo correctamente en la URL: localhost:3700');
		});

	})
	.catch(err => console.log(err));