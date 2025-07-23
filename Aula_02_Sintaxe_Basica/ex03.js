/*
### Exercício 3: truthyFalsy.js
**Instruções:**
- Crie quatro variáveis com estes valores: `0`, `1`, `''` (string vazia) e `'JavaScript'`.
- Para cada uma, exiba o valor e `Boolean(valor)`, indicando se é *truthy* ou *falsy*.
*/
// truthyFalsy.js
let v1 = 0;
let v2 = 1;
let v3 = '';
let v4 = 'JavaScript';

console.log("v1:", v1, "| Boolean(v1):", Boolean(v1), "// falsy");       // 0 é falsy
console.log("v2:", v2, "| Boolean(v2):", Boolean(v2), "// truthy");      // 1 é truthy
console.log("v3:", v3, "| Boolean(v3):", Boolean(v3), "// falsy");       // '' é falsy
console.log("v4:", v4, "| Boolean(v4):", Boolean(v4), "// truthy");      // 'JavaScript' é truthy