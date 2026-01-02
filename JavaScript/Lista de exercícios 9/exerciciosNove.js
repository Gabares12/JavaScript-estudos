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
let notas = [1,4,10,6]
let somaDasNotas = 0
notas.forEach(nota =>{ // para fazer calculos de soma com array
    somaDasNotas += nota // somaDasNotas = somaDasNotas + nota
})

let media = somaDasNotas / notas.length // calculo da media

if (media >= 7) {
    console.log('aprovado');
    
} else {
    console.log('reprovado'); 
}
console.log('==========================================')

// 6 - 

let nomesAmigos = ['Verittas','Cacko','Erikozo','viny','RuanzinhoOrds']

nomesAmigos.forEach(element => {  // element representa cada item do array
    console.log('Olá amigo', element); // aqui usamos o element para mostrar cada item do array
});

console.log('==========================================')

// 7 -
let idades = [18,17,15,7,27,35,16]

idades.forEach(idades =>{
 
    if (idades >= 18)
        console.log('Maior de idade:', idades);
}) 

console.log('==========================================')

// 8 -

let precos = [100,50,150,250]
let desconto = 0.1 // 10%

desconto = precos.map(precos =>{ // map cria um novo array com os valores modificados
    
    console.log('preços com 10% de desconto: ', precos);

})

console.log('==========================================')

// 9 -

let tarefas = ['[ ] estudar','[ ]limpar a casa','fazer compras','lavar roupa','cozinhar']
let pendendes = tarefas.filter(tarefas => {
    return tarefas.startsWith('[ ]') // filtra as tarefas que começam com [ ]
})
 console.log('tarefas pendentes: ',pendendes );

 console.log('==========================================')

// 10 -
let precosProdutos = [100,200,300,400,500]
let descontos = 0.2 // 20%

descontos = precosProdutos.map(precosProdutos =>{
    
    console.log('PREÇOS COM 20% DE DESCONTO!!: ',precosProdutos);
    
})

 