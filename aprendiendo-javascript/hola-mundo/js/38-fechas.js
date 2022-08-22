'use strcit'

var fecha = new Date();

var year = fecha.getFullYear();
var mes = fecha.getMonth(); //El mes 0 es Enero
var dia = fecha.getDate();
var hora = fecha.getHours();

var textoHora = `
	El año es: ${year}
	El mes es: ${mes+1}
	El dia es: ${dia}
	La hora es: ${hora}
`;

console.log(textoHora);
console.log(Math.ceil(Math.random()*10));