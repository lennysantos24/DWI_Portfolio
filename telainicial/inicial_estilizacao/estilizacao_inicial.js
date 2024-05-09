function aparecerTexto() {""
    document.getElementById("div").innerHTML = iframe;
  }

var div = document.getElementById('TAWHC');
var texto = 'This Action Will Have Consequences...';

function escrever(str, el) {
  var char = str.split('').reverse();
  var typer = setInterval(function() {
    if (!char.length) return clearInterval(typer);
    var next = char.pop();
    el.innerHTML += next;
  }, 200);
}

escrever(texto, div)