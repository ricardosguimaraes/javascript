# AULA 10: OBJETOS LITERAIS

## 🎯 Objetivos
- Entender o que são objetos em JavaScript
- Aprender a criar e estruturar objetos literais
- Dominar o acesso e manipulação de propriedades
- Trabalhar com métodos dentro de objetos

---

## 📚 TEORIA

### 1. O que é um objeto?

Um objeto é uma coleção de propriedades, onde cada propriedade é uma associação entre um nome (ou chave) e um valor. O valor pode ser qualquer tipo de dado, incluindo funções (métodos).

---

### 2. Criando objetos literais

```javascript
const pessoa = {
  nome: "João",
  idade: 30,
  cidade: "São Paulo"
};
```

---

### 3. Acessando propriedades

Existem duas formas de acessar propriedades:

```javascript
// Notação de ponto
console.log(pessoa.nome); // João

// Notação de colchetes
console.log(pessoa["idade"]); // 30
```

---

### 4. Modificando e adicionando propriedades

```javascript
// Modificando propriedade existente
pessoa.idade = 31;

// Adicionando nova propriedade
pessoa.profissao = "Programador";
pessoa["email"] = "joao@email.com";
```

---

### 5. Deletando propriedades

```javascript
delete pessoa.email;
console.log(pessoa.email); // undefined
```

---

### 6. Métodos em objetos

Métodos são funções definidas dentro de objetos:

```javascript
const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2022,

  // Método
  descrever: function() {
    return `${this.marca} ${this.modelo} ${this.ano}`;
  },

  // Método com sintaxe ES6
  ligar() {
    console.log("Carro ligado!");
  }
};
```

---

### 7. Objetos aninhados

Objetos podem conter outros objetos:

```javascript
const empresa = {
  nome: "Tech Corp",
  endereco: {
    rua: "Rua Principal",
    numero: 123,
    cidade: "São Paulo"
  }
};

console.log(empresa.endereco.cidade); // São Paulo
```

---

## 💻 PRÁTICA

### Exemplo 1: Criando um objeto pessoa
```javascript
const pessoa = {
  nome: "Maria",
  sobrenome: "Silva",
  idade: 25,

  nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  }
};

console.log(pessoa.nomeCompleto()); // Maria Silva
```

### Exemplo 2: Objeto com array
```javascript
const aluno = {
  nome: "Pedro",
  notas: [8.5, 9.0, 7.5, 8.0],

  calcularMedia() {
    const soma = this.notas.reduce((acc, nota) => acc + nota, 0);
    return soma / this.notas.length;
  }
};

console.log(aluno.calcularMedia()); // 8.25
```

### Exemplo 3: Percorrendo propriedades
```javascript
const produto = {
  nome: "Notebook",
  preco: 3000,
  estoque: 15
};

// for...in percorre as propriedades
for (let propriedade in produto) {
  console.log(`${propriedade}: ${produto[propriedade]}`);
}
```

---

## 🏋️ EXERCÍCIOS E SOLUÇÕES

### Exercício 1
Crie um objeto `livro` com as propriedades: título, autor, ano e páginas.

**Resposta:**
```javascript
const livro = {
  titulo: "1984",
  autor: "George Orwell",
  ano: 1949,
  paginas: 328
};

console.log(livro);
```

---

### Exercício 2
Adicione um método ao objeto `livro` que retorne uma descrição completa.

**Resposta:**
```javascript
livro.descrever = function() {
  return `${this.titulo} de ${this.autor}, publicado em ${this.ano}, tem ${this.paginas} páginas.`;
};

console.log(livro.descrever());
// 1984 de George Orwell, publicado em 1949, tem 328 páginas.
```

---

### Exercício 3
Crie um objeto `contaBancaria` com saldo e métodos para depositar e sacar.

**Resposta:**
```javascript
const contaBancaria = {
  saldo: 1000,

  depositar(valor) {
    this.saldo += valor;
    console.log(`Depósito de R$ ${valor}. Novo saldo: R$ ${this.saldo}`);
  },

  sacar(valor) {
    if (valor > this.saldo) {
      console.log("Saldo insuficiente!");
    } else {
      this.saldo -= valor;
      console.log(`Saque de R$ ${valor}. Novo saldo: R$ ${this.saldo}`);
    }
  }
};

contaBancaria.depositar(500);  // Depósito de R$ 500. Novo saldo: R$ 1500
contaBancaria.sacar(200);      // Saque de R$ 200. Novo saldo: R$ 1300
```

---

### Exercício 4
Crie um objeto aninhado `escola` com nome, endereço (objeto) e alunos (array de objetos).

**Resposta:**
```javascript
const escola = {
  nome: "Escola Modelo",
  endereco: {
    rua: "Rua das Flores",
    numero: 456,
    bairro: "Centro"
  },
  alunos: [
    { nome: "Ana", serie: "9º ano" },
    { nome: "Carlos", serie: "8º ano" },
    { nome: "Beatriz", serie: "9º ano" }
  ],

  contarAlunos() {
    return this.alunos.length;
  }
};

console.log(escola.endereco.rua);     // Rua das Flores
console.log(escola.contarAlunos());   // 3
```

---

### Exercício 5
Use `for...in` para listar todas as propriedades e valores de um objeto `carro`.

**Resposta:**
```javascript
const carro = {
  marca: "Honda",
  modelo: "Civic",
  ano: 2023,
  cor: "Prata"
};

for (let prop in carro) {
  console.log(`${prop}: ${carro[prop]}`);
}
// marca: Honda
// modelo: Civic
// ano: 2023
// cor: Prata
```

---

## 🚀 DESAFIO DA AULA

Crie um sistema de gerenciamento de produtos:

1. Crie um objeto `loja` com:
   - Nome da loja
   - Array de produtos (objetos com nome, preço e quantidade)
   - Método para adicionar produto
   - Método para calcular valor total do estoque
   - Método para buscar produto por nome

**Resposta:**
```javascript
const loja = {
  nome: "Loja Virtual",
  produtos: [
    { nome: "Mouse", preco: 50, quantidade: 10 },
    { nome: "Teclado", preco: 150, quantidade: 5 },
    { nome: "Monitor", preco: 800, quantidade: 3 }
  ],

  adicionarProduto(nome, preco, quantidade) {
    this.produtos.push({ nome, preco, quantidade });
    console.log(`Produto ${nome} adicionado!`);
  },

  calcularValorTotal() {
    return this.produtos.reduce((total, produto) => {
      return total + (produto.preco * produto.quantidade);
    }, 0);
  },

  buscarProduto(nome) {
    return this.produtos.find(produto => produto.nome === nome);
  }
};

// Testando
loja.adicionarProduto("Webcam", 200, 4);
console.log("Valor total do estoque: R$", loja.calcularValorTotal());
console.log("Buscar Mouse:", loja.buscarProduto("Mouse"));
```

---

## 📝 RESUMO DA AULA

- Objetos são coleções de pares chave-valor
- Use notação de ponto ou colchetes para acessar propriedades
- Métodos são funções dentro de objetos
- Objetos podem conter outros objetos e arrays
- `for...in` percorre as propriedades de um objeto

### Próxima aula:
- **'this' e Escopo**: entendendo o comportamento do `this` em diferentes contextos

---

## 📚 LIÇÃO DE CASA

1. Crie um objeto `usuario` com informações pessoais e um método que retorne a idade em meses.
2. Crie um objeto `calculadora` com métodos para as 4 operações básicas.
3. Crie um objeto `agenda` que armazene contatos e tenha métodos para adicionar, remover e buscar contatos.

---
