$(document).ready(function(){
	// alert('Eventos cargado');

	// MoseOver (pasar el cursor por encima) y MouseOut (Al retirar el cursor de encima)
	var caja = $('#caja');
	var datos = $('#datos');

	/*caja.mouseover(function(){
		$(this).css('background', 'red');
	});

	caja.mouseout(function(){
		$(this).css('background', 'green');
	});*/


	// Hover (Evendo al hacer hover, recibe dos funciones como parámetro)
	function cambiaRojo(){
		$(this).css('background', 'red');
	}

	function cambiaVerde(){
		$(this).css('background', 'green');
	}

	caja.hover(cambiaRojo, cambiaVerde);

	// Cick, Doble click
	caja.click(function(){
		$(this).css('background', 'blue');
		$(this).css('color', 'white');
	});

	// Cick, Doble click
	caja.dblclick(function(){
		$(this).css('background', 'pink');
		$(this).css('color', 'yellow');
	});

	// Focus y blur
	var nombre = $('#nombre');

	nombre.focus(function(){
		$(this).css('border', '2px solid green').css('outline', '0');
	});

	nombre.blur(function(){
		$(this).css('border', '1px solid #ccc');
		datos.text($(this).val()).show();
	});

	// Mousedown (se aplica mientra se pulsa click) y mouseup (se aplica cuando se suelta el click)
	datos.mousedown(function(){
		$(this).css('border-color', 'gray');
	});

	datos.mouseup(function(){
		$(this).css('border-color', 'black');
	});

	// Mousemove (perseguir al ratón)
	$(document).mousemove(function(/*event*/){
		$('body').css('cursor', 'none'); /*ocultando el cursor*/
		/*Obteniendo las cordenadas del cursor del ratón*/
		console.log(event.clientX+','+event.clientY);
		$('#sigueme').css('left',event.clientX)
		 .css('top',event.clientY);
	});
});