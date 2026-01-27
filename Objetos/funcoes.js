const estudante = {

  nome: 'josé Silva',
  idade: 32,
  cpf: '32423523556',
  turma: 'javaScript',
  bolsista: true,
  telefones: ['551199999999', '551199999997'],

  // media é uma propiedade que está dentro do OBJETO
  media: 7.5,
  estAprovado: function (mediaBase) {

    // this - isso
    // usado para especificar a propiedade
    return this.media >= mediaBase ? true : false

  }
}
console.log(estudante.estAprovado(7));

