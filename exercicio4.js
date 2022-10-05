//Mostrar números que o usuário digitar no vetor

let numeros = []

let qtd = Number(prompt("Quantos números você quer?"))

for (let num = 1; num <= qtd; num++) {
  numeros.push(Number(prompt(`Digite o número ${num}: `)))
}
console.log(numeros)