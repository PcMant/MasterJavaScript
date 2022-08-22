$(document).ready(function(){
	//alert('hola');

	var caja = $('#caja');

	//Mostrar y ocultar la caja mediante los botones motrar y ocultar
	$('#mostrar').hide();

	$('#mostrar').click(function(){
		$(this).hide();
		$('#ocultar').show();
		// caja.show('fast'); /*efectos: fast, normal, slow, también admiten ms*/
		// caja.fadeIn('slow, 1'); /*efecto de fundido mostrando, el segundo parámetro es la opacidad entre 1 y 0*/
	 	caja.slideDown('slow'); /*efecto deslizante, mostrar*/
	});

	$('#ocultar').click(function(){
		$(this).hide();
		$('#mostrar').show();
		// caja.hide('fast');
		// caja.fadeOut('slow, 0'); /*efecto de fundido ocultando*/

		/*
		=CAlLCABCK EN EFECTOS=
		Al pasar una función callback a un efecto lo que contenga lo ejecutará una vez finalizado el efecto.
		*/
	 	caja.slideUp('slow', () => console.log('Caja Ocultada')); /*Ocultando con efecto deslizante*/
	});

	//Mostrar y ocultar la caja mediente un toggle
	$('#todoenuno').click(function(){
		caja.toggle('fast'); /*efecto de mostrar y ocultar en uno*/
		// caja.fadeToggle('fast'); /*efecto de fundido */
		// caja.slideToggle('fast'); /*toggle con efecto deslizante*/
	});

	$('#animar').click(function(){
		/*animate permite crear cualquier animación utilizando el formato JSON*/
		caja
			.animate({
				marginLeft: '500px',
				fontSize: '40px',
				height: '110px'
			},'slow')
			.animate({
				borderRadius: '900px',
				marginTop: '80px'
			},'slow')
			.animate({
				borderRadius: '0px',
				marginLeft: '0px'
			},'slow')
			.animate({
				borderRadius: '100px',
				marginTop: '0px'
			},'slow')
			.animate({
				marginLeft: '500px',
				fontSize: '40px',
				height: '110px'
			},'slow')
		;
	});
});