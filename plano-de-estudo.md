# AULA 2: SINTAXE BÁSICA DO JAVASCRIPT

## 🎯 Objetivos da Aula
- Entender a estrutura básica de um arquivo JavaScript
- Aprender a usar comentários de linha e de bloco
- Conhecer os tipos de dados primitivos em JavaScript
- Praticar a criação de variáveis e inspeção de tipos

---

## 📚 TEORIA

### 1. Comentários
Comentários são ignorados pelo interpretador e servem para documentar o código.

```javascript
// Comentário de linha única

/*
  Comentário de
  múltiplas linhas
*/
```

Boas práticas:
- Use comentários para explicar **por que** algo é feito, não **o que** é feito (o código já mostra o que).
- Mantenha-os atualizados: comentários desatualizados causam confusão.

### 2. Tipos de Dados Primitivos

| Tipo         | Exemplo                  | `typeof` |
|--------------|--------------------------|----------|
| `string`     | "Olá", 'JavaScript'     | string   |
| `number`     | 3, 3.14, -10            | number   |
| `boolean`    | true, false             | boolean  |
| `null`       | null                    | object*  |
| `undefined`  | undefined, var sem valor| undefined|
| `symbol`     | Symbol('id')            | symbol   |
| `bigint`**   | 10n, 9007199254740991n  | bigint   |

*Curiosidade:* `typeof null` retorna `object` devido a um bug histórico que foi mantido para compatibilidade.

**BigInt** permite trabalhar com inteiros muito grandes; disponível em navegadores/Node modernos.

#### Conversões Implícitas e Explícitas

```javascript
String(123);   // '123'
Number('42');  // 42
Boolean(0);    // false
```

---

## 💻 PRÁTICA PASSO A PASSO

### Passo 1 – Criar Variáveis e Usar `typeof`

```javascript
// tipos.js
let texto = "Hello";          // string
let idade = 30;               // number
let aprovado = true;          // boolean
let vazio = null;             // null
let naoDefinido;              // undefined
let id = Symbol('id');        // symbol
let grande = 12345678901234567890n; // bigint (opcional)

console.table({texto, idade, aprovado, vazio, naoDefinido, id, grande});

// Inspecionando os tipos
console.log(typeof texto);        // string
console.log(typeof idade);        // number
console.log(typeof aprovado);     // boolean
console.log(typeof vazio);        // object (bug histórico)
console.log(typeof naoDefinido);  // undefined
console.log(typeof id);           // symbol
console.log(typeof grande);       // bigint
```

### Passo 2 – Comentários na Prática

```javascript
// comentarios.js

// Calcula área de um círculo
a = 5;                 // raio
let area = Math.PI * a * a; // πr²
console.log("Área:", area);
```

> Experimente remover ou alterar comentários para testar entendimento.

---

## 🏋️ EXERCÍCIOS

1. Crie um script `dados.js` que declare variáveis para:
   - Seu **nome** (string)
   - Sua **idade** (number)
   - Se você **está estudando JavaScript** (boolean)
   - Uma variável **não inicializada**
   - Uma variável **nula**
   Exiba todas usando `console.table` e seus tipos com `typeof`.

2. Faça um casting explícito:
   - Converta sua idade para string.
   - Converta a string "123" para número.
   - Converta `0`, `1`, `""`, `"text"` para boolean e observe.

3. Explique com comentários, no seu código, o resultado de cada conversão.

---

## 🚀 DESAFIO DA AULA

Crie um programa `detectorTipos.js` que:
1. Receba (via `prompt` no navegador ou `readline` no Node) um valor digitado pelo usuário.
2. Detecte e exiba:
   - O valor digitado
   - O seu **tipo primitivo** segundo `typeof`
3. Informe se o valor é **truthy** ou **falsy**.

Dica Node.js:
```javascript
const readline = require('readline').createInterface({input: process.stdin, output: process.stdout});
readline.question('Digite algo: ', valor => {
  console.log('Valor:', valor);
  console.log('Tipo:', typeof valor);
  console.log('É truthy?', Boolean(valor));
  readline.close();
});
```

---

## 📝 RESUMO DA AULA

- Comentários ajudam na manutenção do código (`//` e `/* */`).
- JavaScript possui **7 tipos primitivos**: string, number, boolean, null, undefined, symbol, bigint.
- Use `typeof` para inspecionar tipos.
- Conversões de tipo podem ser **explícitas** (`Number()`, `String()`, `Boolean()`) ou **implícitas** (coerção automática).
- `null` é retornado como `object` em `typeof` — comportamento legado.