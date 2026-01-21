const estudante = {
    nome: 'josé silva',
    idade: 32,
    cpf: '234254567567',
    turma: 'JavaScript'
}

console.log(estudante.nome);
console.log(` o nome do estudante é ${estudante.nome}`);
                                                //por ex para pegar os 3 primeiros digitos do CPF
                                                // Ele vai começar no 0 ou seja o primero caracter e 
                                                //.substring[0,3] 
                                                // determina o inicio e o fim 
console.log(`os três primeiros números do CPF são ${estudante.cpf.substring(0,3)}`);



