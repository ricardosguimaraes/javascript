/*
Número positivo ou negativo
Crie uma função que recebe um número e mostra:
"Positivo" se for maior que zero
"Negativo" se for menor que zero
"Zero" se for igual a zero
*/

function verificarNum(num) {
  if (num > 0) {
    console.log(`O número ${num} é POSITIVO`);
  } else if (num < 0) {
    console.log(`O número ${num} é NEGATIVO`);
  } else {
    console.log(`O número ${num} é ZERO`);
  }
}
verificarNum(9);

/*
Par ou Ímpar
Escreva uma função que recebe um número e retorna true se for par, e false se for ímpar.
*/

function ehPar(n) {
  return n % 2 == 0;
}
console.log(ehPar(654));

/*
Contagem até 10
Crie uma função que usa um for para imprimir os números de 1 a 10.
*/
function contador() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

contador();

/*
Contagem regressiva
Crie uma função que conta de 10 até 1 usando while.
*/
function regressiva() {
  let nu = 10;
  while (nu >= 1) {
    console.log(nu);
    nu--;
  }
}
regressiva();

/*
Multiplicação simples
Crie uma função que recebe dois números e mostra o produto deles apenas se ambos forem positivos.
*/
function multiplicar(a, b) {
  if (a > 0 && b > 0) {
    console.log(a * b);
  } else {
    console.log("informe um numeros positivos");
  }
}

multiplicar(2, -3);
/*
Tabuada do número
Crie uma função que recebe um número e mostra a tabuada dele de 1 a 10.
*/

function calctabuada(numTab) {
  for (let i = 1; i <= 10; i++) {
    const result = numTab * i;
    console.log(`${numTab} X ${i} = ${result}`);
  }
}

calctabuada(10);

/*
Soma de 1 a N
Crie uma função que recebe um número n e retorna a soma de todos os números de 1 até n.
*/
function somaAteN_Loop(n) {
  let soma = 0;
  for (let i = 1; i <= n; i++) {
    soma += i;
  }
  return soma;
}

console.log(somaAteN_Loop(5)); // 15

/*
Verificar idade
Crie uma função que recebe a idade de uma pessoa e imprime:

"Criança" se for até 12 anos

"Adolescente" se for até 17

"Adulto" se for até 59

"Idoso" se for 60 ou mais
*/

function verificaIdade(idade) {
  if (idade <= 12) {
    console.log("Criança");
  } else if (idade > 12 && idade <= 17) {
    console.log("Adolescente");
  } else if (idade >= 18 && idade < 60) {
    console.log("Adulto");
  } else {
    console.log("Idoso");
  }
}

verificaIdade(10);

/*
Verificar múltiplo de 3
Crie uma função que recebe um número e imprime se é múltiplo de 3 ou não.
*/
function multiploTres(nummult) {
  if (nummult % 3 == 0) {
    console.log("multiplo de 3");
  } else {
    console.log("não é multiplo de 3");
  }
}

multiploTres(10);

/*
Desenhar asteriscos
Crie uma função que recebe um número n e imprime n linhas com n asteriscos cada.
*/
function desenharAsteriscosLoop(n) {
  for (let i = 0; i < n; i++) {
    let linha = "";
    for (let j = 0; j < n; j++) {
      linha += "*";
    }
    console.log(linha);
  }
}

desenharAsteriscosLoop(10);
