/*
DESAFIO DA AULA
Crie um programa que:
1. Use um loop `for` para imprimir a tabuada do 7 (de 7x1 até 7x10).
2. Use um loop `while` para contar quantos números ímpares existem entre 1 e 50.
3. Use `for...of` para percorrer o array `[10, 25, 30, 45, 50]` e imprimir apenas os números maiores que 30.
*/
// 1. Tabuada do 7
console.log("=== TABUADA DO 7 ===");
for (let i = 1; i <= 10; i++) {
  console.log(`7 x ${i} = ${7 * i}`);
}

// 2. Contar números ímpares de 1 a 50
console.log("\n=== NÚMEROS ÍMPARES ===");
let contador = 1;
let quantidadeImpares = 0;
while (contador <= 50) {
  if (contador % 2 !== 0) {
    quantidadeImpares++;
  }
  contador++;
}
console.log("Quantidade de números ímpares entre 1 e 50:", quantidadeImpares);

// 3. Números maiores que 30
console.log("\n=== NÚMEROS MAIORES QUE 30 ===");
let numeros = [10, 25, 30, 45, 50];
for (let numero of numeros) {
  if (numero > 30) {
    console.log(numero);
  }
}
