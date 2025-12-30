// 1 -
// function saudacao() {
//     console.log("olá, seja bem-vindo(a)!");
// }
// saudacao()


// 2 -
// function apresentarPessoa(nome,idade) {
//     console.log(`olá, meu nome é ${nome} e tenho ${idade} anos.`);
// }
// apresentarPessoa('gabriel',20)


// 3 -

// function calcularIMC(peso,altura) { // peso em kg e altura em metros

// let imc = peso / (altura * altura) // fórmula do IMC

// console.log('Resultado: ' ,imc.toFixed(2)) // arredondar para 2 casas decimais
// }

// calcularIMC(85,1.75) // exemplo de uso da função com peso 85kg e altura 1.75m


// 4 -
//     function VerificarAprovacao(nota) {

//         if (nota >= 7.0) {
//             console.log('APROVADO');
//         } else {
//             console.log('REPROVADO');
//         }
//     }
// VerificarAprovacao(7.0)

// 5 -
// function ehPar(numero) {

//     if (numero % 2 === 0)
//         console.log(`é par `);

//     else {
//         console.log(`não é par`)
//     }
// }
// ehPar(10)

// 6 -

// function soma(numero1,numero2) {
//     return numero1 + numero2
// }

// console.log('RESULTADO: ', soma(5,5)) // precisa puxar a função dentro do console.log para mostrar o resultado


// 7 - 

// function troco(compra,pagamento) {
//     return pagamento - compra
// }
// console.log('o seu troco será: ', troco(50,80));


// // 8 -
// const somma = (numero1,numero2) =>  numero1 + numero2 // deste jeito é feita a arrow function
// console.log('resultado: ', somma(2,2))


// 9 -
// function executarAcao(acao) {
//     acao()
// }

// executarAcao (function() {
//     console.log('Executando ação!');
// })

function FazerPergunta(pergunta, respostaCorreta) {
  
    console.log('pergunta: ' + pergunta);
    
    
    let respostaUsuario = 'berlim' // criei uma variável para simular a resposta do usuário

    if (respostaUsuario === 'brasilia') { // 
        console.log('resposta correta');
        
    } else {
        console.log(respostaUsuario);
        console.log('resposta errada!');
        
    }
    
}
FazerPergunta ('qual a capital do brasil?', 'brasilia')

