$(document).ready(function(){
	// console.log('hola');

	//Load
	/*Nos permite hacer una petición AJAX por GET y incustrar el resultado dentro de cualquier elementro dentro de la página*/
	// $('#datos').load('https://reqres.in/');

	//GET y POST
	$.get('https://reqres.in/api/users', {page: 2}, function(response){
		console.log(response);
		response.data.forEach((element, index)=>{
			$('#datos').append(`<p>${element.first_name+' '+element.last_name}<p>`);
		});
	});

	$('#formulario').submit(function(e){

		e.preventDefault(); /*Esto evita la redirección del forumlario*/

		var usuario = {
			name: $('input[name="name"]').val(),
			web: $('input[name="web"]').val()
		}

		// $.post($(this).attr('action'), usuario, function(response){
		// 	console.log(response);
		// }).done(function(){
		// 	alert("Usuario añadido correctamente");
		// });

		//Usando el método ajax
		/*timeout es el tiempo máximo de tiempo de espera, si se sobrepasa da error*/
		$.ajax({
			type: 'POST',
			dataType: 'json',
			// contentType: 'application/json',
			url: $(this).attr('action'),
			data: usuario,
			beforeSend: function(){
				console.log('Enviando usuario...');
			},
			success: function(response){
				console.log(response);
			},
			error: function(){
				console.log('Ha ocurrido un error');
			},
			timeout: 1000
		});

		return false;
	});

});