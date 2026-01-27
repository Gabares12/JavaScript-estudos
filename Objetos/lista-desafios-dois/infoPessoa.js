const pessoa = {

nome: 'clark kent',
idade: 35,
solteiro: true,
hobbies: ['escrever artigos','tomar café']

}

function mostrarInfoPessoa(pessoa,endereco) {
    
console.log(`Nome: ${pessoa.nome}`);
console.log(`Idade: ${pessoa.idade}`);
console.log(`Estado Civil: ${pessoa.solteiro}`);
console.log(`Hobbies: ${pessoa.hobbies}`);

console.log(`Numero: ${pessoa.endereco.numero}`);
console.log(`Rua: ${pessoa.endereco.rua}`);
console.log(`Complemento: ${pessoa.endereco.complemento}`);


}
pessoa.endereco = {

    rua: 'rua almeida',
    numero: 295,
    complemento: 'casa verde'
    
}




// retorno da função
// vai exibir tudo q está lá dentro
mostrarInfoPessoa(pessoa,);



    

