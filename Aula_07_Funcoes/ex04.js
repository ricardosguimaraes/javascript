/*
Exercício 4
Crie uma função que recebe um número e retorna `true` se for par, `false` caso contrário.
*/
function ehPar(numero) {
  return numero % 2 === 0;
}

console.log(ehPar(4)); // true
console.log(ehPar(7)); // false
console.log(ehPar(0)); // true
