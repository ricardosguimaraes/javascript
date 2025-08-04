//Exercício 4
//Use `reduce` para calcular o produto de todos os números em um array.
const numbers = [1,2,3,4,5,6,7,8]
const somaTudo = numbers.reduce(function(num, acum){
    return num*acum
},1)

console.log(somaTudo)