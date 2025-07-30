# AULA 9: MÉTODOS DE ARRAY AVANÇADOS

## 🎯 Objetivos
- Explorar métodos avançados de arrays para iteração e transformação
- Aprender a usar `forEach`, `map`, `filter`, `reduce` e `find`
- Compreender como esses métodos facilitam manipulação de dados

---

## 📚 TEORIA

### 1. `forEach`

O método `forEach` percorre o array, executando uma função callback para cada elemento.

**Sintaxe:**
```javascript
array.forEach(function(elemento, indice, array) {
  // Código a ser executado para cada elemento
});
```

**Exemplo:**
```javascript
let numeros = [1, 2, 3, 4, 5];
numeros.forEach((numero, indice) => {
  console.log(`Índice ${indice}: ${numero}`);
});
```

---

### 2. `map`

O método `map` cria um novo array com o resultado da função aplicada a cada elemento do array original.

**Sintaxe:**
```javascript
let novoArray = array.map(function(elemento, indice, array) {
  return /* transformação */;
});
```

**Exemplo:**
```javascript
let numeros = [1, 2, 3, 4, 5];
let dobro = numeros.map(numero => numero * 2);
console.log(dobro); // [2, 4, 6, 8, 10]
```

---

### 3. `filter`

O método `filter` cria um novo array com todos os elementos que passam em um teste implementado pela função fornecida.

**Sintaxe:**
```javascript
let novoArray = array.filter(function(elemento, indice, array) {
  return /* condição booleana */;
});
```

**Exemplo:**
```javascript
let numeros = [1, 2, 3, 4, 5, 6];
let pares = numeros.filter(numero => numero % 2 === 0);
console.log(pares); // [2, 4, 6]
```

---

### 4. `reduce`

O método `reduce` aplica uma função a um acumulador e a cada valor do array (da esquerda para a direita) para reduzi-lo a um único valor.

**Sintaxe:**
```javascript
let resultado = array.reduce(function(acumulador, elemento, indice, array) {
  return /* novo valor do acumulador */;
}, valorInicial);
```

**Exemplo:**
```javascript
let numeros = [1, 2, 3, 4, 5];
let soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(soma); // 15
```

---

### 5. `find`

O método `find` retorna o primeiro elemento do array que satisfaz a condição fornecida na função callback. Se nenhum elemento for encontrado, retorna `undefined`.

**Sintaxe:**
```javascript
let encontrado = array.find(function(elemento, indice, array) {
  return /* condição */;
});
```

**Exemplo:**
```javascript
let numeros = [1, 2, 3, 4, 5];
let maiorQueTres = numeros.find(numero => numero > 3);
console.log(maiorQueTres); // 4
```

---

## 💻 PRÁTICA

### Exemplo 1: Usando `forEach`
```javascript
let cores = ["vermelho", "verde", "azul"];
cores.forEach((cor, index) => {
  console.log(`Cor ${index + 1}: ${cor}`);
});
```

### Exemplo 2: Usando `map` para transformar array
```javascript
let numeros = [1, 2, 3, 4, 5];
let quadrados = numeros.map(num => num * num);
console.log(quadrados); // [1, 4, 9, 16, 25]
```

### Exemplo 3: Usando `filter` para selecionar elementos
```javascript
let idades = [15, 22, 18, 34, 12, 27];
let maioresDeIdade = idades.filter(idade => idade >= 18);
console.log(maioresDeIdade); // [22, 18, 34, 27]
```

### Exemplo 4: Usando `reduce` para acumular valores
```javascript
let valores = [10, 20, 30, 40];
let total = valores.reduce((acum, valor) => acum + valor, 0);
console.log(total); // 100
```

### Exemplo 5: Usando `find` para localizar um elemento
```javascript
let palavras = ["gato", "cachorro", "papagaio", "peixe"];
let encontrado = palavras.find(p => p === "papagaio");
console.log(encontrado); // papagaio
```

---

## 🏋️ EXERCÍCIOS E SOLUÇÕES

### Exercício 1
Crie um array de números e use `forEach` para imprimir cada número multiplicado por 3.

**Resposta:**
```javascript
let numeros = [1, 2, 3, 4, 5];
numeros.forEach(num => console.log(num * 3));
```

---

### Exercício 2
Use `map` para criar um novo array com os quadrados dos números de um array dado.

**Resposta:**
```javascript
let numeros = [2, 4, 6, 8];
let quadrados = numeros.map(num => num ** 2);
console.log(quadrados); // [4, 16, 36, 64]
```

---

### Exercício 3
Utilize `filter` para obter apenas os números ímpares de um array de números.

**Resposta:**
```javascript
let numeros = [1, 2, 3, 4, 5, 6, 7];
let impares = numeros.filter(num => num % 2 !== 0);
console.log(impares); // [1, 3, 5, 7]
```

---

### Exercício 4
Use `reduce` para calcular o produto de todos os números em um array.

**Resposta:**
```javascript
let numeros = [1, 2, 3, 4];
let produto = numeros.reduce((acumulador, numero) => acumulador * numero, 1);
console.log(produto); // 24
```

---

### Exercício 5
Use `find` para localizar o primeiro número maior que 50 em um array.

**Resposta:**
```javascript
let numeros = [10, 20, 35, 50, 65, 80];
let maiorQueCinquenta = numeros.find(num => num > 50);
console.log(maiorQueCinquenta); // 65
```

---

## 🚀 DESAFIO DA AULA

Crie uma função que recebe um array de objetos representando alunos, onde cada objeto possui as propriedades `nome` e `nota`. Use métodos avançados de array para:
1. Filtrar os alunos que passaram (nota >= 50).
2. Mapear os alunos aprovados para um novo array contendo apenas os nomes.
3. Retornar esse novo array.

**Exemplo:**
```javascript
let alunos = [
  { nome: "Ana", nota: 85 },
  { nome: "Bruno", nota: 42 },
  { nome: "Carlos", nota: 67 },
  { nome: "Diana", nota: 49 }
];

function alunosAprovados(alunos) {
  return alunos
          .filter(aluno => aluno.nota >= 50)
          .map(aluno => aluno.nome);
}

console.log(alunosAprovados(alunos)); // ["Ana", "Carlos"]
```

---

## 📝 RESUMO DA AULA

- `forEach` percorre cada elemento do array sem criar um novo array.
- `map` transforma cada elemento, retornando um novo array.
- `filter` retorna um novo array apenas com os elementos que satisfazem a condição.
- `reduce` acumula os elementos em um único valor.
- `find` retorna o primeiro elemento que satisfaz uma condição.

---

## 📚 LIÇÃO DE CASA

1. Crie um array com nomes de cidades e use `map` para converter todos os nomes para letras maiúsculas.
2. Dado um array de números, use `filter` para retornar somente os números que são primos.
3. Use `reduce` para calcular a média dos números de um array.

---

*Aula 9 de 36 – Curso Completo de JavaScript*  
*Professor: Seu Assistant*  
*Data: 27/07/2025*  
