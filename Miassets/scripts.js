// console.log('yey');

const destinoForm = document.querySelector('#destino-form');
const destino = document.querySelector('#destino'); //Viene del id de index
const fecha   = document.querySelector('#fecha');
// const list = document.querySelector('#lista');

// console.log (pizzaForm);

destinoForm.addEventListener('submit',function(event){
  event.preventDefault(); //No se refresca la página
  // console.log ('Hemos detenido el submit');
  const destinoLugar = destino.value;
  const destinoDia = fecha.value;
  // console.log (saborPizza);
  // lista.innerHTML = 'Tu pizza es: '+ saborPizza;
  // lista.innerHTML = `Tu pizza es:${saborPizza}s;


    let destinoImg;
    let destinoBien;
    if(destinoLugar == 'América') {
      destinoImg = "america.jpeg";
      destinoBien ="americavisit.jpeg";
    } else if(destinoLugar == 'Oceania'){
      destinoImg = "oceania.jpeg";
      destinoBien ="oceaniavisit.jpeg";
    } else if(destinoLugar == 'Asia'){
      destinoImg = "asia.jpeg";
      destinoBien = "asiavisit.jpeg";
    } else if(destinoLugar == 'África'){
      destinoImg = "africa.jpeg";
      destinoBien ="africavisit.jpeg";
    } else if(destinoLugar == 'Europa'){
      destinoImg = "europa.jpeg";
      destinoBien = "europavisit.jpeg";
    }


  voya.innerHTML = `
    <div class="mevoya"
      <p>Tu viaje<p> <br>
      <h3>Vas a ${destinoLugar}</h3>
      <p> el día ${destinoDia}</p>
      <img src="${destinoImg}">
      <input id="confirm-button" type="button" value="confirmar">
    </div>

  `
  const button = document.querySelector('#confirm-button');
  const lista = document.querySelector('#lista');

  button.addEventListener('click',function(event){

    lista.innerHTML = `
      <div class="bienvenido"
        <p>Te esperamos en<p> <br>
        <img src="${destinoBien}">
      </div>

    `
  });


});
