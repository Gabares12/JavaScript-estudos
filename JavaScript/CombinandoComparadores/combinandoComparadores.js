const idade = 18
const maiorDeIdade = idade >= 18
const possuiCNH = false
// operador AND ( E ) && 
const podeDirigir = maiorDeIdade &&  possuiCNH
console.log(`Pode dirigir? ${podeDirigir}`)

// operador OR ( OU ) ||
const podeViajarSozinho = maiorDeIdade || possuiCNH
console.log(`Pode viajar sozinha? `,podeViajarSozinho)

// operador NOT ( NÃO ) !
const precisaDeAcompanhante = !maiorDeIdade
console.log(`Precisa de acompanhante? `, precisaDeAcompanhante)


//AND &&
//OR ||
//NOT !