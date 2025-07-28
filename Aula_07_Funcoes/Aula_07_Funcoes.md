# AULA 7: FUNÇÕES EM JAVASCRIPT

## 🎯 Objetivos
- Entender o que são funções e para que servem
- Aprender a definir e chamar funções
- Conhecer parâmetros e valores de retorno
- Explorar funções anônimas, expressões de função e arrow functions

---

## 📚 TEORIA

### 1. O que é uma função?

Função é um bloco de código reutilizável que executa uma tarefa específica. Pode receber entradas (parâmetros) e retornar um resultado.

**Vantagens das funções:**
- Reutilização de código
- Organização e modularização
- Facilita manutenção
- Evita repetição

---

### 2. Definição e chamada de função

```javascript
function saudacao() {
  console.log("Olá, mundo!");
}

saudacao(); // chama a função
```

---

### 3. Parâmetros e retorno

```javascript
function soma(a, b) {
  return a + b;
}

let resultado = soma(3, 5);
console.log(resultado); // 8
```

---

### 4. Funções anônimas e expressões de função

Funções podem ser atribuídas a variáveis, sem nome (anônimas):

```javascript
const multiplicar = function(x, y) {
  return x * y;
};

console.log(multiplicar(4, 5)); // 20
```

---

### 5. Arrow functions (funções de seta)

Sintaxe curta para funções anônimas (ES6):

```javascript
const dividir = (x, y) => {
  return x / y;
};

console.log(dividir(10, 2)); // 5
```

**Sintaxe ainda mais curta** (uma expressão):

```javascript
const quadrado = x => x * x;

console.log(quadrado(6)); // 36
```

---

## 💻 PRÁTICA

### Exemplo 1: Função simples

```javascript
function dizerOla(nome) {
  console.log("Olá, " + nome + "!");
}

dizerOla("Maria"); // Olá, Maria!
```

### Exemplo 2: Função com retorno

```javascript
function calcularAreaRetangulo(base, altura) {
  return base * altura;
}

let area = calcularAreaRetangulo(5, 3);
console.log("Área:", area); // 15
```

### Exemplo 3: Função anônima

```javascript
const saudacao = function(nome) {
  return "Olá, " + nome + "!";
};

console.log(saudacao("João")); // Olá, João!
```

### Exemplo 4: Arrow function

```javascript
const dobro = n => n * 2;

console.log(dobro(7)); // 14
```

### Exemplo 5: Função sem parâmetros

```javascript
function obterDataAtual() {
  return new Date().toLocaleDateString('pt-BR');
}

console.log(obterDataAtual()); // 26/07/2025
```

---

## 🏋️ EXERCÍCIOS E SOLUÇÕES

### Exercício 1

Crie uma função chamada `multiplicar` que recebe dois números e retorna o produto.

**Resposta:**

```javascript
function multiplicar(a, b) {
  return a * b;
}

console.log(multiplicar(4, 5)); // 20
console.log(multiplicar(3, 7)); // 21
```

---

### Exercício 2

Crie uma função anônima que recebe um nome e retorna uma saudação.

**Resposta:**

```javascript
const saudacao = function(nome) {
  return "Olá, " + nome + "!";
};

console.log(saudacao("Ana")); // Olá, Ana!
console.log(saudacao("Carlos")); // Olá, Carlos!
```

---

### Exercício 3

Reescreva a função do exercício 2 usando arrow function.

**Resposta:**

```javascript
const saudacao = nome => "Olá, " + nome + "!";

console.log(saudacao("Pedro")); // Olá, Pedro!
console.log(saudacao("Lucia")); // Olá, Lucia!
```

---

### Exercício 4

Crie uma função que recebe um número e retorna `true` se for par, `false` caso contrário.

**Resposta:**

```javascript
function ehPar(numero) {
  return numero % 2 === 0;
}

console.log(ehPar(4)); // true
console.log(ehPar(7)); // false
console.log(ehPar(0)); // true
```

---

### Exercício 5

Crie uma arrow function que recebe dois números e retorna o maior deles.

**Resposta:**

```javascript
const maior = (a, b) => a > b ? a : b;

console.log(maior(10, 5)); // 10
console.log(maior(3, 8)); // 8
console.log(maior(7, 7)); // 7
```

---

## 🚀 DESAFIO DA AULA

Crie três versões de uma função que calcula o fatorial de um número:
1. Função tradicional
2. Função anônima
3. Arrow function

O fatorial de 5 é: 5 * 4 * 3 * 2 * 1 = 120

**Resposta:**

```javascript
// 1. Função tradicional
function fatorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
}

// 2. Função anônima
const fatorialAnonima = function(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
};

// 3. Arrow function
const fatorialArrow = n => {
  if (n === 0 || n === 1) {
    return 1;
  }
  let resultado = 1;
  for (let i = 2; i <= n; i++) {
    resultado *= i;
  }
  return resultado;
};

// Testando todas as versões
console.log(fatorial(5)); // 120
console.log(fatorialAnonima(5)); // 120
console.log(fatorialArrow(5)); // 120
```

