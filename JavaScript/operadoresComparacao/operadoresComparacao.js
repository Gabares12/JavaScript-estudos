const idadeDanilo = 19
const minhaIdade = 20

//operador igualdade ⬇
//const comparacao = idadeDanilo == minhaIdade

// mair que ⬇
// const comparacao = idadeDanilo > minhaIdade

// menor que ⬇
//const comparacao = idadeDanilo < minhaIdade 

const comparacao = idadeDanilo < minhaIdade 
console.log(`São iguais?  ${comparacao}`)

const idade = 20
const idadeIrmao = 17

const souMaiorDeIdade = idade >=18
const irmaoMaiorDeIdade = idadeIrmao >=18

console.log(`Sou maior de idade? ${souMaiorDeIdade}`)
console.log(`Meu irmão é maior de idade? ${irmaoMaiorDeIdade}`)

//comparação estrita
// " === " para comparar LITERALMENTE se são iguais
const comparacaoEstrita = minhaIdade === idadeDanilo
console.log(`é estritamente diferente? `, comparacaoEstrita)

//para saber se são diferentes " != "
const comparacaoEstrita1 = minhaIdade !== idadeDanilo
console.log(`é estritamente diferente? `, comparacaoEstrita1)
