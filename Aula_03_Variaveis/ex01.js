// Exercício 1 - O que acontece ao executar esse código?

var cor = 'azul';
if (true) {
  var cor = 'vermelho';
  console.log(cor); // ?
}
console.log(cor); // ?


//Ambos os console.log imprimem 'vermelho', pois var não respeita escopo de bloco.