//Exercício 2
//Use `map` para criar um novo array com os quadrados dos números de um array dado.

const numbers = [1,2,3,4,5,6,7,8]
const quadradoNumbers = numbers.map(function(num){
    return num**2
})

console.log(quadradoNumbers)