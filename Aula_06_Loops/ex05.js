/*
Exercício 5
Use um loop para encontrar o primeiro número maior que 50 que seja divisível por 7. Use `break` quando encontrar.
*/
for (let i = 51; i <= 100; i++) {
  if (i % 7 === 0) {
    console.log("Primeiro número maior que 50 divisível por 7:", i);
    break;
  }
}