
// MENU JAVASCRIPT

const buttons = document.querySelectorAll(".nav-menu-item");

function handleButton() {
  document.querySelector(
    ".item-triggered"
  ).innerHTML = `<span>${this.innerText}</span> triggered / ativado`;
}

buttons.forEach((item) => item.addEventListener("pointerdown", handleButton));

//CABECALHO TEXTO

var div = document.getElementById('Ola');
var texto = 'Olá!';

function escrever(str, el) {
  var char = str.split('').reverse();
  var typer = setInterval(function() {
    if (!char.length) return clearInterval(typer);
    var next = char.pop();
    el.innerHTML += next;
  }, 250);
}

escrever(texto, div)

var nome = document.getElementById('nome');
var eu = 'Meu nome é Milene Santos :D';

setTimeout(function() {
  function escrever(str, el) {
    var char = str.split('').reverse();
    var typer = setInterval(function() {
      if (!char.length) return clearInterval(typer);
      var next = char.pop();
      el.innerHTML += next;
    }, 100);
  }
  escrever(eu, nome)}, 1500);

  var div = document.getElementById('breve_descricao');
  div.style.display = 'none';
  

  setTimeout(function() {
      div.style.display = 'block';
  }, 4700);

/*PROJETOS*/
