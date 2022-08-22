'use strict';

// Fetch (ajax) y peticiones a servicios / api rest

/*
El método them y las promesas en fetch evitan en callback hell
(un callback dentro de otro, dentro de otro, dentro de otro...)
*/

var div_usuarios = document.querySelector('#usuarios');
var div_profesor = document.querySelector('#profesor');
var div_janet = document.querySelector('#janet');

// var usuarios = [];

// fetch accede a un servicio remoto
gettUsuarios()
	/*En la primera promesa capturamos los datos
	y lo convertimos a JSON*/
	.then(data => data.json())
	.then(users => {
		/*En la segunda promesa lo guardamos
		en la variable usuarios*/
		// usuarios = users.data;
		// console.log(usuarios);

		// usuarios.map((users, i) =>{
		// 	let nombre = document.createElement('h2');

		// 	nombre.innerHTML = i +". "+ users.first_name+" "+users.last_name;

		// 	div_usuarios.appendChild(nombre);

		// 	document.querySelector(".loading").style.display = 'none';
		// });
		listadoUsuarios(users.data);

		return getInfo();
	})
	.then(data => {
		div_profesor.innerHTML = data;

		return getJanet();
	})
	.then(data => data.json())
	.then(user => {
		mostrarJanet(user.data);
	})
	.catch(error => {
		console.log(error);
	});
	

	function gettUsuarios(){
		return fetch('https://reqres.in/api/users');
	}

	function getJanet(){
		return fetch('https://reqres.in/api/users/2');
	}

	function getInfo(){
		var profesor = {
			nombre: 'Juan',
			apellidos: 'Molina',
			url: 'http://www.pcmant.com/'
		};
		// ejemplo de promesa con la clase Promise
		return new Promise((resolve, reject) => {

			var profesor_string = "";

			setTimeout(function(){
				profesor_string = JSON.stringify(profesor);

				if(typeof profesor_string != 'string' || profesor_string == '') return reject('error 1');

				return resolve(profesor_string);
			}), 3000;
		});
	}

	function listadoUsuarios(usuarios){
		usuarios.map((user, i) =>{
			let nombre = document.createElement('h3');

			nombre.innerHTML = user.first_name+" "+user.last_name;

			div_usuarios.appendChild(nombre);

			document.querySelector("#usuarios .loading").style.display = 'none';
		});
	}

	function mostrarJanet(user){
		
		let nombre = document.createElement('h3');
		let avatar = document.createElement('img');

		nombre.innerHTML = user.first_name+" "+user.last_name;
		avatar.src = user.avatar;
		avatar.width = '100';

		div_janet.appendChild(nombre);
		div_janet.appendChild(avatar);

		document.querySelector("#janet .loading").style.display = 'none';
	
	}