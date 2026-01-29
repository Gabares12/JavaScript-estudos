const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5];


// vê o tamanho do nome 
const tamanhoNome = alunos.filter((aluno,) =>{
    return aluno.length < 4
})

console.log(tamanhoNome);

console.log('------------AGORA COM INDICE-------------');


// pega a media do aluno
const reprovados = alunos.filter((_,indice) =>{
    return medias[indice] < 7
})

console.log(reprovados);
