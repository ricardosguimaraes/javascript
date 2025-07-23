/*
### Exercício 1: tiposBasicos.js
**Instruções:**
- Crie as variáveis abaixo com os tipos indicados:
  - `texto` (string)
  - `numero` (number)
  - `verdade` (boolean)
  - `vazio` (null)
  - `naoDefinido` (undefined)
- Exiba todas em formato de tabela e depois mostre o tipo de cada uma.
*/

// tiposBasicos.js
let texto = "Exemplo de texto";
let numero = 100;
let verdade = true;
let vazio = null;
let naoDefinido;

console.table({ texto, numero, verdade, vazio, naoDefinido });

console.log("Tipo de texto:", typeof texto);           // string
console.log("Tipo de numero:", typeof numero);         // number
console.log("Tipo de verdade:", typeof verdade);       // boolean
console.log("Tipo de vazio:", typeof vazio);           // object (bug histórico)
console.log("Tipo de naoDefinido:", typeof naoDefinido); // undefined
