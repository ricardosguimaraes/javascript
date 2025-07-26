/*
DESAFIO DA AULA

Crie um programa que:
1. Declare duas variáveis numéricas `x` e `y`.
2. Calcule e mostre:
   - Soma, subtração, multiplicação, divisão e resto da divisão.
   - Se `x` é maior que `y`.
   - Se `x` é igual a `y` (valor e tipo).
   - Se `x` é diferente de `y` (valor e tipo).
   - O resultado de `(x > 10 && y < 20) || !(x === y)`.
3. Teste com diferentes valores para `x` e `y`.
*/
let x = 15;
let y = 10;

console.log('Soma:', x + y);
console.log('Subtração:', x - y);
console.log('Multiplicação:', x * y);
console.log('Divisão:', x / y);
console.log('Resto:', x % y);

console.log('x > y:', x > y);
console.log('x === y:', x === y);
console.log('x !== y:', x !== y);

console.log('(x > 10 && y < 20) || !(x === y):', (x > 10 && y < 20) || !(x === y));

