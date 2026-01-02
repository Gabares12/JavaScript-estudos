const pessoa = { // Criando um objeto
    nome: 'Gabriel',  // Propriedades do objeto
    idade: 20, 
    temCNH: false
}

pessoa.sobrenome = 'Tavares'  // Adicionando uma nova propriedade ao objeto

console.log('Nome: ', pessoa.nome); 
console.log('Sobrenome: ', pessoa.sobrenome);

console.log('==================================');



const livro = {
titulo: 'o diario de anne frank',
autora: 'anne frank',
paginas: 200

}

livro.publicado = true
livro.idiomas = [ // Adicionando um array como propriedade do objeto
    'portugues','ingles','alemão','espanhol'  
]

//livro.push('frances')    // assim não funciona, pois livro é um objeto, não um array

console.log('livro antes: ',livro)

livro.idiomas.push('polones')

delete livro.paginas

console.log('livro depois: ',livro);

console.log('autor do livro:',livro['autora']); // Acessando a propriedade do objeto usando colchetes
console.log('autor do livro:',livro['editora']); // Acessando uma propriedade que não existe no objeto resultara em undefined.
console.log('==================================');

const livro2 = {

nome: 'as cronicas de gelo e fogo',
paginas: 500,
editora: 'planeta'

}


const autor = {
nome : 'george a Armatin',
idade: 72,
nacionalidade: 'americano'  

}

console.log('autor: ', autor);
console.log('livro: ', livro2);

livro2.autor.nome
livro2.autor.nacionalidade

