//HOF --> higher-Order Function === função que recebe outra função como parametro

function calcular(numero1, numero2,operacao){
 return operacao(numero1, numero2)
 }

 function soma(numero1, numero2){
    return numero1 + numero2
 }

 function divisao(numero1, numero2){
     return numero1 / numero2
 }

 function subtracao(numero1, numero2) {
    return numero1 - numero2
 }

 function multiplicacao(numero1, numero2){
    return numero1 * numero2
 }


 console.log('NUMEROS USADOS: 3 E 8');
 
 const resultadoSoma = calcular(3, 8, soma)
 console.log('Resultado da soma: ',resultadoSoma);
 
 const resultadoDivisao = calcular(3, 8,divisao)
 console.log('Resultado da divisão:',resultadoDivisao );
 
 const resultadoSubratracao = calcular(3, 8, subtracao)
 console.log('Resultado da subtração',resultadoSubratracao);
 
 const ResultadoMultiplicacao = calcular(3,8, multiplicacao)
 console.log('Resultado da multiplicação',ResultadoMultiplicacao);
 