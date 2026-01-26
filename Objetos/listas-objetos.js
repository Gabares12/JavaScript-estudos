//objeto estudante
const estudante = {

    nome: 'josé Silva',
    idade: 32,
    cpf: '32423523556',
    turma: 'javaScript',
    bolsista: true,
    telefones: ['551199999999', '551199999997'],
    endereco: [{
        rua: 'Rua das almas',
        numero: '666',
        complemento: ''
    }]
}


//para estar adicionando um novo endereço
estudante.endereco.push({
    rua:'Rua dos anjos',
    numero: '777',
    complemento: 'prox a arvore da vida'
})


console.log('--------------------');
// ele vai acessar o objeto estudante e acessar o array de enderecos
// e pedir para ele retornar apenas endereços que contenham complemento
// ele vai verificar se endereço é true e retornar 
const listaEnderecoComComplemento = estudante.endereco.filter((endereco) =>
    endereco.complemento)


console.log(estudante.endereco);
console.log(estudante.endereco[1]);

console.log(listaEnderecoComComplemento);
