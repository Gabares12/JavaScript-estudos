const notas = [10, 8.5, 5, 6.5, 8, 7.5]

//primeira expressão: executada apenas uma vez
//segunda expressão: condição de execução
//terceira expressão: executada sempre ao fina do bloco

//======================= outra explicação ===============

// começa no indice = 0, 
// executa enquanto o índice for menor que o array
//incrementa indice a cada volta (indice++)
for (let indice = 0; indice < notas.length; indice++) {
    console.log(indice, notas[indice]);

}