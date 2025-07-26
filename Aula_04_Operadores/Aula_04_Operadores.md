# AULA 4: OPERADORES EM JAVASCRIPT

## 🎯 Objetivos
- Conhecer os operadores aritméticos, de comparação e lógicos
- Entender como usar operadores para realizar cálculos e tomar decisões
- Praticar com exemplos e exercícios para fixar o conteúdo

---

## 📚 TEORIA

### 1. Operadores Aritméticos
São usados para realizar operações matemáticas.

| Operador | Descrição            | Exemplo    | Resultado    |
|----------|----------------------|------------|--------------|
| +        | Adição               | 5 + 3      | 8            |
| -        | Subtração            | 5 - 3      | 2            |
| *        | Multiplicação        | 5 * 3      | 15           |
| /        | Divisão              | 6 / 3      | 2            |
| %        | Resto da divisão     | 7 % 3      | 1            |
| **       | Exponenciação        | 2 ** 3     | 8            |
| ++       | Incremento (pós-fix) | let a=1; a++; | a=2       |
| --       | Decremento (pós-fix) | let a=2; a--; | a=1       |

### 2. Operadores de Comparação
Comparam valores e retornam `true` ou `false`.

| Operador | Descrição                 | Exemplo      | Resultado  |
|----------|---------------------------|--------------|------------|
| ==       | Igualdade (valor)         | 5 == '5'     | true       |
| ===      | Igualdade estrita         | 5 === '5'    | false      |
| !=       | Diferente (valor)         | 5 != '6'     | true       |
| !==      | Diferente estrito         | 5 !== '5'    | true       |
| >        | Maior que                 | 5 > 3        | true       |
| <        | Menor que                 | 3 < 5        | true       |
| >=       | Maior ou igual            | 5 >= 5       | true       |
| <=       | Menor ou igual            | 3 <= 5       | true       |

### 3. Operadores Lógicos
Usados para combinar expressões booleanas.

| Operador | Descrição       | Exemplo           | Resultado  |
|----------|-----------------|-------------------|------------|
| &&       | E (AND)         | true && false     | false      |
| ||       | Ou (OR)         | true || false     | true       |
| !        | Negação (NOT)   | !true             | false      |

---

## 💻 PRÁTICA

### Operadores Aritméticos
```javascript
let a = 10;
let b = 3;

console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.333...
console.log(a % b);  // 1
console.log(a ** b); // 1000

a++;
console.log(a);      // 11

b--;
console.log(b);      // 2
```

### Operadores de Comparação
```javascript
console.log(5 == '5');   // true (valor igual)
console.log(5 === '5');  // false (valor e tipo)
console.log(5 != 6);     // true
console.log(5 !== '5');  // true
console.log(10 > 5);     // true
console.log(3 <= 3);     // true
```

### Operadores Lógicos
```javascript
console.log(true && false);  // false
console.log(true || false);  // true
console.log(!true);          // false

let idade = 20;
let temCarteira = true;
console.log(idade >= 18 && temCarteira); // true
```

---

## 🏋️ EXERCÍCIOS E SOLUÇÕES

### Exercício 1
Calcule e mostre o resultado das expressões:
- `7 + 3 * 2`
- `(7 + 3) * 2`
- `10 % 4`
- `2 ** 5`

**Resposta:**
```javascript
console.log(7 + 3 * 2);    // 13
console.log((7 + 3) * 2);  // 20
console.log(10 % 4);       // 2
console.log(2 ** 5);       // 32
```

---

### Exercício 2
Verifique se as comparações são verdadeiras ou falsas:
- `5 == '5'`
- `5 === '5'`
- `10 != 10'`
- `10 !== '10'`
- `7 > 10`
- `7 <= 7`

**Resposta:**
```javascript
console.log(5 == '5');    // true
console.log(5 === '5');   // false
console.log(10 != 10);    // false
console.log(10 !== '10'); // true
console.log(7 > 10);      // false
console.log(7 <= 7);      // true
```

---

### Exercício 3
Use operadores lógicos para verificar se uma pessoa pode dirigir:
- A pessoa deve ter idade >= 18
- A pessoa deve ter carteira de motorista (`boolean`)

**Resposta:**
```javascript
let idadePessoa = 20;
let temCarteira = true;

let podeDirigir = idadePessoa >= 18 && temCarteira;
console.log(podeDirigir); // true
```

---

## 🚀 DESAFIO DA AULA

Crie um programa que:
1. Declare duas variáveis numéricas `x` e `y`.
2. Calcule e mostre:
   - Soma, subtração, multiplicação, divisão e resto da divisão.
   - Se `x` é maior que `y`.
   - Se `x` é igual a `y` (valor e tipo).
   - Se `x` é diferente de `y` (valor e tipo).
   - O resultado de `(x > 10 && y < 20) || !(x === y)`.
3. Teste com diferentes valores para `x` e `y`.

**Resposta:**
```javascript
let x = 15;
let y = 10;

console.log('Soma:', x + y);
console.log('Subtração:', x - y);
console.log('Multiplicação:', x * y);
console.log('Divisão:', x / y);
console.log('Resto:', x % y);

console.log('x > y:', x > y);
console.log('x === y:', x === y);
console.log('x !== y:', x !== y);

console.log('(x > 10 && y < 20) || !(x === y):', (x > 10 && y < 20) || !(x === y));
```

---

## 📝 RESUMO DA AULA

- Operadores aritméticos realizam cálculos.
- Operadores de comparação retornam booleanos.
- Operadores lógicos combinam condições.
- Use parênteses para controlar a precedência.