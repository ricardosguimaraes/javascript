//MAP
const numbers = [1,2,3,4,5]
const numberMultiplieByTwo = numbers.map(function(number){
    return number*2
})

//FILTER
const ages = [8, 13, 27, 30, 22, 40]
const evenAges = ages.filter(function(item){
    return item%2 === 0
})

//REDUCE
const nums = [8, 13, 27, 30, 22, 40]
const sumOfNum = nums.reduce(function(num , accumulator){
    return num+accumulator
},0)


console.log(`METODO MAP - Numeros do array ${numbers} multiplicados por 2: ${numberMultiplieByTwo}`)
console.log(`METODO FILTER - Numeros do array ${ages} divisiveis por 2: ${evenAges}`)
console.log(`METODO REDUCE - Numeros do array ${nums} somados: ${sumOfNum}`)

