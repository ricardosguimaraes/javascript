/*
Exercício 2

Crie um programa que recebe uma nota (0 a 100) e imprime a classificação:

- 90 ou mais: Excelente
- 70 a 89: Bom
- 50 a 69: Regular
- Menor que 50: Reprovado
*/
let nota = 85;

if (nota >= 90) {
  console.log("Excelente");
} else if (nota >= 70) {
  console.log("Bom");
} else if (nota >= 50) {
  console.log("Regular");
} else {
  console.log("Reprovado");
}