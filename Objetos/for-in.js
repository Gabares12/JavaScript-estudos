const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['551199999998', '551199999993'],
    enderecos: [{
        rua: 'Rua Joseph Climber',
        numero: '45',
        complemento: 'apto 43'
    },

    {
        rua: 'Rua Dona Clotilde',
        numero: '71',
        complemento: null
    }]
}


// Chave - variavel de controle Obs:(pode ter outros nomes alem de chaves)

// este for vai  percorrer e acessar as Chaves do objeto 
// ex: (nome:,idade:,cpf:,... etc)
console.log('MOSTRANDO APENAS A CHAVE:');


for (let chave in estudante) {
    console.log(chave);
}

console.log('========= MOSTRANDO O VALOR DA CHAVES ==========');


// desta forma o for vai percorrer e acessar os valores das chaves
// ex: 'jose silva' , 32 , 1231412431, ... etc
for (let chave in estudante) {
    console.log(estudante[chave]);
}

console.log('========= CONCATENANDO ==========');

for (let chave in estudante) {
    const texto = ` a chave ${chave} tem o valor ${estudante[chave]}`
    //como deixar só Chave não faz mais sentido 
    // será trocado para - TEXTO como declarado na const
    // porem este tem um problema,
    //o js vai tentar converter um Obj para string 

    //o problema está em endereco
    console.log(texto);
}

console.log('========= USANDO TYPEOF ==========');

for (let chave in estudante) {

    // typeof - fará ele exibir apenas as chaves com valores
   //  funções por ex: ele passara reto
    const tipo = typeof estudante[chave]
    const texto = ` a chave ${chave} tem o valor ${estudante[chave]}`
    console.log(texto);
}
