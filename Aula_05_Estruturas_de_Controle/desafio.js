/*DESAFIO DA AULA

Crie um programa que:

1. Receba uma idade.
2. Use `if...else` para imprimir:
   - "Criança" se idade < 12
   - "Adolescente" se idade entre 12 e 17
   - "Adulto" se idade entre 18 e 64
   - "Idoso" se idade >= 65

   */

   let idade = 2

   if (idade <12) {
    console.log("Criança")
   } else if (idade >=12 && idade <=17){
    console.log("Adolescente")
   } else if (idade >=18 && idade <=64){
    console.log("Adulto")
   } else {
    console.log("Idoso")
   }   