# AULA 5: ESTRUTURAS DE CONTROLE

## 🎯 Objetivos
- Entender como controlar o fluxo do programa com condicionais
- Aprender a usar `if`, `else if`, `else` e `switch`
- Conhecer o operador ternário para expressões condicionais simples
- Praticar com exemplos e exercícios

---

## 📚 TEORIA

### 1. Condicional `if`

Executa um bloco de código se a condição for verdadeira.

```javascript
if (condicao) {
  // código executado se condicao for true
}
```

### 2. Condicional `if...else`

Executa um bloco se a condição for verdadeira, outro se for falsa.

```javascript
if (condicao) {
  // executa se true
} else {
  // executa se false
}
```

### 3. Condicional `if...else if...else`

Permite múltiplas condições.

```javascript
if (condicao1) {
  // executa se condicao1 for true
} else if (condicao2) {
  // executa se condicao2 for true
} else {
  // executa se nenhuma condição anterior for true
}
```

### 4. `switch`

Avalia uma expressão e executa o caso correspondente.

```javascript
switch (expressao) {
  case valor1:
    // código
    break;
  case valor2:
    // código
    break;
  default:
    // código se nenhum case for atendido
}
```

### 5. Operador ternário

Sintaxe curta para `if...else` simples.

```javascript
condicao ? valorSeTrue : valorSeFalse;
```

---

## 💻 PRÁTICA

### Exemplo com `if...else`

```javascript
let idade = 18;

if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}
```

### Exemplo com `if...else if...else`

```javascript
let nota = 75;

if (nota >= 90) {
  console.log("Excelente");
} else if (nota >= 70) {
  console.log("Bom");
} else if (nota >= 50) {
  console.log("Regular");
} else {
  console.log("Reprovado");
}
```

### Exemplo com `switch`

```javascript
let dia = 3;

switch (dia) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda-feira");
    break;
  case 3:
    console.log("Terça-feira");
    break;
  default:
    console.log("Dia inválido");
}
```

### Exemplo com operador ternário

```javascript
let acesso = idade >= 18 ? "Permitido" : "Negado";
console.log(acesso);
```

---

## 🏋️ EXERCÍCIOS E SOLUÇÕES

### Exercício 1

Escreva um programa que verifica se um número é positivo, negativo ou zero.

**Resposta:**

```javascript
let numero = 5;

if (numero > 0) {
  console.log("Positivo");
} else if (numero < 0) {
  console.log("Negativo");
} else {
  console.log("Zero");
}
```

---

### Exercício 2

Crie um programa que recebe uma nota (0 a 100) e imprime a classificação:

- 90 ou mais: Excelente
- 70 a 89: Bom
- 50 a 69: Regular
- Menor que 50: Reprovado

**Resposta:**

```javascript
let nota = 85;

if (nota >= 90) {
  console.log("Excelente");
} else if (nota >= 70) {
  console.log("Bom");
} else if (nota >= 50) {
  console.log("Regular");
} else {
  console.log("Reprovado");
}
```

---

### Exercício 3

Use `switch` para imprimir o nome do mês dado um número de 1 a 12. Para números fora desse intervalo, imprima "Mês inválido".

**Resposta:**

```javascript
let mes = 4;

switch (mes) {
  case 1:
    console.log("Janeiro");
    break;
  case 2:
    console.log("Fevereiro");
    break;
  case 3:
    console.log("Março");
    break;
  case 4:
    console.log("Abril");
    break;
  case 5:
    console.log("Maio");
    break;
  case 6:
    console.log("Junho");
    break;
  case 7:
    console.log("Julho");
    break;
  case 8:
    console.log("Agosto");
    break;
  case 9:
    console.log("Setembro");
    break;
  case 10:
    console.log("Outubro");
    break;
  case 11:
    console.log("Novembro");
    break;
  case 12:
    console.log("Dezembro");
    break;
  default:
    console.log("Mês inválido");
}
```

---

### Exercício 4

Reescreva o exercício 1 usando operador ternário.

**Resposta:**

```javascript
let numero = -3;

let resultado = numero > 0 ? "Positivo" : (numero < 0 ? "Negativo" : "Zero");
console.log(resultado);
```

---

## 🚀 DESAFIO DA AULA

Crie um programa que:

1. Receba uma idade.
2. Use `if...else` para imprimir:
   - "Criança" se idade < 12
   - "Adolescente" se idade entre 12 e 17
   - "Adulto" se idade entre 18 e 64
   - "Idoso" se idade >= 65

**Resposta:**

```javascript
let idade = 30;

if (idade < 12) {
  console.log("Criança");
} else if (idade <= 17) {
  console.log("Adolescente");
} else if (idade <= 64) {
  console.log("Adulto");
} else {
  console.log("Idoso");
}
```

---

## 📝 RESUMO DA AULA

- `if`, `else if` e `else` controlam o fluxo baseado em condições.
- `switch` é útil para múltiplas comparações de um mesmo valor.
- Operador ternário é uma forma compacta de `if...else`.
- Use a estrutura que melhor deixar seu código claro e legível.
