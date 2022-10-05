//0 a 100 no vetor
                            
let lista1 = []

for (let num = 0; num <= 100; num++) {
  lista1.push(num)  //mesma coisa: lista1[num] = num
  //console.log(num)
}
//lista1.shift(lista1)
console.log(lista1)

//2 números e imprimir todos entre eles no vetor

let lista2 = []

let n1 = Number(prompt("Número 1: "))
let n2 = Number(prompt("Número 2: "))

for (let num = n1; num < n2; num++) {
  lista2.push(num)
  //console.log(lista2)
}
console.log(lista2)