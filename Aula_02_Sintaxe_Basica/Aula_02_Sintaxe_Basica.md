# AULA 2: SINTAXE BÁSICA DO JAVASCRIPT

## 🎯 Objetivos da Aula
- Entender a estrutura básica de um arquivo JavaScript
- Aprender a usar comentários de linha e de bloco
- Conhecer os tipos de dados primitivos em JavaScript
- Praticar a criação de variáveis e inspeção de tipos

---

## 📚 TEORIA

### 1. Comentários
Comentários não são executados pelo interpretador e servem para documentar o código.

```javascript
// Comentário de linha única

/*
  Comentário de
  múltiplas linhas
*/
```

### 2. Tipos de Dados Primitivos

| Tipo        | Exemplo                 | typeof         |
|-------------|-------------------------|----------------|
| string      | "Olá", 'JavaScript'    | string         |
| number      | 3, 3.14, -10            | number         |
| boolean     | true, false             | boolean        |
| null        | null                    | object*        |
| undefined   | undefined               | undefined      |
| symbol      | Symbol('id')            | symbol         |
| bigint      | 9007199254740991n       | bigint         |

*Observação: `typeof null` retorna `object` devido a um bug histórico.

### 3. Conversões Explícitas

```javascript
String(123);     // '123'
Number('42');    // 42
Boolean(0);      // false
Boolean('texto'); // true
```

---

## 🏋️ EXERCÍCIOS E SOLUÇÕES

### Exercício 1: tiposBasicos.js
**Instruções:**
- Crie as variáveis abaixo com os tipos indicados:
  - `texto` (string)
  - `numero` (number)
  - `verdade` (boolean)
  - `vazio` (null)
  - `naoDefinido` (undefined)
- Exiba todas em formato de tabela e depois mostre o tipo de cada uma.

**Solução:**
```javascript
// tiposBasicos.js
let texto = "Exemplo de texto";
let numero = 100;
let verdade = true;
let vazio = null;
let naoDefinido;

console.table({ texto, numero, verdade, vazio, naoDefinido });

console.log("Tipo de texto:", typeof texto);           // string
console.log("Tipo de numero:", typeof numero);         // number
console.log("Tipo de verdade:", typeof verdade);       // boolean
console.log("Tipo de vazio:", typeof vazio);           // object (bug histórico)
console.log("Tipo de naoDefinido:", typeof naoDefinido); // undefined
```

---

### Exercício 2: conversoes.js
**Instruções:**
- Converta explicitamente valores de number para string e de string para number.

**Solução:**
```javascript
// conversoes.js
let idade = 28;
let idadeString = String(idade);           // converte number ➜ string
let textoNumero = '42';
let textoNumeroConvertido = Number(textoNumero); // converte string ➜ number

console.log("idade (original):", idade, "| tipo:", typeof idade);                  // number
console.log("idadeString:", idadeString, "| tipo:", typeof idadeString);          // string
console.log("textoNumero:", textoNumero, "| tipo:", typeof textoNumero);          // string
console.log("textoNumeroConvertido:", textoNumeroConvertido, "| tipo:", typeof textoNumeroConvertido); // number

// Explicação:
// String(idade) transforma o número 28 na string "28".
// Number(textoNumero) transforma a string "42" no número 42.
```

---

### Exercício 3: truthyFalsy.js
**Instruções:**
- Crie quatro variáveis com estes valores: `0`, `1`, `''` (string vazia) e `'JavaScript'`.
- Para cada uma, exiba o valor e `Boolean(valor)`, indicando se é *truthy* ou *falsy*.

**Solução:**
```javascript
// truthyFalsy.js
let v1 = 0;
let v2 = 1;
let v3 = '';
let v4 = 'JavaScript';

console.log("v1:", v1, "| Boolean(v1):", Boolean(v1), "// falsy");       // 0 é falsy
console.log("v2:", v2, "| Boolean(v2):", Boolean(v2), "// truthy");      // 1 é truthy
console.log("v3:", v3, "| Boolean(v3):", Boolean(v3), "// falsy");       // '' é falsy
console.log("v4:", v4, "| Boolean(v4):", Boolean(v4), "// truthy");      // 'JavaScript' é truthy
```

---

## 🚀 DESAFIO E SOLUÇÃO

### detectorTiposBasico.js
**Instruções:**
1. Crie três variáveis com valores **manuais** de tipos diferentes (string, number, boolean).
2. Para cada variável, exiba:
   - O valor
   - O tipo (`typeof`)
   - Se é *truthy* ou *falsy* (`Boolean(valor)`)
3. Use somente variáveis, `console.log`, `typeof`, `Boolean()` e comentários.

**Solução:**
```javascript
// detectorTiposBasico.js
let a = "Texto de exemplo"; // string
let b = 123;                 // number
let c = false;               // boolean

// Função para indicar se é truthy ou falsy
function status(valor) {
  return Boolean(valor) ? 'truthy' : 'falsy';
}

console.log("Valor:", a, "| Tipo:", typeof a, "|", status(a)); // string, truthy
console.log("Valor:", b, "| Tipo:", typeof b, "|", status(b)); // number, truthy
console.log("Valor:", c, "| Tipo:", typeof c, "|", status(c)); // boolean, falsy
```

---

## 📝 RESUMO DA AULA
- Comentários: `//` para linha única, `/* */` para múltiplas linhas.
- Tipos primitivos principais: string, number, boolean, null, undefined, symbol, bigint.
- Use `typeof` para inspecionar tipos.
- Conversões explícitas: `String()`, `Number()`, `Boolean()`.

