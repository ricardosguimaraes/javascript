/*
DESAFIO DA AULA
Crie três versões de uma função que calcula o fatorial de um número:
1. Função tradicional
2. Função anônima
3. Arrow function

O fatorial de 5 é: 5 * 4 * 3 * 2 * 1 = 120
*/
// 1. Função tradicional
function fatorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

// 2. Função anônima
const fatorialAnonima = function(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
};

// 3. Arrow function
const fatorialArrow = n => {
  if (n === 0 || n === 1) {
    return 1;
  }
  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
};

// Testando todas as versões
console.log(fatorial(5)); // 120
console.log(fatorialAnonima(5)); // 120
console.log(fatorialArrow(5)); // 120