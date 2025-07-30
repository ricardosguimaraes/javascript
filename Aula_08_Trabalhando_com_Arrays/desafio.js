//DESAFIO DA AULA
//Crie um programa que:
//Inicialize um array vazio.
//Adicione os números de 1 até 10 usando push.
//Remova os dois primeiros números usando shift.
//No índice 3, substitua um elemento por dois números diferentes usando splice.
//Exiba o array final.

let numeros = [];
for (let i = 1; i <= 10; i++) {
  numeros.push(i);
}
numeros.shift();
numeros.shift();
numeros.splice(3, 1, 100, 101);
console.log(numeros);