const estudante = {
    nome: 'josé silva',
    idade: 32,
    cpf: '234254567567',
    turma: 'JavaScript'
}

estudante.nome //josé

function exibirInfoEstudante(objEstudante, infoEstudante) {
return objEstudante[infoEstudante]    
}

console.log(estudante['nome']);
console.log(estudante['cpf']);


console.log(exibirInfoEstudante(estudante, 'nome'));
console.log(exibirInfoEstudante(estudante, 'cpf'));
