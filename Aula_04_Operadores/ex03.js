/*Exercício 3
Use operadores lógicos para verificar se uma pessoa pode dirigir:
- A pessoa deve ter idade >= 18
- A pessoa deve ter carteira de motorista (`boolean`)
*/

let idadePessoa = 20;
let temCarteira = true;

let podeDirigir = idadePessoa >= 18 && temCarteira;
console.log(podeDirigir); // true