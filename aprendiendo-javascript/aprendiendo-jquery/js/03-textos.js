$(document).ready(function(){
	// alert('la alerta');

	reloadLinks();

	$('#add_button')
		.removeAttr('disabled')
		.click(function(){
			console.log($('#add_link').val());
			// $('#menu').html(`<li><a href="${$('#add_link').val()}">${$('#add_link').val()}</a></li>`); /*sobrescribir el html contenido*/
			// $('#menu').prepend(`<li><a href="${$('#add_link').val()}">${$('#add_link').val()}</a></li>`); /*añadir al principio*/
			$('#menu').append(`<li><a href="${$('#add_link').val()}">${$('#add_link').val()}</a></li>`); /*añadir al final*/
			// $('#menu').before(`<li><a href="${$('#add_link').val()}">${$('#add_link').val()}</a></li>`); /*Antes del delemento padre*/
			// $('#menu').after(`<li><a href="${$('#add_link').val()}">${$('#add_link').val()}</a></li>`); /*Después del delemento padre*/
			
			$('#add_link').val('');
			reloadLinks();
	});

	

	function reloadLinks(){
		$('a').each(function(index){
			var that = $(this);
			var enlace = $(this).attr('href');

			that.attr('target', '_blank');

			that.text(enlace);
		});
	}
});