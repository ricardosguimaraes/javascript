/*
### Exercício 2: conversoes.js
**Instruções:**
- Converta explicitamente valores de number para string e de string para number.
*/
let idade = 28;
let idadeString = String(idade);           // converte number ➜ string
let textoNumero = '42';
let textoNumeroConvertido = Number(textoNumero); // converte string ➜ number

console.log("idade (original):", idade, "| tipo:", typeof idade);                  // number
console.log("idadeString:", idadeString, "| tipo:", typeof idadeString);          // string
console.log("textoNumero:", textoNumero, "| tipo:", typeof textoNumero);          // string
console.log("textoNumeroConvertido:", textoNumeroConvertido, "| tipo:", typeof textoNumeroConvertido); // number