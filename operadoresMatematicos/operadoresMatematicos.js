const numeroUm = 4
const numeroDois = 8
let numeroTres = 2


const subtracao = numeroUm - numeroDois
console.log(`Subtração: `, numeroUm - numeroDois)

const soma = numeroUm + numeroDois
console.log(`soma: ${soma}`)

const divisao = numeroUm / numeroDois
console.log(`Divisão: ${divisao}`)

const multiplicacao = numeroUm * numeroDois
console.log(`Multiplicação: ${multiplicacao}`)

//parenteses tem prioridade em um calculo matematico
const contaComplexa = (numeroUm + numeroDois) * numeroUm
console.log(`Conta complexa: `, contaComplexa)

// para saber o resto da divisão
const resto = 13 % 2
console.log(`resto da divisão: ${resto}`)

// usar " ** " para potência 
const potencia = 2 ** 3
console.log(`potência: ` + potencia)

let contador = 5
// contador = contador + 1
contador ++ // " ++ " é igual a +1 na variavel
console.log(`incremento: ${contador}`)

contador = contador - 1
contador -- // " -- " é igual a -1 na variavel
console.log(`Decremento: `, contador )

numeroTres += 3
numeroTres -= 3
numeroTres *= 3
numeroTres /= 3
console.log(numeroTres)