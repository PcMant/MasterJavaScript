$(document).ready(function() {
	console.log("Estamos listos!!");

	// Selector de ID
	var rojo = $("#rojo").css("background", "red")
		.css("color", "white");

	console.log(rojo);

	$("#amarillo").css("background", "yellow")
		.css("color", "green");

	$("#verde").css("background", "green")
		.css("color", "white");

	// Selectores de clases
	var mi_calse = $('.zebra').css("padding", "5px");

	$(".sin_borde").click(function(){
		console.log("Click dado");
		$(this).addClass('zebra');
	});

	// Selectores de etiqueta
	var parrafos = $('p').css("cursor", "pointer");

	parrafos.click(function(){
		var that = $(this);
		if(!that.hasClass('grande')){
			that.addClass('grande');
		}else{
			that.removeClass('grande');
		}
	});

	// Selectores de atributo
	$('[title="Google"]').css('background', '#ccc');
	$('[title="Facebook"]').css('background', 'blue');

	// Otros
	$('p, a').addClass('margen-superior');

	/*
		-El método find('selector') nos sirve para buscar en todo el DOM que no sabemos donde está.
		-El método parent() sirve para situarse en elemento padre del que estoy seleccionando.
	*/
	var busqueda = $('#elemento2').parent().parent().find('.resaltado');
	busqueda.css('border-bottom-color', 'yellow');
	console.log(busqueda);
});