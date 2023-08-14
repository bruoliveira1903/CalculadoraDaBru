function Botao(variavel) {
  document.getElementById("visor").value += variavel;
}

function Clean() {
  document.getElementById("visor").value = "";
}

function Result() {
  const resultado = eval(document.getElementById("visor").value);
  document.getElementById("visor").value = resultado;
}