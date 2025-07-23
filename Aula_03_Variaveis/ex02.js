/* Exercício 2
var cor = 'azul';
if (true) {
  var cor = 'vermelho';
  console.log(cor); // ?
}
console.log(cor); // ?
Troque o var por let no exemplo acima. O que muda?
*/

let cor = 'azul';
if (true) {
  let cor = 'vermelho';
  console.log(cor); // ?
}
console.log(cor); // ?


//O primeiro console.log imprime 'vermelho' (a variável do bloco)

//O segundo imprime 'azul' (a variável fora do bloco). Com let, cada bloco tem seu próprio espaço.