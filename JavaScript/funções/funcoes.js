
//function saudacao(nome) { // nome é o parametro da função saudacao
//    console.log('Ola', nome)
//}

//const saudacao = (nome) => {
 //   console.log('vida longa e próspera,', nome);
//    
//}

const saudacao = nome => console.log('olá',nome)

saudacao('Gabriel') // Gabriel é o argumento
saudacao('Tavares')

function calcularDobroDeUm(numero) {
   return numero * 2
}

const numeroDobrado = calcularDobroDeUm(4)
console.log('o dobro de 4 é: ',numeroDobrado)

console.log('o dobro de 10 é: ',calcularDobroDeUm(10))
console.log('================================================');
console.log('usando THIS.');

function mostrarNome() {
    console.log(this.nome1);
    
}
nome1 = 'Gabriel';
mostrarNome()



function Pessoa(nome) {
    this.nome = nome;


setTimeout(function() {

console.log(this.nome);


}.bind(this),1000);

}

new Pessoa ('Carlos');