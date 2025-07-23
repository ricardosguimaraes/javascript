/*
### detectorTiposBasico.js
**Instruções:**
1. Crie três variáveis com valores **manuais** de tipos diferentes (string, number, boolean).
2. Para cada variável, exiba:
   - O valor
   - O tipo (`typeof`)
   - Se é *truthy* ou *falsy* (`Boolean(valor)`)
3. Use somente variáveis, `console.log`, `typeof`, `Boolean()` e comentários.
*/

// detectorTiposBasico.js
let a = "Texto de exemplo"; // string
let b = 123;                 // number
let c = false;               // boolean

// Função para indicar se é truthy ou falsy
function status(valor) {
  return Boolean(valor) ? 'truthy' : 'falsy';
}

console.log("Valor:", a, "| Tipo:", typeof a, "|", status(a)); // string, truthy
console.log("Valor:", b, "| Tipo:", typeof b, "|", status(b)); // number, truthy
console.log("Valor:", c, "| Tipo:", typeof c, "|", status(c)); // boolean, falsy