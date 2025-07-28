# AULA 8: TRABALHANDO COM ARRAYS EM JAVASCRIPT

## 🎯 Objetivos

- Entender o que são arrays e para que servem
- Aprender a criar e manipular arrays
- Conhecer métodos básicos como push, pop, shift, unshift e splice
- Praticar com exemplos e exercícios

---

## 📚 TEORIA

### 1. O que é um array?

Array (vetor) é uma estrutura que armazena uma coleção ordenada de valores, acessados por índices numéricos, começando em 0.

### 2. Criando arrays

```javascript
let frutas = ["maçã", "banana", "laranja"];
let numeros = [1, 2, 3, 4, 5];
let misto = ["texto", 10, true];
```

### 3. Acessando elementos

```javascript
console.log(frutas[0]); // maçã
console.log(numeros[3]); // 4
```

### 4. Modificando elementos

```javascript
frutas[1] = "uva"; // substitui 'banana' por 'uva'
console.log(frutas); // ['maçã', 'uva', 'laranja']
```

### 5. Tamanho do array

```javascript
console.log(frutas.length); // 3
```

### 6. Métodos básicos de array

| Método  | Descrição                                     | Exemplo                  | Resultado                              |
| ------- | --------------------------------------------- | ------------------------ | -------------------------------------- |
| push    | Adiciona elemento(s) no fim                   | frutas.push("manga")     | ['maçã','banana','laranja','manga']    |
| pop     | Remove o último elemento                      | frutas.pop()             | remove 'manga'                         |
| shift   | Remove o primeiro elemento                    | frutas.shift()           | remove 'maçã'                          |
| unshift | Adiciona elemento(s) no início                | frutas.unshift("goiaba") | ['goiaba','banana','laranja']          |
| splice  | Remove/adiciona elementos em qualquer posição | frutas.splice(1,1)       | remove 1 elemento a partir do índice 1 |

---

## 💻 PRÁTICA

```javascript
let animais = ["cachorro", "gato", "papagaio"];

animais.push("elefante");
console.log(animais); // ['cachorro','gato','papagaio','elefante']

animais.pop();
console.log(animais); // ['cachorro','gato','papagaio']

animais.shift();
console.log(animais); // ['gato','papagaio']

animais.unshift("coelho");
console.log(animais); // ['coelho','gato','papagaio']

// Remove 1 elemento do índice 1 ('gato') e adiciona 'canário'
animais.splice(1, 1, "canário");
console.log(animais); // ['coelho','canário','papagaio']
```

---

## 🏋️ EXERCÍCIOS E SOLUÇÕES

### Exercício 1

Crie um array com 5 frutas e mostre todas elas usando `console.log`.

```javascript
let frutas = ["maçã", "banana", "uva", "morango", "abacaxi"];
console.log(frutas);
```

---

### Exercício 2

Adicione uma fruta no final do array e remova a primeira.

```javascript
frutas.push("laranja");
frutas.shift();
console.log(frutas);
```

---

### Exercício 3

Remova o terceiro elemento do array usando `splice`.

```javascript
frutas.splice(2, 1);
console.log(frutas);
```

---

### Exercício 4

Adicione duas frutas no início do array usando `unshift`.

```javascript
frutas.unshift("mamão", "kiwi");
console.log(frutas);
```

---

### Exercício 5

Mostre o tamanho do array e o último elemento.

```javascript
console.log("Tamanho:", frutas.length);
console.log("Último elemento:", frutas[frutas.length - 1]);
```

---

## 🚀 DESAFIO DA AULA

Crie um programa que:

1. Inicialize um array vazio.
2. Adicione os números de 1 até 10 usando `push`.
3. Remova os dois primeiros números usando `shift`.
4. No índice 3, substitua um elemento por dois números diferentes usando `splice`.
5. Exiba o array final.

**Resposta:**

```javascript
let numeros = [];
for (let i = 1; i <= 10; i++) {
  numeros.push(i);
}
numeros.shift();
numeros.shift();
numeros.splice(3, 1, 100, 101);
console.log(numeros);
```

---

## 📝 RESUMO DA AULA

- Arrays armazenam coleções ordenadas de elementos.
- Índices começam em 0.
- Métodos principais: `push`, `pop`, `shift`, `unshift`, `splice`.

---

## 📚 LIÇÃO DE CASA

1. Crie um array de seus 5 filmes favoritos.
2. Remova o último e adicione um novo no início.
3. Use `splice` para remover um filme do meio e adicionar outro.
4. Mostre o array final e o tamanho dele.

---
