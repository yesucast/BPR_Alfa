document.querySelector('#submit').addEventListener('click',function(){
    
    let cliente = document.querySelector('#cliente').value;
    let taller = document.querySelector('#taller').value;
	let fecha = document.querySelector('#fecha').value;
  //let hora = document.querySelector('#hora').value;
    let personas = document.querySelector('#personas').value;
    let distrito = document.querySelector('#distrito').value;

  //let url = "https://api.whatsapp.com/send?phone=51931512715&text=*_Peruvian%20Crossings_*%20%0A*Reservas*%0A%0A*¿Cuál%20es%20tu%20nombre?*%0A" + cliente + "%0A*Indica%20la%20fecha%20de%20tu%20reserva*%0A" + fecha + "%0A*Indica%20la%20hora%20de%20tu%20reserva*%0A" + hora + "%0A*Día%20de%20preferencia*%0A" + dia + "%0A*¿Cuál%20es%20el%20tour%20que%20desea%20realizar?*%0A" + servicio;
    let url = "https://api.whatsapp.com/send?phone=51931512715&text=*_Alfa_*%20%0A_Brigada%20de%201°%20Respuesta_%0A%0A*Nombre%20o%20empresa:*%0A" + cliente + "%0A*Deseo%20información%20del%20taller:*%0A" + taller + "%0A*Deseo%20realizarlo%20el:*%0A" + fecha + "%0A*Somos%20entre:*%0A" + personas + "%0A*Mi%20distrito%20es:*%0A" + distrito;
    window.open(url);

});
