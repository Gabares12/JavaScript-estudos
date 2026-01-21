const notas = [10, 6.5, 8, 7.5]
//Cria um array com as notas.

let somaDasNotas = 0
//Inicializa um acumulador que vai somar todas as notas.

for (let i = 0; i < length; i++) {
    // Soma cada elemento do array à variável somaDasNotas.
    somaDasNotas += notas[i]
}
//Calcula a média dividindo a soma pela quantidade de notas.
const media = somaDasNotas / notas.length
console.log(`a mádia das notas é ${media}`);
