$(document).ready(function(){
	// console.log('hola');

	/*
	Documentación: https://jqueryui.com/
	*/

	// Mover elemento por la página
	$('.elemento').draggable();

	// Redimensionar
	$('.elemento').resizable();	

	// Seleccionar y ordenar elementos
	// $('.lista-seleccionable').selectable(); /*No funcionan ambos a la vez*/
	$('.lista-seleccionable').sortable({
		update: function(event, ui){
			console.log('Ha cambiado la lista');
		}
	});

	// Drop
	$('#elemento-movido').draggable();
	$('#area').droppable({
		drop: function(){
			console.log('Has sontado algo dentro del area');
		}
	});

	// Efectos
	$('#mostrar').click(function(){
		// $('.caja-efectos').toggle('fade');
		// $('.caja-efectos').fadeToggle();
		// $('.caja-efectos').effect('explode');
		// $('.caja-efectos').toggle('explode'); /*Este lo utiliza el explode*/
		// $('.caja-efectos').toggle('blid');
		// $('.caja-efectos').toggle('slide'); /*Este es de manera lateral*/
		// $('.caja-efectos').toggle('drop');
		// $('.caja-efectos').toggle('fold');
		// $('.caja-efectos').toggle('puff');
		// $('.caja-efectos').toggle('scale');
	$('.caja-efectos').toggle('shake', {/*Opciones*/},4000);
	});

	// Tooltip
	/*
	Tooltips UI https://jqueryui.com/tooltip/
	Existen más de plugins que se pueden añadir
	*/
	$(document).tooltip();

	// Dialog
	$('#lanzar-popup').click(function(){
		$('#popup').dialog();
	});

	// Datepicker
	$.datepicker.regional['es'] = {
		dateFormat: 'dd/mm/yy'
	};
	$.datepicker.setDefaults($.datepicker.regional['es']);
	$('#calendario').datepicker();

	// Tabs
	$('#pestanas').tabs();
});