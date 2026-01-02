const pessoa = {

    nome: 'Gabriel',
    idade: 20,
    pets: ['Odin'],
    nacionalidae: 'brasileiro'
}

for (const chave in pessoa){
console.log('Chave: ', chave); // chave significa a propriedade do objeto por exemplo nome, idade, pets
console.log('valor: ', pessoa[chave]); // valor signififca o valor da propriedade do objeto por exemplo 'Gabriel', 20, ['Odin']
}
const chaves = Object.keys(pessoa) // Pega todas as chaves (propriedades) do objeto e retorna em um array
const valores = Object.values(pessoa)
const entradas = Object.entries(pessoa) // Pega todas as entradas (propriedade e valor) do objeto e retorna em um array de arrays

console.log('Chaves: ', chaves);
console.log('Valores: ',valores);
console.log('Entradas (Chave/valor:) ', entradas);

