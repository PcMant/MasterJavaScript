$(document).ready(function(){

	//Slider https://bxslider.com/
	if(window.location.href.indexOf('index') > -1){
		$('.bxslider').bxSlider({
			mode: 'fade',
			captions: true,
			slideWidth: 'auto',
			pager: true
		});
	}

	//Posts
	if(window.location.href.indexOf('index') > -1){
		var posts = [
			{
				title: 'Prueba de título 1',
				date: 'Publicado el dia '+moment().date()+' de '+moment().format("MMMM")+' del '+moment().format("YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non lacus tristique, fermentum justo mollis, mattis lectus. Donec leo ligula, facilisis ac luctus ac, aliquam auctor augue. Integer vulputate ac ipsum posuere dignissim. Suspendisse mi libero, consectetur ac euismod nec, ornare sed est. Nulla ornare est eget imperdiet vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed nec maximus ex, ut tincidunt velit. Aliquam erat volutpat. Aenean auctor, nulla eu vulputate euismod, lectus lorem bibendum eros, vel elementum ante lectus sit amet ipsum.'
			},
			{
				title: 'Prueba de título 2',
				date: 'Publicado el dia '+moment().date()+' de '+moment().format("MMMM")+' del '+moment().format("YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non lacus tristique, fermentum justo mollis, mattis lectus. Donec leo ligula, facilisis ac luctus ac, aliquam auctor augue. Integer vulputate ac ipsum posuere dignissim. Suspendisse mi libero, consectetur ac euismod nec, ornare sed est. Nulla ornare est eget imperdiet vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed nec maximus ex, ut tincidunt velit. Aliquam erat volutpat. Aenean auctor, nulla eu vulputate euismod, lectus lorem bibendum eros, vel elementum ante lectus sit amet ipsum.'
			},
			{
				title: 'Prueba de título 3',
				date: 'Publicado el dia '+moment().date()+' de '+moment().format("MMMM")+' del '+moment().format("YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non lacus tristique, fermentum justo mollis, mattis lectus. Donec leo ligula, facilisis ac luctus ac, aliquam auctor augue. Integer vulputate ac ipsum posuere dignissim. Suspendisse mi libero, consectetur ac euismod nec, ornare sed est. Nulla ornare est eget imperdiet vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed nec maximus ex, ut tincidunt velit. Aliquam erat volutpat. Aenean auctor, nulla eu vulputate euismod, lectus lorem bibendum eros, vel elementum ante lectus sit amet ipsum.'
			},
			{
				title: 'Prueba de título 4',
				date: 'Publicado el dia '+moment().date()+' de '+moment().format("MMMM")+' del '+moment().format("YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non lacus tristique, fermentum justo mollis, mattis lectus. Donec leo ligula, facilisis ac luctus ac, aliquam auctor augue. Integer vulputate ac ipsum posuere dignissim. Suspendisse mi libero, consectetur ac euismod nec, ornare sed est. Nulla ornare est eget imperdiet vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed nec maximus ex, ut tincidunt velit. Aliquam erat volutpat. Aenean auctor, nulla eu vulputate euismod, lectus lorem bibendum eros, vel elementum ante lectus sit amet ipsum.'
			},
			{
				title: 'Prueba de título 5',
				date: 'Publicado el dia '+moment().date()+' de '+moment().format("MMMM")+' del '+moment().format("YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non lacus tristique, fermentum justo mollis, mattis lectus. Donec leo ligula, facilisis ac luctus ac, aliquam auctor augue. Integer vulputate ac ipsum posuere dignissim. Suspendisse mi libero, consectetur ac euismod nec, ornare sed est. Nulla ornare est eget imperdiet vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed nec maximus ex, ut tincidunt velit. Aliquam erat volutpat. Aenean auctor, nulla eu vulputate euismod, lectus lorem bibendum eros, vel elementum ante lectus sit amet ipsum.'
			},
		];

		posts.forEach((item, index) =>{
			var post = `
				<article class="post">
					<h2>${item.title}</h2>
					<span class="date">${item.date}</span>
					<p>
						${item.content}
					</p>
					<a href="#" class="button-more">Leer más</a>
				</article>
			`;

			$('#posts').append(post);
		});
	}

	//Selector de tema
	/*Hacer mejora con el localstorage para que se guarde el tema seleccionado*/
	var theme = $('#theme');

	function saveTheme(t){
		localStorage.setItem('theme', t);
	}

	if(localStorage.getItem('theme') != null){
		theme.attr('href', 'css/'+localStorage.getItem('theme')+'.css');
	}

	$('#to-green').click(function(){
		theme.attr('href', 'css/green.css');
		saveTheme('green');
	});

	$('#to-red').click(function(){
		theme.attr('href', 'css/red.css');
		saveTheme('red');
	});

	$('#to-blue').click(function(){
		theme.attr('href', 'css/blue.css');
		saveTheme('blue');
	});

	//Scroll arriba de la web
	$('.subir').click(function(e){
		e.preventDefault();

		$('html, body').animate({
			scrollTop: 0
		}, 500);

		return false;
	});

	//Login falso
	$('#login form').submit(function(){

		var form_name = $('#form_name').val();

		localStorage.setItem('form_name', form_name);


	});

	var form_name = localStorage.getItem('form_name');

	if(form_name != null && form_name != "undefined"){
		var about_parrafo = $("#about p");

		about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong> ");
		about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");

		$("#login").hide();

		$("#logout").click(function(){
			localStorage.clear();
			location.reload();
		});
	}

	//Acordeon
	if(window.location.href.indexOf('about') > -1){
		$("#acordeon").accordion();
	}

	//Reloj
	if(window.location.href.indexOf('reloj') > -1){
		setInterval(function(){
			var reloj = moment().format('h:mm:ss');
			$('#reloj').html(reloj);
		},1000);
	}

	//Validación
	if(window.location.href.indexOf('contact') > -1){

		$("#form_contact input[name='date']").datepicker({
			dateFormat: 'dd-mm-yy'
		});

		$.validate({
			lang: 'es',
		    errorMessagePosition: 'top',
		    scrollToTopOnError: true
  		});		
	}

});