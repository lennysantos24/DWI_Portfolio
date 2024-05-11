var nome = document.getElementById('carregando_texto');
var eu = 'BEM VINDO AO MEU PORTFOLIO :D';

  function escrever(str, el) {
    var char = str.split('').reverse();
    var typer = setInterval(function() {
      if (!char.length) return clearInterval(typer);
      var next = char.pop();
      el.innerHTML += next;
    }, 250);
  }
  escrever(eu, nome);


