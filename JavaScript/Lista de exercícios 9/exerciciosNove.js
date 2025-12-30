// 1 -
let nomes = ['Gabriel', 'arthur', 'danilo', 'marcos', 'kai']
for (let index = 0; index < nomes.length; index++) {
    console.log('indice: ', index);
    console.log(nomes[index]);
}

console.log('==========================================')

//2 - 
let frutas = ['Maça', 'Banana', 'Bergamota', 'Morango', 'Manga']
console.log('TOTAL DE FRUTAS: ', frutas.length);
frutas.push('Abacaxi') 
console.log('TOTAL DE FRUTAS APÓS ADD abacaxi:',frutas.length);
frutas.shift(0,1)
console.log('Total de frutas após remover o Ind - 0: ', frutas.length);

console.log('==========================================')

//3 -
let cidades = ['Porto alegre','Sorocaba','UberLandia','londrina','Pindamonhangaba']
console.log(cidades);

console.log('TOTAL DE CIDADES: ', cidades.length);

console.log('==========================================')

//4 -
let numeros = [1,2,3,4,5,6,7,8,9,10]
let soma = 0 
numeros.forEach(numeros =>{ // para fazer calculos de soma
    soma += numeros
})
console.log(soma);
console.log('==========================================')

//5