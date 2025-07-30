// ✅ Desafio 1 – Número positivo ou negativo
function verificarNumero(n) {
  if (n > 0) {
    console.log("Positivo");
  } else if (n < 0) {
    console.log("Negativo");
  } else {
    console.log("Zero");
  }
}

// ✅ Desafio 2 – Par ou Ímpar
function ehPar(n) {
  return n % 2 === 0;
}

// ✅ Desafio 3 – Contagem até 10
function contarAte10() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

// ✅ Desafio 4 – Contagem regressiva
function contagemRegressiva() {
  let i = 10;
  while (i >= 1) {
    console.log(i);
    i--;
  }
}

// ✅ Desafio 5 – Multiplicação simples
function multiplicarPositivos(a, b) {
  if (a > 0 && b > 0) {
    console.log("Resultado:", a * b);
  } else {
    console.log("Apenas números positivos são aceitos.");
  }
}

// ✅ Desafio 6 – Tabuada do número
function mostrarTabuada(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}

// ✅ Desafio 7 – Soma de 1 a N
function somarAteN(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

// ✅ Desafio 8 – Verificar idade
function classificarIdade(idade) {
  if (idade <= 12) {
    console.log("Criança");
  } else if (idade <= 17) {
    console.log("Adolescente");
  } else if (idade <= 59) {
    console.log("Adulto");
  } else {
    console.log("Idoso");
  }
}

// ✅ Desafio 9 – Verificar múltiplo de 3
function ehMultiploDeTres(n) {
  if (n % 3 === 0) {
    console.log("É múltiplo de 3");
  } else {
    console.log("Não é múltiplo de 3");
  }
}

// ✅ Desafio 10 – Desenhar asteriscos
function desenharAsteriscos(n) {
  for (let i = 0; i < n; i++) {
    console.log("*".repeat(n));
  }
}

// ✅ Desafio 11 – Nome em letras maiúsculas
function mostrarNomeMaiusculo(nome) {
  console.log(nome.toUpperCase());
}

// ✅ Desafio 12 – Verificar vogal ou consoante
function verificarLetra(letra) {
  const vogais = ["a", "e", "i", "o", "u"];
  if (vogais.includes(letra.toLowerCase())) {
    console.log("Vogal");
  } else {
    console.log("Consoante");
  }
}

// ✅ Desafio 13 – Mostrar números pares até N
function mostrarPares(n) {
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

// ✅ Desafio 14 – Verificar múltiplos de 3 e 5
function verificarMultiplos(n) {
  if (n % 3 === 0 && n % 5 === 0) {
    console.log("Múltiplo de ambos");
  } else if (n % 3 === 0) {
    console.log("Múltiplo de 3");
  } else if (n % 5 === 0) {
    console.log("Múltiplo de 5");
  } else {
    console.log("Não é múltiplo de 3 nem de 5");
  }
}

// ✅ Desafio 15 – Média de 3 notas
function verificarMedia(n1, n2, n3) {
  const media = (n1 + n2 + n3) / 3;
  if (media >= 7) {
    console.log("Aprovado");
  } else if (media >= 5) {
    console.log("Recuperação");
  } else {
    console.log("Reprovado");
  }
}

// ✅ Desafio 16 – Repetir frase N vezes
function repetirFrase(frase, n) {
  for (let i = 0; i < n; i++) {
    console.log(frase);
  }
}

// ✅ Desafio 17 – Verificar se número é igual ao reverso
function numeroEhReverso(n) {
  const original = String(n);
  const reverso = original.split("").reverse().join("");
  return original === reverso;
}

// ✅ Desafio 18 – Mês por número
function mostrarMes(numeroMes) {
  const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  if (numeroMes >= 1 && numeroMes <= 12) {
    console.log(meses[numeroMes - 1]);
  } else {
    console.log("Número inválido");
  }
}

// ✅ Desafio 19 – Contar quantos são maiores que 10
function contarMaioresQue10(lista) {
  let contador = 0;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] > 10) {
      contador++;
    }
  }
  return contador;
}

// ✅ Desafio 20 – Pirâmide de asteriscos
function piramideAsteriscos(n) {
  for (let i = 1; i <= n; i++) {
    console.log("*".repeat(i));
  }
}
