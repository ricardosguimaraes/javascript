# AULA 1: INTRODUÇÃO AO JAVASCRIPT

## 🎯 Objetivos da Aula
- Compreender o que é JavaScript e sua importância
- Conhecer a história e evolução da linguagem
- Configurar o ambiente de desenvolvimento
- Executar o primeiro código JavaScript

---

## 📚 TEORIA

### O que é JavaScript?

JavaScript é uma linguagem de programação **interpretada**, **dinâmica** e **orientada a objetos** que foi criada inicialmente para adicionar interatividade às páginas web. Hoje, JavaScript é uma das linguagens mais populares do mundo e pode ser usada para:

- **Frontend**: Interatividade em páginas web (DOM manipulation)
- **Backend**: Servidores com Node.js
- **Mobile**: Aplicativos móveis (React Native, Ionic)
- **Desktop**: Aplicações desktop (Electron)
- **IoT**: Internet das Coisas

### Características Principais:
- **Interpretada**: Não precisa ser compilada
- **Dinamicamente tipada**: Tipos são definidos em tempo de execução
- **Case-sensitive**: Diferencia maiúsculas de minúsculas
- **Baseada em protótipos**: Orientação a objetos diferente de linguagens como Java

### História e Evolução

| Ano | Marco |
|-----|-------|
| 1995 | Criação por Brendan Eich na Netscape |
| 1997 | Padronização ECMAScript (ES1) |
| 2009 | ES5 - Métodos de array, JSON |
| 2015 | ES6/ES2015 - let/const, arrow functions, classes |
| 2016+ | Atualizações anuais (ES2016, ES2017, etc.) |

---

## 🛠️ CONFIGURAÇÃO DO AMBIENTE

### 1. Node.js
Node.js permite executar JavaScript fora do navegador.

**Instalação:**
1. Acesse: https://nodejs.org
2. Baixe a versão LTS (Long Term Support)
3. Instale seguindo o assistente

**Verificar instalação:**
```bash
node --version
npm --version
```

### 2. VS Code
Editor de código recomendado com excelente suporte para JavaScript.

**Instalação:**
1. Acesse: https://code.visualstudio.com
2. Baixe e instale

**Extensões recomendadas:**
- JavaScript (ES6) code snippets
- Prettier - Code formatter
- Live Server

### 3. Navegador
Qualquer navegador moderno (Chrome, Firefox, Edge, Safari)

---

## 💻 PRÁTICA

### Exercício 1: Primeiro Código no Navegador

Crie um arquivo `index.html`:

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minha Primeira Página JavaScript</title>
</head>
<body>
    <h1>Olá, JavaScript!</h1>

    <script>
        // Meu primeiro código JavaScript
        console.log("Olá, mundo!");
        alert("Bem-vindo ao JavaScript!");

        // Interação simples
        let nome = prompt("Qual é o seu nome?");
        console.log("Olá, " + nome + "!");
    </script>
</body>
</html>
```

### Exercício 2: JavaScript no Node.js

Crie um arquivo `primeiro.js`:

```javascript
// primeiro.js
console.log("=== MEU PRIMEIRO PROGRAMA EM JAVASCRIPT ===");

// Variáveis básicas
let linguagem = "JavaScript";
let ano = 2024;
let versao = "ES2024";

console.log("Linguagem:", linguagem);
console.log("Ano:", ano);
console.log("Versão:", versao);

// Operação simples
let soma = 10 + 5;
console.log("10 + 5 =", soma);

// Texto dinâmico
console.log(`Estou aprendendo ${linguagem} em ${ano}!`);
```

**Executar:**
```bash
node primeiro.js
```

### Exercício 3: Explorando o Console

```javascript
// console.js
console.log("=== EXPLORANDO O CONSOLE ===");

// Diferentes tipos de console
console.log("Mensagem normal");
console.warn("Mensagem de aviso");
console.error("Mensagem de erro");
console.info("Mensagem informativa");

// Console com objetos
let pessoa = {
    nome: "João",
    idade: 25,
    cidade: "São Paulo"
};

console.table(pessoa);

// Medindo tempo
console.time("Operação");
for(let i = 0; i < 1000000; i++) {
    // Simulando operação
}
console.timeEnd("Operação");
```

---

## 🎯 CONCEITOS IMPORTANTES

### 1. **Case Sensitivity**
JavaScript diferencia maiúsculas de minúsculas:
```javascript
let nome = "João";
let Nome = "Maria";  // Variável diferente!
let NOME = "Pedro";  // Também diferente!
```

### 2. **Comentários**
```javascript
// Comentário de linha única

/*
   Comentário
   de múltiplas
   linhas
*/
```

### 3. **Onde JavaScript Roda**
- **Browser**: JavaScript Engine (V8 no Chrome)
- **Server**: Node.js (V8 engine)
- **Mobile**: WebView em apps híbridos

---

## 🏋️ EXERCÍCIOS PRÁTICOS

### Exercício 4: Calculadora Simples
```javascript
// calculadora.js
console.log("=== CALCULADORA SIMPLES ===");

let num1 = 15;
let num2 = 7;

console.log(`Números: ${num1} e ${num2}`);
console.log("Soma:", num1 + num2);
console.log("Subtração:", num1 - num2);
console.log("Multiplicação:", num1 * num2);
console.log("Divisão:", num1 / num2);
console.log("Resto da divisão:", num1 % num2);
```

### Exercício 5: Informações do Sistema
```javascript
// sistema.js
console.log("=== INFORMAÇÕES DO AMBIENTE ===");

// No Node.js
if (typeof process !== 'undefined') {
    console.log("Rodando no Node.js");
    console.log("Versão do Node:", process.version);
    console.log("Sistema Operacional:", process.platform);
} else {
    console.log("Rodando no Navegador");
    console.log("User Agent:", navigator.userAgent);
}

console.log("Data atual:", new Date().toLocaleDateString('pt-BR'));
```

---

## 🚀 DESAFIO DA AULA

Crie um programa que:
1. Mostre uma mensagem de boas-vindas
2. Declare variáveis com suas informações pessoais
3. Calcule sua idade em dias (aproximadamente)
4. Exiba todas as informações formatadas

```javascript
// desafio.js
console.log("🌟 === DESAFIO: SOBRE MIM === 🌟");

// Suas informações
let meuNome = "Seu Nome";
let minhaIdade = 25; // anos
let minhaCidade = "Sua Cidade";
let linguagemFavorita = "JavaScript";

// Cálculos
let idadeEmDias = minhaIdade * 365;
let proximoAniversario = minhaIdade + 1;

// Exibição
console.log(`Olá! Meu nome é ${meuNome}`);
console.log(`Tenho ${minhaIdade} anos (aproximadamente ${idadeEmDias} dias)`);
console.log(`Moro em ${minhaCidade}`);
console.log(`Estou aprendendo ${linguagemFavorita}`);
console.log(`No próximo ano terei ${proximoAniversario} anos`);

console.log("\n🎉 Bem-vindo ao mundo do JavaScript! 🎉");
```

---

## 📝 RESUMO DA AULA

✅ **O que aprendemos:**
- JavaScript é uma linguagem versátil e popular
- Pode rodar no navegador e no servidor (Node.js)
- Configuramos nosso ambiente de desenvolvimento
- Executamos nossos primeiros códigos
- Aprendemos sobre console.log e comandos básicos

✅ **Comandos importantes:**
- `console.log()` - Exibir mensagens
- `let` - Declarar variáveis
- Template literals com `${}` 
- Comentários com `//` e `/* */`