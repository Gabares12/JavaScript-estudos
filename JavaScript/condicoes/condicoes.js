
// o javaScript entende como uma string vazia e ira 
// converter oque der para converter 
const nome = ''

if (nome) {
    console.log('olá, ', nome)
}
else {
    console.log('ainda não sei o seu nome');

}

// se o valor da variavel for "Null" 
// a primeira condição não foi atendida neste if e else
// porque null não é maior ou igual a 18
// então ele vai ler e só vai retornar o else que é  "console.log('Menor de idade')"    
const idade = null

if (idade >= 18) {
    console.log('Maior de idade');

} else {
    console.log('Menor de idade');

}