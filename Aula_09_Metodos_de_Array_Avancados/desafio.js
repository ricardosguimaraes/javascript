//DESAFIO DA AULA
//Crie uma função que recebe um array de objetos representando alunos, onde cada objeto possui as propriedades `nome` e `nota`. Use métodos avançados de array para:
//1. Filtrar os alunos que passaram (nota >= 50).
//2. Mapear os alunos aprovados para um novo array contendo apenas os nomes.
//3. Retornar esse novo array.

let alunos = [
  { nome: "Ana", nota: 85 },
  { nome: "Bruno", nota: 42 },
  { nome: "Carlos", nota: 67 },
  { nome: "Diana", nota: 49 }
];

function alunosAprovados(alunos) {
  return alunos
          .filter(aluno => aluno.nota >= 50)
          .map(aluno => aluno.nome);
}

console.log(alunosAprovados(alunos));