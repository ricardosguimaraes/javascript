# AULA 6: LOOPS EM JAVASCRIPT

## 🎯 Objetivos
- Entender o conceito de loops (repetição)
- Aprender a usar `for`, `while`, `do...while` e `for...of`
- Conhecer quando usar cada tipo de loop
- Praticar com exemplos e exercícios

---

## 📚 TEORIA

### 1. Loop `for`

Executa um bloco de código um número específico de vezes.

```javascript
for (inicialização; condição; incremento) {
  // código a ser repetido
}
```

### 2. Loop `while`

Executa enquanto a condição for verdadeira.

```javascript
while (condição) {
  // código a ser repetido
}
```

### 3. Loop `do...while`

Executa pelo menos uma vez, depois verifica a condição.

```javascript
do {
  // código a ser repetido
} while (condição);
```

### 4. Loop `for...of`

Itera sobre elementos de arrays, strings e outros objetos iteráveis.

```javascript
for (let elemento of array) {
  // código para cada elemento
}
```

### 5. Controle de Loops

- `break`: Sai do loop imediatamente
- `continue`: Pula para a próxima iteração

---

## 💻 PRÁTICA

### Exemplo com `for`

```javascript
// Conta de 1 até 5
for (let i = 1; i <= 5; i++) {
  console.log("Número:", i);
}
```

### Exemplo com `while`

```javascript
// Conta de 1 até 5 usando while
let contador = 1;
while (contador <= 5) {
  console.log("Contador:", contador);
  contador++;
}
```

### Exemplo com `do...while`

```javascript
// Executa pelo menos uma vez
let numero = 10;
do {
  console.log("Número:", numero);
  numero--;
} while (numero > 5);
```

### Exemplo com `for...of`

```javascript
let frutas = ["maçã", "banana", "laranja"];
for (let fruta of frutas) {
  console.log("Fruta:", fruta);
}
```

### Exemplos com `break` e `continue`

```javascript
// Usando break
for (let i = 1; i <= 10; i++) {
  if (i === 6) {
    break; // Para o loop quando i for 6
  }
  console.log(i);
}

// Usando continue
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // Pula quando i for 3
  }
  console.log(i); // Imprime 1, 2, 4, 5
}
```

---

## 🏋️ EXERCÍCIOS E SOLUÇÕES

### Exercício 1

Use um loop `for` para imprimir os números de 1 a 10.

**Resposta:**

```javascript
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

---

### Exercício 2

Use um loop `while` para imprimir os números pares de 2 a 20.

**Resposta:**

```javascript
let numero = 2;
while (numero <= 20) {
  console.log(numero);
  numero += 2; // Incrementa de 2 em 2
}
```

---

### Exercício 3

Use `for...of` para imprimir cada elemento do array `["JavaScript", "Python", "Java", "C++"]`.

**Resposta:**

```javascript
let linguagens = ["JavaScript", "Python", "Java", "C++"];
for (let linguagem of linguagens) {
  console.log(linguagem);
}
```

---

### Exercício 4

Calcule a soma dos números de 1 a 100 usando um loop `for`.

**Resposta:**

```javascript
let soma = 0;
for (let i = 1; i <= 100; i++) {
  soma += i;
}
console.log("Soma:", soma); // 5050
```

---

### Exercício 5

Use um loop para encontrar o primeiro número maior que 50 que seja divisível por 7. Use `break` quando encontrar.

**Resposta:**

```javascript
for (let i = 51; i <= 100; i++) {
  if (i % 7 === 0) {
    console.log("Primeiro número maior que 50 divisível por 7:", i);
    break;
  }
}
// Resultado: 56
```

---

## 🚀 DESAFIO DA AULA

Crie um programa que:

1. Use um loop `for` para imprimir a tabuada do 7 (de 7x1 até 7x10).
2. Use um loop `while` para contar quantos números ímpares existem entre 1 e 50.
3. Use `for...of` para percorrer o array `[10, 25, 30, 45, 50]` e imprimir apenas os números maiores que 30.

**Resposta:**

```javascript
// 1. Tabuada do 7
console.log("=== TABUADA DO 7 ===");
for (let i = 1; i <= 10; i++) {
  console.log(`7 x ${i} = ${7 * i}`);
}

// 2. Contar números ímpares de 1 a 50
console.log("\n=== NÚMEROS ÍMPARES ===");
let contador = 1;
let quantidadeImpares = 0;
while (contador <= 50) {
  if (contador % 2 !== 0) {
    quantidadeImpares++;
  }
  contador++;
}
console.log("Quantidade de números ímpares entre 1 e 50:", quantidadeImpares);

// 3. Números maiores que 30
console.log("\n=== NÚMEROS MAIORES QUE 30 ===");
let numeros = [10, 25, 30, 45, 50];
for (let numero of numeros) {
  if (numero > 30) {
    console.log(numero);
  }
}
```

---

## 📝 RESUMO DA AULA

- `for`: Usado quando sabemos quantas vezes queremos repetir.
- `while`: Usado quando não sabemos exatamente quantas repetições.
- `do...while`: Garante pelo menos uma execução.
- `for...of`: Ideal para percorrer arrays e strings.
- `break` e `continue` controlam o fluxo dos loops.
