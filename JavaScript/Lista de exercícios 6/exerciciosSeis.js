/*
1 -
let idade = 15
idade >= 18 ? console.log('Pode beber bebida alcoólica'):
idade <= 18 ? console.log('não pode beber alcoólica'): 
console.log('idade inválida')
//----------------------------------------------------------------
2 - 
let horaAtual = 13


switch (horaAtual) {
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
        console.log('Bom bia')
        break
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
        console.log('Boa tarde');
        break
    default:
        console.log('Boa noite');


}
//----------------------------------------------------------------

3 -
let numeroQualquer = -100

if (numeroQualquer >= 1 ) {

    console.log('numero postivo - ',numeroQualquer)
    
} else if (numeroQualquer == 0) {
    console.log('o numero é zero!', numeroQualquer)
    
} else {
    console.log('numero negativo - ',numeroQualquer);
  
}
//----------------------------------------------------------------

4 - 
let notaEntre = 6.5

if (notaEntre >= 9) {

    console.log('A');
    
}else if (notaEntre >= 8){
    console.log('B');
    
}else if (notaEntre >= 6 ){
    console.log('C');
    
}else if (notaEntre >= 4 ){
    console.log('D');
    
} else if (notaEntre = 0  ){
    console.log('E')
}

//----------------------------------------------------------------
5 -
let numero = 10

numero % 2 === 0 ? console.log('par'):
console.log('impar');
//----------------------------------------------------------------

6 - 
let opcao = 1

switch (opcao) {
    case 1:
    console.log('1 - Cadastrar');
        
        
case 2:
console.log('2 - listar');


case 3:
console.log('3 - sair');

    default:
        break;
}
//----------------------------------------------------------------
7 -
let = email = " "

if (email === " "){
    console.log('Preencha o campo de email')
    
} else{
console.log('email válido');

}
//----------------------------------------------------------------
8 - 
let senha = '123456'
// length conta o numero de caracteres
if (senha.length >= 6) {
    console.log('Senha valida');
} else {
    console.log('Senha muito curta');
    
}
//----------------------------------------------------------------
9 -
let saldoDisponivel = 2000
let valorCompra = 1300
let troco = saldoDisponivel - valorCompra

if (saldoDisponivel > valorCompra) {
console.log('Compra aprovada');
console.log('Seu troco será de, R$',troco);

} else {
    console.log('Saldo insuficiente');
}
//----------------------------------------------------------------

10 - 
let nome = prompt ("seu nome aqui")

let email = prompt ("seu email aqui")

let idade = prompt ("sua idade aqui")

if (nome !== "" && email.includes("@")  && idade > 0) {
    console.log('Formulario enviado com sucesso');
    
}else {
    console.log('Por favor, preencha todos os campos corretamente.');
}

setTimeout(() => {
console.log("Validando informações");

},5000)

setTimeout(() => {
console.log("Validando informações");

},10000)

setTimeout(() => {
console.log("Validando informações");

},15000)

setTimeout(() => {
console.log("dados lidos e validados");

},20000)
*/