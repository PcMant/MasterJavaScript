'use stric'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// cargar archivos rutas

// middlewares
/*
middlewares ->  Una capa que se ejecuta antes o un métododo que se ejecuta
antes de ejecutar la acción de un controlador.
*/
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// CORS

// RUTAS
app.get('/', (req, res) => {
	res.status(200).send('<h1>Página de inicio</h1>');
});

app.get('/test/:id', (req, res) => {
	console.log(req.body.nombre);
	console.log(req.query.web);
	console.log(req.params.id);

	res.status(200).send({
		message: 'Hola mundo desde mi API de nodeJS'
	});
});

// exportar
module.exports = app;