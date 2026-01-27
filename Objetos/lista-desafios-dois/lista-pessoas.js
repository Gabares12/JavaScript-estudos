// 03


const pessoas = [

    pessoaUm = {
        nome: 'johan',
        idade: 33,
        pais: 'brasil'
    },

    pessoaDois = {
        nome: 'valdir',
        idade: 45,
        pais: 'Marrocos'
    },

    pessoaTres = {
        nome: 'veronica',
        idade: 42,
        pais: 'França'
    }


]


// para ler array
function mostrarListaPessoas(pessoas) {
    pessoas.forEach(pessoa => {
        console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade},  Cidade: ${pessoa.pais}`);

    });
}

mostrarListaPessoas(pessoas)
console.log('==============================');


function filtrarCidade(pessoas, pais) {
    return pessoas.filter(pessoa => pessoa.pais === pais)
}


pessoas.push(
    pessoaQuatro = {
        nome: 'Torre',
        idade: 38,
        pais: 'brasil'
    })
    
    
    mostrarListaPessoas(pessoas)
    
    