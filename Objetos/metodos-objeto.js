const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript',
  bolsista: true,
  telefones: ['551199999998', '551199999993'],
   
}

// isto busca a chaves dos valores
const chavesObjeto = Object.keys(estudante)
console.log(chavesObjeto);

// utilizado o includes para saber se há esse parametro
// console.error para exibir erro
if (!chavesObjeto.includes('enderecos')) {
    console.error('é necessario ter um endereço cadastrado')
    
}
