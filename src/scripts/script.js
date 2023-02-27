const paragrafo = document.querySelector('p');
const texto = '<V.NETO/>';
let index = 0;

function escrever() {
  paragrafo.textContent = texto.substring(0, ++index);
  paragrafo.innerHTML += index < texto.length ? '|' : '';

  if (index < texto.length) {
    setTimeout(escrever, 200);
  }
}

escrever();


const textos = [
  "O HTML é uma linguagem de marcação e a base para os sites, que os navegadores interpretam e te entregam uma interface para interação.",
  "O CSS é uma linguagem baseada em regras que estiliza os elementos de uma pagina HTML e entrega uma pagina visualmente melhor para o usuário.",
  "O JavaScript é uma linguagem de progamação que permite fazer implementações mais complexas, que não podem ser feitas apenas com HTML e CSS.",
  "O Bulma é um Framework gratuito que fornece componentes front-end prontos para uso, tornado o trabalho de estilização de um site mais rapido proporcionando o reaproveitamento de código.",
  "O PHP é uma linguagem de interpretação utilizada do lado servidor, com ele podemos fazer sites complexos que tem muitas funções e interações.",
  "O Node.js é o JavaScript do lado servidor, ele combina todo potencial do JS com os beneficios do lado servidor, proporcionando mais segurança para aplicações que precisam de autenticação."
];

function mostrarTexto(indice) {
  document.getElementById("tooltip").textContent = textos[indice];
  document.getElementById("tooltip").style.display = "block";
}

function esconderTexto() {
  document.getElementById("tooltip").style.display = "none";
}

