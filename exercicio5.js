let carrosVendidos = [[], [], [], [], [], [], [], [], [], [], [], []]

for (let numeroMes = 0; numeroMes < 12; numeroMes++) {
  while (true){
    let nomeCarro = prompt(`Digite o nome do proximo carro vendido no mes ${numeroMes + 1}.
     Digite 'fim' para pular para o proximo mes.`)

    if (nomeCarro.toUpperCase() === `FIM`) {
      break
    } else carrosVendidos[numeroMes].push(nomeCarro)
  }
  let mes
  switch (numeroMes){
    case 0: mes = "janeiro"; break
    case 1: mes = "fevereiro"; break
    case 2: mes = "março"; break
    case 3: mes = "abril"; break
    case 4: mes = "maio"; break
    case 5: mes = "junho"; break
    case 6: mes = "julho"; break
    case 7: mes = "agosto"; break
    case 8: mes = "setembro"; break
    case 9: mes = "outubro"; break
    case 10: mes = "novembro"; break
    case 11: mes = "dezembro"; break
  }

  console.log(`Os carros vendidos no mês de ${mes} são:`)

  for (let indCarro = 0; carrosVendidos[numeroMes][indCarro] !== undefined; indCarro++)
    console.log(`${carrosVendidos[numeroMes][indCarro]}`)
}