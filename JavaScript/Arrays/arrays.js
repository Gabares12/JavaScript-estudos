const frutas = ['uva','bananas','kiwi','morango'];
//uva = 0
//banana = 1
//kiwi = 2
//morango = 3



 console.log(frutas);// para executar o array completo
// console.log('Primeira fruta: ', frutas[0]); //acessar um item especifico do array
// console.log('segunda fruta: ', frutas[1]); //acessar um item especifico do array

// console.log('TOTAL DE FRUTAS: ', frutas.length); //ver o total de itens do array

// frutas.push('abacaxi'); //adicionar um item no final do array
// console.log('TOTAL DE FRUTAS após add abacaxi na lista', frutas.length);

// console.log('ultima fruta: ', frutas[frutas.length -1]); //acessar o ultimo item do array

frutas.splice(2, 1) // usar o 2 para indicar o indice e o 1 para indicar quantos itens quer remover a partir do indice indicado
 console.log('depois de remover', frutas)

 for(let i = 0; i < frutas.length; i++){ //loop para percorrer o array
    console.log('indice', i) //mostra o indice do array
    console.log(frutas[i]); //mostra o item do array conforme o indice
}

frutas.forEach((valor, indice) => {
console.log('indice:', indice, valor)
console.log('frutas da vez: ', frutas);

})

 
