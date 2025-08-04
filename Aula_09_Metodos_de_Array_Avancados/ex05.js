//Exercício 5
//Use `find` para localizar o primeiro número maior que 50 em um array.

let numeros = [10, 20, 35, 50, 65, 80];
let localiza = numeros.find(function(num){
    return num > 50
})

console.log(localiza)
   
