'use strict'

window.addEventListener('load', function(){

	var intervalEjecutado = false;
	var tiempo;
	// Timers

	function intervalo(){

		tiempo = setInterval(function(){ //Sus sentencias se repiten cada cierto tiempo, con setTimeout se ejecuta una sola vez
			console.log("Set interval ejecutado");

			var encabezado = document.querySelector("h1");
			if(encabezado.style.fontSize == "50px"){
				encabezado.style.fontSize = "20px";
			}else{
				encabezado.style.fontSize = "50px";
			}
		}, 3000);

		console.log(tiempo); //<- mira en la consola el valor de tm cada vez que damos start y se ejecuta la función
	}

	var stop = document.querySelector("#stop");

	stop.addEventListener('click', function(){
	    if(intervalEjecutado != false){
	        alert("The interval was successfully stopped");
	        intervalEjecutado = false;
	        clearInterval(tiempo);
	    }else{
	        alert('El setInterval ya está detenido');
	    }
	});

	var start = document.querySelector("#start");

	start.addEventListener("click", function(){
		if(intervalEjecutado != true){
	        alert("The interval was restarted");
	        intervalEjecutado = true;
	        intervalo();
	    }else{
	        alert('El setInterval ya se está ejecutando');
	    }
	});
});