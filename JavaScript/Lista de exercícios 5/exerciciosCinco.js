//1------------------------------
let idade = 17
let menorOuMaior = idade >= 18

console.log(`é maior de idade? `, menorOuMaior)

//2------------------------------
let nota1 = 7
let nota2 = 7
let soma = nota1 + nota2
let resultado = soma / 2

if (resultado >= 7)
    console.log(`aprovado`)

else { console.log(`reprovado`) }

//3------------------------------
let valorCompra = 59.99
let valorPago = 100
let troco
troco = valorPago - valorCompra
console.log(`O troco da compra será de: R$`, troco)

//4------------------------------
const senha1 = 12345
const senha2 = 54321

if (senha1 === senha2)
    console.log(`as senhas batem. `)
else { console.log(`não, as senhas não batem.`) }

//5------------------------------
let totalAulas = 80
let faltas = 25
let limiteFaltas = totalAulas * 0.25

if (faltas > limiteFaltas)

    console.log(`tem muitas faltas`)

else { onsole.log(`tem frequencia necessaria`) }


//6------------------------------
const temLogin = true
const temSenha = true
const podeLogar = temLogin && temSenha
console.log(`pode fazer login? `, podeLogar)

//7------------------------------
let disponivel = true
console.log(`está disponivel? `, !disponivel)

//8------------------------------
let numero1 = 10
let numero2 = 10
let pares = numero1 && numero2  

if (pares % 2 === 0)
    console.log(`é par `);
    
else{console.log(`não é par`)}

//9------------------------------

let numeroUm = 120
let porcentagem = numeroUm * 0.15

console.log(`15% de 120 é igual a `, porcentagem)

//10------------------------------

let expressao = 2 + 3 * 5
console.log(`valor do calculo`,expressao);
 console.log(`a multiplicação é feita por causa da precedencia`);
 