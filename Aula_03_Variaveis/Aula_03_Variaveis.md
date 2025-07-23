# AULA 3: VARIÁVEIS – var, let, const E ESCOPO

## 🎯 Objetivos
- Entender as formas de declarar variáveis em JavaScript
- Conhecer as diferenças entre `var`, `let` e `const`
- Aprender sobre escopo global, de função e de bloco
- Praticar a declaração e uso correto de variáveis

---

## 📚 TEORIA

### 1. O que são variáveis?
Variáveis armazenam informações usadas e manipuladas pelo programa.

### 2. Como declarar variáveis

#### `var`
- Forma antiga de declarar variáveis.
- Tem escopo global ou de função (não de bloco).

#### `let`
- Introduzida no ES6 (2015).
- Escopo de bloco – só existe dentro das chaves `{}` onde foi declarada.
- Use quando o valor pode mudar.

#### `const`
- Também do ES6.
- Escopo de bloco.
- Valor não pode ser reatribuído depois da declaração.
- Objetos/arrays `const` podem ter seus conteúdos alterados, mas não serem reatribuídos.

```javascript
var a = 10;
let b = 20;
const c = 30;
a = 15; // ok
b = 25; // ok
// c = 35; // erro! Não pode reatribuir const
```

### 3. Escopo de variáveis

| Declaração | Escopo Global | Escopo Função | Escopo Bloco |
|------------|---------------|---------------|--------------|
| var        | ✅            | ✅            | ❌           |
| let/const  | ✅            | ✅            | ✅           |

```javascript
if (true) {
    var x = 5;
    let y = 10;
    const z = 20;
}
console.log(x); // 5 (var 'vaza' do bloco)
// console.log(y); // Erro (let não acessível fora do bloco)
// console.log(z); // Erro (const não acessível fora do bloco)
```

---

## 💻 PRÁTICA

### Declarando variáveis do jeito certo
```javascript
var nome = "Maria";
let idade = 22;
const cidade = "Salvador";
```

### Constantes com objetos/arrays
```javascript
const pessoa = { nome: "Lucas" };
pessoa.nome = "João"; // permitido
// pessoa = {}; // proibido (não pode reatribuir o objeto)

const numeros = [1, 2, 3];
numeros.push(4); // permitido
```

### Escopo de bloco
```javascript
let resultado = "fora";
if (true) {
  let resultado = "dentro";
  console.log(resultado); // dentro
}
console.log(resultado); // fora
```

---

## 🏋️ EXERCÍCIOS E SOLUÇÕES

### Exercício 1
O que acontece ao executar esse código?
```javascript
var cor = 'azul';
if (true) {
  var cor = 'vermelho';
  console.log(cor); // ?
}
console.log(cor); // ?
```
**Resposta:**
Ambos os `console.log` imprimem `'vermelho'`, pois `var` não respeita escopo de bloco.

---

### Exercício 2
Troque o `var` por `let` no exemplo acima. O que muda?
```javascript
let cor = 'azul';
if (true) {
  let cor = 'vermelho';
  console.log(cor); // ?
}
console.log(cor); // ?
```
**Resposta:**
O primeiro `console.log` imprime `'vermelho'` (variável do bloco).
O segundo imprime `'azul'` (variável fora do bloco).

---

### Exercício 3
Explique o erro (se houver) nesse código:
```javascript
const preco = 50;
preco = 100; // ?
```
**Resposta:**
Erro! Não é permitido reatribuir uma constante (`const`).

---

### Exercício 4
É possível mudar o valor de um objeto declarado com `const`? Teste e mostre.
```javascript
const aluno = { nome: "Ana", idade: 20 };
aluno.idade = 21; // ?
console.log(aluno);
```
**Resposta:**
Sim, o conteúdo do objeto pode ser alterado. Vai imprimir `{ nome: 'Ana', idade: 21 }`.
Não é possível apenas trocar o objeto inteiro (`aluno = {}` dá erro).

---

### Exercício 5
O que acontece aqui?
```javascript
if (true) {
  let teste = 42;
}
console.log(teste); // ?
```
**Resposta:**
Dá erro: `teste is not defined`. `let` tem escopo de bloco.

---

## 🚀 DESAFIO E SOLUÇÃO

Crie um código:
1. Declare um número chamado `base` com `let` e um expoente chamado `expoente` com `const`.
2. Calcule `base` elevado a `expoente`.
3. Imprima: `3 elevado a 4 é 81.`
4. Depois, tente reatribuir a constante e explique no comentário.

**RESPOSTA:**
```javascript
let base = 3;
const expoente = 4;
let resultado = base ** expoente;
console.log(base + " elevado a " + expoente + " é " + resultado + ".");

// expoente = 5; // Erro! Não pode reatribuir uma constante.
// Se descomentar a linha acima, será lançado um erro em tempo de execução.
```

---

## 📝 RESUMO DA AULA
- Prefira `let` e `const` ao invés de `var`.
- `let` e `const` respeitam escopo de bloco.
- `const` não permite reatribuição do valor.
- Escopo é importante para evitar bugs e proteger variáveis.

