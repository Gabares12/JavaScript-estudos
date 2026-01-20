
// lista [0]
const alunos = ['joão', 'juliana', 'caio', 'ana'];

// lista [1]
const medias = [10,8,7.5,9];

//               []      []
const lista = [alunos, medias]

function exibeNomeENota(aluno) {
    if (lista[0].includes(aluno)) {
                            // indexOf ajuda a encontrar a posição de um elmento
                            // dentro de um array
                            // se ele não econtrar oque procura ele retorna -1
        const indice = lista[0].indexOf(aluno);
        const mediaAluno = lista[1][indice]
        console.log(`${aluno} tem a média ${mediaAluno}`)
        } else {
            console.log('Estudante não existe na lista');
            
        }
}