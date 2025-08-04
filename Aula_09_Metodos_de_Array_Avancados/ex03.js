//Exercício 3
//Utilize `filter` para obter apenas os números ímpares de um array de números.

const numbers = [1,2,3,4,5,6,7,8]
const divPorTres = numbers.filter(function(num){
    return num%2 !== 0
})

console.log(divPorTres)