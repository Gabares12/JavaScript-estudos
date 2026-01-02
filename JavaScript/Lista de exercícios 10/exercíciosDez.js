// 1 - 
const Gabriel = {
    nome: 'Gabriel Tavares',
    idade: 20,
    profissao: 'Jovem Aprendiz'
}

console.log('Meu objeto criado: ', Gabriel);

console.log('============================');

//2 -

console.log('acessando a propiedade "nome" : ', Gabriel.nome);

console.log('============================');

//3 - 

Gabriel.idade = 21
console.log('Após mudar att a idade: ', Gabriel);

console.log('============================');

//4 -

Gabriel.nacionalidade = 'Brasilerio'
console.log('Após add nacionalidade e att a idade: ', Gabriel);

console.log('============================');

5// - 

function ObjetoEu(Gabriel) {
    return `olá sou ${Gabriel.nome}, tenho ${Gabriel.idade} anos , e sou ${Gabriel.nacionalidade}`
}

console.log(ObjetoEu(Gabriel)); //precisa usar () e por o nome do objeto para chamar a função

console.log('============================');

// 6 -

let amigosMeu = [
    { nome: 'Lauren marques', idade: 21 },
    { nome: 'Guilherme Fernandes', idade: 20 },
    { nome: 'Lorenzo Batimanza', idade: 17 }
];

console.log(amigosMeu);

console.log('============================');

// 7 -

// "amigo" representa cada item individual da lista "amigosMeu"
for (let amigo of amigosMeu) {
    if (amigo.idade >= 18) {
        console.log(`${amigo.nome} é maior de idade`);
    }
}

console.log('============================');

// 8 -

const usuario = {
    nome: 'Gabriel',
    saudacao: function () {
        console.log(`olá, eu sou ${usuario.nome}`);

    }
}

usuario.saudacao()

console.log('============================');

// 9 - 

for (const chave in Gabriel) {
    console.log('Chave: ', chave);
    console.log('valor: ', Gabriel[chave])

}
const chaves = Object.keys(Gabriel)
const valores = Object.values(Gabriel)

console.log('============================');
// 10 - 

const produto = {
    preco: 50,
    quantidade: 10,
}

const resultado = produto.preco * produto.quantidade

console.log('Valor total :' , resultado);
