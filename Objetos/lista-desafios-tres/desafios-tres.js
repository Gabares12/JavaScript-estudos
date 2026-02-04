/*
const pessoa = {
    nome: 'gabriel',
    notas: [7, 7, 8, 9],
    // calcular media + soma
    calcularMediaNotas: function () {
        let soma = 0;
        for (let index = 0; index < this.notas.length; index++) {
            let nota = this.notas[index]
            soma = soma + nota
        }

        let media = soma / this.notas.length
        console.log(media);

    },

    classificarDesempenho: function () {

        const media = this.calcularMediaNotas()
        


        if (media >= 9) {
            console.log('Desempenho excelente');

        } else if (media >= 7.5) {
            console.log('Bom desempenho');

        } else if (media >= 6) {
            console.log('Desempenho regular');

        } else {
            console.log('Desempenho insuficiente');

        }

    }
}

pessoa.calcularMediaNotas()

pessoa.classificarDesempenho()

*/

const carro = {
    marca: 'chevrolet',
    modelo: '1.5',
    ano: 2015,
    cor: 'cinza'
}

carro.portas = 3;

for (let chave in carro) {
    const texto = ` a chave ${chave} tem o valor: ${carro[chave]}`
    console.log(texto);
    
}



